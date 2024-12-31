// src/modules/studentsManagement/components/PeriodsManager.tsx

import React, { useState } from 'react';
import './PeriodsManager.css';
import { useNavigate } from 'react-router-dom';
import useLocalStorage from '../../../hooks/useLocalStorage';
import { Course, Period } from '../../../types/types';
import useCourses from '../hooks/useCourses';
import SelectInput from '../../../components/BaseModule/SelectInput';
import useTeachers from '../../teachersManagement/hooks/useTeachers';
import AssignmentsManager from './AssignmentsManager';

const PeriodsManager: React.FC<{ periodId: string }> = ({ periodId }) => {
    const navigate = useNavigate();
    const { courses, availableCourses, handleAddCourse, handleDeleteCourse, handleUpdateCourse} = useCourses(periodId);
    const {teachers} = useTeachers();
    const [selectedCourseId, setSelectedCourseId] = useState<string | null>(null); // State to hold selected period ID
    const [selectedTeacher, setSelectedTeacher] = useState<string | null>(null);
    const [period] = useLocalStorage<Period|null>('selectPeriod', null);

    const handleGoBack = () => {
        navigate(-1);
    };


    const handleUpdate = async (course: Course) => {
        if (selectedTeacher) {
            const {id, ...courseWithOutId} = course;
            const updatedCourse = { ...courseWithOutId, teacherId: selectedTeacher };
            await handleUpdateCourse(id!, updatedCourse);
            setSelectedTeacher(null);
        }
    };
        

    const assignCourseToPeriod = async () => {
        const { id, ...courseWithoutId } = courses.filter(course => course.id === selectedCourseId)[0];
        if (selectedCourseId) {
            const course : Course = {
                ...courseWithoutId,
                courseId: id!,
                status: 'Not Started',
                assignments: [],
            };
            await handleAddCourse(course); // Call the function to add the new period to the student
            setSelectedCourseId(null); // Reset selected period after assignment
        }
    };

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
                            <div className="button-container">

                                {<button className='save-button' onClick={() => handleUpdate(course)}>Save</button>}  

                                {course.assignments && course.assignments.length == 0 &&<button className='delete-button' onClick={() => handleDeleteCourse(course.id!)}>Delete</button>}

                            </div>

                            <h3>{course.name}
                            
                            </h3>
                            <p>{course.description}</p>
                            <p>Teacher: {course.teacherName}</p>

                            {!course.teacherId && (<SelectInput
                                label="Teacher" 
                                key="teacherId"
                                options= {teachers.map((teacher) => ({ value: teacher.id!, label: teacher.name }))}
                                value={""} 
                                onChange={(selectedOption) => setSelectedTeacher(selectedOption.value)}
                                placeholder="Select Teacher"
                            />)}
                            <AssignmentsManager courseId={course.courseId} periodId={period?.id!}></AssignmentsManager>
                        </li>
                    ))}
                </ul>
            </div>
            
        </div>
    );
};

export default PeriodsManager;
