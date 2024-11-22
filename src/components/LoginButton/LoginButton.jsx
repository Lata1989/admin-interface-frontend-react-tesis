// src/components/LoginButton.js
import React from 'react';
import './LoginButton.css';

export const LoginButton = ({ email, password, setLoggedIn, navigate }) => {
    const handleLogin = async () => {
        // Establecemos el rol fijo como "admin"
        const body = {
            email,
            password,
            rol: 'admin'
        };

        // Simulamos la autenticación en el backend
        if (email && password) {
            // Aquí enviarías la solicitud al backend y verificarías el login
            // const response = await apiLogin(body);
            
            // Simulamos respuesta exitosa
            const success = true;  // Cambiar esto a la respuesta del backend

            if (success) {
                // Guardar token y setear estado de login
                localStorage.setItem('token', 'mi-token-simulado');
                setLoggedIn(true);
                navigate('/clientes');
            } else {
                alert('Login fallido. Verifique sus credenciales.');
            }
        } else {
            alert('Por favor ingrese todos los campos.');
        }
    };

    return <button onClick={handleLogin}>Iniciar sesión</button>;
};
