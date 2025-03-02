const input = document.getElementById("pokemon");
const btn = document.getElementById("btn");
const btnOrder = document.getElementById("btn-order")

const inputType = document.getElementById("type");
const btnType = document.getElementById("btn-type");
let database =[]

async function recuperaPokemon(nome) {
  try {
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
    database =[]
    pokeLista.forEach((x) => recuperaPokemon(x));
  } catch (error) {
    console.error(error);
  }
}
function orderPokemon(array) {
    array.sort((a,b)=> a.name - b.name)
    array.forEach(x=> console.log(x.name))
    renderizzaDati(database)
}

function renderizzaDati(pokemons) {
    pokemons.forEach(pokemon => {
const div = document.createElement("div");
div.classList.add("card");
const h1 = document.createElement("h1");
const img = document.createElement("img");
const p = document.createElement("p");
const container = document.querySelector(".container");
const types = pokemon.types.map((x) => x.type.name);
const immagine = pokemon.sprites.front_default;
const name = pokemon.name;
h1.textContent = name;
img.setAttribute("src", immagine);
p.textContent = types.join(", ");
div.appendChild(h1);
div.appendChild(img);
div.appendChild(p);
container.appendChild(div);
database = []
    })
  
}

btn.addEventListener("click", () => {
  const nome = input.value;
  recuperaPokemon(nome);
});
btnType.addEventListener("click", () => {
  const tipo = inputType.value;
  recuperaTipi(tipo);
});
btnOrder.addEventListener("click", () =>{
    orderPokemon(database);
   
})
