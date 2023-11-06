# Day 41 - Verify Account UI

## UI Design

### HTML

1. **HTML Structure**:
    - A **`<section>`** element with the class "container" is used to create a container for content.
    - An **`<h2>`** element with the class "title" serves as the section's title.
    - A **`<p>`** element with the class "content" contains text explaining the purpose of the verification code.
    - Inside an **`<article>`** element with the class "code-container," there are six input fields for entering a six-digit verification code.
    - A **`<small>`** element with the class "info" is used to provide additional information about the design.
2. **Code Input Fields**:
    - Six **`<input>`** fields with the class "code" are used to input each digit of the verification code.
    - The **`type="number"`** attribute ensures that only numeric input is accepted.
    - The **`min`** and **`max`** attributes restrict input to values between 0 and 9.
    - The **`required`** attribute mandates that each field must be filled in before submission.
3. **Content Styling**:
    - The text within the **`<p>`** element contains a bold phrase wrapped in **`<bold>`** tags.
    - The design is explained in the **`<small>`** element, clarifying that it's a design concept and no actual emails have been sent.

This code creates a simple user interface for entering a six-digit verification code. The styling and design aspects are included, and it's important to note that it's a design concept only without actual email functionality.

```html
    <section class="container">
      <h2 class="title">Verify Your Container</h2>
      <p class="content">
        We emailed you the <bold>six digit code</bold> to verify@gmail.com <br />
        Enter the code below to confirm your email address.
      </p>
      <article class="code-container">
        <input type="number" class="code" placeholder="0" min="0" max="9" required>
        <input type="number" class="code" placeholder="0" min="0" max="9" required>
        <input type="number" class="code" placeholder="0" min="0" max="9" required>
        <input type="number" class="code" placeholder="0" min="0" max="9" required>
        <input type="number" class="code" placeholder="0" min="0" max="9" required>
        <input type="number" class="code" placeholder="0" min="0" max="9" required>
      </article>
      <small class="info">
        This is design only. We didn't actually send you an email as we don't have your email, right?
      </small>
    </section>
```

### CSS

1. **Container Design**:
    - The **`<section>`** element with the **`.container`** class creates an area with a background color, border, rounded corners, and frames the content.
    - **`max-width`** limits the container's maximum width, ensuring that content fits neatly.
    - **`text-align: center`** horizontally centers the content.
2. **Verification Code Input Fields**:
    - The **`.code-container`** class centers the verification code input fields and organizes vertical alignment.
    - **`<input>`** elements with the **`.code`** class create large, rounded-cornered boxes for entering the code.
    - The appearance of the boxes is customized with a range of style properties such as border-radius, font size, and borders.
    - **`moz-appearance`** and **`webkit-outer-spin-button`** are used to remove increment buttons for input fields.
    - **`.code:valid`** applies specific styles (e.g., a green border and shadow) to correctly entered codes.
3. **Responsive Design**:
    - **`@media`** queries determine how the page will look on narrow screens.
    - When the screen width falls below certain values (e.g., 700px and 580px), design changes are applied.
    - Properties like width and height are adjusted to reduce the size and layout of input fields.

This CSS code defines the style and appearance of a page section containing verification code input fields. Style properties are adjusted to adapt to the width of the page and the user's device, ensuring a responsive design.

```css
section.container {
  background-color: #fff;
  border: 3px solid var(--primary-color);
  border-radius: 10px;
  padding: 50px;
  max-width: 1000px;
  text-align: center;
}

section.container .code-container {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 40px 0;
}

section.container .code-container .code{
  border-radius: 5px;
  font-size: 75px;
  font-family: inherit;
  height: 120px;
  width: 100px;
  border: 1px solid var(--primary-color);
  margin: 1%;
  text-align: center;
  font-weight: 300;
  -moz-appearance: textfield;
}

section.container .code-container .code::-webkit-outer-spin-button, section.container .code-container .code::-webkit-inner-spin-button{ -webkit-appearance: none; margin: 0; }

section.container .code-container .code:valid{
  border-color: #13d1c8;
  box-shadow: 0 5px 15px 5px rgba(0, 0, 0, 0.25);
}
section.container .code-container .code:focus{
 outline: none;
}
section.container .info{
  background-color: #eaeaea;
  display: inline-block;
  padding: 10px;
  line-height: 20px;
  max-width: 75%;
  color: #777;
  border-radius: 5px;
}

@media(max-width:700px){
  section.container {
    padding: 20px;
    width: 90%;
  }
  section.container .code-container {
    flex-wrap: wrap;
  }
  section.container .code-container .code{
    font-size: 50px;
    height: 80px;
    max-width: 70px;
  }
}
@media(max-width:580px){
  section.container {
    padding: 20px;
    width: 100%;
  }
  section.container .code-container {
    flex-wrap: wrap;
  }
  section.container .code-container .code{
    font-size: 35px;
    height: 60px;
    max-width: 50px;
  }
}
```

### JavaScript

1. **Selecting HTML Elements**:
    - The **`document.querySelectorAll('.code')`** statement selects all HTML elements with the class of **`.code`**. In this case, these are the input fields for a verification code.
2. **Initial Focus**:
    - The **`codes[0].focus()`** line sets the initial focus on the first input field, making it ready for user input when the page loads.
3. **Keyboard Event Listeners**:
    - A **`forEach`** loop iterates through each of the selected input fields, allowing individual event handling for each.
    - The **`keydown`** event listener is attached to each input field, which listens for keyboard key presses.
4. **Input Handling**:
    - If the key pressed falls within the range of '0' to '9', meaning a number key is pressed, the code clears the current input field, sets its value to an empty string, and focuses on the next input field in sequence. This allows users to input a single digit in each field before moving to the next automatically.
5. **Backspace Handling**:
    - If the 'Backspace' key is pressed, the code waits briefly (10 milliseconds) and then focuses on the previous input field. This allows users to go back and edit their input.

In summary, this code efficiently manages the input of a verification code by controlling the focus between input fields when numeric keys are pressed, and also allowing easy correction with the 'Backspace' key.

```jsx
const codes = document.querySelectorAll('.code');

codes[0].focus();

codes.forEach((code, idx) => {
  code.addEventListener('keydown', (e) => {
    if (e.key >= 0 && e.key <= 9) {
      codes[idx].value = '';
      setTimeout(() => {
        codes[idx + 1].focus();
      }, 10);
    } else if (e.key === 'Backspace') {
      setTimeout(() => {
        codes[idx - 1].focus();
      }, 10);
    }
  });
});
```
