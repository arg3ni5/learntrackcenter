import React, { useState } from 'react';

interface StudentsTableProps {
    studentsData: any[];
    onSelectStudent: (student: any) => void;
    onImportStudent: (student: any) => void;
    onDeleteStudent: (index: number) => void;
}

const UploadTable: React.FC<StudentsTableProps> = ({ 
    studentsData, 
    onSelectStudent, 
    onImportStudent, 
    onDeleteStudent 
}) => {
    const [selectedRows, setSelectedRows] = useState<Set<number>>(new Set());

    const toggleRowSelection = (index: number) => {
        const newSelectedRows = new Set(selectedRows);
        if (newSelectedRows.has(index)) {
            newSelectedRows.delete(index);
        } else {
            newSelectedRows.add(index);
        }
        setSelectedRows(newSelectedRows);
    };

    const toggleAllSelection = () => {
        if (selectedRows.size === studentsData.length) {
            // If all are selected, deselect all
            setSelectedRows(new Set());
        } else {
            // Otherwise, select all
            setSelectedRows(new Set(studentsData.map((_, index) => index)));
        }
    };

    const handleStudentSelection = (index: number) => {
        const selectedStudent = studentsData[index];
        onSelectStudent({
            fullName: selectedStudent[0],
            identificationNumber: selectedStudent[1],
            email: selectedStudent[2],
        });
    };

    const handleStudentImport = (index: number) => {    
        const selectedStudent = studentsData[index];        
        onImportStudent({
            fullName: selectedStudent[0],
            identificationNumber: selectedStudent[1],
            email: selectedStudent[2],
        });
        onDeleteStudent(index);
    };

    const deleteSelectedRows = () => {
        studentsData.forEach((_, index) => {
            if (selectedRows.has(index)) {
                onDeleteStudent(index);
            }
        });
        setSelectedRows(new Set());
    };

    return (
        <div>
            <h3>Preview of Students Data</h3>
            
            <button onClick={deleteSelectedRows}>Delete Selected Rows</button>
            
            <div className="table-container">
                <table className="upload-table">
                    <thead>
                        <tr>
                            <th><input 
                                    type="checkbox" 
                                    checked={selectedRows.size === studentsData.length}
                                    onChange={toggleAllSelection}
                                /></th>
                            <th>Full Name</th>
                            <th>Identification Number</th>
                            <th>Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {studentsData.map((row, index) => (
                            <tr key={index}>
                                <td>
                                    <input 
                                        type="checkbox" 
                                        checked={selectedRows.has(index)} 
                                        onChange={() => toggleRowSelection(index)} 
                                    />
                                </td>
                                {row.map((cell: any, cellIndex: number) => (
                                    <td key={cellIndex}>{cell}</td>
                                ))}
                                <td className="actions">
                                    <button className='edit-button' onClick={() => handleStudentSelection(index)}>Select</button>
                                    <button className='view-button' onClick={() => handleStudentImport(index)}>Import</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default UploadTable;
