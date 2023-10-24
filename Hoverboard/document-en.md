# Hoverboard

## Styling The Board Squares

### HTML

In this project, our HTML file contains only the "container" structure, and we will populate its content using JavaScript.

```html
<section class="container" id="container">
       
</section>
```

### CSS

These CSS codes define the appearance of a box (square) element.

1. **`.container`**:
    - **`display: flex`** aligns the content horizontally, arranging elements in a single row.
    - **`align-items: center`** and **`justify-content: center`** vertically and horizontally center the elements.
    - **`flex-wrap: wrap`** allows elements to wrap to new rows if they don't fit in the container.
    - **`max-width: 400px`** restricts the maximum width of the container.
2. **`.container .square`**:
    - Sets the background color (#1d1d1d) and defines a shadow.
    - **`width: 16px`** and **`height: 16px`** specify the dimensions of the box.
    - **`margin: 2px`** adds a margin between elements.
    - **`transition`** determines the animation duration and easing.
    - **`border-radius: 5px`** rounds the corners.
3. **`.container .square:hover`**:
    - Resets the animation duration to 0s when hovered, providing an instant response.

```css
section.container {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    max-width: 400px;
}

section.container .square{
    background-color: #1d1d1d;
    box-shadow: 0 0  2px #000;
    width: 16px;
    height: 16px;
    margin: 2px;
    transition: 2s ease;
    border-radius: 5px;
}
section.container .square:hover{
    transition-duration: 0s;
}
```

## Hoverboard Effect

1. **Container and Colors**:
    - The **`container`** variable is used to select the HTML element with the ID "container."
    - An array named **`colors`** stores various color values.
    - **`SQUARES`** is set to 400, determining the number of squares to be created.
2. **Creating Squares**:
    - A **`for`** loop is used to create 400 square elements dynamically.
    - Each square is created using **`document.createElement('div')`**, and a "square" class is added to it.
    - Event listeners for mouseover and mouseout events are added to each square to change their colors.
3. **Setting Square Colors**:
    - The **`setColor`** function is called when a square is hovered over.
    - It generates a random color from the **`colors`** array using the **`getRandomColor`** function.
    - The square's background and box shadow are updated with the selected color.
4. **Resetting Square Colors**:
    - The **`removeColor`** function is called when the mouse moves out of a square.
    - It resets the square's background color and box shadow to their default values.
5. **Random Color Selection**:
    - The **`getRandomColor`** function selects a random color from the **`colors`** array.

This code dynamically creates a grid of squares that change color when hovered over and return to their original color when the mouse moves away.

```jsx
const container = document.getElementById('container');
const colors = ['#0079FF', '#FF8400', '#DD58D6', '#16FF00', '#FFED00', '#C0EEE4', '#F5EA5A', '#FF9E9E', '#B3FFAE'];
const SQUARES = 400;

for (let i = 0; i < SQUARES; i++) {
  const square = document.createElement('div');
  square.classList.add('square');

  square.addEventListener('mouseover', () => setColor(square));
  square.addEventListener('mouseout', () => removeColor(square));

  container.appendChild(square);
}

function setColor(element) {
  const color = getRandomColor();
  element.style.background = color;
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(element) {
  element.style.background = '#1d1d1d';
  element.style.boxShadow = '0 0  2px #000';
}

function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}
```
