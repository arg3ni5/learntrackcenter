// src/modules/courseManagement/CourseModule.tsx

import React, { useEffect } from "react";
import BaseModule, { Field } from "../../../components/BaseModule/BaseModule";
import useCourse from "../hooks/useCourse"; // Import the custom hook
import { Course } from "../services/courseService";
import useTeachers from "../../teachersManagement/hooks/useTeachers";
import { useLoading } from "../../../components/loading/LoadingContext";

const CourseModule: React.FC = () => {
  const { setIsLoading } = useLoading();
  const { courses, loading, error, handleAddCourse, handleDeleteCourse, handleUpdateCourse } = useCourse(); // Use the custom hook
  const { teachers } = useTeachers(); // Use the custom hook to manage teachers

    useEffect(() => {
        setIsLoading(loading);
    }, [loading, setIsLoading]);


  // Define the fields for the form used to add new courses
  const fields: Field[] = [
    { name: "name", placeholder: "Course name" },
    { name: "description", placeholder: "Course description" },
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
