# Image Carousel

## Carousel UI

### HTML

This HTML structure forms the basic skeleton of an image carousel:

1. **`<section class="carousel">`**:
    - This section represents the carousel container for images.
    - It contains the area where multiple images will be displayed side by side.
    - Within the carousel, there is a **`<div>`** with the class "image-container" called "imgs."
2. **`<div class="image-container" id="imgs">`**:
    - This **`<div>`** serves as a container for the images.
    - It contains an array of images, each represented by an **`<img>`** tag.
    - The **`src`** attribute of the images specifies the URL for each image. In this example, the images appear to be from external sources, and each represents a different visual.
3. **`<div class="buttons-container">`**:
    - This **`<div>`** houses the navigation buttons located beneath the image carousel.
    - Two navigation buttons are present: "Prev" and "Next." These buttons facilitate the transition to the previous and next images, respectively.
    - The buttons are given the IDs "left" and "right."
  
```html
<section class="carousel">
        <div class="image-container" id="imgs">
            <img src="https://images.pexels.com/photos/1683724/pexels-photo-1683724.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1">
            <img src="https://images.pexels.com/photos/16854690/pexels-photo-16854690/free-photo-of-butterfly-sitting-on-flower.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1">
            <img src="https://images.pexels.com/photos/105808/pexels-photo-105808.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1">
            <img src="https://images.pexels.com/photos/13514042/pexels-photo-13514042.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1">
            <img src="https://images.pexels.com/photos/1715092/pexels-photo-1715092.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="">
        </div>
    </section>
    <div class="buttons-container">
        <button id="left" class="btn">Prev</button>
        <button id="right" class="btn">Next</button>
    </div>
```

### CSS

These CSS codes define the appearance of the image carousel and style the buttons:

1. **`section.carousel`**:
    - Contains the styles applied to the carousel container.
    - Uses **`box-shadow`** to add a subtle shadow effect.
    - Sets the **`height`** and **`width`** to determine the carousel's dimensions.
    - Utilizes **`overflow`** to hide content if it overflows the container.
2. **`section.carousel .image-container`**:
    - Defines the appearance of the container that holds the images.
    - Uses **`display: flex`** to horizontally align the images.
    - Uses **`transform`** and **`transition`** to control image transitions.
3. **`section.carousel .image-container img`**:
    - Specifies the appearance of the images within the carousel.
    - Sets the **`width`** and **`height`** to adjust the image dimensions.
    - Uses **`object-fit: cover`** to scale the images to fit within the container.
4. **`.buttons-container`**:
    - Used for styling the container that holds the buttons.
    - Applies **`display: flex`** to horizontally align the buttons.
    - Uses **`justify-content: center`** to center the buttons.
5. **`.buttons-container .btn`**:
    - Contains the general styling for the buttons.
    - Defines the **`color`** for text.
    - Removes the border with **`border`**.
    - Sets the inner padding of the button content with **`padding`**.
    - Rounds the button corners with **`border-radius`**.
    - Specifies the background color of the button with **`background-color`**.
    - Uses the inherited font from the **`font-family`** property.
    - Sets the text size with **`font-size`**.
    - Increases letter spacing with **`letter-spacing`**.
    - Transforms the text to uppercase with **`text-transform`**.
    - Specifies the font weight with **`font-weight`**.
6. **`.buttons-container .btn:hover`** and **`.buttons-container .btn:focus`**:
    - Defines the styling to be applied when hovering over or focusing on the buttons.
    - Typically used to reduce the opacity of buttons or provide visual feedback when focused.

```css
section.carousel{
    box-shadow: 2px 2px 5px rgba(255, 255, 255, 0.3);
    height: 500px;
    width: 500px;
    overflow: hidden;
}
section.carousel .image-container{
    display: flex;
    transform: translateX(0);
    transition: transform 0.5s ease-in-out;
}
section.carousel .image-container img{
    width: 500px;
    height: 500px;
    object-fit: cover;
}
.buttons-container{
    display: flex;
    justify-content: center;
}
.buttons-container .btn{
    color: var(--color-fill);
    border: none;
    padding: 1rem 3rem;
    width: 49.5%;
    margin: 1rem;
    border-radius: 5px;
    background-color: var(--alternative-fill);
    font-family: inherit;
    font-size: 14px;
    letter-spacing: 2px;
    text-transform: uppercase;
    font-weight: 600;
    cursor: pointer;
    z-index: 1;
}
.buttons-container .btn:hover{opacity: 0.9;}
.buttons-container .btn:focus{outline: none;}
```

### Carousel Functionality

These JavaScript codes control the functionality and automatic transition of an image carousel.

1. **Variables**:
    - The **`imgs`**, **`leftBtn`**, and **`rightBtn`** variables are used to select specific elements in the HTML document.
    - The **`img`** variable selects the collection of images underneath the **`imgs`** element.
2. **Initial Values**:
    - The **`idx`** variable tracks the index of the currently displayed image, initially set to 0.
    - The **`interval`** represents the timer used for automatic transitions. It starts by calling the **`run`** function every 2 seconds.
3. **`run` Function**:
    - This function manages automatic image transitions.
    - The **`idx`** value is incremented to move to the next image.
    - It calls the **`changeImage`** function to update the display.
4. **`changeImage` Function**:
    - This function changes the image and scrolls the carousel.
    - It checks the **`idx`** value and resets it when the end or beginning of the images is reached.
    - It scrolls the image horizontally using the **`style.transform`** property of the **`imgs`** element.
5. **`resetInterval` Function**:
    - This function resets and restarts the timer.
    - It clears the current timer with **`clearInterval`** and then restarts it by calling the **`run`** function every 2 seconds using **`setInterval`**.
6. **Event Listeners**:
    - Event listeners responding to clicks on the **`rightBtn`** and **`leftBtn`** buttons are added.
    - The **`idx`** value is incremented or decremented in response to clicks, and the **`changeImage`** function is called to update the image.
    - Additionally, the **`resetInterval`** function is called to reset the timer, and automatic transitions continue every 2 seconds.

```jsx
const imgs = document.getElementById('imgs');
const leftBtn = document.getElementById('left');
const rightBtn = document.getElementById('right');

const img = document.querySelectorAll('#imgs img');

let idx = 0;
let interval = setInterval(run, 2000);

function run() {
  idx++;
  changeImage();
}

function changeImage() {
  if (idx > img.length - 1) {
    idx = 0;
  } else if (idx < 0) {
    idx = img.length - 1;
  }

  imgs.style.transform = `translateX(${-idx * 500}px)`;
}

function resetInterval() {
  clearInterval(interval);
  interval = setInterval(run, 2000);
}

rightBtn.addEventListener('click', () => {
  idx++;
  changeImage();
  resetInterval();
});
leftBtn.addEventListener('click', () => {
  idx--;
  changeImage();
  resetInterval();
});
```
