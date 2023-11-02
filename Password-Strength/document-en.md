# Password Strength Background

## Creating The Form & Background

### HTML

1. **HTML Structure**:
    - Two **`<div>`** elements are used to create a form and the related input fields. The first **`<div>`** represents the background, while the second one contains the form content.
2. **Title and Description**:
    - The **`<h1>`** element represents the "Image Password Strength" title.
    - The **`<p>`** element provides users with a description, saying "Change the password to see the effect."
3. **Input Fields**:
    - There are two input fields: one for the "Email" input and another for the "Password" input. Each input field is associated with a **`<label`**, which clearly indicates to users what they should enter.
    - The "Email" input field uses **`<input type="text">`** to allow text input.
    - The "Password" input field employs **`<input type="password">`** for secure password input.
4. **Submit Button**:
    - The **`<button>`** element represents a submission button labeled "Submit." When users click this button, the form's content can be sent to the server.
5. **CSS Classes**:
    - CSS classes are used for most elements. These classes determine the appearance and layout of the elements. For instance, classes like **`rounded`**, **`p-10`**, **`text-center`**, etc., define the styles applied to the elements.
    -

```html
<div class="background" id="background"></div>
    <div class="bg-white rounded p-10 text-center shadow-md">
        <h1 class="text-3xl">Image Password Strength</h1>
        <p class="text-sm text-gray-700">Change the password to see the effect</p>
        <div class="my-4 text-left">
            <label for="email" class="text-gray-900">Email</label>
            <input type="text" class="border block w-full p-2 mt-2 rounded" placeholder="Enter Email" id="email">
        </div>
        <div class="my-4 text-left">
            <label for="email" class="text-gray-900">Password</label>
            <input type="password" class="border block w-full p-2 mt-2 rounded" placeholder="Enter Password" id="password">
        </div>

        <button class="bg-black text-white py-2 mt-4 inline-block w-full rounded" type="submit">Submit</button>
    </div>
</div>
```

### CSS

1. **Background Image**:
    - The **`background`** property specifies a background image.
    - The **`url()`** function contains the URL of the image. In this example, the URL of the image is provided from a remote server.
    - **`no-repeat`** specifies that the image should not repeat and should be shown only once.
    - **`center center`** centers the image both horizontally and vertically.
    - **`/cover`** specifies that the image should cover the entire element.
2. **Positioning and Sizing**:
    - **`position: absolute;`** places the element in an absolute position.
    - **`top`**, **`bottom`**, **`left`**, and **`right`** add a 20-pixel margin to the element on all four sides, allowing the image to extend beyond the boundaries of the element.
3. **Z-Index**:
    - The **`z-index`** property determines the stacking order of the element. In this example, the background image is positioned behind other elements. The z-index value is negative, so it appears in front of other elements.
4. **Gaussian Blur**:
    - **`filter: blur(20px);`** applies a Gaussian blur effect to the image. The image becomes blurred, making it more distinct when displayed in front of other elements specified by the z-index.

```css
.background{
    background: url('https://images.pexels.com/photos/691668/pexels-photo-691668.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1') no-repeat center center/cover;
    position: absolute; top: -20px; bottom: -20px; left: -20px; right: -20px; z-index: -1; filter: blur(20px); }
```

## Change Blur On Input

1. **Selecting HTML Elements**:
    - In JavaScript, specific HTML elements are selected using the **`getElementById`** method. Two elements, named **`password`** and **`background`**, are chosen.
2. **Adding an Event Listener**:
    - An "input" event listener is attached to the **`password`** element using **`addEventListener`**. This means that the event will be triggered as the user inputs their password.
3. **Event Listener Function**:
    - The event listener triggers a function. This function monitors the user's password entry.
4. **Getting User Input**:
    - The text of the password entered by the user is obtained using **`e.target.value`**.
5. **Calculating Input Length**:
    - The length of the input is calculated using **`input.length`**. This represents the length of the password entered by the user.
6. **Calculating Background Blur**:
    - The degree of blur is calculated based on the input length. For each character entered by the user, the blur amount is reduced. This means that the stronger the password, the clearer the background.
7. **Affecting the Style of the Background**:
    - The "blur" effect of the background is influenced using **`background.style.filter`**. This effect uses the CSS **`filter`** property to make the background blurry.
8. **How the Code Works**:
    - As the user enters their password, the level of background blur increases or decreases based on the password length. This visually informs the user about the strength of their password.

```jsx
const password = document.getElementById('password');
const background = document.getElementById('background');

password.addEventListener('input', (e) => {
  const input = e.target.value;
  const length = input.length;
  const blurValue = 20 - length * 2;
  background.style.filter = `blur(${blurValue}px)`;
});
```
