import { useState } from 'react'
import './App.css'
import Saludar from './components/Saludar'
import Counter from './components/Counter';

function App() {
  // count (Variable para almacenar un valor) setCount (Función para actualizar el valor)
  const [nombre, setNombre] = useState('Nombre por defecto') // 0 es el valor inicial
  const [apellido, setApellido] = useState ('Apellido por defecto')

  const [tareas, setTareas] = useState ([]);
  const [nuevaTarea, setNuevaTarea] = useState ('');  

  // Función para manejar el cambio en el input de tareas
  const handleInputChange = (e) => {
    setNuevaTarea(e.target.value);
  };

  // Función para agregar una nueva tarea
  const handleAddTask = () => {
    if (nuevaTarea.trim() !== '') {
      setTareas([...tareas, nuevaTarea]); // Agregar la nueva tarea al estado
      setNuevaTarea(''); // Limpiar el input
    }
  };

  return (
    <>
    <input type="text" placeholder="Nombre" onChange={(event)=>setNombre(event.target.value)}/>
    <input type="text" placeholder="Apellido" onChange={(event)=>setApellido(event.target.value)}/>
      <h1>
        <Saludar nombre={nombre} apellido={apellido} />
        </h1>
        <div>
            <Counter />
        </div>
    
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <h1>Lista de Tareas</h1>
        <div>
          <input type="text" placeholder="Escribe una tarea..." value={nuevaTarea} onChange={handleInputChange} style={{ padding: '10px', fontSize: '16px', marginRight: '10px' }} />
          <button onClick={handleAddTask} style={{ padding: '10px 20px', fontSize: '16px', backgroundColor: '#007BFF', color: '#fff', border: 'none', cursor: 'pointer' }} >
            Agregar
          </button>
        </div>
        <ul style={{ listStyleType: 'none', padding: '0', marginTop: '20px' }}>
          {tareas.map((tarea, index) => (
            <li key={index} style={{ backgroundColor: '#f4f4f4', margin: '10px auto', padding: '10px', maxWidth: '300px', borderRadius: '5px'}} >
              {tarea}
            </li>
          ))}
        </ul>
      </div>
      </>
  )
  }
      



export default App;
