import { useState } from 'react'
import './App.css'
import Tareas from './components/Tareas';

function App() {
  const [tareas, setTareas] = useState ([]);
  
  // Función para agregar una nueva tarea
  const agregarTarea = (nuevaTarea) => {
    if (nuevaTarea.trim() !== '') {
      setTareas([...tareas, nuevaTarea]); // Agrega la nueva tarea al array de tareas
    }
  };

  return (
    <div className="App">
      <h1>Lista de Tareas</h1>
      <Tareas tareas={tareas} agregarTarea={agregarTarea} />
    </div>
  );
}

export default App;