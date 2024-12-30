// src/modules/studentsManagement/components/CoursesManager.tsx

import React from 'react';
import './CoursesManager.css'; // Import the CSS file
import useCourses from '../hooks/useCourses';
import ListBase from '../../../components/BaseModule/ListBase';
import { AvailableCourses } from '../services/courseService';
import { Field } from '../../../components/BaseModule/BaseModule';
import useLocalStorage from '../../../hooks/useLocalStorage';
import { AvailableCourse } from '../../../types/types';

const CoursesSelector: React.FC = () => {
    const [selectedPeriodId, setSelectedPeriodId] = useLocalStorage<string|null>('selectedPeriodId', null);
    const { availableCourses } = useCourses(); // Use the custom hook
    const [selectedCourseId, setSelectedCourseId] = React.useState<string | null>(null); // State to hold selected course ID
    const [courseId, setCourseId] = React.useState<string | null>(null); 

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
            <select value={selectedCourseId || ''} onChange={(e) => setSelectedCourseId(e.target.value)}>
                <option value="">Select a Course</option>
                {availableCourses.map(course => (
                    <option key={course.id} value={course.id}>
                        {course.name}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default CoursesSelector;
