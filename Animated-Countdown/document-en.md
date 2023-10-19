# Animated Countdown

## Counter & Final Sections

### HTML

This CSS code defines the styling and animations for the countdown and game interface you mentioned.

1. **`section.counter`**:
    - This styling defines the position and appearance of the countdown section.
    - It's fixed to the center of the viewport, and the **`transform`** property is used to horizontally and vertically center it.
    - Text is centered using **`text-align`**.
2. **`section.counter.hide`**:
    - This CSS class hides the countdown section by scaling it down and applying a "hide" animation.
    - The animation property is used to control the animation effect.
3. **`@keyframes hide`**:
    - This keyframes rule defines the animation for hiding the countdown section.
    - It starts with the element at full scale (1) and ends with it completely scaled down (0).
4. **`section.final`**:
    - This styling is for the final section of the game.
    - It's initially scaled down to 0 to hide it from view.
5. **`section.final.show`**:
    - This class scales up the final section to make it visible.
    - It applies a "show" animation for a smooth reveal.
6. **`@keyframes show`**:
    - This keyframes rule defines the animation for showing the final section.
    - It starts with the element at no scale (0), then scales it up, creating a subtle bounce effect.

These CSS styles and animations are used to create a visually appealing countdown and game interface. The "hide" and "show" animations add a nice transition effect to the countdown and final sections, making the user experience more engaging.

```html
<section class="counter">
      <div class="nums">
          <span class="in">3</span>
          <span>2</span>
          <span>1</span>
          <span>0</span>
      </div>
      <h4 class="text">Get Ready</h4>
    </section>

    <section class="final">
        <h1 class="text">GO!</h1>
        <button id="replay" class="replay">Replay</button>
    </section>
```

### **CSS**

These CSS code snippets control the visibility and animations for two different sections - the countdown and the start of the game.

1. **`section.counter`**:
    - These CSS rules set the position and visibility of the "counter" section.
    - **`position: fixed`** keeps the section in a fixed position on the page.
    - **`top`** and **`left`** center the section on the page both vertically and horizontally.
    - **`transform`** centers the section on the page both horizontally and vertically.
    - **`text-align: center`** ensures that the text inside the section is centered.
2. **`section.counter.hide`**:
    - This class represents the hidden state of the "counter" section.
    - **`transform`** scales the section down to a size of 0, making it invisible.
    - **`animation`** indicates that the "hide" animation is applied.
3. **`@keyframes hide`**:
    - The "hide" animation manages the shrinking and disappearance of the section.
    - At **`0%`**, the section is at its regular size, and at **`100%`**, it completely disappears.
4. **`section.final`**:
    - These CSS rules represent the initially hidden state of the "final" section.
    - **`transform`** scales the section down and hides it from view.
5. **`section.final.show`**:
    - This class represents the visible state of the "final" section.
    - **`transform`** scales the section up and makes it visible.
    - **`animation`** indicates that the "show" animation is applied.
6. **`@keyframes show`**:
    - The "show" animation manages the scaling up and appearance of the section.
    - At **`0%`**, the section is initially hidden, at **`30%`**, it scales up, and at **`100%`**, it becomes visible.
  
```css
section.counter{
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}
section.counter.hide{
  transform: translate(-50%, -50%) scale(0);
  animation: hide .2s ease-out;
}
@keyframes hide {
  0% {
    transform: translate(-50%, -50%) scale(1);
  }
  100%{
    transform: translate(-50%, -50%) scale(0);
  }
}
section.final{
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(0);
}
section.final.show{
  transform: translate(-50%,-50%) scale(1);
  animation: show 0.2s ease-out;
}
@keyframes show {
  0% {
    transform: translate(-50%, -50%) scale(0);
  }
  30% {
    transform: translate(-50%, -50%) scale(1.4);
  }
  100%{
    transform: translate(-50%, -50%) scale(1);
  }
}
```

### **In & Out Animations**

These CSS code snippets control the appearance and animations of the numbers used in the "counter" section.

1. **`section.counter .text`**:
    - These styles define the appearance of elements with the "text" class.
    - **`font-size`** sets the font size.
    - **`margin`** creates spacing around the text.
    - **`text-transform`** transforms the text content to uppercase.
2. **`section.counter .nums`**:
    - These styles define the appearance of elements with the "nums" class.
    - **`color`** sets the text color.
    - **`font-size`** adjusts the font size.
    - **`position: relative`** specifies the relative positioning of the element within its content.
    - **`overflow: hidden`** hides any overflowing content.
    - **`width`** and **`height`** restrict the dimensions of the element.
