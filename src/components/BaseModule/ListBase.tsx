import './ListBase.css';
import { Field } from './BaseModule';

interface ListBaseProps<T> {
    items?: T[];
    fields: Field[];
    onImportItem?: (newItem: any) => void;
    onItemDeleted: (id: string) => void;
    onEdit: (item: T) => void;
    editable: boolean;    
    loading: boolean; // Prop to indicate if data is loading
}

const ListBase = <T extends Record<string, any>>({
    items, fields, onItemDeleted, onEdit, editable, loading
}: ListBaseProps<T>) => {
    
    const deleteItem = async (id: string) => {
        if (id === '') {
            return;            
        }
        onItemDeleted(id);
    };

    return (
        !loading && <table className="list-base-table">
            {items && items.length > 0 && (
                <thead>
                    <tr>
                        {fields.map(field => (
                            <th key={field.name}>{field.label || field.placeholder || field.name}</th>
                        ))}
                        <th>Actions</th>
                    </tr>
                </thead>
            )}
            {items && items.length > 0 && (
                <tbody>
                    {items.map(item => (
                        <tr key={item.id}>
                            {fields.map(field => {
                                if (field.type === "select" && field.options) {
                                    const fieldValue = item[field.name];
                                    const option = field.options.find(t => t.value === fieldValue);
                                    return (
                                        <td key={field.name}>{option ? option.label : "Unknown"}</td>
                                    );
                                }
                                return (
                                    <td key={field.name}>
                                        {item[field.name] !== undefined ? item[field.name] : "N/A"}
                                    </td>
                                );
                            })}
                            <td className="actions">
                                <button className="delete-button" onClick={() => deleteItem(item.id)}>Delete</button>
                                {editable && (<button className="edit-button" onClick={() => onEdit(item)}>Edit</button>)}
                            </td>
                        </tr>
                    ))}
                </tbody>
            )}
        </table>
    );
};

export default ListBase;
