import { useEffect, useState } from 'react';
import Checkbox from '../checkbox/Checkbox';
import ConfirmationModal from '../confirmationModal/ConfirmationModal';
import { BaseField } from '../BaseModule/types';

interface UploadTableProps<T> {
    data: T[]; // Array of data of type T
    onSelect: (item: T) => void; // Callback for selecting a item
    onImport: (item: T) => void; // Callback for importing a item
    onDelete: (index: number) => void; // Callback for deleting a item
    confirmAndSave?: () => void; // Optional callback for confirming and saving changes
    fields: BaseField[];
}

const UploadTable = <T extends Record<string, any>>({
    fields, 
    data, 
    onSelect, 
    onImport, 
    onDelete,
    confirmAndSave
}: UploadTableProps<T>) => {
    const [selectedRows, setSelectedRows] = useState<Set<number>>(new Set()); // State to track selected rows
    const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility

    useEffect(() => {
        console.log("Students data updated:", data); // Log updated students data
        
    }, [data]);

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
        if (selectedRows.size === data.length) {
            // If all are selected, deselect all
            setSelectedRows(new Set());
        } else {
            // Otherwise, select all
            setSelectedRows(new Set(data.map((_, index) => index)));
        }
    };

    // Function to handle student selection
    const handleSelection = (index: number) => {
        const selected = data[index];
        onSelect(selected); // Call the onSelect callback with the selected student
    };

    // Function to handle importing a student
    const handleImport = (index: number) => {    
        const selected = data[index];        
        onImport(selected); // Call the onImport callback with the selected student
        onDelete(index); // Delete the student after importing
    };

    // Function to delete selected rows
    const deleteSelectedRows = () => {
        data.forEach((_, index) => {
            if (selectedRows.has(index)) {
                onDelete(index); // Call delete callback for each selected row
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
        data && data.length> 0 &&<>
            <div className="actions buttons-container">
                <button className="delete-button" onClick={deleteSelectedRows} aria-label="Delete selected rows">Delete Selected Rows</button>
                {confirmAndSave && (
                    <button className="edit-button" onClick={() => setIsModalOpen(true)} aria-label="Confirm and save changes">Confirm and Save</button>
                )}
            </div>
            
            <div className="table-container">
                <table className="upload-table" aria-label="table data to import">
                    <thead>
                        <tr>
                            <th>
                                <Checkbox
                                    checked={selectedRows.size === data.length} // Check if all rows are selected
                                    onChange={toggleAllSelection} // Toggle selection of all rows
                                    aria-label="Select all students"
                                />
                            </th>
                            {fields.map(({name, placeholder}) => (
                                <th key={`up-th-${name}`}>{placeholder}</th>  
                            ))}
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((row, index) => (
                            <tr key={`up-row-${index}`} aria-selected={selectedRows.has(index)} onClick={() => toggleRowSelection(index)}>
                                <td>
                                    <div onClick={(e) => e.stopPropagation()} aria-hidden="true"> {/* Prevent row click when clicking checkbox */}
                                        <Checkbox
                                            checked={selectedRows.has(index)} 
                                            onChange={() => toggleRowSelection(index)} 
                                            aria-label={`Select ${row[0]}`} // Use full name for accessibility label
                                        />
                                    </div>
                                </td>
                                {fields.map(({name}) => (
                                    <td key={`${name}-${index}`}>{row[name]}</td>  
                                ))}
                                <td className="actions" onClick={(e) => e.stopPropagation()} aria-hidden="true">
                                    <button className='edit-button' onClick={() => handleSelection(index)} aria-label={`Select ${row[0]}`}>Select</button>
                                    <button className='view-button' onClick={() => handleImport(index)} aria-label={`Import ${row[0]}`}>Import</button>
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
