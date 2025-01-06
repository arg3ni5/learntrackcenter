import { useEffect, useState } from "react";

/**
 * Hook for managing form visibility state.
 *
 * @param {boolean} initialState - Initial visibility state of the form.
 * @returns {[boolean, (state: boolean) => void]} A tuple containing the current state and a function to update it.
 */
export const useFormVisibility = (initialState: boolean): [boolean, (state: boolean) => void] => {
  const [showForm, setShowForm] = useState<boolean>(initialState);

  useEffect(() => {
    setShowForm(initialState);
  }, [initialState]);

  return [showForm, setShowForm];
};
