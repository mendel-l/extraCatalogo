// src/App.js
import React from 'react';
import Catalogo from './components/Catalogo';

const App = () => {
  // Datos simulados
  const productos = [
    { nombre: 'Producto 1', precio: 19.99 },
    { nombre: 'Producto 2', precio: 29.99 },
    { nombre: 'Producto 3', precio: 9.99 },
  ];

  return (
    <div className="app">
      <Catalogo productos={productos} />
    </div>
  );
};

export default App;

