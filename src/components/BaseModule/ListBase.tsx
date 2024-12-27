import React from 'react';
import Loading from '../loading/Loading';
import './ListBase.css'; // Import CSS file for styles
import { Field } from './BaseModule';

/**
 * ListBase Component
 * 
 * This component renders a table to display a list of items. It includes functionalities
 * for deleting items and allows for editing items through a callback function.
 * 
 * Props:
 * - items: An array of items to be displayed in the table. You can define a more specific type 
 *   according to your data model.
 * - fields: An array of objects that define the structure of the table columns. Each object 
 *   should have a 'name' (the key to access the item data), an optional 'label' (for column header), 
 *   and an optional 'placeholder'.
 * - onImportItem: An optional callback function that can be used to import an item.
 * - onItemDeleted: A callback function that is called when an item is deleted. It receives the 
 *   item's ID as a parameter.
 * - onEdit: A callback function that is called when an item is edited. It receives the item's ID 
 *   as a parameter.
 * - loading: A boolean prop that indicates whether the data is currently being loaded.
 */
interface ListBaseProps {
    items: any[]; // You can define a more specific type according to your data model
    fields: Field[]; // Optional placeholder if needed
    onImportItem?: (newItem: any) => void; // Callback for importing an item
    onItemDeleted: (id: string) => void; // Callback for deleting an item
    onEdit: (id: string) => void; // Callback for editing an item
    loading: boolean; // Prop to indicate if data is loading
    editable: boolean; // Prop to indicate if the list is editable
}

const ListBase: React.FC<ListBaseProps> = ({ items, fields, onItemDeleted, onEdit, editable, loading }) => {
    
    const deleteItem = async (id: string) => {
        if (id === '') {
            return;            
        }
        onItemDeleted(id); // Call the callback to refresh the list
    };

    if (loading) {
        return <Loading />; // Loading message
    }

    return (
        <table className="list-base-table">
            {items && items.length !== 0 && (
                <thead>
                    <tr>
                        {fields.map(field => (
                            <th key={field.name}>{field.label || field.placeholder || field.name}</th>
                        ))}
                        <th>Actions</th> {/* Column for actions */}
                    </tr>
                </thead>
            )}
            {items && items.length !== 0 && (
                
                <tbody>
                    {items.map(item => (
                        
                        
                        (<tr key={item.id}>
                            {fields.map(field => {
                                if (field.type === "select" && field.options) {
                                    // Find the teacher's name using teacherId
                                    const option = field.options.find(t => t.value === item.teacherId);
                                    return (
                                        <td key={field.name}>{option ? option.label : "Unknown"}</td> // Show the teacher's name or "Unknown"
                                    );
                                }
                                return (
                                    <td key={field.name}>{item[field.name]}</td> // Mostrar los datos del item
                                );
                            })}
                            <td className="actions">
                                <button className="delete-button" onClick={() => deleteItem(item.id)}>Delete</button>
                                {editable && (<button className="edit-button" onClick={() => onEdit(item.id!)}>Edit</button>)}
                            </td>
                        </tr>)
                    ))}
                </tbody>
            )}
        </table>
    );
};

export default ListBase;
