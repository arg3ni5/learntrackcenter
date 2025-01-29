import { Link } from 'react-router-dom';
import './Card.css';


export interface CardField {
	name: string; // Field name
	placeholder: string; // Field placeholder
	type?: string; // Field type (input or select)
}

export interface HandlersCard<T> {
	onItemUpdated?: (updatedItem: T) => Promise<void>; // Optional callback to handle updating
	onItemAdded?: (newItem: T) => Promise<void>; // Callback to handle adding an item
	onDelete?: (id: string) => void; // Callback for canceling edit
	onCancelEdit?: () => void; // Callback for canceling edit
}

export interface CardProps<T> {
	titleName: string; // Card title
	fields: CardField[];
	data?: T | null;
	isEditing?: boolean;
	ableDelete?: boolean;
	clearFormAfterAdd?: boolean;
	viewLink?: string;
	handlers?: HandlersCard<T>;
}

const Card = <T extends Record<string, any>>({ titleName, fields, data, handlers, ableDelete, viewLink }: CardProps<T>) => {

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
	const showActions = !!handlers?.onItemUpdated || !!handlers?.onDelete;

	return (
		<>
			<div className="actions buttons-container compact">

				{handlers?.onItemUpdated && (
					<button onClick={() => handlers.onItemUpdated && data && handlers.onItemUpdated(data)} className="edit-button">
						Edit
					</button>
				)}
				{ableDelete && data && data["id"] && (
					<button onClick={() => handlers?.onDelete && data && handlers.onDelete(data["id"])} className="delete-button">
						Delete
					</button>
				)}
			</div>
			<div className={`module-card ${showActions ? "with-actions" : ""}`}>
				<h3>{data ? data[titleName] : ''}</h3>
				{fields.map(({ name, placeholder, type }: CardField) => (
					data && data[name] ? <p key={name}><strong className='capitalize'>{placeholder}:</strong> {renderFieldValue(type, data[name])}</p> : null
				))}

				<div className="module-card-actions">
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
		</>
	);
};

export default Card;
