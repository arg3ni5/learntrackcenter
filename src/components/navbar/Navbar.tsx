// src/components/Navbar.tsx

import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css'; // Importar el archivo CSS
import Dropdown from "./dropdown";
import { useAuth } from "../../modules/userAuth/hooks/useAuth";

const Navbar: React.FC = () => {
  const { user, loading } = useAuth();

  const studentItems = [
    { label: "Estudiantes", to: "/students" },
    { label: "Profesores", to: "/teachers" },
    { label: "Carreras", to: "/grades" },
  ];

  const userItems = [
    { label: "Login", to: "/login" },
    { label: "Register", to: "/register" },
  ];

  return (
    <nav>
      <ul>
        <Dropdown title="Estudiantes" items={studentItems} />
        
        {user ? <></> : <Dropdown title="Usuarios" items={userItems} />}

        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/courses">Courses</Link></li>
      </ul>
    </nav>
  );
};



export default Navbar;
