import { Link } from "react-router-dom";
import { ActionButtonsProps } from "./types";

const ActionButtons = <T extends Record<string, any>>({
  ableForm,
  ableImport,
  seeable,
  removeable,
  showForm,
  showImportForm,
  selectedItem,
  viewLinks,
  handleShowForm,
  handleShowImportForm,
  onItemDeleted,
}: ActionButtonsProps<T>) => {
  return (
    <div className="actions buttons-container compact">
      {ableForm && (
        <button
          className={!showForm ? "edit-button" : "add-button"}
          onClick={() => handleShowForm(showForm)}
          aria-expanded={showForm}
          aria-label={!showForm ? "Show the form" : "Hide the form"}>
          {!showForm ? "Add" : "Hide Form"}
        </button>
      )}
      {ableForm && ableImport && !showImportForm && (
        <button onClick={() => handleShowImportForm(showImportForm)} aria-expanded={showImportForm} aria-label={showImportForm ? "Add a new item" : "Hide the form"}>
          Import
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

      {removeable && onItemDeleted && (
        <button disabled={!selectedItem} className="delete-button" onClick={() => selectedItem?.id && onItemDeleted(selectedItem.id)} aria-label="Delete selected item">
          Delete
        </button>
      )}
    </div>
  );
};

export default ActionButtons;
