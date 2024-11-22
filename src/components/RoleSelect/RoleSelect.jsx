// src/components/RoleSelect.js
import React from 'react';
import './RoleSelect.css';

export const RoleSelect = ({ rol, setRol }) => {
    return (
        <div>
            <label htmlFor="role">Rol:</label>
            <select id="role" value={rol} onChange={(e) => setRol(e.target.value)}>
                <option value="admin">Administrador</option>
                <option value="staff">Staff</option>
            </select>
        </div>
    );
};
