# Insect Catch Game

## Game Styling

### HTML

1. **Ekran Bölümleri (Screen Sections):**
    - HTML belgesi, üç farklı ekran bölümünü içerir: başlangıç ekranı, böcek seçme ekranı ve oyun ekranı.
    - Her bir ekran bölümü, **`<section>`** etiketi ile ayrılmıştır.
2. **Başlangıç Ekranı (Start Screen):**
    - **Catch The Insect** başlığını içeren bir **`<h1>`** başlık etiketi bulunur.
    - Oyunu başlatan bir buton, **Play Game**, **`<button>`** etiketi ile ekran üzerinde yer alır.
    - Bu butonun **`id="start-btn"`** özelliği, JavaScript tarafında erişim sağlar.
3. **Böcek Seçme Ekranı (Insect Selection Screen):**
    - **What is your "favourite" insect?** başlıklı bir **`<h1>`** başlık etiketi bulunur.
    - Böceklerin listelendiği bir **`<ul>`** (liste) bulunur.
    - Her böcek, bir **`<li>`** (liste öğesi) içinde bir butonla temsil edilir.
    - Her buton, bir böcek adını ve resmini içeren **`<p>`** (paragraf) ve **`<img>`** (resim) etiketlerini içerir.
    - Böcek butonları, sınıf adı **`choose-insect-btn`** ile stilize edilmiştir.
4. **Oyun Ekranı (Game Screen):**
    - **`game-container`** sınıfına sahip bir oyun ekranı bulunur.
    - Oyunun süresini ve oyuncunun skorunu gösteren iki **`<h3>`** başlık etiketi vardır.
    - Bir **`<h5>`** başlık etiketi, oyunun zorluğunu anlatan bir mesaj içerir.
    - JavaScript ile bu ekranın içeriği dinamik olarak güncellenir.
5. **JavaScript Entegrasyonu:**
    - Sayfanın işlevselliği, başta başlangıç ekranı olmak üzere JavaScript kullanılarak dinamik olarak yönetilir.
    - Böcek seçme ekranındaki butonlar ve oyun ekranındaki bilgiler, JavaScript ile güncellenir.

```html
<section class="screen">
  <h1 class="title">Catch The Insect</h1>
  <button class="btn" id="start-btn">Play Game</button>
</section>

<section class="screen">
  <h1 class="title">What is your "favourite" insect?</h1>
  <ul class="insects-list">
    <li class="list-item">
      <button class="choose-insect-btn">
        <p class="name">Fly</p>
        <img src="http://pngimg.com/uploads/fly/fly_PNG3946.png" alt="fly" class="image">
      </button>
    </li>
    <li class="list-item">
      <button class="choose-insect-btn">
        <p class="name">Mosquito</p>
        <img src="http://pngimg.com/uploads/mosquito/mosquito_PNG18175.png" alt="mosquito" class="image">
      </button>
    </li>
    <li class="list-item">
      <button class="choose-insect-btn">
        <p class="name">Spider</p>
        <img src="http://pngimg.com/uploads/spider/spider_PNG12.png" alt="spider" class="image">
      </button>
    </li>
    <li class="list-item">
      <button class="choose-insect-btn">
        <p class="name">Roach</p>
        <img src="http://pngimg.com/uploads/roach/roach_PNG12163.png" alt="roach" class="image">
      </button>
    </li>
  </ul>
</section>

<section class="screen game-container" id="game-container">
  <h3 id="time" class="time">Time: 00:00</h3>
  <h3 id="score" class="score">Score: 0</h3>
  <h5 id="message" class="message ">
      Are you annoyed yet? <br> You are playing an impossible game!
  </h5>
</section>
```

### CSS

1. **Ekran Stilleri (Screen Styles):**
    - Ekran bölümleri **`.screen`** sınıfı ile stilize edilmiştir.
    - **`display: flex`** ile içeriği dikey olarak hizalar.
    - **`align-items: center`** ve **`justify-content: center`** ile içeriği merkeze alır.
    - **`height: 100vh`** ve **`width: 100vw`** ile ekranın tamamını kaplar.
    - Ekran geçişleri yumuşak bir geçiş efekti ile sağlanır: **`transition: margin 0.5s ease-out`**.
