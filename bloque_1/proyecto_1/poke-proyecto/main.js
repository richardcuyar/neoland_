renderLogin();


import { pedirPokemons, pedirMasInfoDelPokemon } from "./utils/api";
import { crearPokemonInfoCards } from "./components/Card";
import{buscarPokemon} from "./utils/buscador"


const pokemonContainer = document.getElementById("pokemon-container");


async function cargarPokemons() {
  
  const pokemons = await pedirPokemons();

  
  const pokemosConMasInfo = await Promise.all(
    pokemons.map((pokemon) => {
       pedirMasInfoDelPokemon(pokemon.url);
    })
  );

  
  console.log("🚀 ~ pokemosConMasInfo ~ pokemosConMasInfo:", pokemosConMasInfo);

  pokemosConMasInfo.forEach((pokemon) => {
    const card = crearPokemonInfoCards(pokemon);

    console.log("🚀 ~ pokemosConMasInfo.forEach ~ card:", card);

    pokemonContainer.appendChild(card);
  });
}

export function renderLogin() {
  const isLogin= localStorage.getItem("loggedIn");
  if (isLogin !== "true"){
   window.location.href = "./components/login/login.html";
  }
  
 }





document.addEventListener('DOMContentLoaded', () => {
  const input = document.querySelector('#search'); 
  let resultadoDiv = document.querySelector('#resultado'); 

  if (!resultadoDiv) {
      resultadoDiv = document.createElement('div');
      resultadoDiv.id = 'resultado';  
      document.body.appendChild(resultadoDiv);  
  }
console.log(resultadoDiv )
  
  input.addEventListener('input', async (event) => {
      const query = event.target.value;

      if (query.trim() === '') {
          resultadoDiv.innerHTML = ''; 
          return;
      }

      const pokemon = await buscarPokemon(query);

      if (pokemon) {
          resultadoDiv.innerHTML = `
              <div class= "card resultado-card">
              <h3>${pokemon.name.toUpperCase()}</h3>
              <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}">
              <p>Tipo(s): ${pokemon.types.map(type => type.type.name).join(', ')}</p>
              </div>
              `;
      } else {
          resultadoDiv.innerHTML = '<p>Pokémon no encontrado.</p>';
      }
  });
});

cargarPokemons();



import { obtenerPokemons, filtrarPorTipo, inicializarFiltro } from "./utils/filtro";

document.addEventListener('DOMContentLoaded', () => {
  inicializarFiltro();  
});


const typeFilter = document.getElementById('type-filter');
typeFilter.addEventListener('change', filtrarPorTipo); 