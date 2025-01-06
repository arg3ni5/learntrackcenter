import { BaseField } from "./types/types";

interface TableBodyProps<T> {
  fields: BaseField[];
  items: T[];
  selectedItem: T | null;
  tempChanges: Record<string, Record<string, number>>;
  handlers: {
    handleRowClick: (item: T) => void;
    setTempChanges: React.Dispatch<React.SetStateAction<Record<string, Record<string, number>>>>;
  }
}

const TableBody = <T extends Record<string, any>>({ fields, items, selectedItem, tempChanges, handlers }: TableBodyProps<T>) => {
  const { handleRowClick, setTempChanges } = handlers || {};

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
    if (!field.view) return null;

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
      <table className="list-base-table body-table" aria-label="List of items">
        <tbody>
          {items.map((item) => (
            <tr key={item.id} onClick={() => handleRowClick?.(item)} className={selectedItem?.id === item.id ? "selected-row" : ""} aria-selected={selectedItem?.id === item.id}>
              {fields.map((field) => (
                <td key={field.name}>{renderCell(item, field)}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableBody;
