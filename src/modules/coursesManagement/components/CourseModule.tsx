// src/modules/courseManagement/CourseModule.tsx

import React from "react";
import BaseModule, { Field } from "../../../components/BaseModule/BaseModule";
import Loading from "../../../components/loading/Loading";
import useCourse from "../hooks/useCourse"; // Import the custom hook
import { Course } from "../services/courseService";
import useTeachers from "../../teachersManagement/hooks/useTeachers";

const CourseModule: React.FC = () => {
  const { loadCourses, loading, error, handleAddCourse, handleDeleteCourse, handleUpdateCourse } = useCourse(); // Use the custom hook
  const { teachers } = useTeachers(); // Use the custom hook to manage teachers

  // Define the fields for the form used to add new courses
  const fields: Field[] = [
    { name: "title", placeholder: "Course Title" },
    { name: "description", placeholder: "Course Description" },
    { name: "duration", placeholder: "Duration (weeks)" },
    { name: "hours", placeholder: "Hours per week" },
    {
      name: "teacherId",
      label: "Teacher",
      placeholder: "Select Teacher",
      type: "select",      
      options: teachers.map((teacher) => ({ value: teacher.id!, label: teacher.name })),
    },
  ];

  return (
    <>
      <BaseModule<Course>
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
