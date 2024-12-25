// src/modules/periodsManagement/hooks/usePeriods.ts

import { useState, useEffect } from 'react';
import { fetchPeriods, addPeriod, deletePeriod, Period } from '../services/periodService';

const usePeriods = () => {
    const [periods, setPeriods] = useState<Period[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    const loadPeriods = async () => {
        try {
            setLoading(true);
            const fetchedPeriods = await fetchPeriods();
            setPeriods(fetchedPeriods);
        } catch (err) {
            setError('Error fetching periods');
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

    return { periods, loading, error, handleAddPeriod, handleDeletePeriod };
};

export default usePeriods;
