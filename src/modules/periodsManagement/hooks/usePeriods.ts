// src/modules/periodsManagement/hooks/usePeriods.ts

import { useState, useEffect } from "react";
import { fetchPeriods, addPeriod, deletePeriod, updatePeriod } from "../services/periodService";
import { Period } from "../../../types/types";
import { useNotification } from "../../../components/notification/NotificationContext";

const usePeriods = () => {
  const [periods, setPeriods] = useState<Period[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const { showNotification, showError } = useNotification();

  const loadPeriods = async (): Promise<Period[]> => {
    try {
      setLoading(true);
      const fetchedPeriods = await fetchPeriods();
      setPeriods(fetchedPeriods);
      return fetchedPeriods;
    } catch (err) {
      showError("Error fetching periods");
      return [];
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadPeriods();
  }, []);

  const handleAddPeriod = async (newPeriod: Period) => {
    try {
      const addedPeriod = await addPeriod(newPeriod);
      if (addedPeriod.id) {
        setPeriods((prevPeriods) => [...prevPeriods, addedPeriod]);
      } else {
        showError("Error adding period, no ID returned");
      }
    } catch (err) {
      showError("Error adding period");
    }
  };

  const handleDeletePeriod = async (id: string) => {
    const periodToDelete = periods.find((period) => period.id === id);

    if (!periodToDelete) {
      showError("Period does not exist in the local state");
      return;
    }
    if (periodToDelete && periodToDelete.coursesIds && periodToDelete.coursesIds.length > 0) {
      showError("Cannot delete period: it has associated courses.");
      return;
    }
    try {
      const success = await deletePeriod(id); // Llamar al servicio para eliminar el periodo
      if (success) {
        showNotification("Item deleted", "success");
        setPeriods((prevPeriods) => prevPeriods.filter((period) => period.id !== id)); // Eliminar del estado
      }
    } catch (err) {
      showError("Error deleting period");
    }
  };

  const handleUpdatePeriod = async (id: string, updatedPeriod: Period) => {
    try {
      await updatePeriod(id, updatedPeriod);
      setPeriods((prevPeriods) => prevPeriods.map((period) => (period.id === id ? { ...period, ...updatedPeriod } : period)));
    } catch (err) {
      showError("Error updating period");
    }
  };

  return { periods, loadPeriods, loading, handleAddPeriod, handleDeletePeriod, handleUpdatePeriod };
};

export default usePeriods;
