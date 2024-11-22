// src/pages/Login.js
import './Login.css';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LoginForm } from '../components/LoginForm/LoginForm.jsx';
import { LoginButton } from '../components/LoginButton/LoginButton.jsx';
import { Link } from 'react-router-dom'; // Importamos Link para el enlace de registro

export const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rol, setRol] = useState('admin');  // Rol predeterminado como "admin"
    const [loggedIn, setLoggedIn] = useState(false);

    const navigate = useNavigate();

    return (
        <div className='container'>
            <LoginForm
                email={email}
                setEmail={setEmail}
                password={password}
                setPassword={setPassword}
                rol={rol}
                setRol={setRol}
            />
            <LoginButton
                email={email}
                password={password}
                rol={rol}
                setLoggedIn={setLoggedIn}
                navigate={navigate}
            />
            <p>
                ¿No tienes cuenta? <Link to="/register">Regístrate aquí</Link>
            </p> {/* Enlace para ir al registro */}
        </div>
    );
};
