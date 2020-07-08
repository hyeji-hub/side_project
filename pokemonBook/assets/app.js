const typeFilterBtn = document.querySelector(".navbar__type");
const pokemonContainer = document.querySelector(".book__pokemons");
const pokemons = pokemonContainer.querySelectorAll(".book__pokemons__pokemon");

typeFilterBtn.addEventListener("click", (event) => {
  const target = event.target;
  const typeFilter = target.dataset.filter;

  if (typeFilter == null) {
    return;
  }

  pokemonContainer.classList.add("anim-out");
  setTimeout(() => {
    pokemons.forEach((pokemon) => {
      if (typeFilter === "*" || typeFilter === pokemon.dataset.type) {
        pokemon.classList.remove("invisible");
      } else {
        pokemon.classList.add("invisible");
      }
    });
    pokemonContainer.classList.remove("anim-out");
  }, 300);
});

const levelFilterBtn = document.querySelector(".navbar__evolution");

levelFilterBtn.addEventListener("click", (event) => {
  const target = event.target;
  const levelFilter = target.dataset.evolution;

  if (levelFilter == null) {
    return;
  }

  pokemonContainer.classList.add("anim-out");

  setTimeout(() => {
    pokemons.forEach((pokemon) => {
      if (levelFilter === pokemon.dataset.level) {
        pokemon.classList.remove("invisible");
      } else {
        pokemon.classList.add("invisible");
      }
    });
    pokemonContainer.classList.remove("anim-out");
  }, 300);
});
