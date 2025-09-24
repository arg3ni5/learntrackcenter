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
  handlers
}: TableProps<T>) => {
  const { handleRowClick } = handlers || {};


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
