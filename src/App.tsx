// src/App.tsx
import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useAuth } from './hooks/useAuth';
import Navbar from './components/Navbar';

// Dynamically import components
const Login = React.lazy(() => import('./components/Login'));
const Register = React.lazy(() => import('./components/Register'));
const Dashboard = React.lazy(() => import('./components/Dashboard'));
const CourseManager = React.lazy(() => import('./components/Course/CourseManager'));
const PrivateRoute = React.lazy(() => import('./components/PrivateRoute'));

const App: React.FC = () => {
    const { loading } = useAuth();

    if (loading) {
        return <div>Cargando...</div>; // Loading state while checking auth
    }

    return (
        <Router basename="/learntrackcenter">
            <Navbar />
            <Suspense fallback={<div>Cargando componente...</div>}>
                <Routes>
                    <Route path="/learntrackcenter" element={<Login />} />
                    <Route path="/learntrackcenter/Login" element={<Login />} />
                    <Route path="/learntrackcenter/register" element={<Register />} />
                    <Route path="/learntrackcenter/dashboard" element={<PrivateRoute element={<Dashboard />} />} />
                    <Route path="/learntrackcenter/courses" element={<PrivateRoute element={<CourseManager />} />} />
                </Routes>
            </Suspense>
        </Router>
    );
};

export default App;
