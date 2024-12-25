// src/App.tsx

import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';
import MainLayout from './layout/MainLayout';

const App: React.FC = () => {
    return (
        <Router basename="/learntrackcenter">            
            <MainLayout>
                <AppRoutes />
            </MainLayout>
        </Router>
    );
};

export default App;
