import { useState } from 'react';
import './App.css';
import ListaProductos from './components/Listaproductos';

function App() {
  const [productos, setProductos] = useState([
    { id: 1, nombre: 'Producto 1', precio: 10 },
    { id: 2, nombre: 'Producto 2', precio: 20 },
    { id: 3, nombre: 'Producto 3', precio: 30 },
  ]);

  return (
    <div className="App">
      <h1>Lista de Productos</h1>
      <ListaProductos productos={productos}>
        <div style={{ textAlign: 'center', marginTop: '10px' }}>
          <p>Elige los mejores productos para ti.</p>
        </div>
      </ListaProductos>
    </div>
  );
}

export default App;
