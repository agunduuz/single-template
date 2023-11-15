# Random Image Feed

## Random Image Feed Project

### HTML

1. **Heading:**
    - Represents the heading "Random Image Feed" enclosed in the **`<h1>`** tag.
2. **Image Container:**
    - Represented by the **`<section>`** tag, defines the container where images will be displayed.
    - Indicates an area where dynamically generated image content will be placed.
3. **Key Points:**
    - The code represents a simple structure of a page consisting of a heading and an area for image content.
    - There is a container for dynamically loading image content on the page.
    - The HTML code forms the basic structure of the page, indicating its main elements.

```html
<h1>Random Image Feed</h1>
<section class="image-container"></section>
```

### CSS

1. **Image Container Styles:**
    - Stylizes the image container defined with the **`.image-container`** class.
    - Uses **`display: flex;`** to arrange its elements horizontally.
    - Aligns elements vertically and horizontally to the center with **`align-items`** and **`justify-content`**.
    - Allows elements to wrap to the next line if they don't fit using **`flex-wrap: wrap;`**.
    - Sets the maximum width of the container with **`max-width: 1000px;`**.
    - Defines the gap between elements with **`gap: 1em;`**.
2. **Image Styles:**
    - The **`.image-container img`** selector stylizes the images.
    - Uses **`object-fit: cover;`** for resizing images to cover the content area.
    - Adds a 10px margin between images with **`margin: 10px;`**.
    - Sets a fixed height and width for images with **`height: 300px;`** and **`width: 300px;`**.
    - Ensures images have a maximum width of 100% with **`max-width: 100%;`**.
    - Uses **`position: relative;`** for images to have a relative position.
    - Defines a border color with **`border: 3px solid var(--detail-color);`**.
    - Rounds the corners of images with **`border-radius: 10px;`**.
    - Adds a subtle shadow effect with **`box-shadow`**.
3. **Key Points:**
    - Flexbox is utilized for the layout of the image container and images.
    - Style properties such as image dimensions, border, and shadow effects are specified.
    - Responsive design is considered with features like **`max-width`** and **`max-width: 100%;`**.

```css
section.image-container {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    max-width: 1000px;
    gap: 1em;
}

section.image-container img{
    object-fit: cover;
    margin: 10px;
    height: 300px;
    width: 300px;
    max-width: 100%;
    position: relative;
    border: 3px solid var(--detail-color);
    border-radius: 10px;
    box-shadow: 0 0 5px #1e2228, 0 0 10px var(--detail-color);
}
```

### JavaScript

1. **HTML Container Connection:**
    - Selects a container with the class **`.image-container`** in the HTML using **`const container = document.querySelector('.image-container');`**.
2. **Unsplash API URL:**
    - Defines the URL for fetching random images from the Unsplash API with **`const unsplashURL = 'https://source.unsplash.com/random/';`**.
3. **Number of Images and Loop:**
    - Determines the number of images per row with **`const rows = 10;`**.
    - Uses a **`for`** loop to iterate through the total number of images, considering three images per row.
4. **Image Creation and Appending:**
    - Creates a new **`img`** HTML element using **`document.createElement('img');`**.
    - Assigns a random Unsplash image URL to the created image element using: **`img.src =` ${unsplashURL}${getRandomSize()}`;`**.
    - Appends the created image element to the selected container: **`container.appendChild(img);`**.
5. **Random Size Functions:**
    - The **`getRandomSize`** function generates random width and height values: **`return` ${getRandomNr()}x${getRandomNr()}`;`**.
    - The **`getRandomNr`** function produces a random number within a specified range: **`return Math.floor(Math.random() * 10) + 300;`**.
6. **Key Points:**
    - Each image is created by fetching a random-sized image from the Unsplash API.
    - The loop adds the specified number of images to the HTML container.
    - Random sizes are achieved through the **`getRandomSize`** and **`getRandomNr`** functions.

```jsx
const container = document.querySelector('.image-container');
const unsplashURL = 'https://source.unsplash.com/random/';
const rows = 10;

for (let i = 0; i < rows * 3; i++) {
  const img = document.createElement('img');
  img.src = `${unsplashURL}${getRandomSize()}`;
  container.appendChild(img);
}

function getRandomSize() {
  return `${getRandomNr()}x${getRandomNr()}`;
}

function getRandomNr() {
  return Math.floor(Math.random() * 10) + 300;
}
```
