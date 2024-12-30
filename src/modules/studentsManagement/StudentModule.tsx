import React, { useState, useEffect } from "react";
import BaseModule from "../../components/BaseModule/BaseModule"; 
import UploadStudents from "../../components/uploadStudents/UploadStudents";
import useStudents from './hooks/useStudents';
import StudentDetailsManagement from "./components/StudentDetailsManagement";
import './StudentModule.css';
import { useLoading } from "../../components/loading/LoadingContext";
import { Student } from "./types";
import CoursesSelector from './components/CoursesSelector';
import useLocalStorage from "../../hooks/useLocalStorage";

const StudentModule: React.FC = () => {
    const { setIsLoading } = useLoading();
    const {students, loading, error, handleAddStudent, handleRemoveStudent, handleUpdateStudent} = useStudents();
    const [selectedStudent, setSelectedStudent] = useLocalStorage<Student | null>("selectedStudent",null);
    const [initialStudentData, setInitialStudentData] = useState<Student | null>(null);
    const [importStudentData, setImportStudentData] = useState<Student | null>(null);

    const fields = [
        { name: "fullName", placeholder: "Full Name" },
        { name: "identificationNumber", placeholder: "Identification Number" },
        { name: "email", placeholder: "Email Address" },
    ];

    useEffect(() => {
        setIsLoading(loading);
    }, [loading, setIsLoading]);
    

    return (
        <>
            <BaseModule<Student>
                title="Student Management"
                fields={fields}
                items={students}
                onItemAdded={handleAddStudent}
                onItemDeleted={handleRemoveStudent}
                onItemUpdated={handleUpdateStudent}
                onEdit={setSelectedStudent}
                initialFormData={initialStudentData}
                importItem={importStudentData} // Pass the import item to BaseModule
                loading={loading}>
                <UploadStudents onSelectStudent={setInitialStudentData} onImportStudent={setImportStudentData} />
            </BaseModule>
            <CoursesSelector></CoursesSelector>
            {selectedStudent && (
                <StudentDetailsManagement student={selectedStudent} /> // Render the management component for selected student
            )}
            {error && <div className="error">{error}</div>}
        </>
    );
};

export default StudentModule; // Exporting the StudentModule component for use in other parts of the application
