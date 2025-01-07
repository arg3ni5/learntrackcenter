import React, { useEffect, useState } from "react";
import DataManagementModule from "../../shared/modules/DataManagementModule/DataManagementModule";
import './StudentModule.css';
import { useLoading } from "../../components/loading/LoadingContext";
import usePeriods from "./hooks/usePeriods";
import { Period } from '../../types/types';


const PeriodModule: React.FC = () => {
    const { setIsLoading } = useLoading();
    const {periods, loading, error, handleAddPeriod, handleDeletePeriod, handleUpdatePeriod} = usePeriods();
    const [period, setPeriod] = useState<Period|null>(null)

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
            <DataManagementModule<Period>
                title="Period Management"
                fields={fields}
                items={periods}
                handlers={{ onItemAdded: handleAddPeriod, onItemDeleted: handleDeletePeriod, onItemUpdated: handleUpdatePeriod, onSelect:setPeriod}}
                loading={loading}
                showForm={false} // Show the form
            >
            </DataManagementModule>
            {error && <div className="error">{error}</div>}
        </>
    );
};

export default PeriodModule; // Exporting the StudentModule component for use in other parts of the application
