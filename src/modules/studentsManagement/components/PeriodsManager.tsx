// src/modules/studentsManagement/components/PeriodsManager.tsx

import React from 'react';
import './PeriodsManager.css';
import useStudentCourses from '../hooks/useStudentCourses';
import useLocalStorage from '../../../hooks/useLocalStorage';
import { Student, StudentCourse } from '../../../types/types';
import CourseCard from './CourseCard';
import AssignmentsSelector from './AssignmentsSelector';
import AssignmentsManager from './AssignmentsManager';

const PeriodsManager: React.FC<{ student: Student }> = ({ student }) => {
    const [selectedPeriodId, setSelectedPeriodId] = useLocalStorage<string|null>('selectedPeriodId', null);
    const [selectedCourseId, setSelectedCourseId] = useLocalStorage<string|null>('selectedCourseId', null);
    const { error, availableCourses, availablePeriods, studentCourses, handleAddCourse, setPeriodId } = useStudentCourses(student.id!);
    
    const assignPeriodToStudent = async () => {
        if (selectedPeriodId && selectedCourseId) {
            const {id, duration, hours, ...selectedCourse} = availableCourses.filter(course => course.id === selectedCourseId)[0];
            const newCourse : StudentCourse = {
                ...selectedCourse,
                courseId: id!,
                periodId: selectedPeriodId,
                status: 'Not Started',
                finalGrade: 0,
                assignmentsIds: [],
            };
            await handleAddCourse(student.id!, newCourse); // Call the function to add the new period to the student
            setSelectedPeriodId(null); // Reset selected period after assignment
        }
    };

    const handleOnChangePeriod = (periodId: any) => {
        setSelectedPeriodId(periodId);
        setPeriodId(periodId);
        setSelectedCourseId(null);
    };

    const isEqual = (id1:any, id2: any) => id1 && id2 && String(id1) === String(id2);

    if (error) return <div className="error">{error}</div>; 

    return (
        <>
            <div className="container">
                <div className="item">
                    <h3>Periods</h3>
                    <div className="buttons-container">
                        {availablePeriods.map(period => (
                            <button key={period.id} className={`button ${isEqual(selectedPeriodId, period.id) ? 'active' : ''}`} onClick={() => handleOnChangePeriod(period.id!)}>
                                {period.code}
                            </button>
                        ))}
                    </div>
                </div>
                {selectedPeriodId && 
                (<div className="item">
                    <h3>Available Courses</h3>
                    <div className="buttons-container">
                        {availableCourses.map(course => (
                            <button key={course.id} className={`button ${isEqual(selectedCourseId, course.id) ? 'active' : ''}`} onClick={() => setSelectedCourseId(course.id!)}>
                                {course.name}
                            </button>
                        ))}
                    </div>
                    {availableCourses.length === 0 && <div className="empty">No courses available for this period</div>}
                </div>)}
                {selectedPeriodId && selectedCourseId && <button className="edit-button" onClick={assignPeriodToStudent}>Assign course</button>}
            </div>

            {selectedPeriodId }-{ selectedCourseId}

            {selectedPeriodId && selectedCourseId &&<AssignmentsSelector courseId={selectedCourseId} periodId={selectedPeriodId}/>}
            <div className="container">
                
                {studentCourses.map(course => (
                    <>
                        <CourseCard key={`card-${course.id}`} course={course}/>
                        {selectedPeriodId && selectedCourseId &&
                        <AssignmentsManager 
                        periodCourseId={course.id!}
                        studentId={selectedCourseId!} 
                        periodId={selectedPeriodId!}
                        courseId={course.id!}></AssignmentsManager>}
                        
                    </>                    
                ))}
                
            </div>
        </>
    );
};

export default PeriodsManager;