3. **`section.counter .nums span`**:
    - These styles define the appearance of **`span`** elements inside "nums."
    - **`position: absolute`** positions each number at a specific location within the element.
    - **`top`** and **`left`** center the numbers vertically and horizontally.
    - **`transform`** rotates the numbers for placement (rotation is achieved with **`rotate`**).
    - **`transform-origin`** sets the rotation point to the bottom center.
4. **`section.counter .nums span.in`** and **`section.counter .nums span.out`**:
    - These styles define the appearance and animations for **`span`** elements with the "in" and "out" classes.
    - Different rotation angles and animations are used for numbers entering and exiting.
5. **`@keyframes goIn`** and **`@keyframes goOut`**:
    - These animations are used for the entry (**`goIn`**) and exit (**`goOut`**) of numbers.
    - At **`0%`**, the initial position is defined, and at **`100%`**, the target position is specified.
    - Each animation creates a specific rotating movement for the numbers.

```css
section.counter .text{
  font-size: 20px;
  margin: 5px;
  text-transform: uppercase;
}
section.counter .nums{
  color: var(--main-fill);
  font-size: 50px;
  position: relative;
  overflow: hidden;
  width: 250px;
  height: 50px;
}
section.counter .nums span{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(120deg);
  transform-origin: bottom center;
}
section.counter .nums span.in{
  transform: translate(-50%, -50%) rotate(0deg);
  animation: goIn .5s ease-in-out;
}
section.counter .nums span.out{
  transform: translate(-50%, -50%) rotate(0deg);
  animation: goOut .5s ease-in-out;
}
@keyframes goIn {
  0%{
    transform: translate(-50%, -50%) rotate(120deg);
  }

  30% {
    transform: translate(-50%, -50%) rotate(-20deg);
  }

  60% {
    transform: translate(-50%, -50%) rotate(10deg);
  }

  100% {
    transform: translate(-50%, -50%) rotate(0deg);
  }
}
@keyframes goOut {
  0%{
    transform: translate(-50%, -50%) rotate(0deg);
  }

  60% {
    transform: translate(-50%, -50%) rotate(20deg);
  }

  100% {
    transform: translate(-50%, -50%) rotate(-120deg);
  }
}
```

### **Dynamic Animation With JS**

These JavaScript code snippets control a countdown or timer application with animated numbers on the page.

1. **`const` Statements**:
    - These lines are used to select specific HTML elements.
    - The **`nums`** variable selects all the **`span`** elements that represent the numbers on the page.
    - The **`counter`** variable represents the countdown section of the page.
    - The **`finalMsg`** variable represents the result message to be displayed when the countdown is completed.
    - The **`replay`** variable represents the "Replay" button used to restart the countdown.
2. **`resetDOM()`** Function:
    - This function ensures the page is reset to its initial state.
    - It removes the hiding classes from the **`counter`** and **`finalMsg`** elements.
    - It clears the class values of all numbers in the **`nums`** variable.
    - It adds the "in" class to the first number.
3. **`runAnimation()`** Function:
    - This function manages the animations of the numbers.
    - It adds a series of event listeners to each number.
    - As the animations progress between numbers, it adds and removes the necessary classes.
    - It uses the "in" and "out" classes for transitioning between numbers.
    - When the countdown is completed, it adds the necessary classes to the **`counter`** and **`finalMsg`** elements and displays the result message.
4. Clicking the **`replay`** Button:
    - A click event listener is added to the "Replay" button.
    - When the button is clicked, the page is reset, and the countdown animation is restarted.
  
```jsx
const nums = document.querySelectorAll('.nums span');
const counter = document.querySelector('.counter');
const finalMsg = document.querySelector('.final');
const replay = document.querySelector('#replay');

runAnimation();

function resetDOM() {
  counter.classList.remove('hide');
  finalMsg.classList.remove('show');

  nums.forEach((num) => {
    num.classList.value = '';
  });

  nums[0].classList.add('in');
}

function runAnimation() {
  nums.forEach((num, idx) => {
    const nextToLast = nums.length - 1;

    num.addEventListener('animationend', (e) => {
      if (e.animationName === 'goIn' && idx !== nextToLast) {
        num.classList.remove('in');
        num.classList.add('out');
      } else if (e.animationName === 'goOut' && num.nextElementSibling) {
        num.nextElementSibling.classList.add('in');
      } else {
        counter.classList.add('hide');
        finalMsg.classList.add('show');
      }
    });
  });
}

replay.addEventListener('click', function () {
  resetDOM();
  runAnimation();
});
```
