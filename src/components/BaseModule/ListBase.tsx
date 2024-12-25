// src/BaseModule/ListBase.tsx

import React from 'react';
import { deleteDoc, doc } from 'firebase/firestore';
import { db } from '../../services/firebase';
import './ListBase.css'; // Importar archivo CSS para estilos

interface ListBaseProps {
    items: any[]; // Puedes definir un tipo más específico según tu modelo de datos
    collectionName: string;
    fields: { name: string; placeholder?: string }[]; // Agregar placeholder opcional si es necesario
    onItemDeleted: (id: string) => void; // Callback para refrescar la lista después de eliminar un item
    loading: boolean; // Prop para indicar si los datos están cargando
}

const ListBase: React.FC<ListBaseProps> = ({ items, collectionName, fields, onItemDeleted, loading }) => {
    
    const deleteItem = async (id: string) => {
        await deleteDoc(doc(db, collectionName, id));
        onItemDeleted(id); // Llama al callback para refrescar la lista
    };

    if (loading) {
        return <div className="loading">Cargando...</div>; // Mensaje de carga
    }

    return (
        <table className="list-base-table">
            {items && items.length !== 0 && (
                <thead>
                <tr>
                    {fields.map(field => (
                        <th key={field.name}>{field.placeholder || field.name}</th>
                    ))}
                    <th>Acciones</th> {/* Columna para acciones */}
                </tr>
            </thead>
            )}
            

            {items && items.length !== 0 && (
            <tbody>
                {items.map(item => (
                    <tr key={item.id}>
                        {fields.map(field => (
                            <td key={field.name}>{item[field.name]}</td> // Mostrar los datos del item
                        ))}
                        <td>
                            <button className="delete-button" onClick={() => deleteItem(item.id)}>Eliminar</button>
                        </td>
                    </tr>
                ))}
            </tbody>)}
        </table>
    );
};

export default ListBase;
