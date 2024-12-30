// src/modules/studentsManagement/components/PeriodsManager.tsx

import React from 'react';
import './PeriodsManager.css';
import { useNavigate } from 'react-router-dom';
import useLocalStorage from '../../../hooks/useLocalStorage';
import { Course, Period } from '../../../types/types';
import useCourses from '../hooks/useCourses';

const PeriodsManager: React.FC<{ periodId: string }> = ({ periodId }) => {
    const navigate = useNavigate();
    const { courses, availableCourses, handleAddCourse, handleDeleteCourse, error} = useCourses(periodId);
    const [selectedCourseId, setSelectedCourseId] = React.useState<string | null>(null); // State to hold selected period ID
    const [period, setPeriod] = useLocalStorage<Period|null>('selectPeriod', null);

    const handleGoBack = () => {
        navigate(-1);
    };
    

    const assignCourseToPeriod = async () => {
        const { id, ...courseWithoutId } = courses.filter(course => course.id === selectedCourseId)[0];
        if (selectedCourseId) {
            const course : Course = {
                ...courseWithoutId,
                courseId: id!,
                status: 'Not Started',
                finalGrade: 0,
                assignments: [],
            };
            await handleAddCourse(course); // Call the function to add the new period to the student
            setSelectedCourseId(null); // Reset selected period after assignment
        }
    };

    if (error) return <div className="error">{error}</div>; 

    return (
        <div className='periods-manager card'>
            <h3>{period?.name} <button onClick={handleGoBack}>Volver</button></h3>
            
            <select value={selectedCourseId || ''} onChange={(e) => setSelectedCourseId(e.target.value)}>
                <option value="">Select a Period</option>
                {availableCourses.map(course => (
                    <option key={course.id} value={course.id}>
                        {course.name}
                    </option>
                ))}
            </select>
            <button onClick={assignCourseToPeriod}>Assign Period</button> {/* Button to assign selected period */}
            <div className="periods-list">
                <ul>
                    {courses.map(course => (
                        <li key={course.id}>
                            <h3>{course.name}
                            {course.assignments && course.assignments.length == 0 &&<button className='delete-button' onClick={() => handleDeleteCourse(course.id!)}>Delete</button>}
                            </h3>
                            {/* {period && period.id && <CoursesManager studentId={studentId} periodId={period.id}/>} */}
                        </li>
                    ))}
                </ul>
            </div>
            
        </div>
    );
};

export default PeriodsManager;
