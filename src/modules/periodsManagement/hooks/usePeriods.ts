// src/modules/periodsManagement/hooks/usePeriods.ts

import { useState, useEffect } from 'react';
import { fetchPeriods, addPeriod, deletePeriod, updatePeriod } from '../services/periodService';
import { Period } from '../../../types/types';


const usePeriods = () => {
    const [periods, setPeriods] = useState<Period[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    const loadPeriods = async () : Promise<Period[]> => {
        try {
            setLoading(true);
            const fetchedPeriods = await fetchPeriods();
            setPeriods(fetchedPeriods);
            return fetchedPeriods;
        } catch (err) {
            setError('Error fetching periods');
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
            await addPeriod(newPeriod);
            loadPeriods();
        } catch (err) {
            setError('Error adding period');
        }
    };

    const handleDeletePeriod = async (id: string) => {
        try {
            await deletePeriod(id);
            loadPeriods();
        } catch (err) {
            setError('Error deleting period');
        }
    };

    const handleUpdatePeriod = async (id: string, period: Period) => {
        try {
            await updatePeriod(id, period); // Eliminar curso por ID
            loadPeriods(); // Recargar la lista de cursos después de eliminar
        } catch (err) {
            setError('Error updating period'); // Manejar errores
        }
    };

    return { periods, loadPeriods, loading, error, handleAddPeriod, handleDeletePeriod, handleUpdatePeriod};
};

export default usePeriods;
