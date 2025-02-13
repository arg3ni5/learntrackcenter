import { useEffect } from "react";
import { useLoading } from "../../../components/loading/LoadingContext";
import DataManagementModule from "../../../shared/modules/DataManagementModule/DataManagementModule";
import { Teacher } from "../../../types/types";
import useTeachers from "../hooks/useTeachers";

const TeacherModule: React.FC = () => {
  const { loading, teachers, handleAddTeacher, handleDeleteTeacher, handleUpdateTeacher } = useTeachers();
  const { setIsLoading } = useLoading();

  useEffect(() => {
    setIsLoading(loading);
  }, [loading, setIsLoading]);

  const fields = [
    { name: "name", placeholder: "Full Name" }, // Field for teacher's full name
    { name: "idNumber", placeholder: "Id" }, // Field for identification number
    { name: "specialty", placeholder: "specialty" }, // Field for specialty
  ];

  return (
    <>
      <DataManagementModule<Teacher>
        title="Manage Teacher" // Title for the module
        fields={fields} // Fields to be displayed in the form
        items={teachers} // Function to fetch items from Firestore
        handlers={{
          onItemAdded: handleAddTeacher,
          onItemDeleted: handleDeleteTeacher,
          onItemUpdated: handleUpdateTeacher
        }}
        loading={loading} // Loading state
        showForm={false} // Show the form
      />
    </>
  );
};

export default TeacherModule;
