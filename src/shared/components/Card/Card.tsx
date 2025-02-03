import { Link } from 'react-router-dom';
import './Card.css';
import { FaEye, FaPlus, FaTrash } from 'react-icons/fa';

export interface CustomButton {
	label: string;
	icon?: JSX.Element;
	onClick: () => void;
	className?: string;
	ariaLabel?: string;
}

export interface CardField {
	name: string;
	placeholder: string;
	type?: string;
}

export interface HandlersCard<T> {
	onItemUpdated?: (updatedItem: T) => Promise<void>; // Optional callback to handle updating
	onItemAdded?: (newItem: T) => Promise<void>; // Callback to handle adding an item
	onDelete?: (id: string) => Promise<void>; // Callback for canceling edit
	onCancelEdit?: () => void; // Callback for canceling edit
}

export interface CardProps<T> {
	children?: React.ReactNode;
	titleName?: string; // Card title
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
						<FaPlus /> <span className="d-none d-md-inline-over">Save</span>
					</button>
				)}
				{ableDelete && data && data["id"] && (
					<button onClick={() => handlers?.onDelete && data && handlers.onDelete(data["id"])} className="delete-button">
						<FaTrash /> <span className="d-none d-md-inline-over">Delete</span>
					</button>
				)}
				{viewLink && (
					<Link
						to={viewLink}
						className="button view-button"
						aria-label="View selected item">
						<FaEye /> <span className="d-none d-md-inline-over">View</span>

					</Link>
				)}
				{customButtons && customButtons.map((button, index) => (
					<button
						key={index}
						onClick={button.onClick}
						className={`button ${button.className || ''}`}
						aria-label={button.ariaLabel || button.label}
					>
						{button.icon ? (<>{button.icon} <span className="d-none d-md-inline-over">{button.label}</span></>) : button.label}

					</button>
				))}
			</div>

			<div className={`module-card ${showActions ? "with-actions" : ""}`}>
				{children}
				{titleName && (<h3>{data ? data[titleName] : ''}</h3>)}
				{fields.map(({ name, placeholder, type }: CardField) => (
					data && data[name] ? <p key={name}><strong className='capitalize'>{placeholder}:</strong> {renderFieldValue(type, data[name])}</p> : null
				))}
			</div>
		</>
	);
};

export default Card;
