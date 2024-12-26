// src/modules/periodsManagement/PeriodsModule.tsx

import React from "react";
import BaseModule from "../../../components/BaseModule/BaseModule"; 
import { Period } from "../services/periodService"; 
import usePeriods from "../hooks/usePeriod";
import Loading from "../../../components/loading/Loading";

const PeriodsModule: React.FC = () => {
    const { periods, loading, error, handleAddPeriod, handleDeletePeriod } = usePeriods(); 

    return (
        <>
            <BaseModule<Period> 
                collectionName="periods" // Specify the Firestore collection name
                title="Manage Academic Periods" // Title for the module
                fields={[
                    { name: "periodId", placeholder: "ID Periodo" },
                    { name: "periodName", placeholder: "Nombre del Periodo" },
                    { name: "startDate", placeholder: "Fecha de Inicio" },
                    { name: "endDate", placeholder: "Fecha de Fin" },
                    { name: "description", placeholder: "Descripción" },
                    { name: "status", placeholder: "Estado" }
                ]} 
                fetchItems={async () => periods} // Fetch current periods
                onItemAdded={handleAddPeriod} // Handle adding a new period
                onItemDeleted={handleDeletePeriod} // Handle deleting a period
                initialFormData={null} // No initial data for the form
                loading={loading} // Loading state
            />
            
            {loading && <div className="loading"><Loading /></div>} {/* Loading message */}
            {error && <div className="error">{error}</div>} {/* Error message */}
        </>
    );
};

export default PeriodsModule; // Exporting the PeriodsModule component for use in other parts of the application.
