import React, { useState } from 'react';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../../services/firebase';

interface FormProps {
    collectionName: string;
    onItemAdded: () => void; // Callback para refrescar la lista después de agregar un item
    fields: { name: string; placeholder: string }[];
}

const Form: React.FC<FormProps> = ({ collectionName, onItemAdded, fields }) => {
    const [formData, setFormData] = useState<Record<string, string>>({});

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const addItem = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        await addDoc(collection(db, collectionName), formData);
        onItemAdded(); // Llama al callback para refrescar la lista
        setFormData({}); // Resetea el formulario
    };

    return (
        <form onSubmit={addItem}>
            {fields.map((field) => (
                <input 
                    key={field.name}
                    type="text" 
                    name={field.name} 
                    placeholder={field.placeholder} 
                    value={formData[field.name] || ''} 
                    onChange={handleInputChange} 
                    required 
                />
            ))}
            <button type="submit">Agregar</button>
        </form>
    );
};

export default Form;
