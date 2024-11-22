// src/components/LoginForm.js
import React from 'react';
import './LoginForm.css';

export const LoginForm = ({ email, setEmail, password, setPassword, rol, setRol }) => {
    return (
        <div>
            <h2>Login</h2>
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
        </div>
    );
};
