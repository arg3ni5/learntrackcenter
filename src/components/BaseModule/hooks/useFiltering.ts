import { useMemo, useState } from "react";
import useLocalStorage from "../../../hooks/useLocalStorage";

/**
 * Hook for managing filtering state and logic.
 *
 * @template T - The type of items being filtered.
 * @param {T[]} items - The array of items to filter.
 * @returns {Object} An object containing filtering state and functions.
 */
export const useFiltering = <T extends Record<string, any>>(items: T[], alias?: string) => {
  const [filterText, setFilterText] = alias ? useLocalStorage<string>(`${alias}-filterText`, "") : useState<string>("");

  const filteredItems = useMemo(() => {
    if (!filterText) return items;
    return items.filter((item) => Object.values(item).some((value) => value.toString().toLowerCase().includes(filterText.toLowerCase())));
  }, [items, filterText]);

  return { filterText, setFilterText, filteredItems };
};
