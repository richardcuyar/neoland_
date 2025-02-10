import React from 'react';
import TarjetaProducto from './TarjetaProducto';

function ListaProductos({ productos, children }) {
  return (
    <div>
      {children}
      <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'center' }}>
        {productos.map((producto) => (
          <TarjetaProducto key={producto.id} nombre={producto.nombre} precio={producto.precio} />
        ))}
      </div>
    </div>
  );
}

export default ListaProductos;
