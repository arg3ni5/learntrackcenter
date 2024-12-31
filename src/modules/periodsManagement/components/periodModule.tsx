// src/modules/periodsManagement/PeriodsModule.tsx

import React from "react";
import BaseModule from "../../../components/BaseModule/BaseModule";
import usePeriods from "../hooks/usePeriods";
import Loading from "../../../components/loading/Loading";
import { useNavigate } from 'react-router-dom';
import useLocalStorage from "../../../hooks/useLocalStorage";
import { Period } from "../../../types/types";

const PeriodsModule: React.FC = () => {
    const { periods, loading, error, handleAddPeriod, handleDeletePeriod, handleUpdatePeriod } = usePeriods();
    const [, setSelectPeriod] = useLocalStorage<Period|null>('selectPeriod', null);
    const navigate = useNavigate();
    
    const handleOnEdit = (item: Period) => {
        navigate(`/periods/${item.id}/courses`);
        setSelectPeriod(item);
    }

    return (
        <>
            <BaseModule<Period>
                title="Manage Academic Periods" // Title for the module
                fields={[
                    { name: "code", placeholder: "ID Periodo" },
                    { name: "name", placeholder: "Nombre del Periodo" },
                    { name: "startDate", placeholder: "Fecha de Inicio" },
                    { name: "endDate", placeholder: "Fecha de Fin" },
                    { name: "status", placeholder: "Estado" }
                ]} 
                items={periods} // Fetch current periods
                onItemAdded={handleAddPeriod} // Handle adding a new period
                onItemDeleted={handleDeletePeriod} // Handle deleting a period
                onItemUpdated={handleUpdatePeriod} // Handle deleting a period
                initialFormData={null} // No initial data for the form
                onView={handleOnEdit}
                loading={loading} // Loading state
            />
            
            {loading && <div className="loading"><Loading /></div>} {/* Loading message */}
            {error && <div className="error">{error}</div>} {/* Error message */}
        </>
    );
};

export default PeriodsModule; // Exporting the PeriodsModule component for use in other parts of the application.
