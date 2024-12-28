// src/components/FormBase.tsx

import React, { useState, useEffect } from "react";
import "./FormBase.css"; // Importing CSS styles
import SelectInput from "./SelectInput"; // Ensure you import your SelectInput component

interface FormBaseProps<T> {
  fields: { label?: string; name: string; placeholder: string; type?: "input" | "select"; options?: { value: string; label: string }[] }[];
  initialData?: T | null;
  isEditing?: boolean;
  onItemUpdated?: (updatedItem: T) => Promise<void>; // Optional callback to handle updating
  onItemAdded: (newItem: T) => Promise<void>; // Callback to handle adding an item
  onCancelEdit?: () => void; // Callback for canceling edit
}

const FormBase = <T extends {}>({ isEditing, fields, initialData, onItemAdded, onItemUpdated, onCancelEdit }: FormBaseProps<T>) => {
  const [formData, setFormData] = useState<Record<string, string | null>>({});

  useEffect(() => {
    if (initialData) {
      setFormData(initialData as Record<string, string | null>); // Load initial data into the form
    }
  }, [initialData]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSelectChange = (selectedOption: any) => {
    setFormData({ ...formData, [selectedOption.name]: selectedOption.value }); // Update state with selected option
  };

  const addItem = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent default form behavior

    if (initialData && isEditing) {
      await onItemUpdated?.(formData as T); // Call the callback to handle the update if it exists
    } else {
      await onItemAdded(formData as T); // Call the callback to handle adding
    }

    setFormData({}); // Reset form after adding or updating
  };

  const handleCancelEdit = () => {
    setFormData({}); // Reset form data
    if (onCancelEdit) {
      onCancelEdit(); // Notify parent to cancel editing
    }
  };

  return (
    <form onSubmit={addItem} className={isEditing ? 'editing' : ''}>
      {fields.map((field) => {
        const fieldType = field.type || "input";
        if (fieldType === "input") {
          return <input key={field.name} type="text" name={field.name} placeholder={field.placeholder} value={formData[field.name] || ""} onChange={handleInputChange} required />;
        } else if (fieldType === "select" && field.options) {
          return (
            <SelectInput
              label={field.label}
              key={field.name}
              options={field.options}
              value={formData[field.name] || ""} 
              onChange={(selectedOption) => handleSelectChange({ name: field.name, ...selectedOption })}
              placeholder={field.placeholder}
            />
          );
        }
        return null; // In case there is no valid type
      })}
      <div className="buttons-container">
        <button className="save-button" type="submit">
          {isEditing ? "Save" : "Add"}
        </button>
        {isEditing && (
          <button className="cancel-button" type="button" onClick={handleCancelEdit}>
            Cancel
          </button>
        )}
      </div>
    </form>
  );
};

export default FormBase;
