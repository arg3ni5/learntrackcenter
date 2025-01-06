// src/modules/courseManagement/CourseModule.tsx

import React, { useEffect } from "react";
import DataManagementModule from "../../../shared/modules/DataManagementModule/DataManagementModule";
import useCourses from "../hooks/useCourses"; // Import the custom hook
import { Course } from "../services/courseService";
import { useLoading } from "../../../components/loading/LoadingContext";
import { BaseField } from "../../../shared/modules/DataManagementModule/types/types";

const CourseModule: React.FC = () => {
  const { setIsLoading } = useLoading();
  const { courses, loading, error, handleAddCourse, handleDeleteCourse, handleUpdateCourse } = useCourses(); // Use the custom hook

    useEffect(() => {
        setIsLoading(loading);
    }, [loading, setIsLoading]);


  // Define the fields for the form used to add new courses
  const fields: BaseField[] = [
    { name: "name", placeholder: "Course name" },
    { name: "description", placeholder: "Course description" },
    { name: "duration", placeholder: "Duration (weeks)" },
    { name: "hours", placeholder: "Hours per week" }
  ];

  return (
    <>
      <DataManagementModule<Course>
        title="Course Management" // Title for the module
        fields={fields} // Fields to be displayed in the form
        items={courses} // Use the courses from the custom hook
        onItemAdded={handleAddCourse}
        onItemDeleted={handleDeleteCourse} // Use the delete course function from the hook
        onItemUpdated={handleUpdateCourse}
        loading={loading} // Pass loading state to BaseModule or directly to ListBase if needed
        showForm={false} // Show the form
      />
      {error && <div className="error">{error}</div>} {/* Error message */}
    </>
  );
};

export default CourseModule; // Exporting the CourseModule component for use in other parts of the application.
