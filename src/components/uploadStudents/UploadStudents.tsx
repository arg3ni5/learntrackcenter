import React, { useState } from 'react';
import { useNotification } from '../notification/NotificationContext';
import './UploadStudents.css';
import UploadTable from './UploadTable';
import UploadOptions from './UploadOptions';

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

    return (
        <div>
            <UploadOptions onFileUpload={handleFileUpload} />
            {previewVisible && (
                <UploadTable
                    studentsData={studentsData}
                    onSelectStudent={onSelectStudent}
                    onImportStudent={onImportStudent}
                    onDeleteStudent={deleteStudentByIndex}
                    confirmAndSave={handleConfirmAndSave}
                />
            )}
        </div>
    );
};

export default UploadStudents;
