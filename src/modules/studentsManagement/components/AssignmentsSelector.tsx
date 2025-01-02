// src/modules/studentsManagement/components/CoursesManager.tsx

import React from 'react';
import './CoursesManager.css';
import ListBase from '../../../components/BaseModule/ListBase';
import { Assignment } from '../../../types/types';
import useAssignments from '../../periodsManagement/hooks/useAssignments';
import { AssignmentsSelectorProps } from '../types';
import { BaseField } from '../../../components/BaseModule/types';

const AssignmentsSelector: React.FC<AssignmentsSelectorProps> = ({ periodId, courseId }) => {
    const { assignments, loading } = useAssignments({periodId, courseId}); // Use the custom hook
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
                <ListBase<Assignment>
                items={assignments}
                fields={fields}
                editable={false} // Enable editing if update function is defined
                seeable={false} // Enable editing if update function is defined
                loading={loading}
                onEdit={handleOnEdit}
                onView={handleOnView}
                />
            </div>
        </div>
    );
};

export default AssignmentsSelector;
