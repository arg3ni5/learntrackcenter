import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../services/firebase';
import Form from './Form';
import List from './List';
import './BaseModule.css'; // Importar el archivo CSS

interface BaseModuleProps {
    collectionName: string;
    title?: string;
    fields: { name: string; placeholder: string }[];
}

const BaseModule: React.FC<BaseModuleProps> = ({ collectionName, title, fields }) => {
    const [items, setItems] = useState<any[]>([]);

    const fetchItems = async () => {
        const itemsCollection = collection(db, collectionName);
        const itemSnapshot = await getDocs(itemsCollection);
        const itemList = itemSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setItems(itemList);
    };

    useEffect(() => {
        fetchItems();
    }, []);

    return (
        <div>
            {title && <h2>{title}</h2>}
            <Form 
                collectionName={collectionName} 
                onItemAdded={fetchItems} 
                fields={fields} 
            />
            <List 
                items={items} 
                collectionName={collectionName} 
                fields={fields} 
                onItemDeleted={fetchItems} 
            />
        </div>
    );
};

export default BaseModule;
