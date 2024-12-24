import React from 'react';
import { deleteDoc, doc } from 'firebase/firestore';
import { db } from '../../services/firebase';
interface ListProps {
    items: any[]; // Puedes definir un tipo más específico según tu modelo de datos
    collectionName: string;
    fields: { name: string }[];
    onItemDeleted: (id: string) => void; // Callback para refrescar la lista después de eliminar un item
}

const List: React.FC<ListProps> = ({ items, collectionName, fields, onItemDeleted }) => {
    
    const deleteItem = async (id: string) => {
        await deleteDoc(doc(db, collectionName, id));
        onItemDeleted(id); // Llama al callback para refrescar la lista
    };

    return (
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
    );
};

export default List;
