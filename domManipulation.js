export function createCard(pokemonData) {
  const card = document.createElement("div");
  const container = document.querySelector(".container");
  container.appendChild(card);
  card.classList.add("pokemon-card");

  const voice = new Audio(pokemonData.cries.latest); //suono

  const name = document.createElement("h2");
  name.textContent = pokemonData.species.name;

  showType(pokemonData, card);

  card.appendChild(name);
}

//dava errore se mostravo due tipi ma il pokemon ne aveva uno solo
function showType(pokemonData, card) {
  const type1 = document.createElement("p");
  type1.textContent = pokemonData.types[0].type.name;
  card.appendChild(type1);

  if (pokemonData.types[1] != undefined) {
    const type2 = document.createElement("p");
    type2.textContent = pokemonData.types[1].type.name;
    card.appendChild(type2);
  }
}
