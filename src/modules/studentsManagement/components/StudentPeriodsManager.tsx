import React from 'react';
import useStudentCourses from '../hooks/useStudentCourses';
import useLocalStorage from '../../../hooks/useLocalStorage';
import { Student, StudentCourse } from '../../../types/types';
import Card, { CardField } from '../../../shared/components/Card/Card';
import './StudentPeriodsManager.css';

const StudentPeriodsManager: React.FC<{ student: Student }> = ({ student }) => {
    const [selectedPeriodId, setSelectedPeriodId] = useLocalStorage<string | null>('selectedPeriodId', null);
    const [selectedCourseId, setSelectedCourseId] = useLocalStorage<string | null>('selectedCourseId', null);
    const { availableCourses, availablePeriods, studentCourses, handleAddCourse, handleDeleteCourse, setPeriodId } = useStudentCourses(student.id!);

    const assignPeriodToStudent = async () => {
        if (!selectedPeriodId || !selectedCourseId) return;

        const selectedCourse = availableCourses.find(course => course.id === selectedCourseId);
        if (!selectedCourse) return;

        const { id, duration, hours, ...courseData } = selectedCourse;
        const newCourse: StudentCourse = {
            ...courseData,
            periodId: selectedPeriodId,
            periodCourseId: selectedCourseId,
            courseId: selectedCourseId,
            status: 'Not Started',
            finalGrade: 0,
            assignmentsIds: [],
        };

        await handleAddCourse(student.id!, newCourse);
    };

    const handleOnChangePeriod = (periodId: string) => {
        setSelectedPeriodId(periodId);
        setPeriodId(periodId);
        setSelectedCourseId(null);
    };

    const isEqual = (id1: any, id2: any) => String(id1) === String(id2);

    const fields: CardField[] = [
        { name: "description", placeholder: "Description" },
        { name: "duration", placeholder: "Duration" },
        { name: "hours", placeholder: "Hours" },
        { name: "status", placeholder: "Status" },
        { name: "teacherName", placeholder: "Teacher" },
        { name: "assignmentsIds", placeholder: "Assignments", type: "array" },
    ];

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

                {selectedPeriodId && (
                    <div className="item">
                        <h3>Available Courses</h3>
                        <div className="buttons-container">
                            {availableCourses.filter(ac => !studentCourses.some(course => course.id === ac.id))
                                .map(course => (
                                    <button key={course.id} className={`button ${isEqual(selectedCourseId, course.id) ? 'active' : ''}`} onClick={() => setSelectedCourseId(course.id!)}>
                                        {course.name}
                                    </button>
                                ))}
                        </div>
                        {availableCourses.filter(ac => !studentCourses.some(course => course.id === ac.id)).length === 0 && (
                            <div className="empty">No courses available for this period</div>
                        )}
                    </div>
                )}

                {selectedPeriodId && selectedCourseId && (
                    <button className="edit-button" onClick={assignPeriodToStudent}>Assign Course</button>
                )}
            </div>

            <h2 className='title'>Assigned Courses</h2>
            <div className="container">
                {studentCourses.map(course => (
                    <div className="item" key={course.id}>
                        <Card<StudentCourse>
                            titleName="name"
                            fields={fields}
                            data={course}
                            handlers={{ onDelete: () => handleDeleteCourse(student.id!, course.courseId!, course.periodId!) }}
                            ableDelete={course.assignmentsIds.length === 0}
                        />
                    </div>
                ))}
            </div>
        </>
    );
};

export default StudentPeriodsManager;
