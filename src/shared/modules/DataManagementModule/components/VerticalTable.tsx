import { BaseField } from "../types/types";

export interface TableProps<T> {
  items: T[];
  config: TableConfig<T>;
  selectedItem: T | null;
  tempChanges: Record<string, Record<string, number>>;
  handlers: {
    handleRowClick: (item: T) => void;
    handleSort: (key: keyof T) => void;
    setTempChanges: React.Dispatch<React.SetStateAction<Record<string, Record<string, number>>>>;
  };
}

export interface TableConfig<T> {
  fields: BaseField[];
  sortConfig: { key: keyof T; direction: 'ascending' | 'descending' } | null;
  columnWidths?: number[];
  useFlexTable: boolean;
  maxHeight?: number;
}

const VerticalTable = <T extends Record<string, any>>({
  config,
  items,
  selectedItem,
  tempChanges,
  handlers
}: TableProps<T>) => {
  const { handleRowClick, handleSort, setTempChanges } = handlers || {};

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
          <tr>
            {config.fields.map((field) => {
              const isSorted = config.sortConfig?.key === field.name;
              return (
                field.visible && isSorted && (
                  <th key={field.name} onClick={() => handleSort(field.name as keyof T)}>
                    {<span>{field.label || field.placeholder || field.name} {config.sortConfig?.direction === 'ascending' ? ' ▲' : ' ▼'}</span>}
                  </th>
                )
              )
            })}
          </tr>
        </thead>
      </table>


      <div className="table-body-wrapper">
        <table className="list-base-table body-table" aria-label="List of items">
          <tbody>
            {items.length > 0 ?
              items.map((item) => {
                const isSelected = selectedItem?.id === item.id;
                const [firstField, ...fieldsInfo] = config.fields;
                return (
                  <tr key={item.id}
                    onClick={() => handleRowClick?.(item)}
                    className={isSelected ? "selected-row" : ""}
                    aria-selected={isSelected}>
                    <td>
                      <h2 onClick={() => handleSort(firstField.name as keyof T)}>{renderCell(item, firstField)}</h2>

                      {true && (fieldsInfo.map((field) => (
                        <p key={field.name}>
                          <strong className='capitalize' onClick={() => handleSort(field.name as keyof T)}>{field.placeholder}: </strong>
                          {renderCell(item, field)}
                        </p>
                      )))}

                    </td>
                  </tr>
                )
              }) :
              (
                <tr>
                  <td colSpan={config.fields.length} className="empty-state">No data available</td>
                </tr>
              )
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default VerticalTable;
