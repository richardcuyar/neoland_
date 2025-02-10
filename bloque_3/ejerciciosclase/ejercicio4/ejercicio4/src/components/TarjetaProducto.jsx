import React from 'react';

function TarjetaProducto({ nombre, precio }) {
  return (
    <div style={{
      border: '1px solid #ddd',
      borderRadius: '8px',
      padding: '16px',
      textAlign: 'center',
      width: '200px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    }}>
      <h3>{nombre}</h3>
      <p>Precio: ${precio}</p>
    </div>
  );
}

export default TarjetaProducto;
