// src/modules/studentsManagement/components/CoursesManager.tsx

import React from 'react';
import './CoursesManager.css';
import { BaseField } from '../../../components/BaseModule/types';
import { AvailableCourse, Student } from '../../../types/types';
import useCourses from '../hooks/useCourses';
import BaseModule from '../../../components/BaseModule/BaseModule';

const CoursesSelector: React.FC<{ student: Student }> = ({ student }) => {
    const { availableCourses, loading } = useCourses(student.id!); // Use the custom hook
    // const [selectedCourseId, setSelectedCourseId] = React.useState<string | null>(null); // State to hold selected course ID
    // const [courseId, setCourseId] = React.useState<string | null>(null); 

      // Define the fields for the form used to add new courses
      const fields: BaseField[] = [
        { name: "name", placeholder: "Course name" },
        { name: "description", placeholder: "Course description" }
      ];

      // const handleOnEdit = (item: any) => {
      //     console.log(item);
      // }
    
      // const handleOnView = (item: any) => {
      //   console.log(item);        
      // }

    return (
        <div>
            <div className="list-container">
              {!loading && <BaseModule<AvailableCourse>
                  fields={fields}
                  items={availableCourses}
                  showForm={false}
                  ableForm={false}
                  loading={loading}>
              </BaseModule>} 
            </div>
        </div>
    );
};

export default CoursesSelector;
