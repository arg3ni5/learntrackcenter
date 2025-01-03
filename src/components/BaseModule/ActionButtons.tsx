import { Link } from 'react-router-dom';

interface ActionButtonsProps<T> {
  ableForm: boolean;
  ableImport: boolean;
  seeable: boolean;
  removeable: boolean;
  showForm: boolean;
  showImportForm: boolean;
  selectedItem: T | null;
  viewLinkFormat?: string;
  handleShowForm: (state: boolean) => void;
  handleShowImportForm: (state: boolean) => void;
  onItemDeleted?: (id: string) => void;
}

const ActionButtons = <T extends Record<string, any>>({
  ableForm,
  ableImport,
  seeable,
  removeable,
  showForm,
  showImportForm,
  selectedItem,
  viewLinkFormat,
  handleShowForm,
  handleShowImportForm,
  onItemDeleted
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
        <button
          onClick={() => handleShowImportForm(showImportForm)}
          aria-expanded={showImportForm}
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
  );
};

export default ActionButtons;
