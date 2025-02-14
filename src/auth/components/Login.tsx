import styles from './Auth.module.css';
import React, { useState } from 'react';
import { useUsers } from '../hooks/useUsers';
import { Link } from 'react-router-dom';
import { FaGoogle } from 'react-icons/fa';

const Login: React.FC = () => {
    const { login, loginWithGoogleHandler, loading, error } = useUsers();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        await login(email, password);
    };

    return (
        <div className="container">
            <div className="item">
                <h1 className="title">Login</h1>

                <form onSubmit={handleLogin} className={styles.form}>
                    <div className={styles.buttons}>
                        <Link to="/register" className={styles.link}>Register</Link>
                    </div>
                    <input
                        className={styles.input}
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Contraseña"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <div className={styles.buttons}>
                        <button className={styles.button} type="submit" disabled={loading}>
                            Sign In
                        </button>
                    </div>
                </form>


                <div className="container p-0">
                    <span className="title" />
                    <span className={styles.lineText}>Sign In with</span>
                    <span className="title" />
                </div>
                <button onClick={loginWithGoogleHandler} disabled={loading}>
                    <FaGoogle />
                </button>

                {error && <p>{error}</p>}
            </div>


        </div>
    );
};

export default Login;
