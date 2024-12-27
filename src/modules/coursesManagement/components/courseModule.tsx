// src/modules/courseManagement/CourseModule.tsx

import React, { useEffect, useState } from "react";
import BaseModule from "../../../components/BaseModule/BaseModule"; // Importing the reusable BaseModule component
import { fetchCourses, addCourse, deleteCourse, Course } from "../services/courseService"; // Importing necessary functions and types
import Loading from "../../../components/loading/Loading";
import { fetchTeachers, Teacher } from "../../teachersManagement/services/teacherService";

const CourseModule: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true); // State to handle loading
  const [error, setError] = useState<string | null>(null); // State to handle errors
  const [teachers, setTeachers] = useState<Teacher[]>([]); // State to store teachers

  // Define the fields for the form used to add new courses
  const fields = [
    { name: "title", placeholder: "Course Title" }, // Field for course title
    { name: "description", placeholder: "Course Description" }, // Field for course description
    { name: "duration", placeholder: "Duration (hours)" }, // Field for course duration
    {
      name: "teacherId",
      label: "Teacher",
      placeholder: "Select Teacher",
      type: "select",
      options: teachers.map((teacher) => ({ value: teacher.id!, label: teacher.name })), // Mapeo a opciones
    }, // Field for selecting teacher
  ];

  // Function to fetch courses from Firestore
  const fetchCoursesFromFirestore = async (): Promise<Course[]> => {
    try {
      setLoading(true);
      const coursesData = await fetchCourses(); // Call the service to get courses data
      return coursesData; // Return the fetched data
    } catch (err) {
      setError("Error fetching courses");
      return [];
    } finally {
      setLoading(false);
    }
  };

  const fetchTeachersFromFirestore = async () => {
    try {
      const teachersData = await fetchTeachers();
      setTeachers(teachersData); // Actualiza el estado con los profesores obtenidos
    } catch (err) {
      setError("Error fetching teachers");
    }
  };

  useEffect(() => {
    fetchTeachersFromFirestore(); // Llama a la función al montar el componente
  }, []);

  return (
    <>
      <BaseModule<Course>
        collectionName="courses" // Specify the Firestore collection name
        title="Course Management" // Title for the module
        fields={fields} // Fields to be displayed in the form
        fetchItems={fetchCoursesFromFirestore} // Function to fetch items from Firestore
        onItemAdded={async (newItem) => {
          await addCourse(newItem); // Add the new course using the service
        }}
        onItemDeleted={deleteCourse} // Function to delete a course using the service
        loading={loading} // Pass loading state to BaseModule or directly to ListBase if needed
      ></BaseModule>
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

export default CourseModule; // Exporting the CourseModule component for use in other parts of the application.
