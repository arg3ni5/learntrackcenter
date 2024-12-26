import React from 'react';
import Loading from '../loading/Loading';
import './ListBase.css'; // Importar archivo CSS para estilos

interface ListBaseProps {
    items: any[]; // Puedes definir un tipo más específico según tu modelo de datos
    fields: { name: string; placeholder?: string }[]; // Agregar placeholder opcional si es necesario
    onImportItem?: (newItem: any) => void; // Callback para importar un item
    onItemDeleted: (id: string) => void;
    loading: boolean; // Prop para indicar si los datos están cargando
}

const ListBase: React.FC<ListBaseProps> = ({ items, fields, onItemDeleted, loading }) => {
    
    const deleteItem = async (id: string) => {
        if (id === '') {
            return;            
        }
        onItemDeleted(id); // Llama al callback para refrescar la lista
    };

    if (loading) {
        return <Loading />; // Mensaje de carga
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