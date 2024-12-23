// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useAuth } from './hooks/useAuth';
import Register from './components/Register';
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';
import Dashboard from './components/Dashboard';
import CourseManager from './components/Course/CourseManager'; // Importa el componente CourseManager
import Navbar from './components/Navbar'; // Importa el componente Navbar

const App: React.FC = () => {
    const { loading } = useAuth();

    if (loading) {
        return <div>Cargando...</div>;
    }

    return (
        <Router>
            <Navbar /> {/* Agrega el Navbar aquí */}
            <Routes>
                <Route path="/learntrackcenter" element={<Login />} />
                <Route path="/learntrackcenter/register" element={<Register />} />
                <Route path="/learntrackcenter/login" element={<Login />} />
                <Route path="/learntrackcenter/dashboard" element={<PrivateRoute element={<Dashboard />} />} />
                <Route path="/learntrackcenter/courses" element={<PrivateRoute element={<CourseManager />} />} /> {/* Ruta para CourseManager */}
                {/* Otras rutas públicas o privadas pueden ser agregadas aquí */}
            </Routes>
        </Router>
    );
};

export default App;
