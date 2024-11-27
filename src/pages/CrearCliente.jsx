// src/pages/CrearCliente.js
import React, { useState } from 'react';

export const CrearCliente = () => {
  const [cliente, setCliente] = useState({
    name: '',
    lastname: '',
    dni: '',
    email: '',
    // Resto de los campos
  });

  const handleChange = (e) => {
    setCliente({ ...cliente, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/clientes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(cliente),
      });
      if (response.ok) {
        alert('Cliente creado con éxito');
      } else {
        alert('Error al crear cliente');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Nombre" onChange={handleChange} />
      <input type="text" name="lastname" placeholder="Apellido" onChange={handleChange} />
      <input type="text" name="dni" placeholder="DNI" onChange={handleChange} />
      <input type="email" name="email" placeholder="Email" onChange={handleChange} />
      {/* Resto de los campos */}
      <button type="submit">Crear Cliente</button>
    </form>
  );
};
