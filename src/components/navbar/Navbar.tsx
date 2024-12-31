// src/components/Navbar.tsx

import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import './Navbar.css'; // Importar el archivo CSS
import { useAuth } from "../../modules/userAuth/hooks/useAuth";
import Dropdown from "../dropdown/Dropdown"; // Asegúrate de que Dropdown esté importado
import { useLoading } from "../loading/LoadingContext";
import { FaBars, FaTimes } from "react-icons/fa"; // Iconos para abrir y cerrar

const Navbar: React.FC = () => {
    const { user } = useAuth();
    const location = useLocation();
    const { isLoading } = useLoading();
    const [isSidebarOpen, setSidebarOpen] = useState(false); // Estado para controlar el sidebar

    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
    };

    const closeSidebar = () => {
        setSidebarOpen(false);
    };

    const navbarItems = [
        { label: "Dashboard", to: "/dashboard" },
        { 
            label: "Students", 
            to: "", // Un enlace vacío si se usa como encabezado de dropdown
            children: [
                { label: "Estudiantes", to: "/students" },
                { label: "Calificaciones", to: "/grades" },
            ]
        },
        { 
            label: "Periods", 
            to: "", // Un enlace vacío si se usa como encabezado de dropdown
            children: [
                { label: "Courses", to: "/courses-period" },
                { label: "Calificaciones", to: "/grades" },
            ]
        },
        { 
            label: "Params", 
            to: "", // Un enlace vacío si se usa como encabezado de dropdown
            children: [
                { label: "Periods", to: "/periods" },
                { label: "Courses", to: "/courses" },
                { label: "Profesores", to: "/teachers" },
            ]
        },
        { 
            label: "User", 
            to: "", // Un enlace vacío si se usa como encabezado de dropdown
            children: [
                { label: "Login", to: "/login" },
                { label: "Register", to: "/register" },
            ]
        }
    ];

    return (
        !isLoading && (
            <div>
                {/* Botón para abrir/cerrar el sidebar en móviles */}
                <button className="toggle-button" onClick={toggleSidebar}>
                    <FaBars /> {/* Icono de menú */}
                </button>

                {/* Sidebar */}
                <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
                    <button className="close-button" onClick={closeSidebar}>
                        <FaTimes /> {/* Icono para cerrar */}
                    </button>
                    <ul>
                        {navbarItems.map((item) => (
                            <li key={item.label} className={location.pathname === item.to ? 'active' : ''}>
                                {/* Si hay hijos, renderiza un Dropdown */}
                                {item.children ? (
                                    <Dropdown 
                                        id={`${item.label.toLowerCase()}-dropdown`} 
                                        title={item.label} 
                                        items={item.children} 
                                    />
                                ) : (
                                    <Link to={item.to} onClick={closeSidebar}>{item.label}</Link> // Cierra al hacer clic
                                )}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Navbar para pantallas grandes */}
                <header className="navbar">
                    <ul>
                        {navbarItems.map((item) => (
                            <li key={item.label} className={location.pathname === item.to ? 'active' : ''}>
                                {/* Si hay hijos, renderiza un Dropdown */}
                                {item.children ? (
                                    <Dropdown 
                                        id={`${item.label.toLowerCase()}-dropdown-desktop`} 
                                        title={item.label} 
                                        items={item.children} 
                                    />
                                ) : (
                                    <Link to={item.to} onClick={closeSidebar}>{item.label}</Link> // Cierra al hacer clic
                                )}
                            </li>
                        ))}
                    </ul>
                </header>
            </div>
        )
    );
};

export default Navbar;
