import React from 'react';
import { useParams } from 'react-router-dom';
import PeriodsManager from '../modules/periodsManagement/components/PeriodsManager';


const PeriodCourses: React.FC = () => {
    const { id } = useParams<{ id: string }>();

    return (
        <div>
            {id && <PeriodsManager periodId={id}/>}
        </div>
    );
};

export default PeriodCourses;
