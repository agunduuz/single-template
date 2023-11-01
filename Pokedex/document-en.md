# Pokedex

## Pokedex UI & Styling

### **HTML**

1. **HTML Structure**:
    - The code contains a **`<div>`** element representing a Pokémon inside a **`<section>`** element.
2. **Pokemon Color**:
    - The **`<div class="pokemon">`** element uses the **`style`** attribute to set the background color. In this example, it uses a green color with RGB(222, 253, 224).
3. **Visual Content**:
    - The **`<img>`** element displaying the Pokémon's image includes a **`src`** attribute with the URL of an image. In practice, real Pokémon images are typically used.
4. **Pokemon Information**:
    - The Pokémon's number, name, and type are contained within the **`<div class="info">`**. These details are formatted using relevant tags (span, h3, small).

```html
<section class="poke-container" id="poke-container">
        <div class="pokemon" style="background-color: rgb(222, 253, 224);">
            <div class="img-container">
                <img src="https://fakeimg.pl/230x230/282828/eae0d0/?retina=1&text=Problem?%20%3C%3Apepw%3A989410572514758676%3E" alt="">
            </div>
            <div class="info">
                <span class="number">#001</span>
                <h3 class="name">Bulbasaur</h3>
                <small class="type">grass</small>
            </div>
        </div>
    </section>
```

### CSS

1. **`section.poke-container`**:
    - Used to style the container for Pokémon cards.
    - **`display: flex`** horizontally aligns the content.
    - **`flex-wrap: wrap`** allows content to wrap to new rows if it overflows.
    - **`align-items: space-between`** adds vertical spacing between items.
    - **`justify-content: center`** horizontally centers the items.
    - **`margin`** and **`max-width`** set boundaries for the cards.
2. **`section.poke-container .pokemon`**:
    - Used to style each individual Pokémon card.
    - **`background-color`** sets the background color of the cards.
    - **`margin`** and **`padding`** define the outer and inner spacing of the cards.
    - **`text-align: center`** centers text horizontally.
    - **`box-shadow`** adds a subtle inner shadow effect.
3. **`section.poke-container .pokemon .img-container`**:
    - Used to style the section containing the Pokémon's image.
    - **`background-color`** sets the background color of the content area.
    - **`border-radius`** rounds the content area.
    - **`width`** and **`height`** restrict the dimensions of the content area.
    - Uses **`max-width`** and **`border-radius`** to display the Pokémon image properly within an element.
4. **`section.poke-container .pokemon .info .number`**:
    - Used to style the Pokémon's number.
    - **`background-color`** sets the background color.
    - **`padding`** defines the padding around the content.
    - **`border-radius`** rounds the corners.
    - **`font-size`** sets the text size.
5. **`section.poke-container .pokemon .info .name`**:
    - Used to style the Pokémon's name.
    - **`margin`** adjusts top and bottom margins.
    - **`letter-spacing`** increases letter spacing.
6. **`section.poke-container .pokemon .info .type`**:
    - Used to style the Pokémon's type.
    - **`background-color`** sets the background color.
    - **`color`** defines the text color.
    - **`padding`** specifies padding around the content.
    - **`text-align: center`** centers the text horizontally.
    - **`border-radius`** rounds the corners.

```css
section.poke-container {
  display: flex;
  flex-wrap: wrap;
  align-items: space-between;
  justify-content: center;
  margin: 0 auto;
  max-width: 1200px;
}

section.poke-container .pokemon {
  background-color: #abf3b1;
  margin: 10px;
  padding: 20px 30px;
  text-align: center;
  box-shadow: inset 0 0 10px #160a2a,inset 0 0 10px #160a2a;
}

section.poke-container .pokemon .img-container {
  background-color: rgba(179, 15, 15, 0.6);
  border-radius: 50%;
  width: 150px;
  height: 150px;
  text-align: center;
}
section.poke-container .pokemon .img-container img {
  max-width: 100%;
  border-radius: 50%;
}
section.poke-container .pokemon .info {
  margin-top: 20px;
}

section.poke-container .pokemon .info .number {
  background-color: #0000001f;
  padding: 5px 10px;
  border-radius: 7px;
  font-size: 0.8em;
  color: #160a2a;
}

section.poke-container .pokemon .info .name {
  margin: 15px 0 7px;
  letter-spacing: 1px;
  color: #160a2a;
}

section.poke-container .pokemon .info .type{
    background-color: #160a2a;
    color: #F7B158;
    padding: 5px 10px;
    text-align: center;
    border-radius: 20px;
}
```

