import React, { useState, useEffect } from "react";
import BaseModule from "../../components/BaseModule/BaseModule"; 
import UploadStudents from "../../components/uploadStudents/UploadStudents";
import './StudentModule.css';
import { useLoading } from "../../components/loading/LoadingContext";
import { Period } from "./types";
import usePeriods from "./hooks/usePeriods";


const PeriodModule: React.FC = () => {
    const { setIsLoading } = useLoading();
    const {periods, loading, error, handleAddPeriod, handleDeletePeriod, handleUpdatePeriod} = usePeriods();
    const [selectedStudent, setSelectedStudent] = useState<Period | null>(null);
    const [initialStudentData, setInitialStudentData] = useState<Period | null>(null);
    const [importStudentData, setImportStudentData] = useState<Period | null>(null);

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
            <BaseModule<Period>
                title="Period Management"
                fields={fields}
                items={periods}
                onItemAdded={handleAddPeriod}
                onItemDeleted={handleDeletePeriod}
                onItemUpdated={handleUpdatePeriod}
                onEdit={setSelectedStudent}
                initialFormData={initialStudentData}
                importItem={importStudentData} // Pass the import item to BaseModule
                loading={loading}>
            </BaseModule>
            {error && <div className="error">{error}</div>}
        </>
    );
};

export default PeriodModule; // Exporting the StudentModule component for use in other parts of the application
