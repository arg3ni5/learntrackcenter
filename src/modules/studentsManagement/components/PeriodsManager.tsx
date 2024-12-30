// src/modules/studentsManagement/components/PeriodsManager.tsx

import React from 'react';
import usePeriods from '../hooks/usePeriods';
import './PeriodsManager.css'; // Import the CSS file
import CoursesManager from './CoursesManager';
import useCourses from '../hooks/useCourses';
import useLocalStorage from '../../../hooks/useLocalStorage';
import { AvailableCourse, StudentCourse } from '../../../types/types';

const PeriodsManager: React.FC<{ studentId: string }> = ({ studentId }) => {
    const [selectedPeriodId, setSelectedPeriodId] = useLocalStorage<string|null>('selectedPeriodId', null);
    const [selectedCourseId, setSelectedCourseId] = useLocalStorage<string|null>('selectedCourseId', null);
    const { periods, loading, error, handleDeletePeriod, availablePeriods } = usePeriods(studentId);
    const { availableCourses, studentCourses, handleAddCourse, setPeriodId } = useCourses(); // Use the custom hook

    const assignPeriodToStudent = async () => {
        if (selectedPeriodId && selectedCourseId) {
            const {id, duration, hours, ...selectedCourse} = availableCourses.filter(course => course.id === selectedCourseId)[0];
            const newCourse : StudentCourse = {
                ...selectedCourse,
                courseId: id!,
                periodId: selectedPeriodId,
                status: 'Not Started',
                finalGrade: 0,
                assignments: [],
            };
            await handleAddCourse(studentId, selectedPeriodId, newCourse); // Call the function to add the new period to the student
            setSelectedPeriodId(null); // Reset selected period after assignment
        }
    };

    const handleOnChangePeriod = (e: any) => {
        const periodId = e.target.value;
        console.log(periodId);
        setSelectedPeriodId(periodId);
        setPeriodId(periodId);
        setSelectedCourseId(null);
    };
    const handleOnChangeCourse = (e: any) => {
        console.log(e.target.value);
        setSelectedCourseId(e.target.value);
    };
        
    if (loading) return <div>Loading...</div>; 
    if (error) return <div className="error">{error}</div>; 

    return (
        <div className='periods-manager card'>
            <h3>Manage Periods</h3>
            <p>{selectedPeriodId} - {selectedCourseId}</p>
            <select value={selectedPeriodId || ''} onChange={handleOnChangePeriod}>
                <option value="">Select a Period</option>
                {availablePeriods.map(period => (
                    <option key={period.id} value={period.id}>
                        {period.name}
                    </option>
                ))}
            </select>            
            {selectedPeriodId && (<select value={selectedCourseId || ''} onChange={handleOnChangeCourse}>
                <option value="">Select a Course</option>
                {availableCourses.map(course => (
                    <option key={course.id} value={course.id}>
                        {course.name}
                    </option>
                ))}
            </select>)}
            <button onClick={assignPeriodToStudent}>Assign course</button> {/* Button to assign selected period */}
            <div className="periods-list">
                <ul>
                    {studentCourses.map(period => (
                        <li key={period.periodId}>
                            <h3>{period.name}</h3> 

                            {/* {period.coursesIds && period.coursesIds.length == 0 &&<button className='delete-button' onClick={() => handleDeletePeriod(period.id)}>Delete</button>}
                            </h3> */}
                            {period && period.id && <CoursesManager studentId={studentId} periodId={period.id}/>}
                        </li>
                    ))}
                </ul>
            </div>
            
        </div>
    );
};

export default PeriodsManager;
