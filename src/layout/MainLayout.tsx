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
      <div className="footer">
        <a href="https://github.com/arg3ni5" target="_blank" rel="noopener noreferrer">arg3ni5</a>
      </div>
    </div>
  );
};

export default MainLayout;
