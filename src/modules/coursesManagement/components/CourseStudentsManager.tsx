import React, { useEffect } from "react";
import BaseModule from "../../../components/BaseModule/BaseModule";;
import { useLoading } from "../../../components/loading/LoadingContext";
import { Student } from "../../../types/types";
import './CourseStudentsManager.css';
import useStudentsCourse from "../hooks/useStudentsCourse";

interface CourseStudentsManagerProps {
    courseId: string;
    periodId: string;
}

const CourseStudentsManager: React.FC<CourseStudentsManagerProps> = ({ courseId, periodId }) => {
    const { setIsLoading } = useLoading();
    const { students, loading, error} = useStudentsCourse(courseId);

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
            <BaseModule<Student>
                fields={fields}
                items={students}
                showForm={false}
                ableForm={false}
                ableImport={false}
                clearFormAfterAdd={true}
                loading={loading}>
            </BaseModule>
            {error && <div className="error">{error}</div>}
        </div>
    );
};

export default CourseStudentsManager;
