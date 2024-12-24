// src/App.tsx

import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import AppRoutes from './routes/AppRoutes';

const App: React.FC = () => {
    return (
        <Router basename="/learntrackcenter">
            <Navbar />
            <AppRoutes />
        </Router>
    );
};

export default App;
