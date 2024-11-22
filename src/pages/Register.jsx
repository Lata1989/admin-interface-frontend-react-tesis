// src/pages/Register.js
import './Register.css'
import React, { useState } from 'react';
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

    const handleRegister = () => {
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

        // Aquí puedes hacer la llamada al backend para registrar al usuario
        console.log('Usuario registrado:', newUser);
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
            <RoleSelect />
            <RegisterButton handleRegister={handleRegister} />

            <p className="login-link">
                ¿Ya tienes una cuenta? <Link to="/login">Ingresa aquí</Link>
            </p>
        </div>
    );
};
