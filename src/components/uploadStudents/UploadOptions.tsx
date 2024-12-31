import React, { useState } from 'react';
import * as XLSX from 'xlsx';

interface UploadOptionsProps {
    onFileUpload: (jsonData: any[]) => void;
}

const UploadOptions: React.FC<UploadOptionsProps> = ({ onFileUpload }) => {
    const [file, setFile] = useState<File | null>(null);
    const [hasHeaders, setHasHeaders] = useState(false);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFile = e.target.files?.[0];
        if (selectedFile) {
            setFile(selectedFile);
        }
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
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
                    jsonData.shift();
                }

                onFileUpload(jsonData);
            };
            reader.readAsBinaryString(file);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
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
    );
};

export default UploadOptions;
