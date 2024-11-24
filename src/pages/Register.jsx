// src/pages/Register.js
import './Register.css';
import React, { useState } from 'react';
import axios from 'axios';
import { RegisterForm } from '../components/RegisterForm/RegisterForm';
import { RoleSelect } from '../components/RoleSelect/RoleSelect';
import { RegisterButton } from '../components/RegisterButton/RegisterButton';
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

    const handleRegister = async (e) => {
        e.preventDefault(); // Evita el comportamiento por defecto del formulario
        const newUser = {
            nombre,
            apellido,
            email,
            password,
            dni,
            cuit,
            direccion,
            localidad,
            rol,
        };

        try {
            const response = await axios.post('http://localhost:5000/auth/register', newUser);
            console.log('Registro exitoso:', response.data);
            alert('Usuario registrado exitosamente');
            window.location.href = '/login';
        } catch (error) {
            if (error.response) {
                console.error('Error al registrar:', error.response.data);
                alert(`Error al registrar: ${error.response.data.message}`);
            } else if (error.request) {
                console.error('Sin respuesta del servidor:', error.request);
                alert('No se pudo conectar al servidor.');
            } else {
                console.error('Error:', error.message);
                alert('Ocurrió un error al registrar el usuario.');
            }
        }
    };

    return (
        <>
            <div className="contenedor">
                <h1>Registro de Usuario</h1>
                <form className="register-form" onSubmit={handleRegister}>
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
                    <RegisterButton />
                </form>
                <p className="login-link">
                    ¿Ya tienes una cuenta? <Link to="/login">Ingresa aquí</Link>
                </p>
            </div>
        </>
    );
};
