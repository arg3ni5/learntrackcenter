import "./BaseModule.css";
import { useEffect, useMemo, useState } from "react";
import { ListBaseProps } from "./types";
import { Link } from "react-router-dom";

/**
 * ListBase Component
 * A reusable component for displaying and managing a list of items.
 *
 * @template T - The type of items in the list.
 * @param {ListBaseProps<T>} props - The props for the ListBase component.
 */
const ListBase = <T extends Record<string, any>>({ loading = false, ...rest }: ListBaseProps<T>) => {
  const {
    fields,
    items,
    onItemDeleted,
    onHandleImport,
    ableForm,
    ableImport,
    removeable,
    seeable,
    onAdd,
    viewLinkFormat,
    onSelect,
    selectedItem: initialSelectedItem,
    showForm: isShowForm = false,
    showImportForm: isShowImportForm = false,
  } = rest;

  // State management
  const [showForm, setShowForm] = useState<boolean>(isShowForm || false); // State to manage form visibility
  const [showImportForm, setShowImportForm] = useState<boolean>(isShowImportForm || false); // State to manage import form visibility
  const [selectedItem, setSelectedItem] = useState<T | null>(initialSelectedItem); // State to store the currently selected item
  const [sortConfig, setSortConfig] = useState<{ key: keyof T; direction: 'ascending' | 'descending' } | null>(null);

  /**
   * Handles the sorting of items when a column header is clicked.
   * @param {keyof T} key - The key to sort by.
   */
  const handleSort = (key: keyof T) => {
    let direction: 'ascending' | 'descending' = 'ascending';
    if (sortConfig && sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  // Memoized sorted items
  const sortedItems = useMemo(() => {
    let sortableItems = items ? [...items] : [];
    if (sortConfig !== null) {
      sortableItems.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableItems;
  }, [items, sortConfig]);

  /**
   * Handles the click event on a row, selecting or deselecting the item.
   * @param {T} item - The clicked item.
   */
  const handleRowClick = (item: T) => {
    const newSelection = selectedItem?.id === item.id ? null : item;
    setSelectedItem(newSelection);
    onSelect?.(newSelection);
  };

  /**
   * Toggles the visibility of the form.
   * @param {boolean} state - The current state of the form visibility.
   */
  const handleShowForm = (state: boolean) => {
    setShowForm(!state);
    onAdd && onAdd(!state);
  };

  /**
   * Toggles the visibility of the import form.
   * @param {boolean} state - The current state of the import form visibility.
   */
  const handleShowImportForm = (state: boolean) => {
    onAdd && onAdd(true);
    setShowImportForm(!state);
    onHandleImport && onHandleImport(!state);
  };

  // Effect to update form visibility when isShowForm changes
  useEffect(() => {
    setShowForm(isShowForm);
  }, [isShowForm]);

  // Effect to update import form visibility when isShowImportForm changes
  useEffect(() => {
    setShowImportForm(isShowImportForm);
  }, [isShowImportForm]);

  const showActions = removeable || seeable; // Determine if action buttons should be shown

  // Render component
  return (
    !loading && (
      <>
        {/* Action buttons */}
        {showActions && (
          <div className="actions buttons-container">
            {/* Add button */}
            {ableForm === true && (
              <button
                className={!showForm ? "save-button" : "add-button"}
                onClick={() => handleShowForm(showForm)}
                aria-expanded={showForm}
                aria-label={!showForm ? "Show the form" : "Hide the form"}>
                {!showForm ? "Add" : "Hide Form"}
              </button>
            )}
            {/* Import button */}
            {ableForm === true && ableImport === true && !showImportForm && (
              <button
                onClick={() => handleShowImportForm(showImportForm)}
                aria-expanded={showImportForm}
                aria-label={showImportForm ? "Add a new item" : "Hide the form"}>
                Import
              </button>
            )}
            {/* View button */}
            {seeable && viewLinkFormat && (
              <Link
                to={selectedItem ? viewLinkFormat.replace(":id", selectedItem.id) : "#"}
                className={`button view-button ${!selectedItem ? "disabled-link" : ""}`}
                aria-label="View selected item"
                onClick={(e) => !selectedItem && e.preventDefault()}>
                View
              </Link>
            )}
            {/* Delete button */}
            {removeable && onItemDeleted && (
              <button 
                disabled={!selectedItem} 
                className="delete-button" 
                onClick={() => selectedItem?.id && onItemDeleted(selectedItem.id)} 
                aria-label="Delete selected item">
                Delete
              </button>
            )}
          </div>
        )}
        <div className="list-header"></div>
        {/* Table container */}
        <div className="table-container">
          <table className="list-base-table" aria-label="List of items">
            {/* Table header */}
            {items && items.length > 0 && (
              <thead>
                <tr>
                  {fields.map((field) => 
                    field.view && (
                      <th key={field.name} onClick={() => handleSort(field.name as keyof T)}>
                        {field.label || field.placeholder || field.name}
                        {sortConfig?.key === field.name && (
                          <span>{sortConfig.direction === 'ascending' ? ' ▲' : ' ▼'}</span>
                        )}
                      </th>
                    )
                  )}
                </tr>
              </thead>
            )}
            {/* Table body */}
            {items && items.length > 0 && (
              <tbody>
                {sortedItems.map((item) => (
                  <tr
                    key={item.id}
                    onClick={() => handleRowClick(item)}
                    className={selectedItem?.id === item.id ? "selected-row" : ""}
                    aria-selected={selectedItem?.id === item.id}
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
                      return null;
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
