# Mobile Tab Navigation

## Create & Style UI

### HTML

1. **`<section>` Element**:
    - Represents the main section that wraps the page content. It encompasses the mobile page content.
2. **`<img>` Tags (Images)**:
    - Represent four images that make up the page content.
    - Their **`class`** attributes control their visibility. The first image has the **"show"** class, making it initially visible, while the others are hidden.
3. **`<nav>` Element**:
    - Contains the navigation menu for the page.
    - The menu items are within an **`<ul>`** (unordered list).
4. Menu Items:
    - Each item is contained within an **`<li>`**, which represents a list item.
    - The **`<i>`** tag represents an icon or symbol.
    - The **`<p>`** tag contains the relevant text content.
    - For example, there are menu options such as "Home," "Work," "Blog," and "About Us."
  
```html
<section class="mobile-container">
        <img src="..." class="content show">
        <img src="..." class="content ">
        <img src="..." class="content ">
        <img src="..." class="content ">
        <nav>
            <ul>
                <li>
                    <i class="fas fa-home"></i>
                    <p>Home</p>
                </li>
                <li>
                    <i class="fas fa-box"></i>
                    <p>Work</p>
                </li>
                <li>
                    <i class="fas fa-book-open"></i>
                    <p>Blog</p>
                </li>
                <li>
                    <i class="fas fa-users"></i>
                    <p>About Us</p>
                </li>
            </ul>
        </nav>
    </section>
```

### CSS

1. **Style for `section.mobile-container`**:
    - Applied to the main **`<section>`** element that wraps the page content.
    - **`position: relative`** positions the element relatively.
    - **`overflow: hidden`** hides overflowing content within the element.
    - Borders and border radius are defined using **`border`** and **`border-radius`**.
    - The element's height and width are set, and a shadow is added.
2. **Style for `section.mobile-container .content`**:
    - Used for the content images.
    - **`position: absolute`** allows images to be absolutely positioned, stacking on top of each other without clipping.
    - **`transition`** is used to control the transition effect of the images.
    - Initially, the **`opacity`** of the images is set to zero, making them invisible.
    - Only images with the "show" class have their **`opacity`** set to 1, making them visible.
3. **Style for `section.mobile-container nav`**:
    - Used for the navigation menu.
    - **`position: absolute`** fixes the menu to a specific position.
    - **`margin-top`** is used to shift the bottom slightly upward.
4. **Style for `section.mobile-container nav ul`**:
    - Used for an unordered list that lists menu options.
    - Background color is defined, and menu items are horizontally aligned.
    - **`list-style-type`** is reset, and padding is set.
5. **Style for `section.mobile-container nav ul li`**:
    - Used for menu items.
    - Text color and clickability properties of items are adjusted.
    - Padding and horizontal alignment of items are set.
6. **Mouse Hover and Active State**:
    - Using **`:hover`** and **`.active`** selectors, the text color of menu items changes when hovered over or clicked.

```css
section.mobile-container {
  position: relative;
  overflow: hidden;
  border: 3px solid var(--bg-color);
  border-radius: 15px;
  height: 600px;
  width: 340px;
  box-shadow: -1px -1px 47px 7px rgba(0, 0, 0, 0.45);
  -webkit-box-shadow: -1px -1px 47px 7px rgba(0, 0, 0, 0.45);
  -moz-box-shadow: -1px -1px 47px 7px rgba(0, 0, 0, 0.45);
}
section.mobile-container .content {
  opacity: 0;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  height: calc(100% - 60px);
  width: 100%;
  transition: opacity 0.4s ease;
}
section.mobile-container .content.show { opacity: 1; }

section.mobile-container nav { position: absolute; bottom: 0; left: 0; margin-top: -5px; width: 100%; }
section.mobile-container nav ul { background-color: var(--bg-color); display: flex; list-style-type: none; padding: 0; margin: 0; height: 60px; }
section.mobile-container nav ul li { color: var(--font-color); cursor: pointer; flex: 1; padding: 10px; text-align: center; }
section.mobile-container nav ul li p { font-size: 12px; margin: 2px 0; }

section.mobile-container nav ul li:hover,
section.mobile-container nav ul li.active {
  color: var(--alternative-color);
}
```

### Navigation Effect

1. **Selecting HTML Elements**:
    - First, we select the elements named **`contents`**, representing the content images on the page, and **`listItems`**, representing the menu items.
2. **Click Function for Menu Items**:
    - By creating a loop over an array, we add a click event listener for each menu item.
    - When a menu item is clicked, we first call the **`hideAllContents`** function to hide all content images.
    - Then, we call the **`hideAllItems`** function to remove the "active" class from all menu items.
    - The clicked menu item is given the "active" class to highlight its appearance.
    - The corresponding content image for the clicked menu item is made visible.
3. **hideAllContents Function**:
    - This function is used to hide all content images. It iterates through each content image and removes the "show" class.
4. **hideAllItems Function**:
    - This function is used to remove the "active" class from all menu items. It iterates through each menu item and removes the "active" class.

```jsx
const contents = document.querySelectorAll('.content');
const listItems = document.querySelectorAll('nav ul li');

listItems.forEach(function (item, index) {
  item.addEventListener('click', () => {
    hideAllContents();
    hideAllItems();

    item.classList.add('active');
    contents[index].classList.add('show');
  });
});

function hideAllContents() {
  contents.forEach((content) => content.classList.remove('show'));
}

function hideAllItems() {
  listItems.forEach((item) => item.classList.remove('active'));
}
```
