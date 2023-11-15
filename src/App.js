// src/App.js
import React from 'react';
import Catalogo from './components/Catalogo';
import './App.css'; // Asegúrate de tener la ruta correcta

const App = () => {
  // Datos simulados
  const productos = [
    { nombre: 'Producto 1', precio: 19.99 },
    { nombre: 'Producto 2', precio: 29.99 },
    { nombre: 'Producto 3', precio: 9.99 },
  ];

  return (
    <div className="app">
      <header className="app-header">
        {/* Contenido del header */}
        <h1 style={{ color: 'white' }}>Predilecta</h1>
      </header>

      <main>
        {/* Renderiza tu componente Catalogo */}
        <Catalogo productos={productos} />
      </main>

      <footer className="app-footer">
        {/* Contenido del footer */}
        <p>&copy; 2023 PREDILECTA. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};

export default App;

