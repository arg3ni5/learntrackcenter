// src/components/MainLayout.tsx

import React from "react";
import Navbar from "../components/navbar/Navbar";
import "./MainLayout.css"; // Asegúrate de importar el archivo CSS

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="grid">
      <div className="header">
        <Navbar />
      </div>
      <div className="main">{children}</div> {/* Renderiza los hijos aquí */}
    </div>
  );
};

export default MainLayout;
