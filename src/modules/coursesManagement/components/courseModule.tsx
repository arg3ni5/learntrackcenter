// src/modules/courseManagement/CourseModule.tsx

import React, { useState } from "react";
import BaseModule from "../../../components/BaseModule/BaseModule"; // Importing the reusable BaseModule component
import { fetchCourses, addCourse, deleteCourse, Course } from "../services/courseService"; // Importing necessary functions and types

const CourseModule: React.FC = () => {
    const [loading, setLoading] = useState<boolean>(true); // State to handle loading
    const [error, setError] = useState<string | null>(null); // State to handle errors

    // Define the fields for the form used to add new courses
    const fields = [
        { name: "title", placeholder: "Course Title" }, // Field for course title
        { name: "description", placeholder: "Course Description" }, // Field for course description
        { name: "duration", placeholder: "Duration (hours)" }, // Field for course duration
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
            />
            {loading && <div className="loading">Cargando cursos...</div>} {/* Loading message */}
            {error && <div className="error">{error}</div>} {/* Error message */}
        </>
    );
};

export default CourseModule; // Exporting the CourseModule component for use in other parts of the application.
