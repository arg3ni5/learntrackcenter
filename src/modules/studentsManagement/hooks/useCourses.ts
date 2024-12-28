// src/modules/studentsManagement/hooks/useCourses.ts

import { useState, useEffect } from 'react';
import { addCourse, AvailableCourses, deleteCourse, fetchAvailableCourses, fetchCourses } from '../services/courseService'; // Import your service to fetch available courses
import useLocalStorage from '../../../hooks/useLocalStorage'; // Import the local storage hook
import { Course, CourseWithDetails } from '../types'; // Import the Course interface
import { useNotification } from '../../../components/notification/NotificationContext';

const useCourses = (studentId: string, periodId: string) => {
    const [courses, setCourses] = useState<CourseWithDetails[]>([]); // State for storing student's courses
    const [loading, setLoading] = useState<boolean>(true); // State to manage loading state
    const [error, setError] = useState<string | null>(null); // State to manage errors
    const [availableCourses, setAvailableCourses] = useLocalStorage<AvailableCourses[]>('availableCourses', []); // Use local storage for available courses
    const { showNotification } = useNotification(); // Use the notification context

    // Function to load available courses
    const loadAvailableCourses = async () => {
        if (availableCourses.length === 0) { // Only fetch if not already in local storage
            try {
                const fetchedAvailableCourses = await fetchAvailableCourses(); // Fetch available courses from service
                setAvailableCourses(fetchedAvailableCourses); // Store in local storage
            } catch (err) {
                showNotification('Error fetching available courses', 'error'); // Show notification on error
            }
        }
    };

    const loadStudentCourses = async () => {
        try {
            setLoading(true);
            const fetchedCourses = await fetchCourses(studentId, periodId);            
            const detailedCourses = fetchedCourses.map(course => {
                const availableCourse = availableCourses.find(ac => ac.id === course.courseId);                
                return {
                    ...course,
                    name: availableCourse ? availableCourse.name : 'Unknown Course', // Get name from available courses
                    description: availableCourse ? availableCourse.description : 'No description available', // Get description from available courses
                };
            });
            setCourses(detailedCourses); 
        } catch (err) {
            showNotification('Error fetching courses', 'error'); 
        } finally {
            setLoading(false); 
        }
    };

    useEffect(() => {
        loadAvailableCourses(); // Load available courses on mount
        loadStudentCourses(); // Load student's courses if needed
    }, []);

    const handleAddCourse = async (newCourse: Course) => {
        try {
            if(courses.filter(course => course.courseId === newCourse.courseId).length > 0 )
            {
                showNotification('Course already added', 'error');
                return;
            }
            setLoading(true);            
            await addCourse(studentId, periodId, newCourse);
            loadStudentCourses();
        } catch (err) {
            showNotification('Error adding course', 'error');
        } finally {
            setLoading(false);
        }
    };

    const handleDeleteCourse = async (courseId: string | undefined) => {
        try {
            if (!courseId) return;
            setLoading(true);
            await deleteCourse(studentId, periodId, courseId);
            loadStudentCourses();
        } catch (err) {
            setError('Error deleting course');
            showNotification('Error deleting course', 'error');
        } finally {
            setLoading(false);
        }
    };

    return { courses, loading, error, handleAddCourse, handleDeleteCourse, availableCourses }; // Return necessary data and functions
};

export default useCourses;
