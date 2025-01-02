import React, { useState, useEffect } from "react";
import BaseModule from "../../components/BaseModule/BaseModule";
import useStudents from './hooks/useStudents';
import { useLoading } from "../../components/loading/LoadingContext";
import useLocalStorage from "../../hooks/useLocalStorage";
import UploadOptions from "../../components/uploadStudents/UploadOptions";
import { useNotification } from "../../components/notification/NotificationContext";
import UploadTable from "../../components/uploadStudents/UploadTable";
import { useNavigate } from "react-router-dom";
import { Student } from "../../types/types";
import './StudentModule.css';
import '../../components/uploadStudents/UploadStudents.css';
import StudentCard from "./components/StudentCard";
import PeriodsManager from "./components/PeriodsManager";

const StudentModule: React.FC = () => {
    const { setIsLoading } = useLoading();
    const { students, loading, error, handleAddStudent, handleAddStudents, handleRemoveStudent, handleUpdateStudent } = useStudents();
    const [selectedStudent, setSelectedStudent] = useLocalStorage<Student | null>("selectedStudent", null);
    const [initialStudentData, setInitialStudentData] = useState<Student | null>(null);
    const [importStudentData, setImportStudentData] = useState<Student | null>(null);

    const [studentsDataImport, setStudentsDataImport] = useState<Student[]>([]); // Array of arrays for imported students
    const [previewVisible, setPreviewVisible] = useState(false);

    const { showNotification } = useNotification();
    const navigate = useNavigate();

    // Define fields for the student table
    const fields = [
        { name: "fullName", placeholder: "Full Name", view: true },
        { name: "identificationNumber", placeholder: "Identification Number" },
        { name: "email", placeholder: "Email Address" },
    ];

    // Effect to reset selected student on mount
    useEffect(() => {
        setSelectedStudent(null);
    }, []);

    // Effect to manage loading state
    useEffect(() => {
        setIsLoading(loading);
    }, [loading, setIsLoading]);
    
    // Handle file upload and parse JSON data
    const handleFileUpload = (jsonData: Student[]) => {
        console.log("jsonData", jsonData);
        
        setStudentsDataImport(jsonData); // Set the imported data
        setPreviewVisible(true);
        showNotification("File uploaded successfully!", "success");
    };

    // Delete a student by index in the import data
    const deleteStudentByIndex = (index: number) => {
        const newStudentsData = studentsDataImport.filter((_, i) => i !== index);
        setStudentsDataImport(newStudentsData);
    };

    // Navigate to student courses page
    const handleOnView = (item: Student) => {        
        navigate(`/students/${item.id}/courses`);
        setSelectedStudent(item);
    };

    // Handle selection of a student
    const handleOnSelect = (item: Student | null) => {
        setSelectedStudent(item);
    };

    // Handle removal of a student
    const handleRemove = async (id: string) => {
        if (id) {
            await handleRemoveStudent(id);
            setSelectedStudent(null); // Clear selected student after removal
        }
    };

    // Confirm and save imported students
    const handleConfirmAndSave = () => {
        console.log("Confirmed and saved!");        
        handleAddStudents(studentsDataImport);      
    };

    return (
        <>
            <h1 className='title'>Student Management</h1>
            {selectedStudent && <StudentCard student={selectedStudent} />}

            {selectedStudent && (
                <>
                    {selectedStudent.id && <PeriodsManager student={selectedStudent} />}
                </>
            )}
            <BaseModule<Student>
                fields={fields}
                items={students}
                onItemAdded={handleAddStudent}
                onItemDeleted={handleRemove}
                onItemUpdated={handleUpdateStudent}
                onView={handleOnView}
                onSelect={handleOnSelect}
                onEdit={setSelectedStudent}
                initialFormData={initialStudentData}
                importItem={importStudentData} // Pass the import item to BaseModule
                loading={loading}>
                    <UploadOptions<Student> onFileUpload={handleFileUpload} columnNames={fields.map(f=>f.name)}/>
                    {previewVisible && (
                        <UploadTable<Student>
                            fields={fields}
                            data={studentsDataImport}
                            onSelect={setInitialStudentData}
                            onImport={setImportStudentData}
                            onDelete={deleteStudentByIndex}
                            confirmAndSave={handleConfirmAndSave}
                        />
                    )}
            </BaseModule>
            {error && <div className="error">{error}</div>} {/* Display error message if exists */}
        </>
    );
};

export default StudentModule;
