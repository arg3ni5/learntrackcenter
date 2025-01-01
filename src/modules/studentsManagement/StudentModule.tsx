import React, { useState, useEffect } from "react";
import BaseModule from "../../components/BaseModule/BaseModule";
import useStudents from './hooks/useStudents';
import StudentDetailsManagement from "./components/StudentDetailsManagement";
import { useLoading } from "../../components/loading/LoadingContext";
import { Student } from "./types";
import useLocalStorage from "../../hooks/useLocalStorage";
import UploadOptions from "../../components/uploadStudents/UploadOptions";
import { useNotification } from "../../components/notification/NotificationContext";
import UploadTable from "../../components/uploadStudents/UploadTable";
import './StudentModule.css';
import '../../components/uploadStudents/UploadStudents.css';
import { useNavigate } from "react-router-dom";

const StudentModule: React.FC = () => {
    const { setIsLoading } = useLoading();
    const {students, loading, error, handleAddStudent, handleRemoveStudent, handleUpdateStudent} = useStudents();
    const [selectedStudent, setSelectedStudent] = useLocalStorage<Student | null>("selectedStudent",null);
    const [initialStudentData, setInitialStudentData] = useState<Student | null>(null);
    const [importStudentData, setImportStudentData] = useState<Student | null>(null);

    const [studentsData, setStudentsData] = useState<any[]>([]);
    const [previewVisible, setPreviewVisible] = useState(false);
    const { showNotification } = useNotification();
    const navigate = useNavigate();

    const fields = [
        { name: "fullName", placeholder: "Full Name" },
        { name: "identificationNumber", placeholder: "Identification Number" },
        { name: "email", placeholder: "Email Address" },
    ];

    useEffect(() => {
        setIsLoading(loading);
    }, [loading, setIsLoading]);
    
    const handleFileUpload = (jsonData: any[]) => {
        setStudentsData(jsonData);
        setPreviewVisible(true);
        showNotification("¡Archivo cargado!", "success");
    };

    const deleteStudentByIndex = (index: number) => {
        const newStudentsData = studentsData.filter((_, i) => i !== index);
        setStudentsData(newStudentsData);
    };

    const handleOnView = (item: Student) => {        
        navigate(`/students/${item.id}/courses`);
        setSelectedStudent(item);
    }

    return (
        <>
            <BaseModule<Student>
                title="Student Management"
                fields={fields}
                items={students}
                onItemAdded={handleAddStudent}
                onItemDeleted={handleRemoveStudent}
                onItemUpdated={handleUpdateStudent}
                onView={handleOnView}
                onEdit={setSelectedStudent}
                initialFormData={initialStudentData}
                importItem={importStudentData} // Pass the import item to BaseModule
                loading={loading}>
                    <UploadOptions onFileUpload={handleFileUpload} />
                    {previewVisible && (
                        <UploadTable
                            studentsData={studentsData}
                            onSelectStudent={setInitialStudentData}
                            onImportStudent={setImportStudentData}
                            onDeleteStudent={deleteStudentByIndex}
                        />
                    )}
            </BaseModule>
            {selectedStudent && selectedStudent.id && (
                <>                    
                    <StudentDetailsManagement student={selectedStudent} />
                </>
            )}
            {error && <div className="error">{error}</div>}
        </>
    );
};

export default StudentModule; // Exporting the StudentModule component for use in other parts of the application
