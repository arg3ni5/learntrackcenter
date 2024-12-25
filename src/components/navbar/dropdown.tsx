import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import './Dropdown.css';
interface DropdownItem {
  label: string;
  to: string;
  icon?: JSX.Element; // Opcional para el ícono
}

interface DropdownProps {
  title: string;
  items: DropdownItem[];
}

const Dropdown: React.FC<DropdownProps> = ({ title, items }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation(); // Para obtener la ruta actual

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // Verificar si algún elemento está activo
  const isActive = items.some(item => location.pathname === item.to);

  return (
    <div className="dropdown">
      <button 
        onClick={toggleDropdown} 
        className={`dropdown-button ${isActive ? 'active' : ''}`} // Añadir clase activa si es necesario
      >
        {title} <span className="dropdown-icon">▼</span>
      </button>
      {isOpen && (
        <ul className="dropdown-menu">
          {items.map((item, index) => (
            <li key={index} className={location.pathname === item.to ? 'active' : ''}>
              <Link to={item.to} style={{ display: 'flex', alignItems: 'center' }}>
                {item.icon && <span className="item-icon">{item.icon}</span>}
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
