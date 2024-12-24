// src/components/BaseModule.tsx
import React, { useEffect, useState } from 'react';
import { collection, addDoc, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { db } from '../services/firebase';

interface Field {
    name: string;
    placeholder: string;
}

interface BaseModuleProps {
    collectionName: string;
    title: string;
    fields: Field[];
}

const BaseModule: React.FC<BaseModuleProps> = ({ collectionName, title, fields }) => {
    const [items, setItems] = useState<any[]>([]);
    const [formData, setFormData] = useState<Record<string, string>>({});

    // Fetch items from Firestore
    const fetchItems = async () => {
        const itemsCollection = collection(db, collectionName);
        const itemSnapshot = await getDocs(itemsCollection);
        const itemList = itemSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setItems(itemList);
    };

    // Handle form input changes
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Add a new item
    const addItem = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        await addDoc(collection(db, collectionName), formData);
        fetchItems(); // Refresh the list after adding
        setFormData({}); // Reset form data
    };

    // Delete an item
    const deleteItem = async (id: string) => {
        await deleteDoc(doc(db, collectionName, id));
        fetchItems(); // Refresh the list after deletion
    };

    useEffect(() => {
        fetchItems();
    }, []);

    return (
        <div>
            <h2>{title}</h2>
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
            <ul>
                {items.map(item => (
                    <li key={item.id}>
                        {fields.map(field => (
                            <span key={field.name}>{item[field.name]} </span>
                        ))}
                        <button onClick={() => deleteItem(item.id)}>Eliminar</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BaseModule;
