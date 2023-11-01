const poke_container = document.getElementById('poke-container');
const searchInput = document.querySelector('.searchInput');
const searchBtn = document.querySelector('#searchBtn');
const pokemon_count = 150;
const colors = { fire: '#dc7c6e', grass: '#91caae', electric: '#f8db7e', water: '#6b8fba', ground: '#A16932', rock: '#A6A6A6', fairy: '#f8cfd4', poison: '#885f7e', bug: '#dddddd', dragon: '#97b3e6', psychic: '#f5d957', flying: '#f5f5f5', fighting: '#bcaba7', normal: '#f7edcf', ice: '#073989', ghost: '#ffffff' };

const fetchPokemons = async () => {
  for (let i = 1; i <= pokemon_count; i++) {
    await getPokemon(i);
  }
};

const getPokemon = async (id) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const res = await fetch(url);
  const data = await res.json();
  createPokemonCard(data);
};

const createPokemonCard = (pokemon) => {
  const pokemonEl = document.createElement('div');
  pokemonEl.classList.add('pokemon');

  const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
  const id = pokemon.id.toString().padStart(3, '0');
  const poke_type = pokemon.types[0].type.name;
  const statAttack = pokemon.stats[1].base_stat;
  const statDef = pokemon.stats[2].base_stat;
  const statHp = pokemon.stats[0].base_stat;
  const color = colors[pokemon.types[0].type.name];
  const pokemonInnerHTML = `
    <div class="img-container">
        <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/${id}.png" alt="">
    </div>
    <div class="info">
      <span class="number">#${id}</span>
      <h3 class="name">${name}</h3>
      <small class="type">${poke_type}</small>
    </div>
    <div class="war-info">
      <span class="hp-info"><strong>HP</strong>${statHp}</span>
      <span class="attack-info"><strong>ATK</strong>${statAttack}</span>
      <span class="def-info"><strong>DEF</strong>${statDef}</span>
    </div>
  `;

  pokemonEl.innerHTML = pokemonInnerHTML;

  poke_container.appendChild(pokemonEl);
  let styleCard = (color) => {
    pokemonEl.style.background = `radial-gradient(circle at 50% 0%, ${color} 36%, #ffffff 36%)`;
  };
  styleCard(color);
};

fetchPokemons();

searchInput.addEventListener('input', function (e) {
  const pokeNames = document.querySelectorAll('.name');
  const search = searchInput.value.toLowerCase();

  pokeNames.forEach((element) => {
    element.parentElement.parentElement.style.display = 'block';
    if (!element.innerHTML.toLowerCase().includes(search)) {
      element.parentElement.parentElement.style.display = 'none';
    }
  });
});
