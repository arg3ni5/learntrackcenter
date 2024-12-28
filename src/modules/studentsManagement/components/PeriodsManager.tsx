// src/modules/studentsManagement/components/PeriodsManager.tsx

import React from 'react';
import usePeriods from '../hooks/usePeriods';
import './PeriodsManager.css'; // Import the CSS file
import CoursesManager from './CoursesManager';

const PeriodsManager: React.FC<{ studentId: string }> = ({ studentId }) => {
    const { periods, loading, error, handleAddPeriod, handleDeletePeriod, availablePeriods } = usePeriods(studentId); 
    const [selectedPeriodId, setSelectedPeriodId] = React.useState<string | null>(null); // State to hold selected period ID

    const assignPeriodToStudent = async () => {
        if (selectedPeriodId) {
            const newPeriod = {
                periodId: selectedPeriodId,
                courses: [], // You can initialize with an empty array or fetch courses associated with the period
            };
            await handleAddPeriod(newPeriod); // Call the function to add the new period to the student
            setSelectedPeriodId(null); // Reset selected period after assignment
        }
    };

    if (loading) return <div>Loading...</div>; 
    if (error) return <div className="error">{error}</div>; 

    return (
        <div className='periods-manager card'>
            <h3>Manage Periods</h3>
            <select value={selectedPeriodId || ''} onChange={(e) => setSelectedPeriodId(e.target.value)}>
                <option value="">Select a Period</option>
                {availablePeriods.map(period => (
                    <option key={period.id} value={period.id}>
                        {period.periodName}
                    </option>
                ))}
            </select>
            <button onClick={assignPeriodToStudent}>Assign Period</button> {/* Button to assign selected period */}
            <div className="period-list">
                <ul>
                    {periods.map(period => (
                        <li key={period.periodId}>
                            <h3>{period.name}

                            {period.courses && period.courses.length == 0 &&<button className='delete-button' onClick={() => handleDeletePeriod(period.id)}>Delete</button>}
                            </h3>
                        </li>
                    ))}
                </ul>
            </div>
            
        </div>
    );
};

export default PeriodsManager;
