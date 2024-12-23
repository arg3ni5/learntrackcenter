// src/components/PrivateRoute.tsx
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

interface PrivateRouteProps {
    element: React.ReactNode;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ element }) => {
    const { user } = useAuth();

    console.log("Usuario:", user);

    return user ? element : <Navigate to="/" replace />;
};

export default PrivateRoute;
