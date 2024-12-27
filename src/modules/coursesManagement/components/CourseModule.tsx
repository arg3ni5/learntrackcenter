// src/modules/courseManagement/CourseModule.tsx

import React, { useEffect, useState } from "react";
import BaseModule, { Field } from "../../../components/BaseModule/BaseModule";
import Loading from "../../../components/loading/Loading";
import { fetchTeachers, Teacher } from "../../teachersManagement/services/teacherService";
import useCourse from "../hooks/useCourse"; // Import the custom hook
import { Course } from "../services/courseService";

const CourseModule: React.FC = () => {
  const [teachers, setTeachers] = useState<Teacher[]>([]); // Estado para almacenar profesores
  const { loadCourses, loading, error, setError, handleAddCourse, handleDeleteCourse, handleUpdateCourse } = useCourse(); // Use the custom hook

  // Define the fields for the form used to add new courses
  const fields: Field[] = [
    { name: "title", placeholder: "Course Title" },
    { name: "description", placeholder: "Course Description" },
    { name: "duration", placeholder: "Duration (hours)" },
    {
      name: "teacherId",
      label: "Teacher",
      placeholder: "Select Teacher",
      type: "select",
      options: teachers.map((teacher) => ({ value: teacher.id!, label: teacher.name })),
    },
  ];

  // Function to fetch teachers from Firestore
  const fetchTeachersFromFirestore = async () => {
    try {
      const teachersData = await fetchTeachers();
      setTeachers(teachersData); // Update state with fetched teachers
    } catch (err) {
      setError("Error fetching teachers");
    }
  };

  useEffect(() => {
    fetchTeachersFromFirestore(); // Call function to load teachers on component mount
  }, []);

  return (
    <>
      <BaseModule<Course>
        collectionName="courses" // Specify the Firestore collection name
        title="Course Management" // Title for the module
        fields={fields} // Fields to be displayed in the form
        fetchItems={loadCourses} // Use the courses from the custom hook
        onItemAdded={handleAddCourse}
        onItemDeleted={handleDeleteCourse} // Use the delete course function from the hook
        onItemUpdated={handleUpdateCourse}
        loading={loading} // Pass loading state to BaseModule or directly to ListBase if needed
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

export default CourseModule; // Exporting the CourseModule component for use in other parts of the application.
