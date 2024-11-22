// src/components/RegisterForm.js
import React, { useState } from 'react';
import './RegisterForm.css';

export const RegisterForm = ({ setEmail, setPassword, setNombre, setApellido, setDni, setCuit, setDireccion, setLocalidad }) => {
    return (
        <>
            <h2>Formulario de Registro</h2>
            <input
                type="text"
                placeholder="Nombre"
                onChange={(e) => setNombre(e.target.value)}
            />
            <input
                type="text"
                placeholder="Apellido"
                onChange={(e) => setApellido(e.target.value)}
            />
            <input
                type="email"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
            />
            <input
                type="text"
                placeholder="DNI"
                onChange={(e) => setDni(e.target.value)}
            />
            <input
                type="text"
                placeholder="CUIT"
                onChange={(e) => setCuit(e.target.value)}
            />
            <input
                type="text"
                placeholder="Dirección"
                onChange={(e) => setDireccion(e.target.value)}
            />
            <input
                type="text"
                placeholder="Localidad"
                onChange={(e) => setLocalidad(e.target.value)}
            />
        </>
    );
};
