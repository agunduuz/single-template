# Good, Cheap, Fast Checkboxes

### Style Checkboxes

This HTML code snippet represents a user interface allowing the selection of three main attributes for a project (good, cheap, fast).

1. `<section class="toggle-container">`:
    - This section represents an option associated with a toggle element.
    - Each option is named "Good," "Cheap," and "Fast."
2. `<input type="checkbox" id="good" class="toggle">`:
    - This `<input>` element represents an option.
    - It creates a checkbox with `type="checkbox"`.
    - It is given an ID with `id="good"`.
    - It is identified as an element with the class `class="toggle"`.
3. `<label for="good" class="label">`:
    - This `<label>` element represents the label associated with the checkbox.
    - It is associated with the respective `<input>` element using `for="good"`.
    - It is identified as an element with the class `class="label"`.
4. `<div class="ball"></div>`:
    - This `<div>` element appears as a ball shape inside the label. This ball represents the status of the checkbox.
5. `<span class="text">Good</span>`:
    - This `<span>` element contains the name of the option, e.g., "Good."
6. `<script src="app.js"></script>`:
    - This line includes the "app.js" JavaScript file into the page. The JavaScript file handles the interaction and selections of these checkboxes.

```html
<body>
    <h2>How do you want your project to be?</h2>
    <section class="toggle-container">
        <input type="checkbox" id="good" class="toggle">
        <label for="good" class="label">
            <div class="ball"></div>
        </label>
        <span class="text">Good</span>
    </section>
    <section class="toggle-container">
        <input type="checkbox" id="cheap" class="toggle">
        <label for="cheap" class="label">
            <div class="ball"></div>
        </label>
        <span class="text">Cheap</span>
    </section>
    <section class="toggle-container">
        <input type="checkbox" id="fast" class="toggle">
        <label for="fast" class="label">
            <div class="ball"></div>
        </label>
        <span class="text">Fast</span>
    </section>
    <script src="app.js"></script>
</body>
```

<aside>
💡 Users can choose only two features among these options: Good, Cheap, or Fast.

</aside>

### Basic CSS Document

This CSS code defines custom styling used to represent toggle options in a user interface. Here are explanations of the important parts of this code:

1. `section.toggle-container`:
    - This CSS rule targets a class confined within the `section` element, which defines the general appearance of a toggle option.
    - `display: flex;` arranges content elements horizontally (in a row).
    - `align-items: center;` vertically centers the content elements.
    - `margin: 10px 0;` provides a 10-pixel margin at the top and bottom.
    - `width: 33%;` sets the width of the element to one-third of the available width.
2. `section.toggle-container .toggle`:
    - This rule hides the visibility of elements with the `.toggle` class (visibility: hidden;). This hides the checkboxes as users don't expect invisible checkboxes.
3. `section.toggle-container .label`:
    - This rule defines the appearance of elements with the `.label` class.
    - `background-color: var(--alternative-fill);` sets the background color.
    - `cursor: pointer;` changes the cursor to a pointer hand when hovering over the element.
    - `border-radius: 50px;` rounds the corners.
    - `display: inline-block;` displays the element as an inline-block.
    - `margin: 0 15px 0;` provides horizontal spacing.
    - `height: 40px;` and `width: 80px;` sets the dimensions of the element.
    - `position: relative;` specifies relative positioning.
4. `section.toggle-container .toggle:checked + .label`:
    - This rule changes the background color of the `.label` element when the option is checked.
5. `section.toggle-container .label .ball`:
    - This rule defines the appearance of elements with the `.ball` class, which represents the visual indicator of the checkbox.
    - `background-color: var(--color-fill);` sets the background color of the ball.
    - `height: 34px;` and `width: 34px;` sets the dimensions of the ball.
    - `border-radius: 50%;` rounds the corners of the ball.
    - `position: absolute;` specifies the absolute position of the ball.
    - `top: 3px;` and `left: 3px;` positions the ball within the label.
    - `align-items: center;` and `justify-content: center;` centers the content both horizontally and vertically.
    - `animation: slideOff 0.3s linear forwards;` defines the sliding animation of the ball.
6. `section.toggle-container .toggle:checked + .label .ball`:
    - This rule changes the animation of the `.ball` element when the option is checked.

