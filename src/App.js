// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  // Cambia 'Switch' por 'Routes'
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { Clientes } from './pages/Clientes';
import { Error } from './pages/Error';

export const App = () => {
  const [rol, setRol] = useState('admin'); // Estado del rol

  return (
    <Router>
      <Routes> {/* Cambié 'Switch' por 'Routes' */}
        {/* Ruta por defecto: Login */}
        <Route path="/" element={<Login rol={rol} setRol={setRol} />} />

        <Route path="/login" element={<Login rol={rol} setRol={setRol} />} />


        {/* Ruta de registro */}
        <Route path="/register" element={<Register rol={rol} setRol={setRol} />} />

        {/* Ruta de clientes (Solo accesible después de login y autorización de rol) */}
        <Route path="/clientes" element={<Clientes />} />

        {/* Ruta para manejo de errores (si no hay ruta válida) */}
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
};

// export default App;