2. **Buton Stilleri (Button Styles):**
    - Butonlar **`.btn`** sınıfı ile stilize edilmiştir.
    - Şeffaf arka plan, detay renginde kenarlık, gölge ve vurgulu metin içerir.
    - Hover efekti ile opaklık değişimi sağlanmıştır.
3. **Böcek Seçme Ekranı Stilleri (Insect Selection Styles):**
    - Böcek listesi, **`.insects-list`** ve **`.list-item`** sınıfları ile düzenlenir.
    - Böcek butonları, belirli bir stil ve boyutla tasarlanmıştır.
    - Hover ve active durumları için renk değişimleri eklenmiştir.
4. **Oyun Ekranı Stilleri (Game Screen Styles):**
    - Oyun ekranı **`.game-container`** sınıfı ile stilize edilmiştir.
    - Oyun süresi ve skor bilgileri, konumlandırma ve renk kullanılarak belirginleştirilmiştir.
    - Oyun mesajı, saydamlık, arka plan rengi ve geçiş efekti ile görünürlük kontrolü sağlar.
    - Böceklerin stil ve animasyonları, interaktif kullanımı vurgular.

```css
section.screen{ display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100vh; width: 100vw; transition: margin 0.5s ease-out; }
section.screen.up{margin-top:-100vh}
section.screen.game-container{position: relative;}

section.screen .btn{ border: 0; background-color: var(--detail-color); box-shadow: 0 0 5px var(--detail-color), 0 0 5px var(--detail-color); color: #1e2228; padding: 15px 20px; font-family: inherit; cursor: pointer; font-weight: bold; border-radius: 5px; outline: 0; }
section.screen .btn:hover{opacity: 0.9;}

section.screen .title{line-height: 1.4; margin: 5px 0;}

section.screen .insects-list{display: flex; flex-wrap: wrap; justify-content: center;list-style-type: none; padding: 0;}
section.screen .insects-list .list-item{margin: 10px;}
section.screen .insects-list .list-item .choose-insect-btn{ background-color: transparent;border: 2px solid var(--primary-color); color: var(--font-color);cursor: pointer; font-family: inherit; width: 150px; height: 150px; border-radius: 5px; box-shadow: 0 0 5px var(--primary-color), 0 0 5px var(--primary-color); }
section.screen .insects-list .list-item .choose-insect-btn:hover{ background-color: var(--primary-color);}
section.screen .insects-list .list-item .choose-insect-btn:active{ background-color: rgba(43, 52, 150, 0.7); }
section.screen .insects-list .list-item .choose-insect-btn .image{ width: 100px; height: 100px; object-fit: contain; }

section.screen .time,
section.screen .score{position: absolute;top: 20px;}
section.screen .time{left: 20px;}
section.screen .score{right: 20px;}
section.screen .message{line-height: 1.7;background-color: rgba(0, 0,0, 0.4);width: 100%; padding: 20px; z-index: 100; text-align: center; opacity: 0; position: absolute;top: 0; left: 50%; transform: translate(-50%, -150%);transition: transform 0.4s ease-in; font-weight: lighter; color: var(--detail-color); box-shadow: 0 0 5px var(--detail-color), 0 0 5px var(--detail-color); }
section.screen .message.visible{opacity: 1;transform: translate(-50%, 150%);}
section.screen .insect{display: flex; align-items: center;justify-content: center; width: 100px; height: 100px; position: absolute; transform: translate(-50px, -50%) scale(1); cursor: pointer;transition:  transform 0.3s ease-in-out;}
section.screen .insect.caught{transform: translate(-50px, -50%) scale(0);}
section.screen .insect .insect-img{ width: 100px; height: 100px; }
```

## Insect Game Functionality

1. **Ekran ve Buton İşlevselliği:**
    - Ekranlar ve butonlar, belirli sınıflar ve HTML öğeleri üzerinden DOM'a erişilerek kontrol edilir.
    - Başlangıç butonu (**`start_btn`**) tıklandığında, ilk ekran yukarı doğru kaydırılır (**`up`** sınıfı eklenir).