```css
section.toggle-container {
    display: flex;
    align-items: center;
    margin: 10px 0;
    width: 33%;
}
section.toggle-container .toggle{visibility: hidden;}
section.toggle-container .label{
    background-color: var(--alternative-fill);
    cursor: pointer;
    border-radius: 50px;
    display: inline-block;
    margin: 0 15px 0;
    height: 40px;
    width: 80px;
    position: relative;
}
section.toggle-container .toggle:checked + .label {background-color: var(--main-fill);}
section.toggle-container .label .ball{
    background-color: var(--color-fill);
    height: 34px;
    width: 34px;
    border-radius: 50%;
    position: absolute;
    top: 3px;
    left: 3px;
    align-items: center;
    justify-content: center;
    animation: slideOff 0.3s linear forwards;
}
section.toggle-container .toggle:checked + .label .ball{
    animation: slideOn 0.3s linear forwards;
}
```

### Check Ball Animation

This CSS code defines an animation and manages its two states.

1. `@keyframes slideOn`:
    - This CSS rule defines the start, middle, and end states of an animation called "slideOn."
    - At `0%`, it sets the initial position of the ball (translateX(0)) and its regular size (scale(1)).
    - At `50%`, it slides the ball to the right and enlarges it (translateX(20px) scale(1.2)).
    - At `100%`, it moves the ball to its final position (translateX(40px)) and restores it to its regular size (scale(1)).
2. `@keyframes slideOff`:
    - This CSS rule defines the start, middle, and end states of an animation called "slideOff."
    - At `0%`, it initializes the ball at its final position (translateX(40px)) and regular size (scale(1)).
    - At `50%`, it slides the ball to the right and enlarges it (translateX(20px) scale(1.2)).
    - At `100%`, it moves the ball to its initial position (translateX(0)) and restores it to its regular size (scale(1)).

```css
@keyframes slideOn{
    0% {
        transform: translateX(0) scale(1);
    }
    50% {
        transform: translateX(20px) scale(1.2);
    }
    100% {
        transform: translateX(40px) scale(1)
    }
}
@keyframes slideOff{
    0% {
        transform: translateX(40px) scale(1);
    }
    50% {
        transform: translateX(20px) scale(1.2);
    }
    100% {
        transform: translateX(0) scale(1)
    }
}
```

<aside>
💡 These animations change the appearance of the ball when you toggle an option, i.e., when you check or uncheck the option. The "slideOn" animation slides the ball to the right while enlarging it, and the "slideOff" animation slides the ball to the left while shrinking it.

</aside>

### JavaScript Logic

This JavaScript code contains a function that controls the behavior of the three toggle options.

1. `const toggles = document.querySelectorAll('.toggle');`, `const good = document.querySelector('#good');`, `const cheap = document.querySelector('#cheap');`, `const fast = document.querySelector('#fast');`:
    - These lines select elements from the HTML to interact with them using JavaScript.
    - It gathers all elements (options) with the `.toggle` class in an array called `toggles`.
    - It assigns elements with the #good, #cheap, and #fast IDs to variables named `good`, `cheap`, and `fast`, respectively. These IDs represent the three toggle options.
2. `toggles.forEach((toggle) => { ... });`:
    - This loop adds a "change" event listener to each toggle option.
    - It listens for changes (checking or unchecking) in each toggle option.
3. `function doTheTrick(theClickedOne) { ... }`:
    - This function is the main function that controls the state of the three toggle options and enforces specific behavior.
    - If "Good," "Cheap," and "Fast" options are all checked simultaneously, this function handles the events and allows the user to check only one option.
    - The function compares the clicked option with the others and deselects the others as needed.

```jsx
const toggles = document.querySelectorAll('.toggle');
const good = document.querySelector('#good');
const cheap = document.querySelector('#cheap');
const fast = document.querySelector('#fast');

toggles.forEach((toggle) => {
  toggle.addEventListener('change', (e) => {
    doTheTrick(e.target);
  });
});

function doTheTrick(theClickedOne) {
  if (good.checked && cheap.checked && fast.checked) {
    if (good === theClickedOne) {
      fast.checked = false;
    }
    if (cheap === theClickedOne) {
      good.checked = false;
    }
    if (fast === theClickedOne) {
      cheap.checked = false;
    }
  }
}
```

<aside>
💡 This code ensures that the user can select only one out of three options and prevents confusion between selections. Such choices allude to the "Triple Constraints" problem in the development process of projects, and this code helps users adhere to these constraints.

</aside>
