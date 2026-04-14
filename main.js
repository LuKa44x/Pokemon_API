import { fetchPokemon } from "./fetch.js";
import { createCard } from "./domManipulation.js";
const pokemon = prompt("Enter the name of a Pokémon:");
const data = await fetchPokemon(pokemon);
console.log(data);
createCard(data);
