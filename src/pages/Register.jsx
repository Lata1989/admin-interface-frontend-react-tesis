// src/pages/Register.js
import './Register.css';
import React, { useState } from 'react';
import axios from 'axios';
import { RegisterForm } from '../components/RegisterForm/RegisterForm.jsx';
import { RoleSelect } from '../components/RoleSelect/RoleSelect.jsx';
import { RegisterButton } from '../components/RegisterButton/RegisterButton.jsx';
import { Link } from 'react-router-dom';

export const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [dni, setDni] = useState('');
    const [cuit, setCuit] = useState('');
    const [direccion, setDireccion] = useState('');
    const [localidad, setLocalidad] = useState('');
    const [rol, setRol] = useState('admin');

    const handleRegister = async () => {
        const newUser = {
            nombre,
            apellido,
            email,
            password,
            dni,
            cuit,
            direccion,
            localidad,
            rol
        };

        try {
            const response = await axios.post('http://localhost:5000/auth/register', newUser);
            console.log('Registro exitoso:', response.data);
            alert('Usuario registrado exitosamente');
            // Redirigir al usuario al login
            window.location.href = '/login';
        } catch (error) {
            if (error.response) {
                // Error del servidor (código 4xx o 5xx)
                console.error('Error al registrar:', error.response.data);
                alert(`Error al registrar: ${error.response.data.message}`);
            } else if (error.request) {
                // No se recibió respuesta del servidor
                console.error('Sin respuesta del servidor:', error.request);
                alert('No se pudo conectar al servidor.');
            } else {
                // Otro tipo de error
                console.error('Error:', error.message);
                alert('Ocurrió un error al registrar el usuario.');
            }
        }
    };

    return (
        <div className='container'>
            <h1>Registro de Usuario</h1>
            <RegisterForm 
                setEmail={setEmail} 
                setPassword={setPassword} 
                setNombre={setNombre} 
                setApellido={setApellido} 
                setDni={setDni} 
                setCuit={setCuit} 
                setDireccion={setDireccion} 
                setLocalidad={setLocalidad}
            />
            <RoleSelect rol={rol} setRol={setRol} />
            <RegisterButton handleRegister={handleRegister} />

            <p className="login-link">
                ¿Ya tienes una cuenta? <Link to="/login">Ingresa aquí</Link>
            </p>
        </div>
    );
};
