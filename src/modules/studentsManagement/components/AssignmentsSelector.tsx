// src/modules/studentsManagement/components/CoursesManager.tsx

import React from 'react';
import './CoursesManager.css';
import { Assignment } from '../../../types/types';
import useAssignments from '../../periodsManagement/hooks/useAssignments';
import { AssignmentsSelectorProps } from '../types';
import { BaseField } from '../../../components/BaseModule/types';
import BaseModule from '../../../components/BaseModule/BaseModule';

const AssignmentsSelector: React.FC<AssignmentsSelectorProps> = ({ periodId, courseId }) => {
    const { assignments, loading } = useAssignments({periodId, courseId}); // Use the custom hook
    // const [selectedCourseId, setSelectedCourseId] = React.useState<string | null>(null); // State to hold selected course ID
    // const [courseId, setCourseId] = React.useState<string | null>(null); 

      // Define the fields for the form used to add new courses
      const fields : BaseField[] = [
          { name: "title", placeholder: "Title of the assignment" },
          { name: "contributionPercentage", placeholder: "Contribution percentage to final grade", type: "number" },
      ];

    //   const handleOnEdit = (item: Assignment) => {
    //       console.log(item);
    //   }
    
    //   const handleOnView = (item: Assignment) => {
    //     console.log(item);        
    //   }

    return (
        <div>
            <div className="list-container">
            {!loading && <BaseModule<Assignment>
                fields={fields}
                items={assignments}
                showForm={false}
                ableForm={false}
                loading={loading}>
            </BaseModule>}            
            </div>
        </div>
    );
};

export default AssignmentsSelector;
