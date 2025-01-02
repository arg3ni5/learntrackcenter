// src/modules/courseManagement/CourseModule.tsx

import React, { useEffect } from "react";
import BaseModule from "../../../components/BaseModule/BaseModule";
import useCourse from "../hooks/useCourse"; // Import the custom hook
import { Course } from "../services/courseService";
import { useLoading } from "../../../components/loading/LoadingContext";
import { BaseField } from "../../../components/BaseModule/types";

const CourseModule: React.FC = () => {
  const { setIsLoading } = useLoading();
  const { courses, loading, error, handleAddCourse, handleDeleteCourse, handleUpdateCourse } = useCourse(); // Use the custom hook

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
      <BaseModule<Course>
        title="Course Management" // Title for the module
        fields={fields} // Fields to be displayed in the form
        items={courses} // Use the courses from the custom hook
        onItemAdded={handleAddCourse}
        onItemDeleted={handleDeleteCourse} // Use the delete course function from the hook
        onItemUpdated={handleUpdateCourse}
        loading={loading} // Pass loading state to BaseModule or directly to ListBase if needed
      />
      {error && <div className="error">{error}</div>} {/* Error message */}
    </>
  );
};

export default CourseModule; // Exporting the CourseModule component for use in other parts of the application.
