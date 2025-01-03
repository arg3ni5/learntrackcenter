import { useEffect, useState } from "react";
import FormBase from "./FormBase";
import ListBase from "./ListBase";
import "./BaseModule.css"; // Import the CSS file
import { useNotification } from "../notification/NotificationContext";
import { BaseModuleProps } from "./types";
import UploadOptions from "../uploadStudents/UploadOptions";
import UploadTable from "../uploadStudents/UploadTable";
import '../../components/uploadStudents/UploadTable.css';

const BaseModule = <T extends Record<string, any>>({ hideForm = true, clearFormAfterAdd = true, ableImport = true, ...rest }: BaseModuleProps<T>) => {
  const { title, fields, items, fetchItems, initialFormData, loading, onEdit, onView, onSelect, onItemAdded, onItemsAdded, onItemUpdated, onItemDeleted, importItem } = rest;

  const { showNotification } = useNotification();
  const isEmpty = items?.length === 0;

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
  // State to store imported data for a single item
  const [importData, setImportData] = useState<T | null>(null);
  
  // Function to load items
  const loadItems = async () => {
    if (fetchItems) {
      await fetchItems();
    }
  };

  // Handler for adding a new item
  const handleItemAdded = async (newItem: T) => {
    await onItemAdded(newItem);
    loadItems();
    showNotification("Item added", "success");
    resetEditing();
  };

  // Handler for importing a single item
  const handleItemAddImport = async (newItem: T) => {
    await onItemAdded(newItem);
  };

  // Handler for updating an item
  const handleItemUpdated = async (updatedItem: T) => {
    if (currentItem && onItemUpdated) {
      await onItemUpdated(currentItem.id, updatedItem);
      showNotification("Item updated", "success");
      resetEditing();
    }
    if (!onItemUpdated) {
      showNotification("Error updating item", "error");
    }
  };

  // Handler for deleting an item
  const handleItemDelete = async (id: string) => {
    if (onItemDeleted) {
      await onItemDeleted(id);
      loadItems();
      showNotification("Item deleted", "success");
    }
  };

  // Handler for editing an item
  const handleOnEdit = (item: T) => {
    setShowForm(true);
    setIsEditing(true);
    setCurrentItem(item);
    onEdit && onEdit(item);
  };

  // Handler for viewing an item
  const handleOnView = (item: T) => {
    setCurrentItem(item);
    onView && onView(item);
  };

  // Handler for selecting an item
  const handleOnSelect = (item: T | null) => {
    setCurrentItem(item);
    onSelect && onSelect(item);
  };

  // Handler for toggling form visibility
  const handleOnAdd = (state: boolean) => {
    setShowForm(state);
  };

  // Function to reset editing state
  const resetEditing = () => {
    setIsEditing(false);
    setCurrentItem(null);
    setShowForm(hideForm ? false : true);
  };

  // Handler for file upload
  const handleFileUpload = (jsonData: T[]) => {
    setDataImport(jsonData);
    setPreviewVisible(true);
    showNotification("File uploaded successfully!", "success");
  };

  // Effect to manage form visibility based on items
  useEffect(() => {
    !isEmpty && setShowForm(hideForm ? false : true);
  }, [items]);

  // Effect to handle imported items
  useEffect(() => {
    if (importItem) {
      handleItemAddImport(importItem);
    }
    loadItems();
  }, [importItem]);

  // Ensure at least one field is visible
  if (fields.filter((f) => f.view === true).length === 0) fields.map((f) => (f.view = true));

  return (
    <>
      {title && <h1 className="title">{title}</h1>}
      
      <div className="module-container">        
        {!loading && showForm && (
          <div className="form-container">
            <FormBase
              onItemAdded={handleItemAdded}
              onItemUpdated={handleItemUpdated}
              fields={fields}
              isEditing={isEditing}
              onCancelEdit={resetEditing}
              initialData={isEditing ? items && currentItem && items.find((item) => item.id === currentItem.id) : initialFormData}
              clearFormAfterAdd={clearFormAfterAdd}
            />
            
            {!showImportForm && <div className="actions buttons-container">
              {ableImport && <button aria-label="open form import" onClick={() => setShowImportForm(true)}>Import</button>}
            </div>}
            {showImportForm && <UploadOptions<T> onFileUpload={handleFileUpload} columnNames={fields.map((f) => f.name)} />}
          </div>
        )}
        {
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
                fields={fields}
                onItemDeleted={handleItemDelete}
                editable={onItemUpdated !== undefined}
                seeable={onView !== undefined}
                hideForm={hideForm}
                loading={loading || false}
                onAdd={handleOnAdd}
                onEdit={handleOnEdit}
                onView={handleOnView}
                onSelect={handleOnSelect}
              />
            )}
          </div>
        }
      </div>
    </>
  );
};

export default BaseModule; // Export the BaseModule component
