import React from 'react';
import GradeModule from '../modules/gradesManagement/components/GradeModule';
import { useParams } from 'react-router-dom';


const Grades: React.FC = () => {
    const { periodId, courseId } = useParams<{ periodId: string, courseId: string}>();
    return (
        <div>
            <GradeModule periodId={periodId} courseId={courseId} />
        </div>
    );
};

export default Grades;
