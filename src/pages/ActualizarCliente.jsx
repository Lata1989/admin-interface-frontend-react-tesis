// src/pages/ActualizarCliente.js
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

export const ActualizarCliente = () => {
  const { dni } = useParams(); // Capturamos el DNI de la URL
  const [cliente, setCliente] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCliente = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/clientes/dni/${dni}`);
        setCliente(response.data);
      } catch (error) {
        console.error('Error al obtener el cliente:', error);
        alert('Cliente no encontrado');
        navigate('/clientes');
      }
    };

    fetchCliente();
  }, [dni, navigate]);

  const handleChange = (e) => {
    setCliente({ ...cliente, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`/api/clientes/dni/${dni}`, cliente);
      alert('Cliente actualizado con éxito');
      navigate('/clientes');
    } catch (error) {
      console.error('Error al actualizar cliente:', error);
      alert('Error al actualizar cliente');
    }
  };

  if (!cliente) return <p>Cargando cliente...</p>;

  return (
    <form onSubmit={handleSubmit}>
      <h1>Actualizar Cliente</h1>
      <label>
        Nombre:
        <input
          type="text"
          name="name"
          value={cliente.name || ''}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Apellido:
        <input
          type="text"
          name="lastname"
          value={cliente.lastname || ''}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={cliente.email || ''}
          onChange={handleChange}
        />
      </label>
      {/* Agrega más campos según sea necesario */}
      <button type="submit">Actualizar Cliente</button>
      <button type="button" onClick={() => navigate('/clientes')}>
        Cancelar
      </button>
    </form>
  );
};
