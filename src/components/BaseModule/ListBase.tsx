import "./BaseModule.css";
import "./ListBase.css";
import { useEffect, useMemo, useState } from "react";
import { ListBaseProps } from "./types";
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";
import ActionButtons from "./ActionButtons";

/**
 * ListBase Component
 * A reusable component for displaying and managing a list of items.
 *
 * @template T - The type of items in the list.
 * @param {ListBaseProps<T>} props - The props for the ListBase component.
 */
const ListBase = <T extends Record<string, any>>({ loading = false, ...rest }: ListBaseProps<T>) => {
  const {
    fields,
    items,
    onItemDeleted,
    onHandleImport,
    ableFilter = false,
    ableForm,
    ableImport,
    removeable,
    seeable,
    onAdd,
    viewLinkFormat,
    onSelect,
    selectedItem: initialSelectedItem,
    showForm: isShowForm = false,
    showImportForm: isShowImportForm = false,
  } = rest;

  // State management
  const [showForm, setShowForm] = useState<boolean>(isShowForm || false); // State to manage form visibility
  const [showImportForm, setShowImportForm] = useState<boolean>(isShowImportForm || false); // State to manage import form visibility
  const [selectedItem, setSelectedItem] = useState<T | null>(initialSelectedItem); // State to store the currently selected item
  const [sortConfig, setSortConfig] = useState<{ key: keyof T; direction: "ascending" | "descending" } | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [itemsPerPage, ] = useState<number>(20);
  const [filterText, setFilterText] = useState<string>("");

  /**
   * Handles the sorting of items when a column header is clicked.
   * @param {keyof T} key - The key to sort by.
   */
  const handleSort = (key: keyof T) => {
    let direction: "ascending" | "descending" = "ascending";
    if (sortConfig && sortConfig.key === key && sortConfig.direction === "ascending") {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };

  const filterItems = (items: T[]): T[] => {
    if (!filterText) return items;
    return items.filter((item) => Object.values(item).some((value) => value.toString().toLowerCase().includes(filterText.toLowerCase())));
  };

  // Memoized sorted items
  // Memoized sorted and filtered items
  const sortedAndFilteredItems = useMemo(() => {
    let processedItems = items ? [...items] : [];
    processedItems = filterItems(processedItems);
    if (sortConfig !== null) {
      processedItems.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? 1 : -1;
        }
        return 0;
      });
    }
    return processedItems;
  }, [items, sortConfig, filterText]);

  // Paginated items
  const paginatedItems = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return sortedAndFilteredItems.slice(startIndex, startIndex + itemsPerPage);
  }, [sortedAndFilteredItems, currentPage, itemsPerPage]);

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
    onHandleImport && onHandleImport(!state);
  };

  /**
   * Handles page change in pagination.
   * @param {number} pageNumber - The new page number.
   */
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  // Effect to update form visibility when isShowForm changes
  useEffect(() => {
    setShowForm(isShowForm);
  }, [isShowForm]);

  // Effect to update import form visibility when isShowImportForm changes
  useEffect(() => {
    setShowImportForm(isShowImportForm);
  }, [isShowImportForm]);

  const showActions = removeable || seeable; // Determine if action buttons should be shown
  // Calculate total pages
  const totalPages = Math.ceil(sortedAndFilteredItems.length / itemsPerPage);

  // Render component
  return (
    !loading && (
      <>
      
        {ableFilter && 
          <div className="filter-container">
            <input type="text" placeholder="Filter items..." value={filterText} onChange={(e) => setFilterText(e.target.value)} />
          </div>
        }

        {/* Action buttons */}
        {showActions && (
          <ActionButtons
            ableForm={ableForm}
            ableImport={ableImport}
            seeable={seeable}
            removeable={removeable}
            showForm={showForm}
            showImportForm={showImportForm}
            selectedItem={selectedItem}
            viewLinkFormat={viewLinkFormat}
            handleShowForm={handleShowForm}
            handleShowImportForm={handleShowImportForm}
            onItemDeleted={onItemDeleted}
          />
        )}
        {/* Table container */}
        <div className={`table-container ${showActions ? "with-actions" : ""}`}>
          <TableHeader fields={fields} sortConfig={sortConfig} handleSort={handleSort} showActions={showActions} />
          <TableBody fields={fields} items={paginatedItems} selectedItem={selectedItem} handleRowClick={handleRowClick} />
        </div>
        {/* Pagination */}
        <div className="pagination">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button key={page} onClick={() => handlePageChange(page)} className={currentPage === page ? "active" : ""}>
              {page}
            </button>
          ))}
        </div>
      </>
    )
  );
};

export default ListBase;
