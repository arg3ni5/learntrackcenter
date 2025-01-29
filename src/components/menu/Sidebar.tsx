// src/components/Sidebar.tsx

import React from "react";
import { Link } from "react-router-dom";
import Dropdown from "../dropdown/Dropdown";

interface MenuItem {
    label: string;
    to: string;
    children?: MenuItem[];
}

interface SidebarProps {
    items: MenuItem[];
    isOpen: boolean;
    onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ items, isOpen, onClose }) => {
    return (
        <div className={`sidebar ${isOpen ? 'open' : ''}`}>
            <button className="close-button" onClick={onClose}>
                &times; {/* Icono para cerrar */}
            </button>
            <ul>
                {items.map((item) => (
                    <li key={item.label}>
                        {item.children ? (
                            <Dropdown id={`${item.label.toLowerCase()}-dropdown`} title={item.label} items={item.children} />
                        ) : (
                            <button className={`dropdown-button ${location.pathname === item.to ? 'active' : ''}`}>
                                <Link to={item.to} onClick={onClose}>{item.label}</Link>
                            </button>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Sidebar;
