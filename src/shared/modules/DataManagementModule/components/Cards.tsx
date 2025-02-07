import { useMemo } from "react";
import Card from "../../../components/Card/Card";
import { BaseField } from "../types/types";

export interface TableProps<T> {
  items: T[];
  config: TableConfig<T>;
  selectedItem: T | null;
  tempChanges: Record<string, Record<string, number>>;
  handlers: {
    handleRowClick: (item: T) => void;
    handleSort: (key: keyof T | null) => void;
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

const Cards = <T extends Record<string, any>>({
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


  const firstField = useMemo(() => {
    return config.fields[0];
  }, [config.fields]);

  return (

    <div className="container-grid">
      {items.map(item => {
        const isSelected = selectedItem?.id === item.id;
        return (
          <div className="item" key={item.id} onClick={() => handleRowClick?.(item)}>
            <Card<T>
              className={isSelected ? "active":""}
              titleName={firstField.name}
              fields={config.fields}
              data={item}
            />
          </div>
        )
      })
      }
    </div>
  );
};

export default Cards;
