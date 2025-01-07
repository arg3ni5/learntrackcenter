// src/modules/gradesManagement/GradeModule.tsx

import React, { useEffect } from 'react';
import DataManagementModule from '../../../shared/modules/DataManagementModule/DataManagementModule';
import useGrades from '../hooks/useGrades';
import useStudents from '../../studentsManagement/hooks/useStudents';
import { Grade } from '../../../types/types';

interface GradeModuleProps {
  courseId?: string;
  periodId?: string;
}

const GradeModule: React.FC<GradeModuleProps> = ({ courseId, periodId }) => {
    const {grades,addNewGrade, removeGrade, setCourseId, setPeriodId } = useGrades();
    const { students } = useStudents();
    
    useEffect(()=>{
        setCourseId(courseId!),
        setPeriodId(periodId!)
    },[]);
    
    // Define the fields for the form used to add new grades
    const fields = [
        { name: 'studentId', placeholder: 'ID of the Student' }, // Field for student ID
        { name: 'subjectId', placeholder: 'ID of the Subject' }, // Field for subject ID
        { name: 'finalGrade', placeholder: 'Final Grade' }, // Field for final grade
    ];

    const upLoadFields = [
        { name: 'studentId', placeholder: 'ID of the Student' }, // Field for student ID
        { name: 'finalGrade', placeholder: 'Final Grade' }, // Field for final grade
    ];

    const handleAddGrades = async (grades: Grade[]) => {        
        const updatedGrades = grades.map((grade) => {
            const student = students.find((student) => student.email === grade.email || student.email === grade.studentId);
            if (student) {
              return {
                ...grade,
                studentId: student.id
              };
            }
            
            return grade as Grade;
          });
          console.log(updatedGrades);
          
    };

    return (
        <DataManagementModule<Grade>
            title="Grade Management" // Title for the module
            fields={fields} // Pass the fields to be used in the form
            uploadFields={upLoadFields} // Pass the fields to be used in the form
            items={grades}
            onItemAdded={addNewGrade} 
            onItemsAdded={handleAddGrades} 
            onItemDeleted={removeGrade}            
            showForm={false}
            ableForm={true}
            ableImport={true}       
        />
    );
};

export default GradeModule;
