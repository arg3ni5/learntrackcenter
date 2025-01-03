import "./BaseModule.css";
import { useEffect, useState } from "react";
import { ListBaseProps } from "./types";
import { Link } from "react-router-dom";

const ListBase = <T extends Record<string, any>>({ loading = false, ...rest }: ListBaseProps<T>) => {
  const {
    fields,
    items,
    onItemDeleted,
    onHandleImport,
    ableForm,
    ableImport,
    seeable,
    onAdd,
    viewLinkFormat,
    onSelect,
    selectedItem: initialSelectedItem,
    showForm: isShowForm = false,
    showImportForm: isShowImportForm = false,
  } = rest;
  const [showForm, setShowForm] = useState<boolean>(isShowForm || false); // State to manage form visibility
  const [showImportForm, setShowImportForm] = useState<boolean>(isShowImportForm || false); // State to manage form visibility
  const [selectedItem, setSelectedItem] = useState<T | null>(initialSelectedItem); // State to store the currently selected item

  // Function to handle row click
  const handleRowClick = (item: T) => {
    const newSelection = selectedItem?.id === item.id ? null : item;
    setSelectedItem(newSelection);
    onSelect?.(newSelection);
  };

  // Function to toggle form visibility
  const handleShowForm = (state: boolean) => {
    setShowForm(!state); // Update the form visibility state
    onAdd && onAdd(!state); // Call the onAdd callback with the new state
  };

  const handleShowImportForm = (state: boolean) => {
    onAdd && onAdd(true);
    setShowImportForm(!state); // Update the form visibility state
    onHandleImport && onHandleImport(!state);
  };

  // Effect to hide the form if hideForm prop changes
  useEffect(() => {
    setShowForm(isShowForm);
  }, [isShowForm]);

  useEffect(() => {
    setShowImportForm(isShowImportForm);
  }, [isShowImportForm]);

  const showActions = onItemDeleted !== undefined || seeable; // Determine if action buttons should be shown

  return (
    !loading && (
      <>
        {showActions && (
          <div className="actions buttons-container">
            {ableForm === true && (
              <button
                className={!showForm ? "save-button" : "add-button"}
                onClick={() => handleShowForm(showForm)}
                aria-expanded={showForm} // Indicate whether the form is expanded or collapsed
                aria-label={!showForm ? "Show the form" : "Hide the form"}>
                {!showForm ? "Add" : "Hide Form"} {/* Toggle button text based on form visibility */}
              </button>
            )}
            {ableForm === true && ableImport === true && !showImportForm && (
              <button
                onClick={() => handleShowImportForm(showImportForm)}
                aria-expanded={showImportForm} // Indicate whether the form is expanded or collapsed
                aria-label={showImportForm ? "Add a new item" : "Hide the form"}>
                Import
              </button>
            )}
            {seeable && viewLinkFormat && (
              <Link
                to={selectedItem ? viewLinkFormat.replace(":id", selectedItem.id) : "#"}
                className={`button view-button ${!selectedItem ? "disabled-link" : ""}`}
                aria-label="View selected item"
                onClick={(e) => !selectedItem && e.preventDefault()}>
                View
              </Link>
            )}
            {onItemDeleted && (
              <button disabled={!selectedItem} className="delete-button" onClick={() => selectedItem?.id && onItemDeleted(selectedItem.id)} aria-label="Delete selected item">
                Delete {/* Button to delete the selected item */}
              </button>
            )}
          </div>
        )}
        <div className="list-header"></div>
        <div className="table-container">
          <table className="list-base-table" aria-label="List of items">
            {items && items.length > 0 && (
              <thead>
                <tr>{fields.map((field) => field.view && <th key={field.name}>{field.label || field.placeholder || field.name}</th>)}</tr>
              </thead>
            )}
            {items && items.length > 0 && (
              <tbody>
                {items.map((item) => (
                  <tr
                    key={item.id}
                    onClick={() => handleRowClick(item)}
                    className={selectedItem?.id === item.id ? "selected-row" : ""}
                    aria-selected={selectedItem?.id === item.id} // Indicate whether this row is selected
                  >
                    {fields.map((field) => {
                      if (field.view) {
                        if (field.type === "select" && field.options) {
                          const fieldValue = item[field.name];
                          const option = field.options.find((t) => t.value === fieldValue);
                          return <td key={field.name}>{option ? option.label : "Unknown"}</td>; // Display label for select options
                        }
                        return <td key={field.name}>{item[field.name] !== undefined ? item[field.name] : "N/A"}</td>; // Display student data or N/A if undefined
                      }
                      return null; // Return null for fields that are not visible
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
