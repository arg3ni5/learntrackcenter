import React, { useState, useEffect } from 'react';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../../services/firebase';
import './FormBase.css'; // Importing CSS styles 

interface FormBaseProps<T> {
    collectionName: string;
    onItemAdded: (newItem: T) => Promise<void>; // Callback para manejar la adición de un item
    fields: { name: string; placeholder: string }[];
    initialData?: T | null; // Propiedad opcional para datos iniciales del formulario
}

const FormBase = <T extends {}>({ collectionName, onItemAdded, fields, initialData }: FormBaseProps<T>) => {
    const [formData, setFormData] = useState<Record<string, string>>({});

    useEffect(() => {
        if (initialData) {
            setFormData(initialData as Record<string, string>); // Cargar datos iniciales en el formulario
        }
    }, [initialData]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const addItem = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        await addDoc(collection(db, collectionName), formData);
        await onItemAdded(formData as T); // Llama al callback para manejar la adición
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

export default FormBase;
