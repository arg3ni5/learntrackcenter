import React, { useEffect } from "react";
import BaseModule from "../../components/BaseModule/BaseModule";
import './StudentModule.css';
import { useLoading } from "../../components/loading/LoadingContext";
import usePeriods from "./hooks/usePeriods";
import { Period } from "../../types/types";


const PeriodModule: React.FC = () => {
    const { setIsLoading } = useLoading();
    const {periods, loading, error, handleAddPeriod, handleDeletePeriod, handleUpdatePeriod} = usePeriods();

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
                loading={loading}
                showForm={false} // Show the form
            >
            </BaseModule>
            {error && <div className="error">{error}</div>}
        </>
    );
};

export default PeriodModule; // Exporting the StudentModule component for use in other parts of the application
