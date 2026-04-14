import { fetchPokemon } from "./fetch.js";
import { createCard } from "./domManipulation.js";
const startBtn = document.querySelector(".pokemon-button");

startBtn.addEventListener("click", async () => {
  const pokemon = document
    .getElementById("pokemon-input")
    .value.trim()
    .toLowerCase();

  const data = await fetchPokemon(pokemon);
  console.log(data);
  createCard(data);
});
