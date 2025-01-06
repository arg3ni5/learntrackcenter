import { BaseField } from '../types/types';

interface TableHeaderProps<T> {
  fields: BaseField[];
  sortConfig: { key: keyof T; direction: 'ascending' | 'descending' } | null;
  showActions: boolean;
  handleSort: (key: keyof T) => void;
}

const TableHeader = <T extends Record<string, any>>({ fields, sortConfig, handleSort, showActions }: TableHeaderProps<T>) => (
   <table className={`list-base-table header-table ${showActions ? "with-actions" : ""}`} aria-label="List header">
      <thead>
        <tr>
          {fields.map((field) => field.view && (
            <th key={field.name} onClick={() => handleSort(field.name as keyof T)}>
              {field.label || field.placeholder || field.name}
              {sortConfig?.key === field.name && (
                <span>{sortConfig.direction === 'ascending' ? ' ▲' : ' ▼'}</span>
              )}
            </th>
          ))}
        </tr>
      </thead>
  </table>
);

export default TableHeader;
