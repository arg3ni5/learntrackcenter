import React, { useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import useLocalStorage from "../../hooks/useLocalStorage";
import DataManagementModule from "../../shared/modules/DataManagementModule/DataManagementModule";
import { Period, PeriodStatus } from "../../types/types";
import usePeriods from "./hooks/usePeriods";
import { useLoading } from "../../components/loading/LoadingContext";

const PeriodsModule: React.FC = () => {
	const { setIsLoading } = useLoading();
	const { periods, loading, handleAddPeriod, handleDeletePeriod, handleUpdatePeriod } = usePeriods();
	const [, setSelectPeriod] = useLocalStorage<Period | null>("selectPeriod", null);
	const navigate = useNavigate();

	const periodStatusOptions = useMemo(
		() =>
			Object.entries(PeriodStatus)
				.filter(([, value]) => !isNaN(Number(value)))
				.map(([key, value]) => ({
					value: value.toString(),
					label: key
				})),
		[]
	);

	const handleOnEdit = (item: Period) => {
		navigate(`/period/${item.id}/courses`);
		setSelectPeriod(item);
	};
	// Effect to manage loading state
			useEffect(() => {
					setIsLoading(loading);
			}, [loading, setIsLoading]);

	return (
		<>
			<DataManagementModule<Period>
				title="Manage Academic Periods" // Title for the module
				fields={[
					{ name: "code", placeholder: "Code of Period", label: "Code", size: 10 },
					{ name: "name", placeholder: "Name of Period", label: "Name", size: 20 },
					{ name: "startDate", placeholder: "Start Date", size: 10 },
					{ name: "endDate", placeholder: "End Date", size: 10 },
					{ name: "status", placeholder: "Status", size: 8, type: "select", options: periodStatusOptions },
				]}
				items={periods} // Fetch current periods
				handlers={{
					onItemAdded: handleAddPeriod,
					onItemDeleted: handleDeletePeriod,
					onItemUpdated: handleUpdatePeriod,
					onSelect: setSelectPeriod,
					onView: handleOnEdit
				}}
				initialFormData={null} // No initial data for the form
				viewLinks={[
					{ label: "Courses", format: "/period/:id/courses" },
					// { label: "Students", format:"/period/:id/students" },
				]}
				loading={loading} // Loading state
				showForm={false} // Show the form
			/>
		</>
	);
};

export default PeriodsModule; // Exporting the PeriodsModule component for use in other parts of the application.
