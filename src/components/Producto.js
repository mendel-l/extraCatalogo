// src/components/Producto.js
import React from 'react';

const Producto = ({ nombre, precio, imagen }) => {
  return (
    <div className="producto card">
      <img src={imagen} alt={nombre} className="card-img-top" />
      <div className="producto-info card-body">
        <h3 className="card-title">{nombre}</h3>
        <p className="card-text">Precio: Q{precio}</p>
      </div>
    </div>
  );
};

export default Producto;
