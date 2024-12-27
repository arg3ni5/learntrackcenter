// src/modules/periodsManagement/PeriodsModule.tsx

import React from "react";
import BaseModule from "../../../components/BaseModule/BaseModule"; 
import { Period } from "../services/periodService"; 
import usePeriods from "../hooks/usePeriod";
import Loading from "../../../components/loading/Loading";

const PeriodsModule: React.FC = () => {
    const { loadPeriods, loading, error, handleAddPeriod, handleDeletePeriod, handleUpdateCourse } = usePeriods(); 

    return (
        <>
            <BaseModule<Period>
                title="Manage Academic Periods" // Title for the module
                fields={[
                    { name: "periodId", placeholder: "ID Periodo" },
                    { name: "periodName", placeholder: "Nombre del Periodo" },
                    { name: "startDate", placeholder: "Fecha de Inicio" },
                    { name: "endDate", placeholder: "Fecha de Fin" },
                    { name: "status", placeholder: "Estado" }
                ]} 
                fetchItems={loadPeriods} // Fetch current periods
                onItemAdded={handleAddPeriod} // Handle adding a new period
                onItemDeleted={handleDeletePeriod} // Handle deleting a period
                onItemUpdated={handleUpdateCourse} // Handle deleting a period
                initialFormData={null} // No initial data for the form
                loading={loading} // Loading state
            />
            
            {loading && <div className="loading"><Loading /></div>} {/* Loading message */}
            {error && <div className="error">{error}</div>} {/* Error message */}
        </>
    );
};

export default PeriodsModule; // Exporting the PeriodsModule component for use in other parts of the application.
