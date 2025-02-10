import React from 'react';
import './App.css';
import UserList from './components/UserList';

function App() {
  return (
    <div className="App" style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Lista de Usuarios</h1>
      <UserList />
    </div>
  );
}

export default App;
