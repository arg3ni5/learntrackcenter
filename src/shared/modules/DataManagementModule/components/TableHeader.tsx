import { useEffect, useRef } from 'react';
import { BaseField } from '../types/types';

interface TableHeaderProps<T> {
  fields: BaseField[];
  sortConfig: { key: keyof T; direction: 'ascending' | 'descending' } | null;
  setColumnWidths: (widths: number[]) => void;
  showActions: boolean;
  useFlexTable: boolean;
  handleSort: (key: keyof T | null) => void;
}

const TableHeader = <T extends Record<string, any>>({ fields, sortConfig, handleSort, setColumnWidths, showActions }: TableHeaderProps<T>) => {
  const headerRef = useRef<HTMLTableRowElement>(null);

  useEffect(() => {
    if (headerRef.current) {
      setColumnWidths(Array.from(headerRef.current.children).map((th) => (th as HTMLTableCellElement).offsetWidth));
    }
  }, []);

  return (<table className={`list-base-table header-table ${showActions ? "with-actions" : ""}`} aria-label="List header">
    <thead>
      <tr ref={headerRef}>
        {fields.map((field) => field.visible && (
          <th
            key={field.name}
            onClick={() => handleSort(field.name as keyof T)}
            onDoubleClick={() => handleSort(null)}
            style={{ width: field.size ? `${field.size}${field.unit || "em"}` : "auto" }}>
            {field.label || field.placeholder || field.name}
            {sortConfig?.key === field.name && (
              <span>{sortConfig.direction === 'ascending' ? ' ▲' : ' ▼'}</span>
            )}
          </th>
        ))}
      </tr>
    </thead>
  </table>)
};

export default TableHeader;
