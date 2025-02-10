import React, { useState, useEffect } from 'react';

function Timer() {
  const [contador, setContador] = useState(0);
  const [activo, setActivo] = useState(true);

  useEffect(() => {
    let intervalo;

    if (activo) {
      intervalo = setInterval(() => {
        setContador((prev) => prev + 1);
      }, 1000);
    }

    // Limpieza del temporizador
    return () => clearInterval(intervalo);
  }, [activo]);

  const detenerTemporizador = () => {
    setActivo(false);
  };

  return (
    <div>
      <h2>Contador: {contador}</h2>
      <button onClick={detenerTemporizador} style={{ padding: '10px 20px', fontSize: '16px' }}>
        Detener
      </button>
    </div>
  );
}

export default Timer;
