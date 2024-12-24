import React, { useState } from "react";
import BaseModule from "../../../components/BaseModule/BaseModule"; // Importing the reusable BaseModule component
import { fetchStudents, addStudent, deleteStudent, Student } from "../services/studentService"; // Importing necessary functions and types
import UploadStudents from "../../../components/UploadStudents";

const StudentModule: React.FC = () => {
  const [initialStudentData, setInitialStudentData] = useState<Student | null>(null); // State to hold initial data for the form

  // Define the fields for the form used to add new students
  const fields = [
    { name: "fullName", placeholder: "Full Name" }, // Field for student's full name
    { name: "identificationNumber", placeholder: "Identification Number" }, // Field for identification number
    { name: "email", placeholder: "Email Address" }, // Field for email address
  ];

  // Function to fetch students from Firestore
  const fetchStudentsFromFirestore = async (): Promise<Student[]> => {
    const studentsData = await fetchStudents(); // Call the service to get students data
    return studentsData; // Return the fetched data
  };

  return (
    <>
      <BaseModule<Student>
        collectionName="students" // Specify the Firestore collection name
        title="Student Management" // Title for the module
        fields={fields} // Fields to be displayed in the form
        fetchItems={fetchStudentsFromFirestore} // Function to fetch items from Firestore
        onItemAdded={async (newItem) => {
          await addStudent(newItem); // Add the new student using the service
        }}
        onItemDeleted={deleteStudent} // Function to delete a student using the service
        initialFormData={initialStudentData} // Pass initial data to fill the form
      />
      <UploadStudents onSelectStudent={setInitialStudentData} /> {/* Pass function to update initial form data */}
    </>
  );
};

export default StudentModule; // Exporting the StudentModule component for use in other parts of the application
