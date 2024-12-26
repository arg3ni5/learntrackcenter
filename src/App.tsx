// src/App.tsx

import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';
import MainLayout from './layout/MainLayout';
import { NotificationProvider } from './components/notification/NotificationContext';

const App: React.FC = () => {
    return (
        <Router basename="/learntrackcenter">
            <NotificationProvider>
                <MainLayout >
                    <AppRoutes />
                </MainLayout>
            </NotificationProvider>
        </Router>
    );
};

export default App;
