import { useMemo, useState } from "react";

/**
 * Hook for managing pagination state and logic.
 *
 * @template T - The type of items being paginated.
 * @param {T[]} items - The array of items to paginate.
 * @param {number} itemsPerPage - The number of items to display per page.
 * @returns {Object} An object containing pagination state and functions.
 */
export const usePagination = <T>(items: T[], itemsPerPage: number) => {
  const [currentPage, setCurrentPage] = useState<number>(1);

  const paginatedItems = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return items.slice(startIndex, startIndex + itemsPerPage);
  }, [items, currentPage, itemsPerPage]);

  const totalPages = Math.ceil(items.length / itemsPerPage);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return { currentPage, paginatedItems, totalPages, handlePageChange };
};
