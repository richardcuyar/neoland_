// Exporta la función `crearPokemonInfoCards` para que esté disponible en otros módulos.
export function crearPokemonInfoCards(pokemon) {
    // Crea un nuevo elemento `div` que servirá como contenedor o "tarjeta" para mostrar la información del Pokémon.
    const card = document.createElement("div");
  
    // Agrega la clase "card" al elemento `div`, permitiendo que puedas aplicar estilos específicos desde CSS.
    card.classList.add("card");
  
    const types = pokemon.types.map ((typeElement) => typeElement.type.name).join (',');

    // Define el contenido HTML dentro de la tarjeta. Se utiliza `innerHTML` para establecer este contenido.
    card.innerHTML = `
           <h3>${pokemon.name}</h3>
        <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}">
        <p><strong>Tipos:</strong> ${types}</p> <!-- Aseguramos que se muestra 'Tipos' de inmediato -->
      `;
  
    // Retorna la tarjeta completa (`card`) para que se pueda agregar a la interfaz en otro lugar del código.
    return card;
  }