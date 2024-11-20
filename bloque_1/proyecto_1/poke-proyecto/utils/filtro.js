const API_URL = 'https://pokeapi.co/api/v2/';

let pokemons = [];  
let tiposUnicos = new Set();  

export async function obtenerPokemons() {
  try {
    let nextUrl = `${API_URL}pokemon?limit=100`; 
    let pokemonsBatch = [];

    while (nextUrl) {
      const response = await fetch(nextUrl);
      if (!response.ok) throw new Error(`Error al cargar Pokémon: ${response.statusText}`);
      
      const data = await response.json();
      const pokemonPromises = data.results.map(async (pokemon) => {
        const pokemonData = await fetch(pokemon.url);
        if (!pokemonData.ok) throw new Error(`Error al cargar detalles de Pokémon: ${pokemonData.statusText}`);
        
        const pokemonDetails = await pokemonData.json();
        return {
          name: pokemonDetails.name,
          type: pokemonDetails.types.map(t => t.type.name) ,
          image: pokemonDetails.sprites.front_default 
        };
      });

      
      pokemonsBatch = await Promise.all(pokemonPromises);
      pokemons = [...pokemons, ...pokemonsBatch];

      
      nextUrl = data.next;
    }

    
    cargarTipos();

    
    mostrarPokemons(pokemons);
  } catch (error) {
    console.error('Error al obtener los Pokémon:', error);
    pokemonContainer.innerHTML = '<p>Hubo un problema al cargar los Pokémon. Intenta de nuevo más tarde.</p>';
  }
}


export function cargarTipos() {
  
  pokemons.forEach(pokemon => {
    pokemon.type.forEach(tipo => tiposUnicos.add(tipo));
  });

  
  const tiposOrdenados = Array.from(tiposUnicos).sort();

 
  const typeFilter = document.getElementById('type-filter');
  typeFilter.innerHTML = '<option value="">Filtrar por Tipo</option>';

  
  tiposOrdenados.forEach(tipo => {
    const option = document.createElement('option');
    option.value = tipo;
    option.textContent = tipo.charAt(0).toUpperCase() + tipo.slice(1); 
    typeFilter.appendChild(option);
  });
}


export function mostrarPokemons(pokemonsFiltrados) {
  const pokemonContainer = document.getElementById('pokemon-container');
  
  pokemonContainer.innerHTML = '';

  if (pokemonsFiltrados.length === 0) {
    pokemonContainer.innerHTML = '<p>No se encontraron Pokémons para este filtro.</p>';
  }

  pokemonsFiltrados.forEach(pokemon => {
    const pokemonElement = document.createElement('div');
    pokemonElement.classList.add('card');
    pokemonElement.innerHTML = `
      <h3>${pokemon.name}</h3>
      <p>Tipos: ${pokemon.type.join(', ')}</p>
      <img src="${pokemon.image}" alt="${pokemon.name}">
    `;
    pokemonContainer.appendChild(pokemonElement);
  });
}

export function filtrarPorTipo() {
  
  const tipoSeleccionado = document.getElementById('type-filter').value;

  const pokemonsFiltrados = tipoSeleccionado ? 
    pokemons.filter(pokemon => pokemon.type.includes(tipoSeleccionado)) : 
    pokemons;

  mostrarPokemons(pokemonsFiltrados);
}

export function inicializarFiltro() {
  obtenerPokemons();
}