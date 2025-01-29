import React from "react";
import { Link, useLocation } from "react-router-dom";
import './Dropdown.css';
import { useDropdown } from "./DropdownContext";

interface DropdownItem {
  label: string;
  to: string;
  icon?: JSX.Element;
}

interface DropdownProps {
  id: string; // Añadimos un id único para cada dropdown
  title: string;
  items: DropdownItem[];
}

const Dropdown: React.FC<DropdownProps> = ({ id, title, items }) => {
  const { openDropdown, setOpenDropdown } = useDropdown();
  const location = useLocation();

  const toggleDropdown = () => {
    if (openDropdown === id) {
      setOpenDropdown(null);
    } else {
      setOpenDropdown(id);
    }
  };

  const isOpen = openDropdown === id;
  const isActive = items.some(item => location.pathname === item.to);

  return (
    <div className="dropdown">
      <button 
        onClick={toggleDropdown} 
        className={`dropdown-button ${isActive ? 'active' : ''}`}
      >
        {title} <span className="dropdown-icon">▼</span>
      </button>
      {isOpen && (
        <ul className="dropdown-menu">
          {items.map((item, index) => (
            <li key={index} className={location.pathname === item.to ? 'active' : ''} onClick={() => setOpenDropdown(null)}>
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
