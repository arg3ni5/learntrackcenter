// src/modules/gradesManagement/GradeModule.tsx

import React from 'react';
import { addGrade, deleteGrade, fetchGrades, Grade } from '../services/gradeService'; // Importing grade service functions and types
import BaseModule from '../../../components/BaseModule/BaseModule'; // Importing the reusable BaseModule component

// GradeModule component for managing grades
const GradeModule: React.FC = () => {
    // Define the fields for the form used to add new grades
    const fields = [
        { name: 'studentId', placeholder: 'ID of the Student' }, // Field for student ID
        { name: 'subjectId', placeholder: 'ID of the Subject' }, // Field for subject ID
        { name: 'finalGrade', placeholder: 'Final Grade' }, // Field for final grade
    ];

    // Function to fetch grades from Firestore
    const fetchGradesFromFirestore = async (): Promise<Grade[]> => {
        const gradesData = await fetchGrades(); // Call the service to get grades data
        return gradesData; // Return the fetched data
    };

    return (
        <BaseModule<Grade>
            title="Grade Management" // Title for the module
            fields={fields} // Pass the fields to be used in the form
            fetchItems={fetchGradesFromFirestore} // Function to fetch items from Firestore
            onItemAdded={async (newItem) => {
                await addGrade(newItem); // Add a new grade using the service
            }} 
            onItemDeleted={deleteGrade} // Function to delete a grade using the service
        />
    );
};

export default GradeModule;
