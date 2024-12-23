// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useAuth } from './hooks/useAuth';
import Register from './components/Register';
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';
import Dashboard from './components/Dashboard';

const App: React.FC = () => {
    const { loading } = useAuth();

    if (loading) {
        return <div>Cargando...</div>;
    }

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/dashboard" element={<PrivateRoute element={<Dashboard />} />} />
                {/* Otras rutas públicas o privadas pueden ser agregadas aquí */}
            </Routes>
        </Router>
    );
};

export default App;
