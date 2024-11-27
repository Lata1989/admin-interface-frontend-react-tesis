import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { Clientes } from './pages/Clientes';
import { CrearCliente } from './pages/CrearCliente';
import { ActualizarCliente } from './pages/ActualizarCliente';
import { Error } from './pages/Error';

export const App = () => {
  const [rol, setRol] = useState('admin'); // Estado del rol

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login rol={rol} setRol={setRol} />} />
        <Route path="/login" element={<Login rol={rol} setRol={setRol} />} />
        <Route path="/register" element={<Register rol={rol} setRol={setRol} />} />
        <Route path="/clientes" element={<Clientes />} />
        <Route path="/clientes/crear" element={<CrearCliente />} />
        <Route path="/clientes/actualizar/:dni" element={<ActualizarCliente />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
};
