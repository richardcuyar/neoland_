// ejercicio saludar con nombre y apellido
import { useState } from 'react'
import './App.css'
import Saludar from './components/saludar'

function App() {
  // count (Variable para almacenar un valor) setCount (Función para actualizar el valor)
  const [nombre, setNombre ] = useState('Nombre por defecto') // 0 es el valor inicial
  const [apellido, setApellido] = useState ('Apellido por defecto')

  return (
    <>
      <input type="text" placeholder="Nombre" onChange={(event)=>setNombre(event.target.value)} />
      <input type="text" placeholder="Apellido" onChange={(event)=>setApellido(event.target.value)}/>

      <h1>
        <Saludar nombre={nombre} apellido={apellido} />
      </h1>
    </>
  )
}

export default App