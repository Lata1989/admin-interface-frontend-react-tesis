// src/pages/Clientes.js
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

export const Clientes = () => {
  const [clientes, setClientes] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchClientes = async () => {
      try {
        const response = await axios.get('http://localhost:5000/clientes'); // Cambiar URL según tu backend
        setClientes(response.data);
      } catch (error) {
        console.error('Error al obtener clientes:', error);
      }
    };

    fetchClientes();
  }, []);

  const handleDelete = async (dni) => {
    try {
      if (window.confirm('¿Estás seguro de que quieres eliminar este cliente?')) {
        await axios.delete(`/api/clientes/dni/${dni}`);
        alert('Cliente eliminado con éxito');
        setClientes(clientes.filter((cliente) => cliente.dni !== dni));
      }
    } catch (error) {
      console.error('Error al eliminar cliente:', error);
      alert('Error al eliminar cliente');
    }
  };

  return (
    <div>
      <h1>Lista de Clientes</h1>
      <Link to="/clientes/crear">
        <button>Crear Nuevo Cliente</button>
      </Link>
      <table border="1">
        <thead>
          <tr>
            <th>DNI</th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Email</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {clientes.map((cliente) => (
            <tr key={cliente.dni}>
              <td>{cliente.dni}</td>
              <td>{cliente.name}</td>
              <td>{cliente.lastname}</td>
              <td>{cliente.email}</td>
              <td>
                <button onClick={() => navigate(`/clientes/actualizar/${cliente.dni}`)}>Actualizar</button>
                <button onClick={() => navigate(`/clientes/eliminar/${cliente.dni}`)}>Eliminar</button>
                <button onClick={() => navigate(`/clientes/actualizar/${cliente.dni}`)}>Consultar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
