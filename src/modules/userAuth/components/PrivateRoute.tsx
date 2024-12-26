// src/components/PrivateRoute.tsx
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../../hooks/useAuth';
import Loading from '../../../components/loading/Loading';

interface PrivateRouteProps {
    element: React.ReactNode;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ element }) => {
    const { user, loading } = useAuth();

    if (loading) {
        return <Loading />; // Muestra un mensaje mientras se verifica la autenticación
    }

    return user ? <>{element}</> : <Navigate to="/" replace />;
};

export default PrivateRoute;
