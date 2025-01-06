import React, { useState, useEffect } from "react";
import "./FormBase.css";
import SelectInput from "./SelectInput";
import { BaseField } from "../types/types";

interface FormBaseProps<T> {
  fields: BaseField[];
  initialData?: T | null;
  isEditing?: boolean;
  onItemUpdated?: (updatedItem: T) => Promise<void>;
  onItemAdded: (newItem: T) => Promise<void>;
  onCancelEdit?: () => void;
  clearFormAfterAdd?: boolean;
}

const FormBase = <T extends {}>({ isEditing, fields, initialData, onItemAdded, onItemUpdated, onCancelEdit, clearFormAfterAdd = false }: FormBaseProps<T>) => {
  const [formData, setFormData] = useState<Record<string, string | number>>({});

  useEffect(() => {
    if (initialData) {
      setFormData(initialData as Record<string, string | number>);
    }
  }, [initialData]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSelectChange = ({ name, value }: { name: string; value: string | number }) => {
    setFormData({ ...formData, [name]: value });
  };

  const resetForm = () => setFormData({});

  const addItem = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (initialData && isEditing) {
      await onItemUpdated?.(formData as T);
    } else {
      await onItemAdded(formData as T);
    }

    if (clearFormAfterAdd) resetForm();
  };

  const handleCancelEdit = () => {
    resetForm();
    if (onCancelEdit) onCancelEdit();
  };

  const renderInputField = (field: BaseField) => {
    const commonProps = {
      key: field.name,
      name: field.name,
      placeholder: field.placeholder,
      value: formData[field.name] || "",
      required: true,
      onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        // if (field.onChange) {
        //   field.onChange(value); // Usar el onChange personalizado si está definido
        // } else {
        //   handleInputChange(e); // Usar el manejador por defecto
        // }
        handleInputChange(e);
        field.onChange && field.onChange(value);
      },
    };

    switch (field.type) {
      case "select":
        return (
          field.options && (
            <SelectInput
              options={field.options}
              label={field.label}
              {...commonProps}
              onChange={(selectedOption) => {
                const value = selectedOption.value;
                if (field.onChange) {
                  field.onChange(value); // Usar el onChange personalizado
                } else {
                  handleSelectChange({ name: field.name, value });
                }
              }}
            />
          )
        );
      case "number":
      case "number-view":
        return <input type="number" min="0" max={formData[`${field.name}Max`] || 100} {...commonProps} />;
      case "date":
        return <input type="date" {...commonProps} />;
      case "input":
      default:
        return <input type="text" {...commonProps} key={commonProps.key} />;
    }
  };

  return (
    <form onSubmit={addItem} className={isEditing ? "editing" : ""}>
      {fields.map(renderInputField)}
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
