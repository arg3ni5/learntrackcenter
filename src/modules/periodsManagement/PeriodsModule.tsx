import React from "react";
import DataManagementModule from "../../shared/modules/DataManagementModule/DataManagementModule";
import usePeriods from "./hooks/usePeriods";
import Loading from "../../components/loading/Loading";
import { useNavigate } from "react-router-dom";
import useLocalStorage from "../../hooks/useLocalStorage";
import { Period } from "../../types/types";

const PeriodsModule: React.FC = () => {
	const { periods, loading, error, handleAddPeriod, handleDeletePeriod, handleUpdatePeriod } = usePeriods();
	const [, setSelectPeriod] = useLocalStorage<Period | null>("selectPeriod", null);
	const navigate = useNavigate();

	const handleOnEdit = (item: Period) => {
		navigate(`/period/${item.id}/courses`);
		setSelectPeriod(item);
	};

	return (
		<>
			<DataManagementModule<Period>
				title="Manage Academic Periods" // Title for the module
				fields={[
					{ name: "code", placeholder: "Code of Period" },
					{ name: "name", placeholder: "Name of Period" },
					{ name: "startDate", placeholder: "Fecha de Inicio" },
					{ name: "endDate", placeholder: "Fecha de Fin" },
					{ name: "status", placeholder: "Status" },
				]}
				items={periods} // Fetch current periods
				handlers={{
					onItemAdded: handleAddPeriod,
					onItemDeleted: handleDeletePeriod,
					onItemUpdated: handleUpdatePeriod,
					onSelect: setSelectPeriod,
					onView: handleOnEdit }}
				initialFormData={null} // No initial data for the form
				viewLinks={[
					{ label: "Courses", format: "/period/:id/courses" },
					// { label: "Students", format:"/period/:id/students" },
				]} // Link format for viewing a period
				loading={loading} // Loading state
				showForm={false} // Show the form
			/>
			{loading && (
				<div className="loading">
					<Loading />
				</div>
			)}{" "}
			{/* Loading message */}
			{error && <div className="error">{error}</div>} {/* Error message */}
		</>
	);
};

export default PeriodsModule; // Exporting the PeriodsModule component for use in other parts of the application.
