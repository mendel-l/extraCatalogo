// Catalogo.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Catalogo.css';

const Catalogo = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3009/api/productos');
        setProductos(response.data);
      } catch (error) {
        console.error('Error al obtener productos:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Catálogo de Productos</h1>
      <div>
        {productos.map(producto => (
          <div key={producto.IdInventario}>
            <h3>{producto.Nombre}</h3>
            <p>Cantidad Disponible: {producto.CantidadDisponible}</p>
            <p>Precio de Venta: {producto.PrecioVenta}</p>
            <p>Estado: {producto.Estado === 1 ? 'Activo' : 'Inactivo'}</p>
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Catalogo;
