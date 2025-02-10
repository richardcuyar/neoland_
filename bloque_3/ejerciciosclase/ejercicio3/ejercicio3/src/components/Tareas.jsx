import { useState } from 'react';

function Tareas({ tareas, agregarTarea }) {
  const [nuevaTarea, setNuevaTarea] = useState(''); // Estado para la tarea que se escribe en el input

  // Función para manejar el cambio en el input
  const handleInputChange = (e) => {
    setNuevaTarea(e.target.value);
  };

  // Función para manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    agregarTarea(nuevaTarea); // Llama a la función pasada desde App para agregar la tarea
    setNuevaTarea(''); // Limpia el input
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Escribe una nueva tarea"
          value={nuevaTarea}
          onChange={handleInputChange}
        />
        <button type="submit">Agregar</button>
      </form>
      <ul>
        {tareas.map((tarea, index) => (
          <li key={index}>{tarea}</li>
        ))}
      </ul>
    </div>
  );
}

export default Tareas;
