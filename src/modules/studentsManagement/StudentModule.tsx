// src/modules/studentsManagement/StudentModule.tsx

import React, { useState } from "react";
import BaseModule from "../../components/BaseModule/BaseModule"; 
import { Student } from "./services/studentService"; 
import UploadStudents from "../../components/uploadStudents/UploadStudents";
import Loading from "../../components/loading/Loading";
import useStudents from './hooks/useStudents';
import StudentDetailsManagement from "./components/StudentDetailsManagement";

const StudentModule: React.FC = () => {
    const {loadStudents, loading, error, handleAddStudent, handleRemoveStudent, handleUpdateStudent} = useStudents();
    const [selectedStudentId, setSelectedStudentId] = useState<string | null>(null);
    const [initialStudentData, setInitialStudentData] = useState<Student | null>(null);
    const [importStudentData, setImportStudentData] = useState<Student | null>(null);

    const fields = [
        { name: "fullName", placeholder: "Full Name" },
        { name: "identificationNumber", placeholder: "Identification Number" },
        { name: "email", placeholder: "Email Address" },
    ];

    return (
        <>
            <BaseModule<Student>
                title="Student Management"
                fields={fields}
                fetchItems={loadStudents}
                onEdit={(id) => setSelectedStudentId(id)} // Set selected student ID when editing
                onItemAdded={handleAddStudent}
                onItemDeleted={handleRemoveStudent}
                onItemUpdated={async (studentId, updatedData) => {
                    setSelectedStudentId(studentId);
                    console.log('Student ID:', studentId);
                    handleUpdateStudent(studentId, updatedData);
                }}
                initialFormData={initialStudentData}
                importItem={importStudentData} // Pass the import item to BaseModule
                loading={loading}>
                <UploadStudents onSelectStudent={setInitialStudentData} onImportStudent={setImportStudentData} />
            </BaseModule>

            {selectedStudentId && (
                <StudentDetailsManagement studentId={selectedStudentId} /> // Render the management component for selected student
            )}
            {loading && <Loading />}
            {error && <div className="error">{error}</div>}
        </>
    );
};

export default StudentModule; // Exporting the StudentModule component for use in other parts of the application
