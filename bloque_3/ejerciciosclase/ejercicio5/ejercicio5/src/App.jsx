import React from 'react';
import './App.css';
import Timer from './components/Timer';

function App() {
  return (
    <div className="App" style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Temporizador</h1>
      <Timer />
    </div>
  );
}

export default App;

