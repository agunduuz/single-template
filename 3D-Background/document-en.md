# 3D Background

## Creating The Buttons & Boxes

### HTML

1. **Creating a Button**:
    - The **`<button>`** tag creates a button. This button is used to trigger a specific action or event.
    - The **`id="btn"`** attribute gives the button a unique identifier, allowing you to access it with JavaScript or CSS.
    - **"Magic 🎩"** represents the text content of the button. This text indicates the action to be performed when the button is clicked.
2. **Creating a Section**:
    - The **`<section>`** tag represents a section. This section is used to organize page content or emphasize a specific concept.
    - The **`id="boxes"`** attribute identifies this section, enabling interaction with it through JavaScript or CSS.
    - **`class="boxes big"`** specifies the classes of the section. Classes are used for formatting or styling with CSS. The "big" class likely affects the section's size or appearance.

```html
<button id="btn" class="magic">Magic 🎩</button>
<section id="boxes" class="boxes big">
</section>
```

### CSS

1. **Button Styling**:
    - The CSS rules for **`.magic`** class define the styling for the button. Key properties include:
        - **`background-color`**: Sets the background color to a variable, indicating the button's color.
        - **`color`**: Specifies the text color (white in this case).
        - **`font-family`**: Inherits the font family from the parent element.
        - **`border`**: Removes the button border.
        - **`border-radius`**: Rounds the corners of the button.
        - **`font-size`**: Sets the font size to 16 pixels.
        - **`padding`**: Provides padding inside the button to increase clickable area.
        - **`cursor`**: Changes the mouse cursor to a pointer when hovering over the button.
        - **`position`**: Fixes the button's position to the viewport.
        - **`top`**: Positions the button 40 pixels from the top of the viewport.
        - **`letter-spacing`**: Adds letter spacing to the text.
        - **`box-shadow`**: Applies box shadows for a visual effect.
        - **`z-index`**: Defines the stacking order of the button.
2. **Button States**:
    - The button also has styles for focus and active states, providing visual feedback when the button is interacted with.
        - **`:focus`** removes the default outline when the button is focused.
        - **`:active`** removes the box shadow and applies a transformation when the button is clicked.
3. **Section Styling**:
    - CSS rules for **`.boxes`** class define the styling for the section containing boxes. Key properties include:
        - **`display`**: Specifies the box's display type as a flex container.
        - **`flex-wrap`**: Allows the boxes to wrap onto the next line when they exceed the container's width.
        - **`justify-content`**: Positions the boxes with equal space around them.
        - **`height`** and **`width`**: Sets the initial dimensions of the section.
        - **`position`**: Specifies the section as a relative position element for absolute positioning inside it.
        - **`transition`**: Adds a smooth transition effect with a duration of 0.4 seconds.
4. **Box Styling**:
    - Boxes are styled using the **`.box`** class, which includes properties like:
        - **`background-image`**: Sets the background image of the box.
        - **`background-repeat`**: Prevents the image from repeating.
        - **`background-size`**: Defines the size of the background image.
        - **`position`**: Sets the box as a relative position element.
        - **`width`** and **`height`**: Specifies the dimensions of the box.
        - **`transition`**: Adds a smooth transition effect with a duration of 0.4 seconds.
5. **Pseudo-elements**:
    - Pseudo-elements **`.box:before`** and **`.box:after`** create additional styling for the box, adding diagonal elements. These elements use CSS skew transformations to achieve their appearance.

```css
button.magic{
    background-color: var(--second-color);
    color: #fff;
    font-family: inherit;
    border: 0;
    border-radius: 3px;
    font-size: 16px;
    padding: 12px 25px;
    cursor: pointer;
    position: fixed;
    top: 40px;
    letter-spacing: 1px;
    box-shadow: 0 0 10px var(--first-color), 0 0 50px var(--first-color);
    z-index: 100;
}
button.magic:focus{ outline: none; }
button.magic:active{ box-shadow: none; transform: translateY(2px); }

section.boxes{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    height: 500px;
    width: 500px;
    position: relative;
    transition: .4s ease;
}
section.boxes.big{ height: 600px; width: 600px; }
section.boxes.big .box { transform: rotateZ(360deg); }
section.boxes .box{
    background-image: url('https://media.giphy.com/media/kbuQOkATEo6VW/giphy.gif') ;
    background-repeat: no-repeat;
    background-size: 500px 500px;
    position: relative;
    width: 125px;
    height: 125px;
    transition: 0.4s ease;
}
.box:before{ content: ''; background-color: var(--alternative-color); position: absolute; bottom: -15px; left: 8px; height: 15px; width: 100%; transform: skewX(45deg); }
.box:after{ content: ''; background-color: var(--first-color); position: absolute; top: 8px; right: -15px; height: 100%; width: 15px; transform: skewY(45deg); }
```

## Background Position & Rotate Event

1. **Selecting Elements**:
    - The code selects two HTML elements, **`boxesContainer`** and **`btn`**. **`boxesContainer`** represents the section where boxes are located, while **`btn`** represents the button.
2. **Adding Event Listener**:
    - An event listener for the click event is added to the **`btn`** element. This allows a function to be executed when the button is clicked.
3. **Function on Button Click**:
    - When the button is clicked, the class of the **`boxesContainer`** element is toggled with **`big`**. This performs a transition that enlarges or reduces the size of the boxes. It uses adding and removing a class for this transition.
4. **Box Creation Function**:
    - A function named **`createBoxes`** is defined. This function creates a 4x4 grid of boxes.
    - It uses two nested loops to create a total of 16 boxes.
    - Each box is created as a **`<div>`** element and is given the class **`box`**.
    - The background position of the boxes is calculated and set.
    - Each created box is appended to the **`boxesContainer`** element.
5. **Calling the Box Creation Function**:
    - When the page loads or is refreshed, the **`createBoxes`** function is called, and the boxes are created.

```jsx
const boxesContainer = document.getElementById('boxes');
const btn = document.getElementById('btn');

btn.addEventListener('click', () => {
  boxesContainer.classList.toggle('big');
});

function createBoxes() {
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      const box = document.createElement('div');
      box.classList.add('box');
      box.style.backgroundPosition = `${-j * 125}px ${-i * 125}px`;
      boxesContainer.appendChild(box);
    }
  }
}
createBoxes();
```
