// src/modules/studentsManagement/components/CoursesManager.tsx

import React from 'react';
import './CoursesManager.css'; // Import the CSS file
import useCourses from '../hooks/useCourses';
import ListBase from '../../../components/BaseModule/ListBase';
import { Field } from '../../../components/BaseModule/BaseModule';
import { AvailableCourse } from '../../../types/types';

const CoursesSelector: React.FC = () => {
    const { availableCourses } = useCourses(); // Use the custom hook
    // const [selectedCourseId, setSelectedCourseId] = React.useState<string | null>(null); // State to hold selected course ID
    // const [courseId, setCourseId] = React.useState<string | null>(null); 

      // Define the fields for the form used to add new courses
      const fields: Field[] = [
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
