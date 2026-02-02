document.addEventListener("DOMContentLoaded", () => {
  const API_URL = "https://pokeapi.co/api/v2/pokemon?limit=151&offset=0";
  const pokedexContainer = document.getElementById("pokedex");
  const searchInput = document.getElementById("searchInput");
  const typeFilters = document.getElementById("typeFilters");

  const typeLabels = {
    normal: "Normal",
    fire: "Fuego",
    water: "Agua",
    electric: "Eléctrico",
    grass: "Planta",
    ice: "Hielo",
    fighting: "Lucha",
    poison: "Veneno",
    ground: "Tierra",
    flying: "Volador",
    psychic: "Psíquico",
    bug: "Bicho",
    rock: "Roca",
    ghost: "Fantasma",
    dragon: "Dragón"
  };

  const typeColors = {
    all: "#f5f5f5",
    normal: "#a8a878",
    fire: "#f08030",
    water: "#6890f0",
    electric: "#f8d030",
    grass: "#78c850",
    ice: "#98d8d8",
    fighting: "#c03028",
    poison: "#a040a0",
    ground: "#e0c068",
    flying: "#a890f0",
    psychic: "#f85888",
    bug: "#a8b820",
    rock: "#b8a038",
    ghost: "#705898",
    dragon: "#7038f8"
  };

  let allPokemon = [];
  let selectedType = "all";

  init();

  async function init() {
    showStatus("Cargando Pokédex...");
    await loadPokemon();
    setupFilters();
    applyFilters();
  }

  async function loadPokemon() {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();

      const detailsPromises = data.results.map(async (pokemon) => {
        const detailResponse = await fetch(pokemon.url);
        const detail = await detailResponse.json();

        return {
          nombre: capitalize(detail.name),
          numero: detail.id,
          tipos: detail.types.map((t) => t.type.name),
          imagen:
            detail.sprites.other["official-artwork"].front_default ||
            detail.sprites.front_default
        };
      });

      allPokemon = await Promise.all(detailsPromises);
    } catch (error) {
      console.error("Error al cargar los datos de la PokéAPI", error);
      showStatus("No se pudieron cargar los Pokémon. Reintenta más tarde.");
    }
  }

  function setupFilters() {
    if (searchInput) {
      searchInput.addEventListener("input", applyFilters);
    }

    if (typeFilters) {
      const buttons = typeFilters.querySelectorAll(".filter-btn");
      buttons.forEach((btn) => {
        paintButton(btn);
        btn.addEventListener("click", () => {
          buttons.forEach((b) => b.classList.remove("active"));
          btn.classList.add("active");
          selectedType = btn.dataset.type || "all";
          applyFilters();
        });
      });
    }
  }

  function applyFilters() {
    const term = (searchInput?.value || "").trim().toLowerCase();
    const filtered = allPokemon.filter((pokemon) => {
      const matchesName = pokemon.nombre.toLowerCase().includes(term);
      const matchesType =
        selectedType === "all" || pokemon.tipos.includes(selectedType);
      return matchesName && matchesType;
    });

    renderPokemon(filtered);
  }

  function renderPokemon(list) {
    pokedexContainer.innerHTML = "";

    if (!list.length) {
      showStatus("No se encontraron Pokémon con esos filtros.");
      return;
    }

    for (const pokemonData of list) {
      const pokemonCard = createPokemonCard(pokemonData);
      pokedexContainer.appendChild(pokemonCard);
    }
  }

  function createPokemonCard(pokemonData) {
    const cardElement = document.createElement("div");
    cardElement.classList.add("pokemon-card");

    const imageElement = document.createElement("img");
    imageElement.src = pokemonData.imagen;
    imageElement.alt = pokemonData.nombre;
    imageElement.loading = "lazy";
    imageElement.addEventListener("error", function () {
      imageElement.removeAttribute("src");
      imageElement.alt = "Imagen no disponible";
    });

    const nameElement = document.createElement("h2");
    nameElement.textContent = pokemonData.nombre;

    const numberElement = document.createElement("p");
    numberElement.textContent = "N.º " + formatPokemonNumber(pokemonData.numero);

    const typeElement = document.createElement("p");
    typeElement.textContent = "Tipo: " + formatTypes(pokemonData.tipos);

    cardElement.appendChild(imageElement);
    cardElement.appendChild(nameElement);
    cardElement.appendChild(numberElement);
    cardElement.appendChild(typeElement);

    return cardElement;
  }

  function formatPokemonNumber(pokemonNumber) {
    return String(pokemonNumber).padStart(3, "0");
  }

  function formatTypes(types) {
    return types.map((t) => typeLabels[t] || capitalize(t)).join(" / ");
  }

  function capitalize(text) {
    return text.charAt(0).toUpperCase() + text.slice(1);
  }

  function showStatus(message) {
    pokedexContainer.innerHTML = `<p>${message}</p>`;
  }

  function paintButton(btn) {
    const type = btn.dataset.type || "all";
    const baseColor = typeColors[type] || "#dddddd";
    btn.style.backgroundColor = baseColor;
    btn.style.color = ["all", "ground", "electric"].includes(type) ? "#222" : "#fff";
  }
});
