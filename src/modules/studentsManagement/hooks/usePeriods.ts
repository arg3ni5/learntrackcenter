// src/modules/studentsManagement/hooks/usePeriods.ts

import { useState, useEffect } from 'react';
import { fetchStudentPeriods, addPeriod, deletePeriod, AvailablePeriod, fetchAvailablePeriods } from '../services/periodService';
import { Period, PeriodWithDetails } from '../types';
import useLocalStorage from '../../../hooks/useLocalStorage';
import { useNotification } from '../../../components/notification/NotificationContext';


const usePeriods = (studentId: string) => {
    const [periods, setPeriods] = useState<PeriodWithDetails[]>([]);
    const [availablePeriods, setAvailablePeriods] = useLocalStorage<AvailablePeriod[]>('availablePeriods', []); // Use local storage for available periods
    const [loading, setLoading] = useState<boolean>(true); 
    const [error, setError] = useState<string | null>(null);
    const { showNotification } = useNotification();
    

    // Function to load available periods
    const loadAvailablePeriods = async () => {
        if (availablePeriods.length === 0) { // Only fetch if not already in local storage
            try {
                const fetchedAvailablePeriods = await fetchAvailablePeriods(); // Fetch available periods from service
                setAvailablePeriods(fetchedAvailablePeriods); // Store in local storage
            } catch (err) {
                setError('Error fetching available periods');
                showNotification('Error fetching available periods', 'error');
            }
        }
    };

    const loadPeriods = async () => {
        try {
            setLoading(true);
            const fetchedPeriods = await fetchStudentPeriods(studentId);             
            const detailedPeriods = fetchedPeriods.map(period => {
                const availablePeriod = availablePeriods.find(ac => ac.id === period.periodId);
                return {
                    ...period,
                    name: availablePeriod ? availablePeriod.periodName : 'Unknown Period', // Get name from available courses
                };
            });
            setPeriods(detailedPeriods); 
        } catch (err) {
            setError('Error fetching periods');
            showNotification('Error fetching periods', 'error');
        } finally {
            setLoading(false); 
        }
    };

    useEffect(() => {
        loadPeriods(); 
        loadAvailablePeriods();
    }, [studentId]);    

    const handleAddPeriod = async (newPeriod: Period) => {
        try {
            periods.filter(period => period.periodId === newPeriod.periodId).length > 0 && showNotification('Period already exists', 'error');
            await addPeriod(studentId, newPeriod); 
            loadPeriods(); 
        } catch (err) {
            setError('Error adding period');
            showNotification('Error adding period', 'error');
        }
    };

    const handleDeletePeriod = async (id: string | undefined) => {
        try {
            if (!id) return;
            await deletePeriod(studentId, id); 
            loadPeriods(); 
        } catch (err) {
            setError('Error deleting period'); 
            showNotification('Error deleting period', 'error');
        }
    };

    return { availablePeriods,periods, loading, error, fetchAvailablePeriods, handleAddPeriod, handleDeletePeriod }; 
};

export default usePeriods; 
