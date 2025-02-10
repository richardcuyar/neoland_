import React, { useState, useEffect } from 'react';

function UserList() {
  const [usuarios, setUsuarios] = useState([]); // Estado para la lista de usuarios
  const [busqueda, setBusqueda] = useState(''); // Estado para el filtro de búsqueda

  // Obtener usuarios al montar el componente
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        setUsuarios(data);
      } catch (error) {
        console.error('Error al obtener los usuarios:', error);
      }
    };

    fetchUsers();
  }, []);

  // Manejar el cambio en el cuadro de búsqueda
  const handleSearch = (e) => {
    setBusqueda(e.target.value);
  };

  // Filtrar usuarios según la búsqueda
  const usuariosFiltrados = usuarios.filter((usuario) =>
    usuario.name.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Buscar usuario por nombre"
        value={busqueda}
        onChange={handleSearch}
        style={{ padding: '10px', width: '80%', marginBottom: '20px' }}
      />
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {usuariosFiltrados.map((usuario) => (
          <li key={usuario.id} style={{ margin: '10px 0', fontSize: '18px' }}>
            {usuario.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
