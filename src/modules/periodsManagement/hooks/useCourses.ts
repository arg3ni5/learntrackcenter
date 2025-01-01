// src/modules/studentsManagement/hooks/useCourses.ts

import { useState, useEffect } from 'react';
import { useNotification } from '../../../components/notification/NotificationContext';
import useLocalStorage from '../../../hooks/useLocalStorage'; // Import the local storage hook
import { addCourse, deleteCourse, updateCourse, fetchAvailableCourses, fetchCourses } from '../services/courseService';
import { AvailableCourse, Course } from '../../../types/types'; // Import the Course interface
import { useLoading } from '../../../components/loading/LoadingContext';
import { fetchTeachers, Teacher } from '../../teachersManagement/services/teacherService';

const useCourses = (periodId: string) => {
    const [data, setData] = useState<Course[]>([]); // State for storing student's courses
    const [loading, setLoading] = useState<boolean>(true); // State to manage loading state
    const [error, setError] = useState<string | null>(null); // State to manage errors
    const [ availableTeachers, setAvailableTeachers ] = useLocalStorage<Teacher[]>('availableTeachers', []); 
    const [ availableCourses, setAvailableCourses ] = useLocalStorage<AvailableCourse[]>('availableCourses', []);
    const { showNotification } = useNotification();
    const { setIsLoading } = useLoading();

    useEffect(() => {
        setIsLoading(loading);
    }, [loading, setIsLoading]);

    const loadData = async () => {
        try {
            setLoading(true);
            const data = await fetchCourses(periodId);
            const detailedData = data.map(course => {
                const teacher = availableTeachers.find(t => t.id === course.teacherId);                
                return {
                    ...course,
                    teacherName: teacher ? teacher.name : 'Unknown Course',
                };
            });
            console.log({data,
                detailedData});
            
            setData(detailedData); 
        } catch (err) {
            showNotification('Error fetching courses', 'error'); 
        } finally {
            setLoading(false); 
        }
    };

    const loadAvailableCourses = async () => {
        try {
            setLoading(true);
            const data = await fetchAvailableCourses();
            console.log({data});            
            setAvailableCourses(data); 
        } catch (err) {
            showNotification('Error fetching courses', 'error'); 
        } finally {
            setLoading(false); 
        }
    };

    const loadAvailableTeachers = async () => {
        try {
            setLoading(true);
            const data = await fetchTeachers();
            setAvailableTeachers(data); 
        } catch (err) {
            showNotification('Error fetching courses', 'error'); 
        } finally {
            setLoading(false); 
        }
    };

    useEffect(() => {
        loadData(); // Load student's courses if needed
        loadAvailableCourses()
        loadAvailableTeachers()
    }, []);

    const handleAddCourse = async (newCourse: Course) => {
        try {
            if(data.filter(course => course.courseId === newCourse.courseId).length > 0 )            {
                showNotification('Course already added', 'error');
                return;
            }
            setLoading(true);            
            await addCourse(periodId, newCourse);
            loadData();
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
            await deleteCourse(periodId, courseId);
            loadData();
        } catch (err) {
            setError('Error deleting course');
            showNotification('Error deleting course', 'error');
        } finally {
            setLoading(false);
        }
    };

    const handleUpdateCourse = async (courseId: string, course: Course) => {
        try {        
            if (!periodId) return;
            setLoading(true);            
            await updateCourse(periodId, courseId, course);
            loadData();
        } catch (err) {
            setError('Error update course');
            showNotification('Error update course', 'error');
        } finally {
            setLoading(false);
        }
    };



    return { courses: data, availableCourses, availableTeachers,
        loading, error, 
        handleAddCourse, 
        handleDeleteCourse,
        handleUpdateCourse }; // Return necessary data and functions
};

export default useCourses;
