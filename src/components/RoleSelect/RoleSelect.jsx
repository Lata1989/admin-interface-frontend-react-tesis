// src/components/RoleSelect/RoleSelect.js
import React from 'react';
import './RoleSelect.css';

export const RoleSelect = ({ rol, setRol }) => {
    return (
        <div className="role-select">
            <label htmlFor="role">Rol:</label>
            <select id="role" value={rol} onChange={(e) => setRol(e.target.value)}>
                <option value="admin">Administrador</option>
                <option value="staff">Staff</option>
            </select>
        </div>
    );
};
