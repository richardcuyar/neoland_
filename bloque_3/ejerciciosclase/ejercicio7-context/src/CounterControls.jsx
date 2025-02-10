import React from 'react';
import { useCounter } from '../context/CounterContext';

function CounterControls() {
  const { increment, decrement } = useCounter();

  return (
    <div>
      <button onClick={increment} style={{ padding: '10px', marginRight: '10px' }}>
        Incrementar
      </button>
      <button onClick={decrement} style={{ padding: '10px' }}>
        Decrementar
      </button>
    </div>
  );
}

export default CounterControls;
