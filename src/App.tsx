// src/App.tsx

import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';
import MainLayout from './layout/MainLayout';
import { NotificationProvider } from './components/notification/NotificationContext';
import { LoadingProvider } from './components/loading/LoadingContext';
import { DropdownProvider } from './components/navbar/DropdownContext';

const App: React.FC = () => {
    return (
        <Router basename="/learntrackcenter">
            <NotificationProvider>
                <LoadingProvider>
                    <DropdownProvider>
                        <MainLayout >
                            <AppRoutes />
                        </MainLayout>
                    </DropdownProvider>
                </LoadingProvider>
            </NotificationProvider>
        </Router>
    );
};

export default App;
