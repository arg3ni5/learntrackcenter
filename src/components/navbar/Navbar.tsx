// src/components/Navbar.tsx

import React from "react";
import { Link, useLocation } from "react-router-dom";
import './Navbar.css'; // Importar el archivo CSS
import Dropdown from "./dropdown";
import { useAuth } from "../../modules/userAuth/hooks/useAuth";
import { FaBook, FaChalkboardTeacher, FaUserGraduate } from "react-icons/fa";

const Navbar: React.FC = () => {
  const { user } = useAuth();
  const location = useLocation();

  const studentItems = [
    { label: "Estudiantes", to: "/students", icon: <FaUserGraduate /> },
    { label: "Profesores", to: "/teachers", icon: <FaChalkboardTeacher /> },
    { label: "Calificaciones", to: "/grades", icon: <FaBook /> },
  ];

  const userItems = [
    { label: "Login", to: "/login" },
    { label: "Register", to: "/register" },
  ];

  const navbarItems = [
    { label: "Dashboard", to: "/dashboard" },
    { label: "Courses", to: "/courses" },
    { label: "Periods", to: "/periods" },
  ];

  return (
    <header>
      <ul>
        <Dropdown title="Estudiantes" items={studentItems} />
        
        {!user && <Dropdown title="Usuarios" items={userItems} />}

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
