// src/modules/courseManagement/CourseModule.tsx

import React, { useEffect } from "react";
import DataManagementModule from "../../../shared/modules/DataManagementModule/DataManagementModule";
import useCourses from "../hooks/useCourses"; // Import the custom hook
import { Course } from "../services/courseService";
import { useLoading } from "../../../components/loading/LoadingContext";
import { BaseField } from "../../../shared/modules/DataManagementModule/types/types";

const CourseModule: React.FC = () => {
  const { courses, loading, error, handleAddCourse, handleDeleteCourse, handleUpdateCourse } = useCourses(); // Use the custom hook
  const { setIsLoading } = useLoading();

    useEffect(() => {
        setIsLoading(loading);
    }, [loading, setIsLoading]);


  // Define the fields for the form used to add new courses
  const fields: BaseField[] = [
    { name: "name", placeholder: "name" },
    { name: "description", placeholder: "description" },
    { name: "duration", placeholder: "Duration (weeks)", size: 15 },
    { name: "hours", placeholder: "Hours per week", size: 15 },
  ];

  return (
    <>
      <DataManagementModule<Course>
        title="Course Management" // Title for the module
        fields={fields} // Fields to be displayed in the form
        items={courses} // Use the courses from the custom hook
        handlers={{
          onItemAdded:handleAddCourse,
          onItemDeleted:handleDeleteCourse,
          onItemUpdated:handleUpdateCourse,
        }}
        ableImport={true}
        loading={loading} // Pass loading state to BaseModule or directly to ListBase if needed
        showForm={false} // Show the form
      />
      {error && <div className="error">{error}</div>} {/* Error message */}
    </>
  );
};

export default CourseModule; // Exporting the CourseModule component for use in other parts of the application.
