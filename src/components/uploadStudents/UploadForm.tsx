import React, { useState } from 'react';

interface UploadFormProps {
    onFileUpload: (file: File | null, hasHeaders: boolean) => void; // Callback para manejar la carga del archivo
}

const UploadForm: React.FC<UploadFormProps> = ({ onFileUpload }) => {
    const [file, setFile] = useState<File | null>(null);
    const [hasHeaders, setHasHeaders] = useState(false);

    // Handle file change event
    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFile = e.target.files?.[0] || null; // Asegurarse de que sea null si no hay archivo
        setFile(selectedFile);
    };

    // Handle form submission
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onFileUpload(file, hasHeaders); // Llamar al callback con el archivo y las opciones
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

export default UploadForm;