## Fetching Pokemon Data

1. **HTML Element and Variables**:
    - **`poke_container`** creates a reference to an HTML element with the id "poke-container" in the document.
    - **`pokemon_count`** specifies how many sets of Pokemon data will be retrieved.
    - **`colors`** is an object containing color codes for different Pokemon types.
2. **Asynchronous Data Retrieval**:
    - **`fetchPokemons`** is an asynchronous function used to fetch Pokemon data.
    - It waits for the **`getPokemon`** function within a loop to retrieve Pokemon data.
    - The **`await`** keyword is used to wait for each set of Pokemon data to be fetched before moving on to the next.
3. **Fetching Pokemon Data**:
    - **`getPokemon`** is an asynchronous function used to fetch data for a single Pokemon.
    - It constructs the API URL for the specific Pokemon.
    - The **`fetch`** function makes an HTTP request to this URL to retrieve Pokemon data.
    - The response is converted to JSON format and stored in the **`data`** variable.
4. **Usage**:
    - The code calls **`fetchPokemons`** to initiate the process of fetching Pokemon data.

This code segment is used to retrieve Pokemon data from an external API. This data can later be used for display or processing within an application. When developing a Pokemon-related application, you can utilize this data to represent it visually and engage with users.

```jsx
const poke_container = document.getElementById('poke-container');
const pokemon_count = 150;
const colors = { fire: '#fec2c2', grass: '#defde0', electric: '#fcf7de', water: '#def3fd', ground: '#f4e7da', rock: '#d5d5d4', fairy: '#fceaff', poison: '#98d7a5', bug: '#f8d5a3', dragon: '#97b3e6', psychic: '#eaeda1', flying: '#f5f5f5', fighting: '#e6e0d4', normal: '#f5f5f5' };

const fetchPokemons = async () => {
  for (let i = 1; i <= pokemon_count; i++) {
    await getPokemon(i);
  }
};

const getPokemon = async () => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const res = await fetch(url);
  const data = await res.json();
};

fetchPokemons();
```

## Creating The Pokemon Cards

1. **`createPokemonCard` Function**:
    - This function creates a Pokemon card based on a Pokemon's data.
    - It creates a **`<div>`** element called **`pokemonEl`** and adds the "pokemon" class to it.
    - Capitalizes the Pokemon's name and formats the ID as a three-digit number.
    - Retrieves the Pokemon's type and statistics.
    - Determines the background color based on the Pokemon's type.
    - Constructs an HTML template within **`pokemonInnerHTML`** and sets the content of the **`pokemonEl`** element.
    - Finally, it appends this Pokemon card to the **`poke_container`**.
2. **Fetching Pokemon Data with Fetch**:
    - The **`fetchPokemons`** function is used to fetch Pokemon data.
    - It calls the **`getPokemon`** function in a loop to fetch data for Pokemon within a specific range.
    - The **`getPokemon`** function makes an API call to retrieve data for a specific Pokemon and then calls the **`createPokemonCard`** function with this data.
3. **Search Box**:
    - There is a search input (**`searchInput`**) and a search button (**`searchBtn**) that allows users to search for Pokemon cards by their names.
    - When a user enters a search term (listening for the **`input`** event), it iterates through elements containing Pokemon names (**`pokeNames****) to display or hide cards matching the entered search term.

```jsx
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
```
