// src/components/RegisterButton.js
import React from 'react';
import './RegisterButton.css';

export const RegisterButton = ({ handleRegister }) => {
    return (
        <button onClick={handleRegister}>Registrar</button>
    );
};
