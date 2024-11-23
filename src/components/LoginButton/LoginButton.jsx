// src/components/LoginButton.js
import React from 'react';
import './LoginButton.css';
import axios from 'axios'; // Asegúrate de que axios esté instalado y disponible

export const LoginButton = ({ email, password, setLoggedIn, navigate }) => {
    const handleLogin = async () => {
        const body = {
            email,
            password,
            rol: 'admin' // Rol fijo como "admin"
        };

        try {
            // Llamada al backend para autenticar al usuario
            const response = await axios.post('http://localhost:5000/auth/login', body);
            
            // Si la autenticación es exitosa
            if (response.status === 200) {
                const { token } = response.data;
                
                // Guardar el token en localStorage
                localStorage.setItem('token', token);
                
                // Establecer el estado de login
                setLoggedIn(true);
                
                // Navegar a la página de clientes
                navigate('/clientes');
            } else {
                // Manejar el caso en que el backend responda con algo inesperado
                alert('Login fallido. Respuesta inesperada del servidor.');
            }
        } catch (error) {
            // Manejo de errores
            if (error.response) {
                // Errores del servidor (códigos 4xx o 5xx)
                alert(`Error al iniciar sesión: ${error.response.data.message || 'Error desconocido'}`);
            } else {
                // Errores de red u otros
                console.error('Error al conectar con el servidor:', error.message);
                alert('No se pudo conectar con el servidor.');
            }
        }
    };

    return <button onClick={handleLogin}>Iniciar sesión</button>;
};
