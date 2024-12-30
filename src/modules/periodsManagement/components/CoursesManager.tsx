// src/modules/studentsManagement/components/CoursesManager.tsx

import React from 'react';
import useCourses from '../hooks/useCourses';
import { Course } from '../types';
import AssignmentsManager from './AssignmentsManager';
import './CoursesManager.css'; // Import the CSS file

const CoursesManager: React.FC<{ studentId: string; periodId: string }> = ({ studentId, periodId }) => {
    const { courses, loading, error, handleAddCourse, handleDeleteCourse, availableCourses } = useCourses(studentId, periodId); // Use the custom hook
    const [selectedCourseId, setSelectedCourseId] = React.useState<string | null>(null); // State to hold selected course ID
    const [courseId, setCourseId] = React.useState<string | null>(null); 

    const assignCourseToStudent = async () => {
        if (selectedCourseId) {
            const newCourse : Course = { courseId:selectedCourseId, assignments: [], finalGrade: 0, status: 'Not Started' }; // Create a new course object
            await handleAddCourse(newCourse); 
            setSelectedCourseId(null); // Reset selected course after assignment
        }
    };

    if (loading) return <div>Loading...</div>; 
    if (error) return <div className="error">{error}</div>; 

    return (
        <div>
            <select value={selectedCourseId || ''} onChange={(e) => setSelectedCourseId(e.target.value)}>
                <option value="">Select a Course</option>
                {availableCourses.map(course => (
                    <option key={course.id} value={course.id}>
                        {course.name}
                    </option>
                ))}
            </select>
            <button onClick={assignCourseToStudent} disabled={selectedCourseId==null}>Assign Course</button>
            {courseId && <button className='delete-button' onClick={() => setCourseId(null)}>Cancel</button>}
            <ul className="courses-list">
                {courses.map(course => (
                    <li key={course.id} className={courseId && (course.id != courseId) ? 'hide' : ''}>
                        <span>{course.name}({course.description}) - {course.status} - {course.finalGrade}%</span>
                        <div className="button-container">
                            <button className='add-button' onClick={() => setCourseId(course.id ?? null)}>Add</button>
                            {course.id && <button className='delete-button' onClick={() => handleDeleteCourse(course.id)}>Delete</button>}
                        </div>
                    </li>
                ))}
            </ul>
            {courseId && <AssignmentsManager studentId={studentId} periodId={periodId} courseId={courseId}/>}
        </div>
    );
};

export default CoursesManager;
