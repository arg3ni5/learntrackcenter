import { useEffect, useMemo, useState } from "react";
import FormBase from "./FormBase";
import ListBase from "./ListBase";
import "./BaseModule.css";
import { useNotification } from "../notification/NotificationContext";
import { BaseModuleProps } from "./types";
import UploadOptions from "../uploadStudents/UploadOptions";
import UploadTable from "../uploadStudents/UploadTable";
import '../../components/uploadStudents/UploadTable.css';

/**
 * BaseModule Component
 * A reusable module for managing items with features like adding, editing, deleting, and importing data.
 *
 * @template T - The type of items managed by the module.
 * @param {BaseModuleProps<T>} props - The props for the BaseModule component.
 */
const BaseModule = <T extends Record<string, any>>({ 
  showForm: initialShowForm = false,
  clearFormAfterAdd = false,
  ableImport = false, 
  ableForm = true, 
  ...rest 
}: BaseModuleProps<T>) => {
  const { title, fields, items, fetchItems, initialFormData: iniFormData, loading, onView,
    viewLinkFormat, onSelect, onItemAdded, onItemsAdded, onItemUpdated, onItemDeleted } = rest;

  const { showNotification } = useNotification();
  const isEmpty = items?.length === 0;
  const [initialFormData, setInitialFormData] = useState<T | null>(iniFormData || null);

  // State management
  const [importData, setImportData] = useState<T | null>(null);
  const [showForm, setShowForm] = useState<boolean>(initialShowForm!);
  const [showImportForm, setShowImportForm] = useState<boolean>(false);
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [currentItem, setCurrentItem] = useState<T | null>(null);
  const [dataImport, setDataImport] = useState<T[]>([]);
  const [previewVisible, setPreviewVisible] = useState<boolean>(false);

  /**
   * Load items by calling the fetchItems callback.
   */
  const loadItems = async () => {
    if (fetchItems) {
      await fetchItems();
    }
  };

  /**
   * Handle adding a new item.
   * @param {T} newItem - The new item to be added.
   */
  const handleItemAdded = async (newItem: T) => {
    await onItemAdded(newItem);
    loadItems();
    setImportData(null);
    clearFormAfterAdd && resetEditing();
  };

  /**
   * Handle updating an item.
   * @param {T} updatedItem - The updated item data.
   */
  const handleItemUpdated = async (updatedItem: T) => {
    if (currentItem && onItemUpdated) {      
      await onItemUpdated(currentItem.id, updatedItem);
      showNotification("Item updated", "success");
      clearFormAfterAdd && resetEditing();
    } else {
      showNotification("Error updating item", "error");
    }
  };

  /**
   * Handle selecting an item.
   * @param {T | null} item - The selected item or null if deselected.
   */
  const handleOnSelect = async (item: T | null) => {
    setIsEditing(!!item);
    setCurrentItem(item);
    onSelect && onSelect(item);
    
    if (!item) {      
      setCurrentItem(null);
      setInitialFormData(null);      
      resetEditing();
    }
  };

  /**
   * Handle deleting an item.
   * @param {string} id - The ID of the item to delete.
   */
  const handleItemDelete = async (id: string) => {
    if (onItemDeleted) {
      await onItemDeleted(id);
      loadItems();
      showNotification("Item deleted", "success");
    }
  };

  /**
   * Reset editing state and clear the current item.
   */
  const resetEditing = () => {
    setIsEditing(false);
    setCurrentItem(null);
    setShowForm(initialShowForm);
  };

  /**
   * Handle file upload and parse JSON data.
   * @param {T[]} jsonData - The imported data as an array of objects.
   */
  const handleFileUpload = (jsonData: T[]) => {
    setDataImport(jsonData);
    setPreviewVisible(true);
    showNotification("File uploaded successfully!", "success");
  };

  // Effects
  useEffect(() => {
    if (isEmpty && !loading) {
      setShowForm(true);
    }
    else {
      setShowForm(initialShowForm);
    }
  }, [items]);

  useEffect(() => {
    if (importData) {
      handleItemAdded(importData);
    }
    loadItems();
  }, [importData]);

  // Ensure at least one field is visible
  if (fields.filter((f) => f.view === true).length === 0) fields.forEach((f) => f.view = true);

  return (
    <>
      {title && <h1 className="title">{title}</h1>}
      
      <div className="module-container">
        {!loading && ableForm && (          
          showForm && <>
            <div className="form-container">
              <FormBase
                onItemAdded={handleItemAdded}
                onItemUpdated={handleItemUpdated}
                fields={fields}
                isEditing={isEditing}
                onCancelEdit={resetEditing}
                initialData={initialFormData || currentItem}
                clearFormAfterAdd={clearFormAfterAdd}
              />
              {ableImport && <>
                {showImportForm && <UploadOptions<T> onFileUpload={handleFileUpload} columnNames={fields.map((f) => f.name)} />}
              </>}              
            </div>
          </>
        )}

        <div className="list-container">
          {ableImport && previewVisible && (
            <div className="upload-container">
              <UploadTable<T>
                fields={fields}
                data={dataImport}
                onSelect={setCurrentItem}
                onImport={setImportData}
                onImportMulti={onItemsAdded}
              />
            </div>
          )}
          {items?.length! > 0 && (
            <ListBase<T>
              items={items}
              selectedItem={iniFormData || currentItem}
              fields={fields}
              editable={!!onItemUpdated}
              seeable={!!onView}
              ableForm={ableForm}
              ableImport={ableImport}
              showForm={showForm}
              showImportForm={showImportForm}
              loading={loading || false}
              onAdd={setShowForm}
              onHandleImport={setShowImportForm}
              onSelect={handleOnSelect}
              onItemDeleted={handleItemDelete}
              viewLinkFormat={viewLinkFormat}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default BaseModule;
