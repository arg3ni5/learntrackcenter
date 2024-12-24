// src/components/Navbar.tsx

import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css'; // Importar el archivo CSS

const Navbar: React.FC = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/register">Register</Link>
        </li>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="/courses">Courses</Link>
        </li>
        <li>
          <Link to="/students">Estudiantes</Link>
        </li>
        <li>
          <Link to="/teachers">Profesores</Link>
        </li>
        <li>
          <Link to="/grades">Carreras</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
