// src/components/Navbar.tsx

import React from "react";
import { Link, useLocation } from "react-router-dom";
import './Navbar.css'; // Importar el archivo CSS
import { useAuth } from "../../modules/userAuth/hooks/useAuth";
import { FaBook, FaChalkboardTeacher, FaUserGraduate } from "react-icons/fa";
import Dropdown from "./dropdown";

const Navbar: React.FC = () => {
  const { user } = useAuth();
  const location = useLocation();

  const studentItems = [
    { label: "Estudiantes", to: "/students", icon: <FaUserGraduate /> },
    { label: "Calificaciones", to: "/grades", icon: <FaBook /> },
  ];

  const periodsItems = [
    { label: "Courses", to: "/courses-period", icon: <FaUserGraduate /> },
    { label: "Calificaciones", to: "/grades", icon: <FaBook /> },
  ];

  const paramsItems = [    
    { label: "Periods", to: "/periods" },    
    { label: "Courses", to: "/courses" },
    { label: "Profesores", to: "/teachers", icon: <FaChalkboardTeacher /> },
  ];

  const userItems = [
    { label: "Login", to: "/login" },
    { label: "Register", to: "/register" },
  ];

  const navbarItems = [
    { label: "Dashboard", to: "/dashboard" },
  ];

  return (
    <header>
      <ul>
        <Dropdown id="estudiantes" title="Estudiantes" items={studentItems} />

        <Dropdown id="periodos" title="Periodos" items={periodsItems} />

        <Dropdown id="parametros" title="Parametros" items={paramsItems} />
        
        {!user && <Dropdown id="usuarios" title="Usuarios" items={userItems} />}

        {navbarItems.map((item, index) => (
          <li key={index} className={location.pathname === item.to ? 'active' : ''}>
            <Link to={item.to}>
              {item.label}
            </Link>
          </li>
        ))}

      </ul>
    </header>
  );
};



export default Navbar;
