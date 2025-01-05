import { useEffect, useState } from 'react';
import Checkbox from '../checkbox/Checkbox';
import ConfirmationModal from '../confirmationModal/ConfirmationModal';
import { BaseField } from '../BaseModule/types/types';

interface UploadTableProps<T> {
    data: T[]; // Array of data of type T
    titleModal?: string;
    messageModal?: string; 
    onSelect: (item: T) => void; // Callback for selecting a item
    onImport: (item: T) => void; // Callback for importing a item
    onDelete?: (selectedRows: Set<number>) => void; // Callback for deleting a item
    onImportMulti?: (item: T[]) => void; // Optional callback for confirming and saving changes
    fields: BaseField[];
}

const UploadTable = <T extends Record<string, any>>({
    fields, 
    data, 
    onSelect, 
    onImport,
    onImportMulti,
    titleModal,
    messageModal
}: UploadTableProps<T>) => {
    const [dataImport, setDataImport] = useState<T[]>(data||[]); // State to control modal visibility
    const [selectedRows, setSelectedRows] = useState<Set<number>>(new Set()); // State to track selected rows
    const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility

    useEffect(() => {
        setDataImport(data);
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
        if (selectedRows.size === dataImport.length) {
            // If all are selected, deselect all
            setSelectedRows(new Set());
        } else {
            // Otherwise, select all
            setSelectedRows(new Set(dataImport.map((_, index) => index)));
        }
    };

    // Function to handle student selection
    const handleSelection = (index: number) => {
        setSelectedRows(new Set([index])); // Select the row
        const selected = dataImport[index];
        onSelect(selected); // Call the onSelect callback with the selected student
    };

    // Function to handle importing a student
    const handleImport = (index: number) => {    
        const selected = dataImport[index];        
        onImport(selected); // Call the onImport callback with the selected student
        // onDelete(index); // Delete the student after importing
    };

    // Handle deletion of selected rows
    const deleteSelectedRows = () => {
        const newData = dataImport.filter((_, index) => !selectedRows.has(index));
        setDataImport(newData); // Update state with the remaining students
        setSelectedRows(new Set()); // Reset selection after deletion
    };

    // Function to handle confirmation in the modal
    const handleConfirm = () => {
        setIsModalOpen(false); // Close the modal
        const dataToImport = dataImport.filter((_, index) => selectedRows.has(index));
        console.log({dataToImport, selectedRows}); // Log if no changes to save

        if (dataToImport.length === 0) {
            console.log("No changes to save!"); // Log if no changes to save
            return;            
        }
        onImportMulti && onImportMulti(dataToImport); // Call the confirm and save callback if provided
    };

    // Function to handle cancellation in the modal
    const handleCancel = () => {
        console.log("Cancelled!"); // Log cancellation action
        setIsModalOpen(false); // Close the modal
    };

    return (
        dataImport && dataImport.length> 0 &&<>
            <div className="actions buttons-container">
                <button className="delete-button" onClick={deleteSelectedRows} aria-label="Delete selected rows">Delete Selected Rows</button>
                {onImportMulti && (
                    <button className="edit-button" onClick={() => setIsModalOpen(true)} aria-label="Confirm and save changes">Confirm and Save</button>
                )}
            </div>
            
            <div className="table-container">
            
                <table className="list-base-table header-table" aria-label="table data to import">
                    <thead>
                        <tr>
                            <th>
                                <Checkbox
                                    checked={selectedRows.size === dataImport.length} // Check if all rows are selected
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
                </table>

                <div className="table-body-container">
                    <table className="upload-table list-base-table body-table" aria-label="List data to import">
                        <tbody>
                            {dataImport.map((row, index) => (
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
                                        <button className='save-button' onClick={() => handleSelection(index)} aria-label={`Select ${row["id"]}`}>Select</button>
                                        <button className='view-button' onClick={() => handleImport(index)} aria-label={`Import ${row["id"]}`}>Import</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {isModalOpen && (
                <ConfirmationModal
                    title={titleModal||"Confirm Import"}
                    message={messageModal||"Are you sure you want to proceed import?"}
                    onConfirm={handleConfirm}
                    onCancel={handleCancel}
                />
            )}
        </>
    );
};

export default UploadTable;
