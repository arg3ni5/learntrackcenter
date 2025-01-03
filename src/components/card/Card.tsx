import './Card.css';


export interface Field {
    name: string; // Field name
    placeholder: string; // Field placeholder
  }

export interface CardProps<T> {
    titleName: string; // Card title
    fields: Field[];
    data?: T | null;
    isEditing?: boolean;
    onItemUpdated?: (updatedItem: T) => Promise<void>; // Optional callback to handle updating
    onItemAdded?: (newItem: T) => Promise<void>; // Callback to handle adding an item
    onDelete?: (id:string) => void; // Callback for canceling edit
    onCancelEdit?: () => void; // Callback for canceling edit
    clearFormAfterAdd?: boolean;
}

const Card = <T extends Record<string, any>>({ titleName, fields, data, onItemUpdated, onDelete}: CardProps<T>) => {
    return (
        <div className="module-card">
            <h3>{data ? data[titleName] : ''}</h3>
            {fields.map(({name, placeholder}: Field) => (
                data && data[name] ? <p key={name}><strong className='capitalize'>{placeholder}:</strong> {data[name]}</p> : null
            ))}
            
            <div className="module-card-actions">
                {onItemUpdated && (
                    <button onClick={() => onItemUpdated && data && onItemUpdated(data)} className="edit-button">
                        Edit
                    </button>
                )}
                {onDelete && data && data["id"] && (
                    <button onClick={() => onDelete(data["id"])} className="delete-button">
                        Delete
                    </button>
                )}
            </div>
        </div>
    );
};

export default Card;
