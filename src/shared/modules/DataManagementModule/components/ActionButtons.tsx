import { Link } from "react-router-dom";
import { ActionButtonsProps } from "../types/types";
import { FaEyeSlash, FaPlus, FaTrash } from 'react-icons/fa';

const ActionButtons = <T extends Record<string, any>>({
  hasPendingChanges,
  config,
  handlers
}: ActionButtonsProps<T>) => {
  const {
    ableForm,
    ableImport,
    seeable,
    removeable,
    showForm,
    showImportForm,
    selectedItem,
    viewLinks,
    tempChanges
  } = config;

  const {
    handleShowForm,
    handleShowImportForm,
    onItemDeleted,
    onSaveAllChanges,
    onReload,
    onAssign
  } = handlers;

  const handleSaveAllChanges = (event: React.MouseEvent<HTMLButtonElement>, changes: Record<string, Record<string, number>>) => {
    onSaveAllChanges && onSaveAllChanges(event, changes);
  };

  return (
    <div className="actions buttons-container compact">
      {ableForm && (
        <button
          className={!showForm ? "edit-button" : "add-button"}
          onClick={() => handleShowForm(showForm)}
          aria-expanded={showForm}
          aria-label={!showForm ? "Show the form" : "Hide the form"}>
          {!showForm ? <FaPlus /> :  <FaEyeSlash />} <span className="d-none d-md-inline-over">{!showForm ? "Add" : "Hide Form"}</span>
        </button>
      )}
      {ableForm && ableImport && !showImportForm && (
        <button onClick={() => handleShowImportForm(showImportForm)} aria-expanded={showImportForm} aria-label={showImportForm ? "Add a new item" : "Hide the form"}>
          Import
        </button>
      )}
      {removeable && onItemDeleted && (
        <button disabled={!selectedItem} className="delete-button" onClick={() => selectedItem?.id && onItemDeleted(selectedItem.id)} aria-label="Delete selected item">
          <FaTrash /> <span className="d-none d-md-inline-over">Delete</span>
        </button>
      )}
      {hasPendingChanges && (
        <button onClick={(e) => handleSaveAllChanges(e, tempChanges)} className="add-button" aria-label="Save all changes">
          Save All Changes
        </button>
      )}
      {onReload && (
        <button onClick={() => onReload()} className="add-button" aria-label="Save all changes">
          Reload
        </button>
      )}
      {onAssign && (
        <button disabled={!selectedItem} onClick={() => onAssign()} className="edit-button" aria-label="Save all changes">
          Assign
        </button>
      )}

      {seeable &&
        viewLinks &&
        viewLinks.map((link, index) => (
          <Link
            key={index}
            to={selectedItem ? link.format.replace(":id", selectedItem.id) : "#"}
            className={`button view-button ${link.class || ""} ${!selectedItem ? "disabled-link" : ""}`}
            aria-label={`View ${link.label}`}
            onClick={(e) => !selectedItem && e.preventDefault()}>
            {link.label}
          </Link>
        ))}
    </div>
  );
};

export default ActionButtons;
