import { useEffect, useState } from "react";
import FormBase from "./FormBase";
import ListBase from "./ListBase";
import "./BaseModule.css"; // Import the CSS file
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
const BaseModule = <T extends Record<string, any>>({ hideForm = false, clearFormAfterAdd = false, ableImport = false, ...rest }: BaseModuleProps<T>) => {
  const { title, fields, items, fetchItems, initialFormData: iniFormData, loading, onView,
    viewLinkFormat, 
    onSelect, onItemAdded, onItemsAdded, onItemUpdated, onItemDeleted } = rest;

  const { showNotification } = useNotification();
  const isEmpty = items?.length === 0;
  const [initialFormData, setInitialFormData] = useState<T | null>(iniFormData || null);

  // State to store imported data for a single item
  const [importData, setImportData] = useState<T | null>(null);
  // State to manage form visibility
  const [showForm, setShowForm] = useState<boolean>(true);
  // State to manage import form visibility
  const [showImportForm, setShowImportForm] = useState<boolean>(false);
  // State to manage editing mode
  const [isEditing, setIsEditing] = useState<boolean>(false);
  // State to store the currently selected item
  const [currentItem, setCurrentItem] = useState<T | null>(null);
  // State to manage imported data
  const [dataImport, setDataImport] = useState<T[]>([]);
  // State to manage preview visibility
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
   * Handle select an item.
   * @param {T} item - The updated item data.
   */
  const handleOnSelect = async (item: T | null) => {
    setIsEditing(true);
    setCurrentItem(item);
    onSelect && onSelect(item);
    console.log("item", item);
    
    if (item === null || item === undefined) {      
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
    setShowForm(hideForm ? false : true);
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

  // Effect to manage form visibility based on whether items exist
  useEffect(() => {
    !isEmpty && setShowForm(hideForm ? false : true);
  }, [items]);

  // Effect to handle imported items and load existing items
  useEffect(() => {
    if (importData) {
      handleItemAdded(importData);
    }
    loadItems();
  }, [importData]);

  // Ensure at least one field is visible
  if (fields.filter((f) => f.view === true).length === 0) fields.map((f) => (f.view = true));

  return (
    <>
      {/* Render the title */}
      {title && <h1 className="title">{title}</h1>}
      
      <div className="module-container">        
        {/* Render the form container */}
        {!loading && showForm && (
          <div className="form-container">
            <FormBase
              onItemAdded={handleItemAdded}
              onItemUpdated={handleItemUpdated}
              fields={fields}
              isEditing={isEditing}
              onCancelEdit={resetEditing}
              initialData={initialFormData||currentItem} // Load initial data or data of the item being edited
              clearFormAfterAdd={clearFormAfterAdd}
            />
            
            {/* Render import options */}
            {!showImportForm && (
              <div className="actions buttons-container">
                {ableImport && <button aria-label="open form import" onClick={() => setShowImportForm(true)}>Import</button>}
              </div>
            )}
            {showImportForm && <UploadOptions<T> onFileUpload={handleFileUpload} columnNames={fields.map((f) => f.name)} />}
          </div>
        )}

        {/* Render the list container */}
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
              editable={onItemUpdated !== undefined}
              seeable={onView !== undefined}
              hideForm={hideForm}
              loading={loading || false}
              onAdd={(state) => setShowForm(state)}
              onView={onView}
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

export default BaseModule; // Export the BaseModule component
