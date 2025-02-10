import React from 'react';
import './App.css';
import { CounterProvider } from './context/CounterContext';
import CounterDisplay from './components/CounterDisplay';
import CounterControls from './components/CounterControls';

function App() {
  return (
    <CounterProvider>
      <div className="App" style={{ textAlign: 'center', marginTop: '50px' }}>
        <h1>Contador Global con Context</h1>
        <CounterDisplay />
        <CounterControls />
      </div>
    </CounterProvider>
  );
}

export default App;
