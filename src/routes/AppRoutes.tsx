// src/routes/AppRoutes.tsx

import React, { Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import Login from '../components/Login';
import Register from '../components/Register';
import Dashboard from '../components/Dashboard';
import CourseManager from '../components/Course/CourseManager';
import PrivateRoute from '../components/PrivateRoute';

const AppRoutes: React.FC = () => {
    const { loading } = useAuth();

    if (loading) {
        return <div>Cargando...</div>; // Estado de carga mientras se verifica la autenticación
    }

    return (
        <Suspense fallback={<div>Cargando componente...</div>}>
            <Routes>
                <Route path="/" element={<Navigate replace to="/login" />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/dashboard" element={<PrivateRoute element={<Dashboard />} />} />
                <Route path="/courses" element={<PrivateRoute element={<CourseManager />} />} />
            </Routes>
        </Suspense>
    );
};

export default AppRoutes;
