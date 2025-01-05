import { BaseField } from "./types/types";

interface TableBodyProps<T> {
  fields: BaseField[];
  items: T[];
  selectedItem: T | null;
  handleRowClick: (item: T) => void;
}

const TableBody = <T extends Record<string, any>>({ fields, items, selectedItem, handleRowClick }: TableBodyProps<T>) => (
  <div className="table-body-container">
    <table className="list-base-table body-table" aria-label="List of items">
      <tbody>
        {items.map((item) => (
          <tr key={item.id} onClick={() => handleRowClick(item)} className={selectedItem?.id === item.id ? "selected-row" : ""} aria-selected={selectedItem?.id === item.id}>
            {fields.map((field) => {
              if (field.view) {
                if (field.type === "select" && field.options) {
                  const fieldValue = item[field.name];
                  const option = field.options.find((t) => t.value === fieldValue);
                  return <td key={field.name}>{option ? option.label : "Unknown"}</td>;
                }
                return <td key={field.name}>{item[field.name] !== undefined ? item[field.name] : "N/A"}</td>;
              }
              return null;
            })}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default TableBody;
