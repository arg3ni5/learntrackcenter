// src/routes/AppRoutes.tsx

import React, { Suspense, lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import PrivateRoute from "../modules/userAuth/components/PrivateRoute";

const Login = lazy(() => import("../components/Login"));
const Register = lazy(() => import("../components/Register"));
const Courses = lazy(() => import("../pages/Courses"));
const Grades = lazy(() => import("../pages/Grades"));
const Periods = lazy(() => import("../pages/Periods"));

const Dashboard = lazy(() => import("../pages/Dashboard"));
const Students = lazy(() => import("../pages/Students"));
const Teachers = lazy(() => import("../pages/Teachers"));

const AppRoutes: React.FC = () => {
  const { loading } = useAuth();

  if (loading) {
    return <div>Cargando...</div>; // Estado de carga mientras se verifica la autenticación
  }

  return (
    <Suspense fallback={<div>Cargando componente...</div>}>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<PrivateRoute element={<Dashboard />} />} />
        <Route path="/students" element={<PrivateRoute element={<Students />} />} />
        <Route path="/teachers" element={<PrivateRoute element={<Teachers />} />} />
        <Route path="/courses" element={<PrivateRoute element={<Courses />} />} />
        <Route path="/grades" element={<PrivateRoute element={<Grades />} />} />
        <Route path="/periods" element={<PrivateRoute element={<Periods />} />} />
        <Route path="*" element={<Navigate to="/" />} /> {/* Redirigir a la página de inicio */}
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;

