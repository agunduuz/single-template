# Insect Catch Game

## Game Styling

### HTML

1. **Screen Sections:**
    - The HTML document consists of three distinct screen sections: the start screen, insect selection screen, and game screen.
    - Each screen section is separated by the **`<section>`** tag.
2. **Start Screen:**
    - It contains an **`<h1>`** heading tag with the title "Catch The Insect."
    - A button to start the game, labeled "Play Game," is present, enclosed in a **`<button>`** tag.
    - The button's attribute **`id="start-btn"`** allows JavaScript to access it.
3. **Insect Selection Screen:**
    - The **`<h1>`** heading tag titled "What is your 'favourite' insect?" is present.
    - An unordered list **`<ul>`** displays the list of insects.
    - Each insect is represented by a button within an **`<li>`** (list item).
    - Each button includes a **`<p>`** (paragraph) and an **`<img>`** (image) tag, displaying the insect's name and image.
    - Insect buttons are styled with the class name **`choose-insect-btn`**.
4. **Game Screen:**
    - The game screen has the class **`game-container`**.
    - It includes two **`<h3>`** heading tags displaying the game's time and the player's score.
    - An **`<h5>`** heading tag contains a message describing the game's difficulty.
    - The content of this screen is dynamically updated using JavaScript.
5. **JavaScript Integration:**
    - The functionality of the page, including the start screen, is dynamically managed using JavaScript.
    - Buttons on the insect selection screen and information on the game screen are updated using JavaScript.

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

1. **Screen Styles:**
    - Screen sections are styled with the **`.screen`** class.
    - **`display: flex`** aligns the content vertically.
    - **`align-items: center`** and **`justify-content: center`** center the content.
    - **`height: 100vh`** and **`width: 100vw`** cover the entire screen.
    - Smooth transitions are provided with **`transition: margin 0.5s ease-out`**.
2. **Button Styles:**
    - Buttons are styled with the **`.btn`** class.
    - They feature a transparent background, detailed border, shadow, and emphasized text.
    - Hover effect introduces opacity changes.
3. **Insect Selection Styles:**
    - The insect list is organized with the **`.insects-list`** and **`.list-item`** classes.
    - Insect buttons are designed with specific styles and dimensions.
    - Color changes for hover and active states enhance interactivity.
4. **Game Screen Styles:**
    - The game screen is styled with the **`.game-container`** class.
    - Time and score information are highlighted with positioning and color.
    - The game message controls visibility with transparency, background color, and transition effects.
    - Insect styles and animations emphasize interactive usage.

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

1. **Screen and Button Functionality:**
    - Screens and buttons are controlled by accessing the DOM through specific classes and HTML elements.
    - When the start button (**`start_btn`**) is clicked, the first screen is scrolled upwards (the **`up`** class is added).
2. **Insect Selection Functionality:**
    - Click events are listened for each insect selection button (**`choose_insect_btns`**).
    - The selected insect information (**`selected_insect`**) is determined, and the second screen is scrolled upwards.
    - The insect creation function (**`createInsect`**) and the game start function (**`startGame`**) are called.
3. **Game Time and Score Tracking:**
    - The **`startGame`** function increases the game time at regular intervals and displays it on the screen.
    - The insect-catching function (**`catchInsect`**) increases the score, removes the caught insect from the screen, and adds new insects.
    - When the score reaches 20, a message is displayed, and the game ends.
4. **Creating Insects at Random Positions:**
    - The **`createInsect`** function adds the selected insect to the screen at a random position.
    - The rotation effect of insects is achieved with a randomly specified angle.
5. **Random Location Generation Function:**
    - The **`getRandomLocation`** function returns a random position inside the window, ensuring that insects appear in different places.
6. **Increasing Score and Displaying Messages:**
    - The **`increaseScore`** function increases the score and displays a message at a specific point.
    - The message is highlighted with a CSS transition effect.

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
