import React, { createContext, useContext, useState } from 'react';

// Crear el contexto
const CounterContext = createContext();

// Proveedor del contexto
export const CounterProvider = ({ children }) => {
  const [counter, setCounter] = useState(0);

  const increment = () => setCounter(counter + 1);
  const decrement = () => setCounter(counter - 1);

  return (
    <CounterContext.Provider value={{ counter, increment, decrement }}>
      {children}
    </CounterContext.Provider>
  );
};

// Hook personalizado para usar el contexto
export const useCounter = () => {
  return useContext(CounterContext);
};
