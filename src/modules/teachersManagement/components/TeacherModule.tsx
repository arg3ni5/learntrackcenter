// src/components/Teacher/TeacherModule.tsx

import { fetchTeachers, addTeacher, deleteTeacher, Teacher } from "../services/teacherService"; // Importing necessary functions and types
import BaseModule from "../../../components/BaseModule/BaseModule";

const TeacherModule: React.FC = () => {
  // Define the fields for the form used to add new teachers
  const fields = [
    { name: "name", placeholder: "Nombre Completo" }, // Field for teacher's full name
    { name: "idNumber", placeholder: "Número de Identificación" }, // Field for identification number
    { name: "specialty", placeholder: "Especialidad" }, // Field for specialty
  ];

  // Function to fetch teachers from Firestore
  const fetchTeachersFromFirestore = async (): Promise<Teacher[]> => {
    const teachersData = await fetchTeachers(); // Call the service to get teachers data
    return teachersData; // Return the fetched data
  };

  return (
    <>
      <BaseModule<Teacher>
        collectionName="teachers" // Specify the Firestore collection name
        title="Gestión de Profesores" // Title for the module
        fields={fields} // Fields to be displayed in the form
        fetchItems={fetchTeachersFromFirestore} // Function to fetch items from Firestore
        onItemAdded={async (newItem) => {
          await addTeacher(newItem); // Add the new teacher using the service
        }}
        onItemDeleted={deleteTeacher} // Function to delete a teacher using the service
      />
      {/* Aquí puedes agregar el componente UploadTeachers si es necesario */}
      {/* <UploadTeachers onSelectTeacher={setInitialTeacherData} /> */}
    </>
  );
};

export default TeacherModule; // Exporting the TeacherModule component for use in other parts of the application
