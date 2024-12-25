// src/components/UploadStudents.tsx

import React, { useState } from 'react';
import * as XLSX from 'xlsx';
import './UploadStudents.css';

interface UploadStudentsProps {
    onSelectStudent: (student: any) => void; // Prop para manejar la selección de estudiante
}

const UploadStudents: React.FC<UploadStudentsProps> = ({ onSelectStudent }) => {
    const [file, setFile] = useState<File | null>(null);
    const [studentsData, setStudentsData] = useState<any[]>([]);
    const [selectedRows, setSelectedRows] = useState<Set<number>>(new Set());
    const [previewVisible, setPreviewVisible] = useState(false);
    const [hasHeaders, setHasHeaders] = useState(false);

    // Handle file change event
    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFile = e.target.files?.[0];
        if (selectedFile) {
            setFile(selectedFile);
            setPreviewVisible(false);
        }
    };

    // Read the Excel file and parse it to JSON
    const handleFileUpload = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (file) {
            const reader = new FileReader();
            reader.onload = (event) => {
                const binaryStr = event.target?.result;
                const workbook = XLSX.read(binaryStr, { type: 'binary' });
                const sheetName = workbook.SheetNames[0];
                const sheet = workbook.Sheets[sheetName];
                let jsonData = XLSX.utils.sheet_to_json(sheet, { header: 1 });

                if (hasHeaders) {
                    jsonData.shift(); // Remove the first row if it contains headers
                }

                setStudentsData(jsonData);
                setPreviewVisible(true);
            };
            reader.readAsBinaryString(file);
        }
    };

    // Toggle selection of a row
    const toggleRowSelection = (index: number) => {
        const newSelectedRows = new Set(selectedRows);
        if (newSelectedRows.has(index)) {
            newSelectedRows.delete(index); // Deselect if already selected
        } else {
            newSelectedRows.add(index); // Select if not selected
        }
        setSelectedRows(newSelectedRows);
    };

    // Handle selection of a student and call the parent callback
    const handleStudentSelection = (index: number) => {
        const selectedStudent = studentsData[index];
        onSelectStudent({
            fullName: selectedStudent[0], // Assuming Full Name is in the first column
            identificationNumber: selectedStudent[1], // Assuming ID is in the second column
            email: selectedStudent[2], // Assuming Email is in the third column
        });
    };

    return (
        <div>
            <h2>Upload Students</h2>
            <form onSubmit={handleFileUpload}>
                <input 
                    type="file" 
                    accept=".xlsx" 
                    onChange={handleFileChange} 
                    required 
                />
                <div>
                    <label>
                        <input 
                            type="checkbox" 
                            checked={hasHeaders} 
                            onChange={() => setHasHeaders(!hasHeaders)} 
                        />
                        The file has headers
                    </label>
                </div>
                <button type="submit">Load Students</button>
            </form>

            {previewVisible && (
                <div>
                    <h3>Preview of Students Data</h3>
                    
                    <button onClick={() => console.log('Delete Selected Rows')}>Delete Selected Rows</button>
                    <button onClick={() => console.log('Confirm and Save')}>Confirm and Save</button>
                    
                    <table className="students-table">
                        <thead>
                            <tr>
                                <th>Select</th>
                                <th>Full Name</th>
                                <th>Identification Number</th>
                                <th>Email</th>
                                <th>Action</th> {/* New column for action button */}
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
                                    <td>
                                        {/* Button to select this student and fill initialFormData */}
                                        <button onClick={() => handleStudentSelection(index)}>Select</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default UploadStudents;
