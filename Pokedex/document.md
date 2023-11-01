# Pokedex

## Pokedex UI & Styling

### HTML

1. **HTML Yapısı**:
    - Kod, bir **`<section>`** elementinin içinde bir Pokémon'u temsil eden bir **`<div>`** öğesini içerir.
2. **Pokemon Rengi**:
    - **`<div class="pokemon">`** elementi, arkaplan rengini belirlemek için **`style`** özelliği kullanır. Bu örnek, RGB(222, 253, 224) ile yeşil bir renk kullanır.
3. **Görsel İçerik**:
    - Pokemon'un görüntüsünü gösteren **`<img>`** öğesi, **`src`** özelliği ile bir resmin URL'sini içerir. Burada örnek bir resim URL'si bulunmaktadır, ancak genellikle gerçek Pokemon resimleri kullanılır.
4. **Pokemon Bilgileri**:
    - Pokemon'un numarası, ismi ve tipi, **`<div class="info">`** içinde bulunur. Bu bilgiler, ilgili etiketler (span, h3, small) ile biçimlenir.

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
    - Pokemon kartlarının bulunduğu container'ı stillemek için kullanılır.
    - **`display: flex`** ile içeriği yatayda hizalar.
    - **`flex-wrap: wrap`** ile içerik sığmazsa yeni satırlara kaymasını sağlar.
    - **`align-items: space-between`** ile öğeler arasında dikeyde boşluk bırakır.
    - **`justify-content: center`** ile öğeleri yatayda merkezler.
    - **`margin`** ve **`max-width`** ile kartların sınırlarını belirler.
2. **`section.poke-container .pokemon`**:
    - Her Pokemon kartını stillemek için kullanılır.
    - **`background-color`** ile kartların arkaplan rengini belirler.
    - **`margin`** ve **`padding`** ile kartların dış ve iç boşluklarını ayarlar.
    - **`text-align: center`** ile metinleri yatayda merkezler.
    - **`box-shadow`** ile hafif bir iç gölge efekti ekler.
3. **`section.poke-container .pokemon .img-container`**:
    - Pokemon görüntüsünü içeren bölümü stillemek için kullanılır.
    - **`background-color`** ile içerik alanının arkaplan rengini belirler.
    - **`border-radius`** ile içerik alanını yuvarlar.
    - **`width`** ve **`height`** ile içerik alanının boyutlarını sınırlar.
    - Pokemon görüntüsünü içeren **`<img>`** etiketini düzgün bir şekilde göstermek için **`max-width`** ve **`border-radius`** kullanır.
4. **`section.poke-container .pokemon .info .number`**:
    - Pokemon numarasını stillemek için kullanılır.
    - **`background-color`** ile arkaplan rengini belirler.
    - **`padding`** ile içerik etrafındaki iç boşluğu ayarlar.
    - **`border-radius`** ile köşeleri yuvarlar.
    - **`font-size`** ile metin boyutunu ayarlar.
5. **`section.poke-container .pokemon .info .name`**:
    - Pokemon adını stillemek için kullanılır.
    - **`margin`** ile metin üst ve alt boşluklarını ayarlar.
    - **`letter-spacing`** ile harf aralığını artırır.
6. **`section.poke-container .pokemon .info .type`**:
    - Pokemon tipini stillemek için kullanılır.
    - **`background-color`** ile arkaplan rengini belirler.
    - **`color`** ile metin rengini ayarlar.
    - **`padding`** ile içerik etrafındaki iç boşluğu ayarlar.
    - **`text-align: center`** ile metni yatayda merkezler.
    - **`border-radius`** ile köşeleri yuvarlar.

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

1. **HTML Elementi ve Değişkenler**:
    - **`poke_container`**, HTML belgesindeki "poke-container" adlı bir öğeye referans oluşturur.
    - **`pokemon_count`**, toplam kaç Pokemon verisi alınacağını belirtir.
    - **`colors`**, Pokemon türlerine göre renk kodlarını içeren bir nesnedir.
2. **Asenkron Veri Çekme**:
    - **`fetchPokemons`**, Pokemon verilerini çekmek için kullanılan asenkron bir işlevdir.
    - Bir döngü içinde Pokemon verilerini çekmek için **`getPokemon`** işlevini bekler.
    - Her Pokemon verisi çekildikten sonra bir sonraki Pokemon verisinin çekilmesini beklemek için **`await`** kullanılır.
3. **Pokemon Verilerini Almak**:
    - **`getPokemon`**, bir Pokemon'un verilerini çekmek için kullanılan asenkron bir işlevdir.
    - İlgili Pokemon'un API URL'si oluşturulur.
    - **`fetch`** fonksiyonu, Pokemon verilerini almak için bu URL'ye bir HTTP isteği yapar.
    - Yanıt JSON formatına dönüştürülür ve **`data`** değişkenine kaydedilir.
4. **Kullanım**:
    - Kod, Pokemon verilerini çekme sürecini başlatmak için **`fetchPokemons`**'ı çağırır

Bu kod parçası, harici bir API'den Pokemon verilerini çekmek için kullanılır. Bu veriler daha sonra bir uygulamada gösterilmek veya işlenmek üzere kullanılabilir. Örnek bir Pokemon uygulaması geliştirirken, bu verileri görsel olarak temsil etmek ve kullanıcılarla etkileşime girmek için kullanabilirsiniz

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

### Creating The Pokemon Cards

1. **`createPokemonCard` Fonksiyonu**:
    - Bu fonksiyon, bir Pokemon'un verilerini temel alarak bir Pokemon kartı oluşturur.
    - **`pokemonEl`** adında bir **`<div>`** öğesi oluşturur ve ona "pokemon" sınıfı ekler.
    - Pokémon adını büyük harfle başlatır ve ID'yi üç haneli bir şekilde düzenler.
    - Pokémon türünü ve istatistiklerini alır.
    - Arka plan rengini Pokémon türüne göre belirler.
    - **`pokemonInnerHTML`** içinde HTML şablonunu oluşturur ve **`pokemonEl`** öğesinin içeriğini ayarlar.
    - Son olarak, bu Pokémon kartını **`poke_container`** içine ekler.
2. **Fetch ile Pokémon Verilerini Getirme**:
    - **`fetchPokemons`** fonksiyonu, Pokemon verilerini çekmek için kullanılır.
    - Bir döngü içinde belirli bir aralıktaki Pokemon verilerini almak için **`getPokemon`** fonksiyonunu çağırır.
    - **`getPokemon`** fonksiyonu, belirli bir Pokemon'un verilerini çekmek için bir API çağrısı yapar ve sonra bu verilerle **`createPokemonCard`** fonksiyonunu çağırır.
3. **Arama Kutusu**:
    - Kullanıcıların Pokémon kartlarını adlarına göre aramalarını sağlayan bir arama kutusu (**`searchInput`**) ve arama düğmesi (**`searchBtn`**) vardır.
    - Kullanıcı bir kelime girdiğinde (**`input`** olayı dinlenir), Pokémon adlarıyla eşleşen kartları görüntülemek veya gizlemek için **`pokeNames`** adlı Pokémon adı içeren öğeleri dolaşır.

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
