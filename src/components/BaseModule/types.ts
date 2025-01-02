import UploadForm from '../uploadStudents/UploadForm';
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
}

export interface UploadField extends Field{
}

export interface BaseModuleProps<T> {
  title?: string;
  fields: BaseField[];
  items?: T[]; // Function to fetch items
  fetchItems?: () => Promise<T[]>; // Function to fetch items
  onEdit?: (item: T) => void; // Optional callback to handle editing
  onView?: (item: T) => void; // Optional callback to handle view
  onSelect?: (item: T | null) => void; // Optional callback to handle select
  onItemAdded: (newItem: T) => Promise<void>; // Callback to handle adding an item
  onItemUpdated?: (id: string, updatedItem: T) => Promise<void>; // Optional callback to handle updating
  onItemDeleted?: (id: string) => Promise<void>; // Optional callback to handle deletion
  importItem?: T | null; // Item to import
  initialFormData?: T | null; // Initial data for the form
  loading?: boolean;
  children?: React.ReactNode;
  hideForm?: boolean;
  clearFormAfterAdd?: boolean;
}

export interface ListBaseProps<T> {
  fields: BaseField[];
  loading: boolean;
  items?: T[];
  hideForm?: boolean;
  onImportItem?: (newItem: any) => void;
  onItemDeleted?: (id: string) => void;
  editable: boolean;
  seeable: boolean;  
  onAdd?: (state: boolean) => void;
  onSelect?: (item: T | null) => void;
  onView?: (item: T) => void;
  onEdit?: (item: T) => void;
}