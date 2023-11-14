import React from 'react';
import './Catalogo.css';

const Catalogo = () => {
  return (
    <div className="catalogo-container">
      <h1>Mi Catálogo</h1>
      <div className="producto">
        <img src="url_de_la_imagen" alt="Producto" />
        <p>Nombre del Producto</p>
        <p>Precio: Q20</p>
      </div>
      <div className="producto">
        <img src="url_de_la_imagen" alt="Producto" />
        <p>Nombre del Producto</p>
        <p>Precio: Q20</p>
      </div>
      <div className="producto">
        <img src="url_de_la_imagen" alt="Producto" />
        <p>Nombre del Producto</p>
        <p>Precio: Q20</p>
      </div>
      <div className="producto">
        <img src="url_de_la_imagen" alt="Producto" />
        <p>Nombre del Producto</p>
        <p>Precio: Q20</p>
      </div>
    </div>
  );
}

export default Catalogo;
