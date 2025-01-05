import React, { useEffect, useState } from "react";
import BaseModule from "../../../components/BaseModule/BaseModule";;
import { useLoading } from "../../../components/loading/LoadingContext";
import { PeriodCourse, Student, StudentCourse } from "../../../types/types";
import useStudentsCourse from "../hooks/useStudentsCourse";
import StudentCard from "./StudentCard";
import useStudentCourses from '../../studentsManagement/hooks/useStudentCourses';

interface CourseStudentsManagerProps {
    periodCourse: PeriodCourse;
    periodId: string;
}

const AvalibleStudents: React.FC<CourseStudentsManagerProps> = ({ periodCourse, periodId }) => {
    const { setIsLoading } = useLoading();
    const { availableStudents, loadAvailableStudents, loading, error} = useStudentsCourse(periodCourse);
    const { handleAddCourse } = useStudentCourses(periodId);
    const [selectedStudent, setSelectedStudent] = useState<Student | null>(null);

    useEffect(()=>{
        loadAvailableStudents();
    },[]);

    // Define fields for the student table
    const fields = [
        { name: "fullName", placeholder: "Full Name", view: true },
        { name: "identificationNumber", placeholder: "Identification Number" },
        { name: "email", placeholder: "Email Address" },
    ];

    const assignPeriodToStudent = async () => {
        if (selectedStudent && periodCourse) {
            const {id, duration, hours, ...selectedCourse} = periodCourse;
            const newCourse : StudentCourse = {
                ...selectedCourse,
                id,
                courseId: id!,
                periodId: periodId,
                periodCourseId: id!,
                status: 'Not Started',
                finalGrade: 0,
                assignmentsIds: [],
            };
            
            console.log(newCourse);
            await handleAddCourse(selectedStudent.id!, newCourse); // Call the function to add the new period
            await loadAvailableStudents();
        }
    };

    // Effect to manage loading state
    useEffect(() => {
        setIsLoading(loading);
    }, [loading, setIsLoading]);

    return (
        <div className="">
            <h2></h2>
            {selectedStudent && <StudentCard student={selectedStudent} />}
            {selectedStudent && <button className="edit-button" onClick={assignPeriodToStudent}>Assign course</button>}

            <BaseModule<Student>
                fields={fields}
                items={availableStudents}
                showForm={false}
                ableFilter={true}
                ableForm={false}
                ableImport={false}
                clearFormAfterAdd={true}
                onSelect={setSelectedStudent}
                loading={loading}>
            </BaseModule>
            {error && <div className="error">{error}</div>}
        </div>
    );
};

export default AvalibleStudents;
