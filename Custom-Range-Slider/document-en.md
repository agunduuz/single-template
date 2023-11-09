# Custom Range Slider

## Styling The Range

### HTML

1. **Title and Container**:
    - The **`<h2>`** tag represents the title of the page and is set as "Custom Range Slider."
    - Inside the **`<section>`** tag, there is a container that houses a customized range slider.
2. **Range Slider**:
    - The **`<input type="range">`** tag represents a range slider, allowing the user to select a value.
    - The **`min`** and **`max`** attributes determine the minimum and maximum values of the slider, set between 0 and 100 in this example.
    - Identified with **`id="range"`**, it can be accessed through JavaScript or CSS.
3. **Label and Initial Value**:
    - The **`<label>`** tag is used to display the current value of the slider.
    - The **`for="range"`** attribute specifies which slider this label is associated with.
    - Initially, the value "50" is displayed.

```html
<h2>Custom Range Slider</h2>
<section class="range-container">
        <input type="range" min="0" max="100" id="range">
        <label for="range">50</label>
</section>
```

### CSS

1. **General Style and Positioning**:
    - The **`h2`** tag defines the positioning style for the page title. It is set to absolute positioning, located 50 pixels from the top.
    - The **`section.range-container`** class has a relative positioning, allowing us to see the elements inside.
2. **Range Slider Style**:
    - **`input[type='range']`** determines the overall style of the range slider. It includes specific width, border-radius, and appearance adjustments.
    - **`:focus`** pseudo-class is used to remove the outer border when focused.
    - The **`label`** tag associated with the range slider has a specific style and positioning adjustments.
3. **Browser-Specific Styles**:
    - **Chrome & Safari**:
        - **`::-webkit-slider-runnable-track`** and **`::-webkit-slider-thumb`** pseudo-elements contain style adjustments for Chrome and Safari.
    - **Firefox**:
        - **`::-moz-range-track`** and **`::-moz-range-thumb`** pseudo-elements contain custom style adjustments for Firefox.
    - **Internet Explorer**:
        - **`::-ms-track`** and **`::-ms-thumb`** pseudo-elements contain custom style adjustments for Internet Explorer.

```css
h2{ position: absolute; top: 50px; }
section.range-container { position: relative; }
section.range-container input[type='range']{
    width: 300px;
    -webkit-appearance: none;
    margin: 10px 0;
    border-radius: 10px;
}
section.range-container input[type='range']:focus{ outline: none; }
section.range-container input[type='range'] + label{
    background-color: var(--detail-color);
    position: absolute;
    top: -60px;
    left: 110px;
    width: 80px;
    padding: 5px 0;
    text-align: center;
    border-radius: 4px;
    box-shadow: 0 0 50px #1e2228, 0 0 25px var(--detail-color);
    color:#1e2228 ;
    font-family: inherit;
    font-weight: 700;
    font-size: 1.2rem;
}

/* CHROME & SAFARI */
section.range-container input[type='range']::-webkit-slider-runnable-track{
    background: var(--primary-color);
    border-radius: 10px;
    height: 10px;
    width: 100%;
    cursor: pointer;
    box-shadow: 0 0 50px #1e2228, 0 0 15px var(--primary-color);

}
section.range-container input[type='range']::-webkit-slider-thumb{
    -webkit-appearance: none;
    height: 24px;
    width: 24px;
    background-color: #1e2228;
    border-radius: 50%;
    border: 1px solid var(--primary-color);
    margin-top: -6px;
    cursor: pointer;
}

/* FIREFOX */
section.range-container input[type='range']::-moz-range-track{
    background: var(--primary-color); 
    border-radius: 10px;
    height: 13px;
    width: 100%;
    cursor: pointer;
    box-shadow: 0 0 50px #1e2228, 0 0 15px var(--primary-color);
}
section.range-container input[type='range']::-moz-range-thumb{
    -webkit-appearance: none;
    height: 24px;
    width: 24px;
    background-color: #1e2228;
    border-radius: 50%;
    border: 1px solid var(--primary-color);
    margin-top: -6px;
    cursor: pointer;
}

/* INTERNET EXPLORER */
section.range-container input[type='range']::-ms-track{
    background: var(--primary-color); 
    border-radius: 10px;
    height: 13px;
    width: 100%;
    cursor: pointer;
    box-shadow: 0 0 50px #1e2228, 0 0 15px var(--primary-color);
}
section.range-container input[type='range']::-ms-thumb{
    -webkit-appearance: none;
    height: 24px;
    width: 24px;
    background-color: #1e2228;
    border-radius: 50%;
    border: 1px solid var(--primary-color);
    margin-top: -6px;
    cursor: pointer;
}
```

## Label Value & Movement

- **Slider Event**:
  - The **`range`** variable provides access to the range slider in the HTML.
  - The **`input`** event listener triggers whenever the value of the slider changes.
- **Value and Label Update**:
  - **`e.target.value`** is used to obtain the value selected by the user.
  - The **`label`**, representing the label next to the slider, is selected using **`nextElementSibling`**.
  - The width of the slider and the width of the label are calculated.
- **Associating Value with Width**:
  - The position of the value on the slider is calculated using the width information.
  - In this calculation, ratios of values and a scaling function are used.
  - The position and content of the label are updated based on these calculations.
- **Scaling Function**:
  - The **`scale`** function is used to transform a value from one range to another.
  - In this case, the slider value is transformed from one specific range to another specific range.

```jsx
const range = document.getElementById('range');

range.addEventListener('input', (e) => {
  const value = +e.target.value;
  const label = e.target.nextElementSibling;

  const range_width = getComputedStyle(e.target).getPropertyValue('width');
  const label_width = getComputedStyle(label).getPropertyValue('width');
  const num_width = +range_width.substring(0, range_width.length - 2);
  const num_label_width = +label_width.substring(0, label_width.length - 2);

  const max = +e.target.max;
  const min = +e.target.min;

  const left = value * (num_width / max) - num_label_width / 2 + scale(value, min, max, 10, -10);

  label.style.left = `${left}px`;

  label.innerHTML = value;
});

const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};
```
