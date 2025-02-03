import React, { useEffect, useRef, useState } from 'react';
import { BaseField } from "../types/types";

interface TableBodyProps<T> {
  fields: BaseField[];
  sortConfig: { key: keyof T; direction: 'ascending' | 'descending' } | null;
  items: T[];
  columnWidths: number[];
  selectedItem: T | null;
  useFlexTable: boolean;
  tempChanges: Record<string, Record<string, number>>;
  handlers: {
    handleRowClick: (item: T) => void;
    handleSort: (key: keyof T) => void;
    setTempChanges: React.Dispatch<React.SetStateAction<Record<string, Record<string, number>>>>;
  };
  maxHeight?: number;
}

const Table = <T extends Record<string, any>>({
  fields,
  sortConfig,
  items,
  selectedItem,
  tempChanges,
  handlers
}: TableBodyProps<T>) => {
  const { handleRowClick, handleSort, setTempChanges } = handlers || {};
  const [isDataLoaded, setIsDataLoaded] = useState(false);
  const [columnWidths, setColumnWidths] = useState<number[]>([]);
  const headerRef = useRef<HTMLTableRowElement>(null);

  useEffect(() => {
    if (headerRef.current) {
      setColumnWidths(Array.from(headerRef.current.children).map((th) => (th as HTMLTableCellElement).offsetWidth));
    }
  }, [isDataLoaded]);

  useEffect(() => {
    if (items.length > 0) {
      setIsDataLoaded(true);
    }
  }, [items]);

  const handleNumberChange = (itemId: string, fieldName: string, value: string) => {
    const numValue = parseFloat(value);
    if (!isNaN(numValue)) {
      setTempChanges((prev) => ({
        ...prev,
        [itemId]: {
          ...prev[itemId],
          [fieldName]: numValue,
        },
      }));
    }
  };

  const handleBlur = (itemId: string, fieldName: string) => {
    const value = tempChanges[itemId]?.[fieldName];
    if (value !== undefined && !isNaN(value)) {
      console.log(`Validated value for ${itemId}.${fieldName}: ${value}`);
    }
  };

  const renderCell = (item: T, field: BaseField) => {
    if (!field.visible) return null;

    const value = item[field.name];

    switch (field.type) {
      case "link":
        return value && <a href={value} target="_blank">Link</a>;
      case "select":
        const option = field.options?.find((t) => t.value === value);
        return option ? option.label : "Unknown";
      case "number":
        return (
          <input
            type="number"
            name={field.name}
            min={0}
            step={0.5}
            max={item[`${field.name}Max`]}
            value={tempChanges[item.id]?.[field.name] ?? value}
            onChange={(e) => handleNumberChange(item.id, field.name, e.target.value)}
            onBlur={() => handleBlur(item.id, field.name)}
            onClick={(e) => e.stopPropagation()}
          />
        );
      default:
        return value !== undefined ? value : "N/A";
    }
  };

  return (
    <div className="table-body-container">
      <table className={`list-base-table header-table`} aria-label="List header">
        <thead>
          <tr ref={headerRef}>
            {fields.map((field, index) => field.visible && (
              <th key={field.name} onClick={() => handleSort(field.name as keyof T)}
              style={{ width: (`${field.size}${field.unit || "em"}`) || columnWidths[index] || "auto" }}>
                {field.label || field.placeholder || field.name}
                {sortConfig?.key === field.name && (
                  <span>{sortConfig.direction === 'ascending' ? ' ▲' : ' ▼'}</span>
                )}
              </th>
            ))}
          </tr>
        </thead>
      </table>


      <div className="table-body-wrapper">
        <table className="list-base-table body-table" aria-label="List of items">
          <tbody>
            {items.length > 0 ? items.map((item) => (
              <tr key={item.id} onClick={() => handleRowClick?.(item)} className={selectedItem?.id === item.id ? "selected-row" : ""} aria-selected={selectedItem?.id === item.id}>
                {fields.map((field, index) => (
                  <td key={field.name}
                  style={{ width: (`${field.size}${field.unit || "em"}`) || columnWidths[index] || "auto" }}>
                    {renderCell(item, field)}
                  </td>
                ))}
              </tr>
            )) :
              (
                <tr>
                  <td colSpan={fields.length} className="empty-state">No data available</td>
                </tr>
              )
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
