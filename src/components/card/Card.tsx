import { Link } from 'react-router-dom';
import './Card.css';


export interface CardField {
    name: string; // Field name
    placeholder: string; // Field placeholder
    type?: string; // Field type (input or select)
}

export interface CardProps<T> {
    titleName: string; // Card title
    fields: CardField[];
    data?: T | null;
    isEditing?: boolean;
    onItemUpdated?: (updatedItem: T) => Promise<void>; // Optional callback to handle updating
    onItemAdded?: (newItem: T) => Promise<void>; // Callback to handle adding an item
    onDelete?: (id:string) => void; // Callback for canceling edit
    onCancelEdit?: () => void; // Callback for canceling edit
    ableDelete?: boolean;
    clearFormAfterAdd?: boolean;
    viewLink?: string;
}

const Card = <T extends Record<string, any>>({ titleName, fields, data, onItemUpdated, onDelete, ableDelete, viewLink}: CardProps<T>) => {

    const renderFieldValue = (type: string | undefined, value: any) => {
        switch (type) {
            // case 'select':
            //     const option = field.options?.find(opt => opt.value === value);
            //     return option ? option.label : value;
            case 'date':
                return new Date(value).toLocaleDateString();
            case 'array':
                    return (value).length
            case 'number':
                return Number(value).toLocaleString();
            default:
                return value;
        }
    };

    return (
        <div className="module-card">
            <h3>{data ? data[titleName] : ''}</h3>
            {fields.map(({name, placeholder, type}: CardField) => (
                data && data[name] ? <p key={name}><strong className='capitalize'>{placeholder}:</strong> {renderFieldValue(type, data[name])}</p> : null
            ))}
            
            <div className="module-card-actions">
                {onItemUpdated && (
                    <button onClick={() => onItemUpdated && data && onItemUpdated(data)} className="edit-button">
                        Edit
                    </button>
                )}
                {ableDelete && data && data["id"] && (
                    <button onClick={() => onDelete && data && onDelete(data["id"])} className="delete-button">
                        Delete
                    </button>
                )}
                {viewLink && (
                    <Link
                    to={viewLink}
                    className="button view-button"
                    aria-label="View selected item">
                    View
                  </Link>
                )}
            </div>
        </div>
    );
};

export default Card;
