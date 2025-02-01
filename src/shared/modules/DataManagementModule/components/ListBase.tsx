import "./ListBase.css";

import { useEffect, useState } from "react";
import { ListBaseProps } from "../types/types";
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";
import ActionButtons from "./ActionButtons";
import Pagination from "./Pagination";
import { useFormVisibility } from "../hooks/useFormVisibility";
import { useSorting } from "../hooks/useSorting";
import { useFiltering } from "../hooks/useFiltering";
import { usePagination } from "../hooks/usePagination";

/**
 * ListBase Component
 * A reusable component for displaying and managing a list of items.
 *
 * @template T - The type of items in the list.
 * @param {ListBaseProps<T>} props - The props for the ListBase component.
 */
const ListBase = <T extends Record<string, any>>({ config, handlers }: ListBaseProps<T>) => {
  const {
    useFlexTable = false,
    alias,
    fields,
    items,
    ableFilter = false,
    ableForm,
    ableImport,
    removeable,
    seeable,
    viewLinks,
    tempChanges,
    setTempChanges,
    selectedItem: initialSelectedItem,
    showForm: isShowForm = false,
    showImportForm: isShowImportForm = false,
    loading = false,
  } = config;
  const { onAdd, onImport, onSelect, onItemDeleted, onItemsUpdated, onReload, onAssign } = handlers;

  // State management
  const [showForm, setShowForm] = useFormVisibility(isShowForm);
  const [showImportForm, setShowImportForm] = useFormVisibility(isShowImportForm);
  const [selectedItem, setSelectedItem] = useState<T | null>(initialSelectedItem); // State to store the currently selected item
  const [columnWidths, setColumnWidths] = useState<number[]>([]);
  const { sortConfig, handleSort, sortedItems } = useSorting(items!, alias);
  const { filterText, setFilterText, filteredItems } = useFiltering(sortedItems, alias);
  const { currentPage, paginatedItems, totalPages, handlePageChange } = usePagination(filteredItems, 20);


  /**
   * Handles the click event on a row, selecting or deselecting the item.
   * @param {T} item - The clicked item.
   */
  const handleRowClick = (item: T) => {
    const newSelection = selectedItem?.id === item.id ? null : item;
    setSelectedItem(newSelection);
    onSelect?.(newSelection);
  };

  /**
   * Toggles the visibility of the form.
   * @param {boolean} state - The current state of the form visibility.
   */
  const handleShowForm = (state: boolean) => {
    setShowForm(!state);
    onAdd && onAdd(!state);
  };

  /**
   * Toggles the visibility of the import form.
   * @param {boolean} state - The current state of the import form visibility.
   */
  const handleShowImportForm = (state: boolean) => {
    onAdd && onAdd(true);
    setShowImportForm(!state);
    onImport && onImport(!state);
  };

  const handleSaveAllChanges = async () => {
    if (onItemsUpdated) {
      await onItemsUpdated(tempChanges);
    }
  };

  // Effect to update form visibility when isShowForm changes
  useEffect(() => {
    setShowForm(isShowForm);
  }, [isShowForm]);

  // Effect to update import form visibility when isShowImportForm changes
  useEffect(() => {
    setShowImportForm(isShowImportForm);
  }, [isShowImportForm]);

  const showActions = removeable || seeable || !!onReload || !!onAssign; // Determine if action buttons should be shown
  // Calculate item counts
  const totalItems = items ? items.length : 0;
  const filteredItemsCount = sortedItems.length;
  const handlersTbody = {
    setTempChanges,
    handleRowClick,
  };

  // Render component
  return (
    !loading && (
      <>
        <div className="container list-base">
          {/* Item count display */}
          <div className="item-count">
            Total items: {totalItems}
            {filterText && ` (showing ${filteredItemsCount} filtered)`}
          </div>

          {ableFilter && (
            <div className="filter-container">
              <input type="text" placeholder="Filter items..." value={filterText} onChange={(e) => setFilterText(e.target.value)} />
            </div>
          )}
        </div>

        {/* Action buttons */}
        {showActions && (
          <ActionButtons
            config={{
              ableForm,
              ableImport,
              seeable,
              removeable,
              showForm,
              showImportForm,
              selectedItem,
              viewLinks,
              tempChanges,
              setTempChanges,
            }}
            handlers={{
              handleShowForm,
              handleShowImportForm,
              onItemDeleted,
              onSaveAllChanges: handleSaveAllChanges,
              onReload,
              onAssign
            }}
            hasPendingChanges={Object.keys(tempChanges).length > 0}
          />
        )}

        {/* Table container */}
        <div className={`table-container ${showActions ? "with-actions" : ""}`}>
          <TableHeader fields={fields} setColumnWidths={setColumnWidths} sortConfig={sortConfig} handleSort={handleSort} showActions={showActions} useFlexTable={useFlexTable} />
          <TableBody fields={fields} items={paginatedItems} columnWidths={columnWidths} selectedItem={selectedItem} tempChanges={tempChanges} handlers={handlersTbody} useFlexTable={useFlexTable} />
        </div>
        {/* Pagination */}
        <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
      </>
    )
  );
};

export default ListBase;
