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
    const {students, loading, error, handleAddStudent, handleRemoveStudent, handleUpdateStudent} = useStudents();
    const [selectedStudent, setSelectedStudent] = useLocalStorage<Student | null>("selectedStudent",null);
    const [initialStudentData, setInitialStudentData] = useState<Student | null>(null);
    const [importStudentData, setImportStudentData] = useState<Student | null>(null);

    const [studentsDataImport, setStudentsDataImport] = useState<any[]>([]);
    const [previewVisible, setPreviewVisible] = useState(false);

    const { showNotification } = useNotification();
    const navigate = useNavigate();

    const fields = [
        { name: "fullName", placeholder: "Full Name", view: true },
        { name: "identificationNumber", placeholder: "Identification Number"},
        { name: "email", placeholder: "Email Address" },
    ];
    useEffect(() => {
        setSelectedStudent(null);
    }, []);

    useEffect(() => {
        setIsLoading(loading);
    }, [loading, setIsLoading]);
    
    const handleFileUpload = (jsonData: any[]) => {
        setStudentsDataImport(jsonData);
        setPreviewVisible(true);
        showNotification("¡Archivo cargado!", "success");
    };

    const deleteStudentByIndex = (index: number) => {
        const newStudentsData = studentsDataImport.filter((_, i) => i !== index);
        setStudentsDataImport(newStudentsData);
    };

    const handleOnView = (item: Student) => {        
        navigate(`/students/${item.id}/courses`);
        setSelectedStudent(item);
    }
    const handleOnSelect = (item: Student | null) => {
        setSelectedStudent(item);
    }

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
                onItemDeleted={handleRemoveStudent}
                onItemUpdated={handleUpdateStudent}
                onView={handleOnView}
                onSelect={handleOnSelect}
                onEdit={setSelectedStudent}
                initialFormData={initialStudentData}
                importItem={importStudentData} // Pass the import item to BaseModule
                loading={loading}>
                    <UploadOptions onFileUpload={handleFileUpload} />
                    {previewVisible && (
                        <UploadTable
                            studentsData={studentsDataImport}
                            onSelectStudent={setInitialStudentData}
                            onImportStudent={setImportStudentData}
                            onDeleteStudent={deleteStudentByIndex}
                        />
                    )}
            </BaseModule>
            {error && <div className="error">{error}</div>}
        </>
    );
};

export default StudentModule;
