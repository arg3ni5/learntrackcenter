import { useMemo, useState } from "react";

/**
 * Hook for managing sorting state and logic.
 * 
 * @template T - The type of items being sorted.
 * @param {T[]} items - The array of items to sort.
 * @returns {Object} An object containing sorting state and functions.
 */
export const useSorting = <T extends Record<string, any>>(items: T[]) => {
  const [sortConfig, setSortConfig] = useState<{ key: keyof T; direction: "ascending" | "descending" } | null>(null);

  const handleSort = (key: keyof T) => {
    let direction: "ascending" | "descending" = "ascending";
    if (sortConfig && sortConfig.key === key && sortConfig.direction === "ascending") {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };

  const sortedItems = useMemo(() => {
    if (sortConfig === null) return items;
    return [...items].sort((a, b) => {
      if (a[sortConfig.key] < b[sortConfig.key]) {
        return sortConfig.direction === "ascending" ? -1 : 1;
      }
      if (a[sortConfig.key] > b[sortConfig.key]) {
        return sortConfig.direction === "ascending" ? 1 : -1;
      }
      return 0;
    });
  }, [items, sortConfig]);

  return { sortConfig, handleSort, sortedItems };
};