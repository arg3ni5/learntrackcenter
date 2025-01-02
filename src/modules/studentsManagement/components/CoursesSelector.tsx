// src/modules/studentsManagement/components/CoursesManager.tsx

import React from 'react';
import './CoursesManager.css';
import ListBase from '../../../components/BaseModule/ListBase';
import { BaseField } from '../../../components/BaseModule/types';
import { AvailableCourse, Student } from '../../../types/types';
import useCourses from '../hooks/useCourses';

const CoursesSelector: React.FC<{ student: Student }> = ({ student }) => {
    const { availableCourses } = useCourses(student.id!); // Use the custom hook
    // const [selectedCourseId, setSelectedCourseId] = React.useState<string | null>(null); // State to hold selected course ID
    // const [courseId, setCourseId] = React.useState<string | null>(null); 

      // Define the fields for the form used to add new courses
      const fields: BaseField[] = [
        { name: "name", placeholder: "Course name" },
        { name: "description", placeholder: "Course description" }
      ];

      const handleOnEdit = (item: any) => {
          console.log(item);
      }
    
      const handleOnView = (item: any) => {
        console.log(item);        
      }

    return (
        <div>
            <div className="list-container">
                <ListBase<AvailableCourse>
                items={availableCourses}
                fields={fields}
                editable={false} // Enable editing if update function is defined
                seeable={false} // Enable editing if update function is defined
                loading={false}
                onEdit={handleOnEdit}
                onView={handleOnView}
                />
            </div>
        </div>
    );
};

export default CoursesSelector;
