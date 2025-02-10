import React, { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0); // Estado inicial en 0

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>Contador: {count}</h1>
        <button onClick={() => setCount(count + 1)}>Incrementar</button>
        <button onClick={() => setCount(count - 1)}>Decrementar</button>
        </div>
    );
};

export default Counter;
