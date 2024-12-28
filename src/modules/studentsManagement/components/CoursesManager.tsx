// src/modules/studentsManagement/components/CoursesManager.tsx

import React from 'react';
import useCourses from '../hooks/useCourses';
import { Course } from '../types';

const CoursesManager: React.FC<{ studentId: string; periodId: string }> = ({ studentId, periodId }) => {
    const { courses, loading, error, handleAddCourse, handleDeleteCourse, availableCourses } = useCourses(studentId, periodId); // Use the custom hook
    const [selectedCourseId, setSelectedCourseId] = React.useState<string | null>(null); // State to hold selected course ID

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
                        {course.name} {/* Display the descriptive name of the course */}
                    </option>
                ))}
            </select>
            <button onClick={assignCourseToStudent}>Assign Course</button> {/* Button to assign selected course */}
            <ul>
                {courses.map(course => (
                    <li key={course.id}>
                        {course.name} - {course.status} - {course.finalGrade}
                        {course.id && <button onClick={() => handleDeleteCourse(course.id)}>Delete</button>}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CoursesManager;
