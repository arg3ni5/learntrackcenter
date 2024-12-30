// src/modules/studentsManagement/hooks/useCourses.ts

import { useState, useEffect } from 'react';
import { addCourse, deleteCourse, fetchCourses } from '../services/courseService'; // Import your service to fetch available courses
import useLocalStorage from '../../../hooks/useLocalStorage'; // Import the local storage hook
import { CourseWithDetails, AvailableCourse, StudentCourse, Student } from '../../../types/types'; // Import the Course interface
import { useNotification } from '../../../components/notification/NotificationContext';
import { fetchCourses as fetchAvailableCourses } from '../../periodsManagement/services/courseService';

const useCourses = () => {
    const [selectedPeriodId, setSelectedPeriodId] = useLocalStorage<string|null>('selectedPeriodId', null);
    const [selectedStudent, setSelectedStudent] = useLocalStorage<Student | null>("selectedStudent",null);

    const [courses, setCourses] = useState<CourseWithDetails[]>([]); // State for storing student's courses
    const [studentCourses, setStudentCourses] = useState<StudentCourse[]>([]); // State for storing student's courses
    const [loading, setLoading] = useState<boolean>(true); // State to manage loading state
    const [error, setError] = useState<string | null>(null); // State to manage errors
    const [availableCourses, setAvailableCourses] = useState<AvailableCourse[]>([]); // Use local storage for available courses
    const { showNotification } = useNotification(); // Use the notification context

    // Function to load available courses
    const loadAvailableCourses = async (periodId: string) => {
        try {
            if(periodId){
                setSelectedPeriodId(periodId);
                const fetchedAvailableCourses = await fetchAvailableCourses(periodId); // Fetch available courses from service
                console.log({periodId, fetchedAvailableCourses});
                
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
        console.log({selectedPeriodId});
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

    return { courses, studentCourses, loading, error, handleAddCourse, handleDeleteCourse, availableCourses, loadAvailableCourses, setPeriodId: setSelectedPeriodId }; // Return necessary data and functions
};

export default useCourses;
