import React, { useEffect, useState } from "react";
import FormBase from "./FormBase";
import ListBase from "./ListBase";
import "./BaseModule.css"; // Import the CSS file
import { useNotification } from "../notification/NotificationContext";

export interface Option {
  value: string;
  label: string;
}
type FieldType = "input" | "select" | "date" | "number";

export interface Field {
  name: string; // Field name
  placeholder: string; // Field placeholder
  label?: string; // Optional field label
  type?: FieldType; // Field type (input or select)
  options?: Option[]; // Options for the select
}

interface BaseModuleProps<T> {
  title?: string;
  fields: Field[];
  items?: T[]; // Function to fetch items
  fetchItems?: () => Promise<T[]>; // Function to fetch items
  onEdit?: (item: T) => void; // Optional callback to handle editing
  onView?: (item: T) => void; // Optional callback to handle view
  onItemAdded: (newItem: T) => Promise<void>; // Callback to handle adding an item
  onItemUpdated?: (id: string, updatedItem: T) => Promise<void>; // Optional callback to handle updating
  onItemDeleted?: (id: string) => Promise<void>; // Optional callback to handle deletion
  importItem?: T | null; // Item to import
  initialFormData?: T | null; // Initial data for the form
  loading?: boolean;
  children?: React.ReactNode;
  hideOnEdit?: boolean;
  clearFormAfterAdd?: boolean;
}

const BaseModule = <T extends Record<string, any>>({
  title,
  fields,
  items,
  fetchItems,
  onEdit,
  onView,
  onItemAdded,
  onItemUpdated,
  onItemDeleted,
  importItem,
  initialFormData,
  loading,
  children,
  hideOnEdit,
  clearFormAfterAdd = true,
}: BaseModuleProps<T>) => {
  const { showNotification } = useNotification();

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
  }

  const handleOnEdit = (item: T) => {
    setIsEditing(true);
    setCurrentItem(item); // Set the ID of the item to edit
    onEdit && onEdit(item); // Call edit callback if defined
  }

  const handleOnView = (item: T) => {
    setCurrentItem(item); // Set the ID of the item to edit
    onView && onView(item); // Call edit callback if defined
  }

  const resetEditing = () => {
    setIsEditing(false);
    setCurrentItem(null);
  };

  useEffect(() => {
    if (importItem) {
      handleItemAddImport(importItem); // Handle import if there is an imported item
    }
    loadItems();
  }, [importItem]);

  const childrenArray = React.Children.toArray(children);


  return (
    <div className="base-module-container">
      {title && <h1 className="title">{title}</h1>}      
      {importItem && (<button>Import</button>)}
      <div className="module-container">
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
        <div className="list-container">
          {children && <div className="upload-container">{childrenArray[1]}</div>}
          {!hideOnEdit && !isEditing && (<ListBase<T>
            items={items}
            fields={fields}
            onItemDeleted={handleItemDelete}
            editable={onItemUpdated !== undefined} // Enable editing if update function is defined
            seeable={onView !== undefined} // Enable editing if update function is defined
            loading={loading || false}
            onEdit={handleOnEdit}
            onView={handleOnView}
          />)}
        </div>
      </div>
    </div>
  );
};

export default BaseModule; // Export the BaseModule component
