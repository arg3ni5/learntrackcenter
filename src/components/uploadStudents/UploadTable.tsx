import React, { useState } from 'react';
import Checkbox from '../checkbox/Checkbox';
import ConfirmationModal from '../confirmationModal/ConfirmationModal';

interface StudentsTableProps {
    studentsData: any[]; // Array of student data
    onSelectStudent: (student: any) => void; // Callback for selecting a student
    onImportStudent: (student: any) => void; // Callback for importing a student
    onDeleteStudent: (index: number) => void; // Callback for deleting a student
    confirmAndSave?: () => void; // Optional callback for confirming and saving changes
}

const UploadTable: React.FC<StudentsTableProps> = ({ 
    studentsData, 
    onSelectStudent, 
    onImportStudent, 
    onDeleteStudent,
    confirmAndSave
}) => {
    const [selectedRows, setSelectedRows] = useState<Set<number>>(new Set()); // State to track selected rows
    const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility

    // Function to toggle selection of a specific row
    const toggleRowSelection = (index: number) => {
        const newSelectedRows = new Set(selectedRows);
        if (newSelectedRows.has(index)) {
            newSelectedRows.delete(index); // Deselect if already selected
        } else {
            newSelectedRows.add(index); // Select the row
        }
        setSelectedRows(newSelectedRows); // Update state with new selection
    };

    // Function to toggle selection of all rows
    const toggleAllSelection = () => {
        if (selectedRows.size === studentsData.length) {
            // If all are selected, deselect all
            setSelectedRows(new Set());
        } else {
            // Otherwise, select all
            setSelectedRows(new Set(studentsData.map((_, index) => index)));
        }
    };

    // Function to handle student selection
    const handleStudentSelection = (index: number) => {
        const selectedStudent = studentsData[index];
        onSelectStudent({
            fullName: selectedStudent[0],
            identificationNumber: selectedStudent[1],
            email: selectedStudent[2],
        });
    };

    // Function to handle importing a student
    const handleStudentImport = (index: number) => {    
        const selectedStudent = studentsData[index];        
        onImportStudent({
            fullName: selectedStudent[0],
            identificationNumber: selectedStudent[1],
            email: selectedStudent[2],
        });
        onDeleteStudent(index); // Delete the student after importing
    };

    // Function to delete selected rows
    const deleteSelectedRows = () => {
        studentsData.forEach((_, index) => {
            if (selectedRows.has(index)) {
                onDeleteStudent(index); // Call delete callback for each selected row
            }
        });
        setSelectedRows(new Set()); // Reset selection after deletion
    };

    // Function to handle confirmation in the modal
    const handleConfirm = () => {
        setIsModalOpen(false); // Close the modal
        confirmAndSave && confirmAndSave(); // Call the confirm and save callback if provided
    };

    // Function to handle cancellation in the modal
    const handleCancel = () => {
        console.log("Cancelled!"); // Log cancellation action
        setIsModalOpen(false); // Close the modal
    };

    return (
        <>
            <div className="actions buttons-container">
                <button className="delete-button" onClick={deleteSelectedRows} aria-label="Delete selected rows">Delete Selected Rows</button>
                {confirmAndSave && (
                    <button className="edit-button" onClick={() => setIsModalOpen(true)} aria-label="Confirm and save changes">Confirm and Save</button>
                )}
            </div>
            
            <div className="table-container">
                <table className="upload-table" aria-label="Students table">
                    <thead>
                        <tr>
                            <th>
                                <Checkbox
                                    checked={selectedRows.size === studentsData.length} // Check if all rows are selected
                                    onChange={toggleAllSelection} // Toggle selection of all rows
                                    aria-label="Select all students"
                                />
                            </th>
                            <th>Full Name</th>
                            <th>Identification Number</th>
                            <th>Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {studentsData.map((row, index) => (
                            <tr key={index} aria-selected={selectedRows.has(index)} onClick={() => toggleRowSelection(index)}>
                                <td>
                                    <div onClick={(e) => e.stopPropagation()} aria-hidden="true"> {/* Prevent row click when clicking checkbox */}
                                        <Checkbox
                                            checked={selectedRows.has(index)} 
                                            onChange={() => toggleRowSelection(index)} 
                                            aria-label={`Select ${row[0]}`} // Use full name for accessibility label
                                        />
                                    </div>
                                </td>
                                {row.map((cell: any, cellIndex: number) => (
                                    <td key={cellIndex}>{cell}</td> // Display cell data or N/A if undefined
                                ))}
                                <td className="actions" onClick={(e) => e.stopPropagation()} aria-hidden="true">
                                    <button className='edit-button' onClick={() => handleStudentSelection(index)} aria-label={`Select ${row[0]}`}>Select</button>
                                    <button className='view-button' onClick={() => handleStudentImport(index)} aria-label={`Import ${row[0]}`}>Import</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {isModalOpen && (
                <ConfirmationModal
                    title="Confirm Action"
                    message="Are you sure you want to proceed?"
                    onConfirm={handleConfirm}
                    onCancel={handleCancel}
                />
            )}
        </>
    );
};

export default UploadTable;
