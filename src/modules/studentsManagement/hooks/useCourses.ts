// src/modules/studentsManagement/hooks/useCourses.ts

import { useState, useEffect } from 'react';
import { addCourse, deleteCourse, fetchCourses } from '../services/courseService'; // Import your service to fetch available courses
import { fetchCourses as fetchAvailableCourses } from '../../periodsManagement/services/courseService';
import { CourseWithDetails, AvailableCourse, StudentCourse, Student, Period } from '../../../types/types'; // Import the Course interface
import { useNotification } from '../../../components/notification/NotificationContext';
import useLocalStorage from '../../../hooks/useLocalStorage'; // Import the local storage hook
import { fetchPeriods } from '../../periodsManagement/services/periodService';

const useCourses = () => {
    const [selectedStudent] = useLocalStorage<Student | null>("selectedStudent",null);
    const [selectedPeriodId, setSelectedPeriodId] = useLocalStorage<string|null>('selectedPeriodId', null);

    const [courses] = useState<CourseWithDetails[]>([]); // State for storing student's courses
    const [studentCourses, setStudentCourses] = useState<StudentCourse[]>([]); // State for storing student's courses
    const [loading, setLoading] = useState<boolean>(true); // State to manage loading state
    const [error, setError] = useState<string | null>(null); // State to manage errors
    const [availableCourses, setAvailableCourses] = useState<AvailableCourse[]>([]); // Use local storage for available courses
    const [availablePeriods, setAvailablePeriods] = useLocalStorage<Period[]>('availablePeriods', []);
    const { showNotification } = useNotification(); // Use the notification context

    // Function to load available periods
    const loadAvailablePeriods = async () => {
        if (availablePeriods.length === 0) { // Only fetch if not already in local storage
            try {
                const fetchedAvailablePeriods = await fetchPeriods(); // Fetch available periods from service
                setAvailablePeriods(fetchedAvailablePeriods); // Store in local storage
            } catch (err) {
                setError('Error fetching available periods');
                showNotification('Error fetching available periods', 'error');
            }
        }
    };

    // Function to load available courses
    const loadAvailableCourses = async (periodId: string) => {
        try {
            if(periodId){
                setSelectedPeriodId(periodId);
                const fetchedAvailableCourses = await fetchAvailableCourses(periodId); // Fetch available courses from service                
                setAvailableCourses(fetchedAvailableCourses); // Store in local storage
            }else{
                setAvailableCourses([]) // Fetch available empty
            }
        } catch (err) {
            showNotification('Error fetching available courses', 'error'); // Show notification on error
        }
    };

    const loadStudentCourses = async (studentId: string) => {
        try {
            setLoading(true);
            const fetchedCourses = await fetchCourses(studentId);            
            // const detailedCourses = fetchedCourses.map(course => {
            //     const availableCourse = availableCourses.find(ac => ac.id === course.courseId);                
            //     return {
            //         ...course,
            //         name: availableCourse ? availableCourse.name : 'Unknown Course', // Get name from available courses
            //         description: availableCourse ? availableCourse.description : 'No description available', // Get description from available courses
            //     };
            // });
            setStudentCourses(fetchedCourses); 
        } catch (err) {
            showNotification('Error fetching courses', 'error'); 
        } finally {
            setLoading(false); 
        }
    };

    useEffect(() => {
        loadAvailablePeriods();
    }, []);  

    useEffect(() => {
        if (selectedPeriodId) {            
            loadAvailableCourses(selectedPeriodId);
        }
        loadStudentCourses(selectedStudent?.id!);
    }, [selectedPeriodId]);

    const handleAddCourse = async (studentId: string, newCourse: StudentCourse) => {
        try {
            // if(courses.filter(course => course.courseId === newCourse.courseId).length > 0 )
            // {
            //     showNotification('Course already added', 'error');
            //     return;
            // }
            setLoading(true);            
            await addCourse(studentId, newCourse);
            loadStudentCourses(studentId);
        } catch (err) {
            showNotification('Error adding course', 'error');
        } finally {
            setLoading(false);
        }
    };

    const handleDeleteCourse = async (studentId: string, courseId: string | undefined) => {
        try {
            if (!courseId) return;
            setLoading(true);
            await deleteCourse(studentId, courseId);
            loadStudentCourses(studentId);
        } catch (err) {
            setError('Error deleting course');
            showNotification('Error deleting course', 'error');
        } finally {
            setLoading(false);
        }
    };

    return { 
        loading, error,
        courses, studentCourses, availablePeriods,
        handleAddCourse, handleDeleteCourse, availableCourses, 
        loadAvailableCourses, loadAvailablePeriods,
        setPeriodId: setSelectedPeriodId }; // Return necessary data and functions
};

export default useCourses;
