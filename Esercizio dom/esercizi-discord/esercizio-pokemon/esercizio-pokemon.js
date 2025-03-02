const input = document.getElementById("pokemon");
const btn = document.getElementById("btn");
const btnOrder = document.getElementById("btn-order");
const inputType = document.getElementById("type");
const btnType = document.getElementById("btn-type");
const container = document.querySelector(".container");

const selectType = document.getElementById("select-type");

let database = [];

async function recuperaPokemon(nome) {
  try {
    container.innerHTML = "";
    database = [];
    const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${nome}`);
    const result = await data.json();
    database.push(result);
    renderizzaDati(database);
  } catch (error) {
    console.error(error);
  }
}

async function recuperaTipi(tipo) {
  try {
    const data = await fetch(`https://pokeapi.co/api/v2/type/${tipo}`);
    const result = await data.json();
    const pokeLista = result.pokemon.map((x) => x.pokemon.name);
    database = [];
    container.innerHTML = "";
    pokeLista.forEach((x) => recuperaPokemon(x));
  } catch (error) {
    console.error(error);
  }
}

function orderPokemon() {
  database.sort((a, b) => a.name.localeCompare(b.name));
  // database.sort((a,b)=> a.name > b.name ? 1:-1)
  container.innerHTML = "";
  renderizzaDati(database);
}

function renderizzaDati(pokemons) {
  container.innerHTML = "";
  pokemons.forEach((pokemon) => {
    const div = document.createElement("div");
    div.classList.add("card");
    const h1 = document.createElement("h1");
    h1.textContent = pokemon.name;
    const img = document.createElement("img");
    img.setAttribute("src", pokemon.sprites.front_default);
    const pTypes = document.createElement("p");
    const types = pokemon.types.map((x) => x.type.name);
    pTypes.textContent = types.join(", ");

    const pAbilities = document.createElement("p");
    const abilities = pokemon.abilities.map((x) => x.ability.name);
    pAbilities.textContent = "Abilità: " + abilities.join(", ");

    // cambia il colore dello sfondo in base al primo tipo del pokemon
    const typeColors = {
      grass: "#78C850",
      fire: "#F08030",
      water: "#6890F0",
      electric: "#F8D030",
      ice: "#98D8D8",
      fighting: "#C03028",
      poison: "#A040A0",
      ground: "#E0C068",
      flying: "#A890F0",
      psychic: "#F85888",
      bug: "#A8B820",
      rock: "#B8A038",
      ghost: "#705898",
      dragon: "#7038F8",
      dark: "#705848",
      steel: "#B8B8D0",
      fairy: "#EE99AC",
      normal: "#e6e6e6"
    };
     div.style.backgroundColor = typeColors[types[0]] 
     
    
    
    div.appendChild(h1);
    div.appendChild(img);
    div.appendChild(pTypes);
    div.appendChild(pAbilities);
    container.appendChild(div);
  });
}

async function selezionaTipi() {
  try {
    const data = await fetch(`https://pokeapi.co/api/v2/type/`);
    const result = await data.json();
    result.results.forEach((x) => {
      const option = document.createElement("option");
      option.value = x.name;
      option.innerHTML = x.name;
      selectType.appendChild(option);
    });
  } catch (error) {
    console.error(error);
  }
}
selezionaTipi();

btn.addEventListener("click", () => {
  const nome = input.value.trim().toLowerCase();
  if (nome) recuperaPokemon(nome);
});

btnType.addEventListener("click", () => {
  const tipo = inputType.value.trim().toLowerCase();
  if (tipo) recuperaTipi(tipo);
});

btnOrder.addEventListener("click", orderPokemon);


selectType.addEventListener("change", () => {
  const tipoSelezionato = selectType.value;
  if (tipoSelezionato) recuperaTipi(tipoSelezionato);
});


