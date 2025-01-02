import React, { useState } from 'react';
import { useNotification } from '../notification/NotificationContext';
import './UploadStudents.css';
import UploadTable from './UploadTable';
import UploadOptions from './UploadOptions';
import { Student } from '../../types/types';

interface UploadStudentsProps {
    onSelectStudent: (student: any) => void;
    onImportStudent: (student: any) => void;
}

const UploadStudents: React.FC<UploadStudentsProps> = ({ onSelectStudent, onImportStudent }) => {
    const [studentsData, setStudentsData] = useState<any[]>([]);
    const [previewVisible, setPreviewVisible] = useState(false);
    const { showNotification } = useNotification();

    const handleFileUpload = (jsonData: any[]) => {
        setStudentsData(jsonData);
        setPreviewVisible(true);
        showNotification("¡Archivo cargado!", "success");
    };

    const deleteStudentByIndex = (index: number) => {
        const newStudentsData = studentsData.filter((_, i) => i !== index);
        setStudentsData(newStudentsData);
    };

    const handleConfirmAndSave = () => {
        // Lógica para confirmar y guardar
        console.log("Confirmed and saved!");
    };

    const fields = [
        { name: "fullName", placeholder: "Full Name", view: true },
        { name: "identificationNumber", placeholder: "Identification Number" },
        { name: "email", placeholder: "Email Address" },
    ];
    const columnNames = ["fullName", "identificationNumber", "email"];

    return (
        <div>
            <UploadOptions<Student> onFileUpload={handleFileUpload} columnNames={columnNames} />
            {previewVisible && (
                <UploadTable<Student>
                    fields={fields}
                    studentsData={studentsData}
                    onSelect={onSelectStudent}
                    onImport={onImportStudent}
                    onDelete={deleteStudentByIndex}
                    confirmAndSave={handleConfirmAndSave}
                />
            )}
        </div>
    );
};

export default UploadStudents;
