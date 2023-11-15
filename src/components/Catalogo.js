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
    <div className="catalogo-container">
      <h1>Catálogo de Productos</h1>
      <div className="productos-container">
        {productos.map((producto) => (
          <div key={producto.IdInventario} className="producto-card">
            <div className="producto-details">
              <h4>{`${producto.medicamento.Nombre}`}</h4>
              <p>Cantidad Disponible: {producto.CantidadDisponible}</p>
              <p>Precio de Venta: {producto.PrecioVenta}</p>
              <p>Estado: {producto.Estado === 1 ? 'Activo' : 'Inactivo'}</p>
              <p>Descripción: {producto.medicamento.Descripcion}</p>
              <p>Sustancias: {producto.medicamento.Sustancias}</p>
              <p>Casa Farmaceutica: {producto.medicamento.casaFarmaceutica}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Catalogo;
