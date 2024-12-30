// src/modules/studentsManagement/components/StudentDetailsManagement.tsx

import React from 'react';
import { Period } from '../../../types/types';
import PeriodsManager from './PeriodsManager';

const PeriodDetailsManagement: React.FC<{ period: Period }> = ({ period }) => {
    return (
        <div>
            <h2 className='title'>Period Details Management</h2>
            {period.id && <PeriodsManager periodId={period.id} />}
        </div>
    );
};

export default PeriodDetailsManagement;