2. **Böcek Seçme İşlevselliği:**
    - Böcek seçme butonları (**`choose_insect_btns`**), her biri için click olayları dinlenir.
    - Seçilen böcek bilgileri (**`selected_insect`**) belirlenir ve ikinci ekran yukarı doğru kaydırılır.
    - Böcek yaratma fonksiyonu (**`createInsect`**) ve oyunu başlatma fonksiyonu (**`startGame`**) çağrılır.
3. **Oyun Zamanı ve Skor Takibi:**
    - **`startGame`** fonksiyonu, belirli aralıklarla oyun zamanını artırır ve zamanı ekranda gösterir.
    - Böcek yakalama işlevi (**`catchInsect`**), skoru artırır, yakalanan böceği ekrandan kaldırır ve yeni böcekler ekler.
    - Skor 20'ye ulaştığında bir mesaj gösterilir ve oyun sona erer.
4. **Rastgele Konumda Böcek Oluşturma:**
    - **`createInsect`** fonksiyonu, seçilen böceği rastgele bir konumda ekrana ekler.
    - Böceklerin dönme efekti, rastgele konumda belirtilen açı ile sağlanır.
5. **Rastgele Konum Üretme Fonksiyonu:**
    - **`getRandomLocation`** fonksiyonu, pencerenin içinde rastgele bir konumu döndürerek böceklerin farklı yerlerde olmasını sağlar.
6. **Skor Artırma ve Mesaj Gösterme:**
    - **`increaseScore`** fonksiyonu, skoru artırır ve belirli bir noktada mesaj gösterir.
    - Mesaj, CSS geçiş efekti ile belirginleştirilir.

```jsx
const screens = document.querySelectorAll('.screen');
const choose_insect_btns = document.querySelectorAll('.choose-insect-btn');
const game_container = document.getElementById('game-container');
const start_btn = document.getElementById('start-btn');
const timeEl = document.getElementById('time');
const scoreEl = document.getElementById('score');
const message = document.getElementById('message');

let seconds = 0;
let score = 0;
let selected_insect = {};

start_btn.addEventListener('click', () => {
  screens[0].classList.add('up');
});

choose_insect_btns.forEach((btn) => {
  btn.addEventListener('click', () => {
    const img = btn.querySelector('.image');
    const src = img.getAttribute('src');
    const alt = img.getAttribute('alt');
    selected_insect = { src, alt };
    screens[1].classList.add('up');

    setTimeout(createInsect, 1000);
    startGame();
  });
});

function startGame() {
  setInterval(increaseTime, 1000);
}

function increaseTime() {
  let m = Math.floor(seconds / 60);
  let s = seconds % 60;
  m = m < 10 ? `0${m}` : m;
  s = s < 10 ? `0${s}` : s;
  timeEl.innerHTML = `Time: ${m}:${s}`;
  seconds++;
}

function createInsect() {
  const insect = document.createElement('div');
  insect.classList.add('insect');
  const { x, y } = getRandomLocation();
  insect.style.top = `${y}px`;
  insect.style.left = `${x}px`;
  insect.innerHTML = `<img class="insect-img" src="${selected_insect.src}" alt="${selected_insect.alt}" style="transform: rotate(${Math.random() * 360}deg)"/>`;
  insect.addEventListener('click', catchInsect);
  game_container.appendChild(insect);
}

function getRandomLocation() {
  const width = window.innerWidth;
  const height = window.innerHeight;
  const x = Math.random() * (width - 200) + 100;
  const y = Math.random() * (height - 200) + 100;
  return { x, y };
}

function catchInsect() {
  increaseScore();
  this.classList.add('caught');
  setTimeout(() => {
    this.remove();
  }, 2000);
  addInsects();
}

function addInsects() {
  setTimeout(createInsect, 1000);
  setTimeout(createInsect, 1500);
}

function increaseScore() {
  score++;
  if (score > 19) {
    message.classList.add('visible');
  }
  scoreEl.innerHTML = `Score: ${score}`;
}
```
