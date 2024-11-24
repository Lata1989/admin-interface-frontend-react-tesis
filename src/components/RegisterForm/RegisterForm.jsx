// src/components/RegisterForm/RegisterForm.js
import React from 'react';
import './RegisterForm.css';

export const RegisterForm = ({
    setEmail,
    setPassword,
    setNombre,
    setApellido,
    setDni,
    setCuit,
    setDireccion,
    setLocalidad,
}) => {
    return (
        <>
            <input
                type="text"
                placeholder="Nombre"
                onChange={(e) => setNombre(e.target.value)}
                required
            />
            <input
                type="text"
                placeholder="Apellido"
                onChange={(e) => setApellido(e.target.value)}
                required
            />
            <input
                type="email"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                required
            />
            <input
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                required
            />
            <input
                type="text"
                placeholder="DNI"
                onChange={(e) => setDni(e.target.value)}
                required
            />
            <input
                type="text"
                placeholder="CUIT"
                onChange={(e) => setCuit(e.target.value)}
                required
            />
            <input
                type="text"
                placeholder="Dirección"
                onChange={(e) => setDireccion(e.target.value)}
                required
            />
            <input
                type="text"
                placeholder="Localidad"
                onChange={(e) => setLocalidad(e.target.value)}
                required
            />
        </>
    );
};
