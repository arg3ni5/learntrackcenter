import DataManagementModule from "../../../shared/modules/DataManagementModule/DataManagementModule";
import useTeachers from "../hooks/useTeachers";
import { Teacher } from "../services/teacherService";

const TeacherModule: React.FC = () => {
  const {teachers, handleAddTeacher, handleDeleteTeacher} = useTeachers(); // Custom hook to fetch teachers from Firestore
  // Define the fields for the form used to add new teachers
  const fields = [
    { name: "name", placeholder: "Nombre Completo" }, // Field for teacher's full name
    { name: "idNumber", placeholder: "Número de Identificación" }, // Field for identification number
    { name: "specialty", placeholder: "Especialidad" }, // Field for specialty
  ];

  return (
    <>
      <DataManagementModule<Teacher>
        title="Gestión de Profesores" // Title for the module
        fields={fields} // Fields to be displayed in the form
        items={teachers} // Function to fetch items from Firestore
        handlers={{
          onItemAdded : handleAddTeacher,
          onItemDeleted : handleDeleteTeacher,
        }}
        showForm={false} // Show the form
      />
    </>
  );
};

export default TeacherModule; // Exporting the TeacherModule component for use in other parts of the application
