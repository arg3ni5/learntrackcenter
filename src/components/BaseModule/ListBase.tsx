import "./BaseModule.css";
import { Field } from "./BaseModule";
import { useState } from "react";

interface ListBaseProps<T> {
  fields: Field[];
  items?: T[];
  onImportItem?: (newItem: any) => void;
  onItemDeleted?: (id: string) => void;
  onView: (item: T) => void;
  onEdit: (item: T) => void;
  onSelect: (item: T | null) => void;
  editable: boolean;
  seeable: boolean;
  loading: boolean;
}

const ListBase = <T extends Record<string, any>>(
  { items, fields, onItemDeleted, onView, onEdit, onSelect, editable, seeable, loading }: ListBaseProps<T>) => {
  const [selectedItem, setSelectedItem] = useState<T | null>(null);

  const handleRowClick = (item: T) => {
    if (selectedItem?.id === item.id) {
      setSelectedItem(null);
      onSelect && onSelect(null);
    } else {
      setSelectedItem(item);
      onSelect && onSelect(item);
    }
  };

  const deleteItem = async (id: string) => {
    if (id === "") {
      return;
    }
    onItemDeleted && onItemDeleted(id);
  };

  const showActions = onItemDeleted !== undefined || seeable || editable;

  return (
    !loading && (
      <>
      
        { 
          showActions && (
          <div className="actions actions-row buttons-container flex">
            {seeable && (
              <button disabled={!selectedItem} className="view-button" onClick={() => onView && onView(selectedItem!)}>View</button>
            )}
            {editable && (
              <button disabled={!selectedItem} className="edit-button" onClick={() => onEdit && onEdit(selectedItem!)}>Edit</button>
            )}
            {onItemDeleted && (

              <button disabled={!selectedItem} className="delete-button" onClick={() => onItemDeleted(selectedItem?.id!)}>Delete</button>
            )}
          </div>)
        }
      <div className="list-header"></div>
        <div className="table-container">
          <table className="list-base-table">
            {items && items.length > 0 && (
              <thead>
                <tr>
                  {fields.map((field) => (
                    field.view && (<th key={field.name}>{field.label || field.placeholder || field.name}</th>)
                  ))}
                </tr>
              </thead>
            )}
            {items && items.length > 0 && (
              <tbody>
                {items.map((item) => (
                  <tr
                    key={item.id}
                    onClick={() => handleRowClick(item)}
                    className={selectedItem?.id === item.id ? 'selected-row' : ''}
                  >
                    {fields.map((field) => {
                      if (field.view) {
                        
                        if (field.type === "select" && field.options) {
                          const fieldValue = item[field.name];
                          const option = field.options.find((t) => t.value === fieldValue);
                          return <td key={field.name}>{option ? option.label : "Unknown"}</td>;
                        }
                        return <td key={field.name}>{item[field.name] !== undefined ? item[field.name] : "N/A"}</td>;
                      }
                    })}
                  </tr>
                ))}
              </tbody>
            )}
          </table>
        </div>
      </>
    )
  );
};

export default ListBase;
