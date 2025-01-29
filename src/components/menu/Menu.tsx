// src/components/Menu.tsx

import React, { useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar"; // Asegúrate de que Sidebar esté importado
import { FaBars } from "react-icons/fa"; // Icono para abrir el sidebar
import { menuItems } from "./menuItems"; // Importar menuItems
import './Menu.css'; // Importar el archivo CSS

const Menu: React.FC = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(false); // Estado para controlar el sidebar

    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
    };

    return (
        <div>
            {/* Botón para abrir el sidebar en móviles */}
            <button className="toggle-button" onClick={toggleSidebar}>
                <FaBars /> {/* Icono de menú */}
            </button>

            {/* Sidebar */}
            <Sidebar items={menuItems} isOpen={isSidebarOpen} onClose={() => setSidebarOpen(false)} />

            {/* Navbar para pantallas grandes */}
            <Navbar items={menuItems} />
        </div>
    );
};

export default Menu;
