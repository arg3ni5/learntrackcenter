// src/hooks/useTeachers.ts

import { useState, useEffect } from 'react';
import { fetchTeachers, addTeacher, deleteTeacher, Teacher, updateTeacher } from '../services/teacherService'; // Import functions from the service

const useTeachers = () => {
    const [teachers, setTeachers] = useState<Teacher[]>([]); // State to store the list of teachers
    const [loading, setLoading] = useState<boolean>(true); // State to manage loading
    const [error, setError] = useState<string | null>(null); // State to manage errors

    // Function to load teachers
    const loadTeachers = async (): Promise<Teacher[]> => {
        try {
            setLoading(true);
            const fetchedTeachers = await fetchTeachers(); // Fetch teachers from Firestore
            setTeachers(fetchedTeachers); // Update state with fetched teachers
            return fetchedTeachers; // Return the fetched teachers
        } catch (err) {
            setError('Error fetching teachers'); // Handle errors
            return []; // Return an empty array in case of error
        } finally {
            setLoading(false); // End loading
        }
    };

    // Effect to load teachers when the component mounts
    useEffect(() => {
        loadTeachers();
    }, []);

    // Function to add a new teacher
    const handleAddTeacher = async (newTeacher: Teacher) => {
        try {
            await addTeacher(newTeacher); // Add new teacher
            loadTeachers(); // Reload the list of teachers after adding
        } catch (err) {
            setError('Error adding teacher'); // Handle errors
        }
    };

    // Function to delete a teacher by ID
    const handleDeleteTeacher = async (id: string) => {
        try {
            await deleteTeacher(id); // Delete teacher by ID
            loadTeachers(); // Reload the list of teachers after deleting
        } catch (err) {
            setError('Error deleting teacher'); // Handle errors
        }
    };
    const handleUpdateTeacher = async (id: string, newTeacher: Teacher) => {
        try {
            await updateTeacher(id, newTeacher); // Add new teacher
            loadTeachers(); // Reload the list of teachers after adding
        } catch (err) {
            setError('Error adding teacher'); // Handle errors
        }
    };

    return { teachers, loadTeachers, loading, error, handleAddTeacher, handleDeleteTeacher, handleUpdateTeacher }; // Return necessary data and functions
};

export default useTeachers; // Export the custom hook
