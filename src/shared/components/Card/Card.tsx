import { Link } from 'react-router-dom';
import './Card.css';

export interface CustomButton {
	label: string; // Texto del botón
	onClick: () => void; // Función a ejecutar al hacer clic
	className?: string; // Clase CSS opcional
	ariaLabel?: string; // Etiqueta accesible opcional
}

export interface CardField {
	name: string; // Field name
	placeholder: string; // Field placeholder
	type?: string; // Field type (input or select)
}

export interface HandlersCard<T> {
	onItemUpdated?: (updatedItem: T) => Promise<void>; // Optional callback to handle updating
	onItemAdded?: (newItem: T) => Promise<void>; // Callback to handle adding an item
	onDelete?: (id: string) => Promise<void>; // Callback for canceling edit
	onCancelEdit?: () => void; // Callback for canceling edit
}

export interface CardProps<T> {
	children?: React.ReactNode;
	titleName: string; // Card title
	fields: CardField[];
	data?: T | null;
	isEditing?: boolean;
	ableDelete?: boolean;
	clearFormAfterAdd?: boolean;
	viewLink?: string;
	handlers?: HandlersCard<T>;
	customButtons?: CustomButton[];
}

const Card = <T extends Record<string, any>>({ children, titleName, fields, data, handlers, ableDelete, viewLink, customButtons }: CardProps<T>) => {

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
	const showActions = !!handlers?.onItemUpdated || ableDelete || viewLink;

	return (
		<>
			<div className="actions buttons-container compact">

				{handlers?.onItemUpdated && (
					<button onClick={() => handlers.onItemUpdated && data && handlers.onItemUpdated(data)} className="edit-button">
						Save
					</button>
				)}
				{ableDelete && data && data["id"] && (
					<button onClick={() => handlers?.onDelete && data && handlers.onDelete(data["id"])} className="delete-button">
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
				{customButtons && customButtons.map((button, index) => (
					<button
						key={index}
						onClick={button.onClick}
						className={`button ${button.className || ''}`}
						aria-label={button.ariaLabel || button.label}
					>
						{button.label}
					</button>
				))}
			</div>

			<div className={`module-card ${showActions ? "with-actions" : ""}`}>
				{children}
				<h3>{data ? data[titleName] : ''}</h3>
				{fields.map(({ name, placeholder, type }: CardField) => (
					data && data[name] ? <p key={name}><strong className='capitalize'>{placeholder}:</strong> {renderFieldValue(type, data[name])}</p> : null
				))}
			</div>
		</>
	);
};

export default Card;
