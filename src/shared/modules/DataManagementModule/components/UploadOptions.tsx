import React, { useState } from 'react';
import * as XLSX from 'xlsx';

interface UploadOptionsProps<T> {
    onFileUpload: (jsonData: T[]) => void; // Use a generic type for uploaded data
    columnNames: string[]; // Array of expected column names
}

const UploadOptions = <T extends Record<string, any>>({ onFileUpload, columnNames }: UploadOptionsProps<T>) => {
    const [file, setFile] = useState<File | null>(null);
    const [error, setError] = useState<string | null>(null); // State to manage error messages

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFile = e.target.files?.[0];
        if (selectedFile) {
            // Validate file type
            if (selectedFile.type !== "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet") {
                setError("Please upload a valid Excel file (.xlsx)");
                return;
            }
            setFile(selectedFile);
            setError(null); // Clear any previous errors
        }
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault(); // Prevent the default form submission behavior
        if (file) {
            const reader = new FileReader();
            reader.onload = (event) => {
                const binaryStr = event.target?.result;

                try {
                    const workbook = XLSX.read(binaryStr, { type: 'binary' });
                    const sheetName = workbook.SheetNames[0]; // Get the first sheet name
                    const sheet = workbook.Sheets[sheetName]; // Get the first sheet
                    let jsonData = XLSX.utils.sheet_to_json(sheet, { header: 1 }); // Convert sheet to JSON

                        const headers = jsonData.shift() as string[]; // Get and remove the header row

                        // Validate that the headers match the expected column names
                        const missingHeaders = columnNames.filter(header => !headers.includes(header));
                        if (missingHeaders.length > 0) {
                            setError(`Missing headers: ${missingHeaders.join(', ')}`); // Notify about missing headers
                            return;
                        }

                        // Transform the imported data to match type T using headers
                        const transformedData: T[] = (jsonData as any[][]).map((row: any[]) => {
                            return headers.reduce((acc, header, index) => {
                                (acc as any)[header] = row[index]; // Map each header to the corresponding value in the row
                                return acc;
                            }, {} as T); // Ensure the accumulator is of type T
                        });

                        onFileUpload(transformedData);
                } catch (error) {
                    console.error('Error processing file:', error);
                    setError('Error processing file'); // Set error message if processing fails
                }
            };
            reader.readAsBinaryString(file); // Read the file as a binary string
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="file"
                accept=".xlsx"
                onChange={handleFileChange}
                required
                aria-label="Upload Excel file"
            />
            {error && <div className="error">{error}</div>} {/* Display error message if exists */}
            <button type="submit">Load Data</button> {/* Button to submit the form */}
        </form>
    );
};

export default UploadOptions;
