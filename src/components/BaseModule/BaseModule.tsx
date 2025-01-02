import React, { useEffect, useState } from "react";
import FormBase from "./FormBase";
import ListBase from "./ListBase";
import "./BaseModule.css"; // Import the CSS file
import { useNotification } from "../notification/NotificationContext";
import { BaseModuleProps } from "./types";

const BaseModule = <T extends Record<string, any>>({ hideForm = true, clearFormAfterAdd = true, ...rest }: BaseModuleProps<T>) => {
  const { title, fields, items, fetchItems, initialFormData, loading, children,
    onEdit, onView, onSelect, onItemAdded, 
    onItemUpdated, onItemDeleted, importItem, 
    } = rest;

  const { showNotification } = useNotification();  

  const childrenArray = React.Children.toArray(children);
  const isEmpty = items?.length === 0;

  const [showForm, setShowForm] = useState<boolean>(true); // State to manage editing mode
  const [isEditing, setIsEditing] = useState<boolean>(false); // State to manage editing mode
  const [currentItem, setCurrentItem] = useState<T | null>(null); // ID of the currently editing item

  const loadItems = async () => {
    if (fetchItems) {
      await fetchItems();
    }
  };

  const handleItemAdded = async (newItem: T) => {
    await onItemAdded(newItem); // Call the callback to handle addition
    loadItems(); // Refresh the list after adding
    showNotification("Elemento agregado", "success"); // Show notification
    resetEditing(); // Reset editing mode after adding
  };

  const handleItemAddImport = async (newItem: T) => {
    await onItemAdded(newItem); // Call the callback to handle addition
  };

  const handleItemUpdated = async (updatedItem: T) => {
    if (currentItem && onItemUpdated) {
      await onItemUpdated(currentItem.id, updatedItem); // Call the callback to handle update
      showNotification("Elemento actualizado", "success"); // Show notification
      resetEditing(); // Reset editing mode after updating
    }
    if (!onItemUpdated) {
      showNotification("Error al actualizar el elemento", "error"); // Show notification for error
    }
  };

  const handleItemDelete = async (id: string) => {
    if (onItemDeleted) {
      await onItemDeleted(id); // Call the callback if defined
      loadItems(); // Refresh the list after deletion
      showNotification("Elemento eliminado", "success"); // Show notification
    }
  };

  const handleOnEdit = (item: T) => {
    setShowForm(true);
    setIsEditing(true);    
    setCurrentItem(item); // Set the ID of the item to edit
    onEdit && onEdit(item); // Call edit callback if defined
  };
  const handleOnView = (item: T) => {
    setCurrentItem(item); // Set the ID of the item to edit
    onView && onView(item); // Call edit callback if defined
  };
  const handleOnSelect = (item: T | null) => {
    setCurrentItem(item); // Set the ID of the item to edit
    onSelect && onSelect(item); // Call edit callback if defined
  };

  const handleOnAdd = (state: boolean) => {
    setShowForm(state);
  };

  const resetEditing = () => {
    setIsEditing(false);
    setCurrentItem(null);
    setShowForm(hideForm ? false : true);
  };

  useEffect(() => {
    !isEmpty && setShowForm(hideForm ? false : true);
  }, [items]);

  useEffect(() => {
    if (importItem) {
      handleItemAddImport(importItem); // Handle import if there is an imported item
    }
    loadItems();
  }, [importItem]);

  if (fields.filter((f) => f.view === true).length === 0) fields.map((f) => (f.view = true));

  return (
    <>
      {title && <h1 className="title">{title}</h1>}
      {importItem && <button>Import</button>}
      <div className="module-container">
        {!loading && showForm && (
          <div className="form-container">
            <FormBase
              onItemAdded={handleItemAdded}
              onItemUpdated={handleItemUpdated} // Pass update function to the form
              fields={fields}
              isEditing={isEditing}
              onCancelEdit={resetEditing} // Pass cancel function to the form
              initialData={isEditing ? items && currentItem && items.find((item) => item.id === currentItem.id) : initialFormData} // Load initial data or data of the item being edited
              clearFormAfterAdd={clearFormAfterAdd}
            />
            {childrenArray[0]}
          </div>
        )}
        { (
          <div className="list-container">
            {children && <div className="upload-container">{childrenArray[1]}</div>}
            { items?.length! > 0 &&
              <ListBase<T>
                items={items}
                fields={fields}
                onItemDeleted={handleItemDelete}
                editable={onItemUpdated !== undefined} // Enable editing if update function is defined
                seeable={onView !== undefined} // Enable editing if update function is defined
                hideForm={hideForm}
                loading={loading || false}
                onAdd={handleOnAdd}
                onEdit={handleOnEdit}
                onView={handleOnView}
                onSelect={handleOnSelect}
              />
            }
          </div>
        )}
      </div>
    </>
  );
};

export default BaseModule; // Export the BaseModule component
