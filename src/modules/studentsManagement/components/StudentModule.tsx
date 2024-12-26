// src/modules/studentsManagement/StudentModule.tsx

import React, { useState } from "react";
import BaseModule from "../../../components/BaseModule/BaseModule"; 
import { fetchStudents, addStudent, deleteStudent, Student } from "../services/studentService"; 
import UploadStudents from "../../../components/uploadStudents/UploadStudents";
import Loading from "../../../components/loading/Loading";

const StudentModule: React.FC = () => {
    const [initialStudentData, setInitialStudentData] = useState<Student | null>(null);
    const [importStudentData, setImportStudentData] = useState<Student | null>(null);
    const [loading, setLoading] = useState<boolean>(true); 
    const [error, setError] = useState<string | null>(null); 

    const fields = [
        { name: "fullName", placeholder: "Full Name" },
        { name: "identificationNumber", placeholder: "Identification Number" },
        { name: "email", placeholder: "Email Address" },
    ];

    const fetchStudentsFromFirestore = async (): Promise<Student[]> => {
        try {
            setLoading(true);
            const studentsData = await fetchStudents();
            return studentsData;
        } catch (err) {
            setError("Error fetching students");
            return [];
        } finally {
            setLoading(false);
        }
    };

    const onImportStudent = async (student: Student) => {
        try {
            await addStudent(student); // Add the new student
            await fetchStudentsFromFirestore(); // Refresh the list after adding
            setInitialStudentData(student); // Set initial student data
            setImportStudentData(null); // Reset import student data after import
            console.log("Student imported successfully");
            
        } catch (error) {
            setError("Error importing student");
        }
    };

    return (
        <>
            <BaseModule<Student>
                collectionName="students"
                title="Student Management"
                fields={fields}
                fetchItems={fetchStudentsFromFirestore}
                onItemAdded={async (newItem) => {
                    await addStudent(newItem);
                    await fetchStudentsFromFirestore(); // Refresh the list after adding
                }}
                onItemDeleted={deleteStudent}
                initialFormData={initialStudentData}
                importItem={importStudentData} // Pass the import item to BaseModule
                loading={loading}
            >
                <UploadStudents onSelectStudent={setInitialStudentData} onImportStudent={setImportStudentData} />
            </BaseModule>
            {loading && <Loading />}
            {error && <div className="error">{error}</div>}
        </>
    );
};

export default StudentModule; // Exporting the StudentModule component for use in other parts of the application
