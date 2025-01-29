// src/components/MainLayout.tsx

import React from "react";
import Menu from "../components/menu/Menu";
import "./MainLayout.css";

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="grid">
      <div className="header">
        <Menu />
      </div>
      <div className="main">{children}</div>
    </div>
  );
};

export default MainLayout;
