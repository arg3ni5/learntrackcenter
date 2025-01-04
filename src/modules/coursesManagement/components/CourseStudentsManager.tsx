import React, { useEffect, useState } from "react";
import BaseModule from "../../../components/BaseModule/BaseModule";;
import { useLoading } from "../../../components/loading/LoadingContext";
import { PeriodCourse, Student } from "../../../types/types";
import './CourseStudentsManager.css';
import useStudentsCourse from "../hooks/useStudentsCourse";
import StudentCard from "./StudentCard";
import AssignmentsManager from "./AssignmentsManager";

interface CourseStudentsManagerProps {
    periodCourse: PeriodCourse;
    periodId: string;
}

const CourseStudentsManager: React.FC<CourseStudentsManagerProps> = ({ periodCourse, periodId }) => {
    const { setIsLoading } = useLoading();
    const { students, loading, error} = useStudentsCourse(periodCourse.id!);
    const [selectedStudent, setSelectedStudent] = useState<Student | null>(null);

    // Define fields for the student table
    const fields = [
        { name: "fullName", placeholder: "Full Name", view: true },
        { name: "identificationNumber", placeholder: "Identification Number" },
        { name: "email", placeholder: "Email Address" },
    ];

    // Effect to manage loading state
    useEffect(() => {
        setIsLoading(loading);
    }, [loading, setIsLoading]);

    return (
        <div className="">
            <h2></h2>
            {selectedStudent && <StudentCard student={selectedStudent} />}
            
            {selectedStudent?.id && periodCourse.id && periodId! && 
            <AssignmentsManager
                studentId={selectedStudent?.id!}
                periodId={periodId}
                courseId={periodCourse.courseId!}
                periodCourseId={periodCourse.id!}/>}

            <BaseModule<Student>
                fields={fields}
                items={students}
                showForm={false}
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

export default CourseStudentsManager;
