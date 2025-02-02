import React, { useEffect, useState } from "react";
import DataManagementModule from "../../../shared/modules/DataManagementModule/DataManagementModule";;
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
            const {id, name, description} = periodCourse;
            const newCourse : StudentCourse = {
                courseId: id!,
                periodId: periodId,
                periodCourseId: id!,
                name, description,
                status: 'Not Started',
                finalGrade: 0,
                assignmentsIds: [],
            };
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

            <DataManagementModule<Student>
                fields={fields}
                items={availableStudents}
                showForm={false}
                ableFilter={true}
                ableForm={false}
                ableImport={false}
                clearFormAfterAdd={true}
                handlers={{onSelect:setSelectedStudent}}
                loading={loading}>
            </DataManagementModule>
            {error && <div className="error">{error}</div>}
        </div>
    );
};

export default AvalibleStudents;
