// src/BaseModule/BaseModule.tsx
import { useEffect, useState } from 'react';
import FormBase from './FormBase';
import ListBase from './ListBase';
import './BaseModule.css'; // Importar el archivo CSS

interface BaseModuleProps<T> {
    collectionName: string;
    title?: string;
    fields: { name: string; placeholder: string }[];
    fetchItems: () => Promise<T[]>; // Función para obtener los elementos
    onItemAdded: (newItem: T) => Promise<void>; // Callback para manejar la adición de un item
    onItemDeleted?: (id: string) => Promise<void>; // Callback opcional para manejar la eliminación
    initialFormData?: T | null; // Datos iniciales para el formulario
}

const BaseModule = <T extends { id?: string }>({
    collectionName,
    title,
    fields,
    fetchItems,
    onItemAdded,
    onItemDeleted,
    initialFormData,
}: BaseModuleProps<T>) => {
    const [items, setItems] = useState<T[]>([]);

    const loadItems = async () => {
        const itemList = await fetchItems(); // Llama a la función proporcionada para obtener los elementos
        setItems(itemList);
    };

    useEffect(() => {
        loadItems();
    }, []);

    return (
        <div>
            {title && <h2>{title}</h2>}
            <FormBase 
                collectionName={collectionName} 
                onItemAdded={async (newItem: T) => { // Especificar el tipo aquí
                    await onItemAdded(newItem); // Llama al callback para manejar la adición
                    loadItems(); // Refresca la lista después de agregar
                }} 
                fields={fields} 
                initialData={initialFormData} 
            />
            <ListBase 
                items={items} 
                collectionName={collectionName} 
                fields={fields} 
                onItemDeleted={async (id) => {
                    if (onItemDeleted) {
                        await onItemDeleted(id); // Llama al callback si está definido
                    }
                    loadItems(); // Refresca la lista después de eliminar
                }} 
            />
        </div>
    );
};

export default BaseModule;
