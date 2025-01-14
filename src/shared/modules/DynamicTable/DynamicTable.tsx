import React from 'react';
import './DynamicTable.css';

interface DynamicTableProps<T> {
  data: T[];
  columns: { header: string; accessor: keyof T }[];
}

const DynamicTable = <T extends Record<string, any>>({ data, columns }: DynamicTableProps<T>) => {
  return (
    <div className="table-container">
      <div className="table-header">
        {columns.map((col) => (
          <div className="table-header-cell" key={col.accessor.toString()}>
            {col.header}
          </div>
        ))}
      </div>
      <div className="table-body">
        <div className="table-body-inner">
          {data.map((row, index) => (
            <div className="table-row" key={index}>
              {columns.map((col) => (
                <div className="table-cell" key={col.accessor.toString()}>
                  {String(row[col.accessor])}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DynamicTable;
