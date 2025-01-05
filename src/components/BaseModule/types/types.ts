export interface Option {
  value: string;
  label: string;
}
type FieldType = "input" | "select" | "date" | "number";

interface Field {
  name: string; // Field name
  placeholder: string; // Field placeholder
}

export interface BaseField extends Field {
  label?: string; // Optional field label
  type?: FieldType; // Field type (input or select)
  options?: Option[]; // Options for the select
  view?: boolean;
  onChange?: (value: any) => void;
}

export interface CommonProps<T> {
  fields: BaseField[];
  alias?: string; // Use for saving in local storage
  loading?: boolean;
  items?: T[];
  ableForm?: boolean;
  showForm?: boolean;
  ableFilter?: boolean;
  ableImport?: boolean;
  viewLinks?: LinkItem[];
}


export interface UploadField extends Field {}

export interface BaseModuleProps<T> extends CommonProps<T> {
  title?: string;
  fetchItems?: () => Promise<T[]>; // Function to fetch items
  onView?: (item: T) => void; // Optional callback to handle view
  onSelect?: (item: T | null) => void; // Optional callback to handle select
  onItemAdded?: (newItem: T) => Promise<void>; // Callback to handle adding an item
  onItemsAdded?: (items: T[]) => Promise<void>; // Callback to handle adding multiple items
  onItemUpdated?: (id: string, updatedItem: T) => Promise<void>; // Optional callback to handle updating
  onItemsUpdated?: (changes: Record<string, Record<string, number>>) => void;
  onItemDeleted?: (id: string) => Promise<void>; // Optional callback to handle deletion
  initialFormData?: T | null; // Initial data for the form
  children?: React.ReactNode;
  clearFormAfterAdd?: boolean;
}

export interface ListBaseProps<T> extends CommonProps<T> {
  selectedItem: T | null;
  showImportForm: boolean;
  editable: boolean;
  removeable: boolean;
  seeable: boolean;
  tempChanges: Record<string, Record<string, number>>;
  setTempChanges: React.Dispatch<React.SetStateAction<Record<string, Record<string, number>>>>;
  onAdd?: (state: boolean) => void;
  onSelect?: (item: T | null) => void;  
  onImportItem?: (newItem: any) => void;
  onItemDeleted?: (id: string) => void;
  onItemsUpdated?: (changes: Record<string, Record<string, number>>) => Promise<void>; 
  onImport?: (state: boolean) => void;
}

export interface LinkItem {
  label: string;
  format: string;
  class?: string;
}

export interface ActionButtonsProps<T> {
  config: ActionButtonsConfig<T>;  
  hasPendingChanges: boolean;
  handlers: {
    handleShowForm: (state: boolean) => void;
    handleShowImportForm: (state: boolean) => void;
    onItemDeleted?: (id: string) => void;
    onSaveAllChanges?: (event: React.MouseEvent<HTMLButtonElement>, changes: Record<string, Record<string, number>>) => void;
  };
}

export interface ActionButtonsConfig<T> {
  seeable: boolean;
  removeable: boolean;
  showForm: boolean;
  showImportForm: boolean;
  selectedItem: T | null;
  setTempChanges: React.Dispatch<React.SetStateAction<Record<string, Record<string, number>>>>
  tempChanges: Record<string, Record<string, number>>
  viewLinks?: LinkItem[];
  ableForm?: boolean;
  ableImport?: boolean;
}

export interface SelectInputProps {
  options: { value: string; label: string }[]; // Opciones para el select
  onChange: (selectedOption: { value: string; label: string } | null) => void; // Callback para manejar el cambio
  placeholder?: string; // Placeholder opcional
  isMulti?: boolean; // Permitir selección múltiple
  defaultValue?: any; // Valor por defecto
  label?: string; // Etiqueta opcional
  value: { value: string; label: string } | null; // Cambiar a un objeto o null
}
