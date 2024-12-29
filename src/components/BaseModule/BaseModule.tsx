import { useEffect, useState } from "react";
import FormBase from "./FormBase";
import ListBase from "./ListBase";
import "./BaseModule.css"; // Import the CSS file
import { useNotification } from "../notification/NotificationContext";

export interface Option {
  value: string;
  label: string;
}
export interface Field {
  name: string; // Field name
  placeholder: string; // Field placeholder
  label?: string; // Optional field label
  type?: "input" | "select"; // Field type (input or select)
  options?: Option[]; // Options for the select
}

interface BaseModuleProps<T> {
  title?: string;
  fields: Field[];
  items?: T[]; // Function to fetch items
  fetchItems?: () => Promise<T[]>; // Function to fetch items
  onEdit?: (id: T) => void; // Optional callback to handle editing
  onItemAdded: (newItem: T) => Promise<void>; // Callback to handle adding an item
  onItemUpdated?: (id: string, updatedItem: T) => Promise<void>; // Optional callback to handle updating
  onItemDeleted?: (id: string) => Promise<void>; // Optional callback to handle deletion
  importItem?: T | null; // Item to import
  initialFormData?: T | null; // Initial data for the form
  loading?: boolean;
  children?: React.ReactNode;
}

const BaseModule = <T extends Record<string, any>>({
  title,
  fields,
  items,
  fetchItems,
  onEdit,
  onItemAdded,
  onItemUpdated,
  onItemDeleted,
  importItem,
  initialFormData,
  loading,
  children,
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

  return (
    <div>
      {title && <h1 className="title">{title}</h1>}
      <div className="module-container">
        <div className="form-container">
          <FormBase
            onItemAdded={handleItemAdded}
            onItemUpdated={handleItemUpdated} // Pass update function to the form
            fields={fields}
            isEditing={isEditing}
            onCancelEdit={resetEditing} // Pass cancel function to the form
            initialData={isEditing ? items && currentItem && items.find((item) => item.id === currentItem.id) : initialFormData} // Load initial data or data of the item being edited
          />
          {!isEditing && (
            <ListBase<T>
              items={items}
              fields={fields}
              onItemDeleted={handleItemDelete}
              editable={onItemUpdated !== undefined} // Enable editing if update function is defined
              loading={loading || false}
              onEdit={handleOnEdit}
            />
          )}
        </div>
        {children && <div className="upload-container">{children}</div>}
      </div>
    </div>
  );
};

export default BaseModule; // Export the BaseModule component
