// src/components/Navbar.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/learntrackcenter/login">Login</Link>
                </li>
                <li>
                    <Link to="/learntrackcenter/register">Register</Link>
                </li>
                <li>
                    <Link to="/learntrackcenter/dashboard">Dashboard</Link>
                </li>
                <li>
                    <Link to="/learntrackcenter/courses">Courses</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
