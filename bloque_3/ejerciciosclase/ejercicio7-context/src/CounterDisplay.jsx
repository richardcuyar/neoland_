import React from 'react';
import { useCounter } from '../context/CounterContext';

function CounterDisplay() {
  const { counter } = useCounter();

  return (
    <div>
      <h2>Valor del Contador: {counter}</h2>
    </div>
  );
}

export default CounterDisplay;
