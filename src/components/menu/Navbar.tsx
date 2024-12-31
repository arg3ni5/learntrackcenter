// src/components/Navbar.tsx

import React from "react";
import { Link, useLocation } from "react-router-dom";
import Dropdown from "../dropdown/Dropdown";

interface MenuItem {
    label: string;
    to: string;
    children?: MenuItem[];
}

interface NavbarProps {
    items: MenuItem[];
}

const Navbar: React.FC<NavbarProps> = ({ items }) => {
    const location = useLocation();
    const isActive = items.some(item => location.pathname === item.to);

    return (
        <header className="navbar">
            <ul>
                {items.map((item) => (
                    <li key={item.label} className={location.pathname === item.to ? 'active' : ''}>
                        {/* Si hay hijos, renderiza un Dropdown */}
                        {item.children ? (
                            <Dropdown id={`${item.label.toLowerCase()}-dropdown-desktop`} title={item.label} items={item.children} />
                        ) : (
                            <button className={`${isActive ? 'active' : ''}`}>
                                <Link to={item.to}>{item.label}</Link>
                            </button>
                        )}
                    </li>
                ))}
            </ul>
        </header>
    );
};

export default Navbar;
