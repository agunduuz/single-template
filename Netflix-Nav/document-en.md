# Netflix Mobile Navigation

## Netflix Nav - Part 1

### HTML

1. **Main Navigation Buttons:**
    - At the top of the page, there are main navigation buttons designed for mobile devices.
    - The first button includes the "fas fa-bars" icon and is intended to reveal the dropdown menu.
2. **Logo and Title:**
    - The Netflix logo represents the page's brand identity and enhances brand awareness.
    - The "Mobile Navigation" title explains the purpose of the navigation displayed on mobile devices.
3. **Navigation Menus:**
    - There are two versions of the navigation menu that appear: black and red.
    - Navigation menus are stylized with specific color classes.
4. **Menu Content:**
    - The "Netflix" logo is repeated within the menus.
    - Main menu items are listed in a list, each item containing a link with the "list-items" class.
    - An nested menu contains a specialized sub-menu with the "items-list" class.
5. **Close Button:**
    - Each menu includes a "close-btn" button to close the menu, featuring the "fas fa-times" icon.

```html
<button class="nav-btn open-btn">
        <i class="fas fa-bars"></i>
    </button>
    <img src="https://www.svgrepo.com/show/354108/netflix.svg" alt="Netflix" class="logo">
    <p class="text">Mobile Navigation</p>

    <div class="nav visible nav-black">
        <div class="nav visible nav-red">
            <nav class="nav visible nav-white">
                <button class="nav-btn close-btn">
                    <i class="fas fa-times"></i>
                </button>
                <img src="https://www.svgrepo.com/show/354108/netflix.svg" alt="Netflix" class="logo">

                <ul class="list">
                    <li class="list-items"><a href="#" class="link">Teams</a></li>
                    <li class="list-items"><a href="#" class="link">Locations</a></li>
                    <li class="list-items"><a href="#" class="link">Life at Netflix</a></li>
                    <li class="list-items">
                        <ul class="items-list">
                            <li class="list-items"><a href="#" class="link">Netflix Culture Memo</a></li>
                            <li class="list-items"><a href="#" class="link">Work Life Balance</a></li>
                            <li class="list-items"><a href="#" class="link">Inclusion & Diversity</a></li>
                            <li class="list-items"><a href="#" class="link">Blog</a></li>
                        </ul>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
```

### CSS

1. **Global Styles:**
    - The logo size (**`.logo`**) is set to 150 pixels.
    - Text transformation, i.e., uppercase conversion, is applied to the upper text element (**`p.text`**).
    - Basic styles are defined for navigation buttons (**`button.nav-btn`**). The border and background are set to transparent, the cursor is a hand shape, and the font size is 20 pixels.
    - The open menu button is positioned fixed in the top left corner (**`button.nav-btn.open-btn`**).
2. **Dropdown Menu Styles:**
    - The dropdown menu (**`div.nav`**) includes general styling. This menu becomes visible by sliding down from the top of the page.
    - The menu is styled in black (**`div.nav.nav-black`**) with specific width constraints.
    - A second menu in red is nested within the first one (**`div.nav .nav.nav-red`**).
    - A third menu in white is also nested within the top menu and occupies a wider area (**`div.nav .nav .nav.nav-white`**).
    - The close button is positioned in the top right corner and has low opacity (**`div.nav .nav .nav .nav-btn.close-btn`**).
3. **Menu Content Styles:**
    - Style adjustments are made for lists and links inside the menu (**`div.nav .nav .nav .list .list-items`** and **`.link`**).
    - A nested sub-menu is organized with a left margin (**`div.nav .nav .nav .list .list-items .items-list`**).
    - Default list styles are reset by setting padding and margin values to zero.
    - Color and font size adjustments are applied.

```css
/* BEGIN: GLOBAL CODE*/
.logo { width: 150px;  }
p.text { text-transform: uppercase; }
button.nav-btn { border: none; background-color: transparent; cursor: pointer; font-size: 20px; }
button.nav-btn.open-btn { position: fixed; top: 10px; left: 10px; }
div.nav { position: fixed; top: 0; left: 0; height: 100vh; transform: translateX(-100%); transition: transform 0.3s ease-in-out; }
div.nav.visible { transform: translateX(0); }
/* END: GLOBAL CODE*/

div.nav.nav-black{ background-color: var(--detail-color); width: 60%; max-width: 480px; min-width: 320px; }
div.nav .nav.nav-red{ background-color: var(--primary-color); width: 95%; }
div.nav .nav .nav.nav-white{ background-color: var(--font-color); width: 95%; padding: 40px; position: relative; }

div.nav .nav .nav .nav-btn.close-btn{ position: absolute; top: 40px; right: 30px; opacity: 0.3; }
div.nav .nav .nav .list, div.nav .nav .nav .list .list-items .items-list{list-style-type: none; padding: 0;}
div.nav .nav .nav .list .list-items{margin: 20px 0;}
div.nav .nav .nav .list .list-items .link{color: var(--detail-color); font-size: 14px; text-decoration: none; text-transform: uppercase;}
div.nav .nav .nav .list .list-items .items-list{ list-style-type: none; padding-left: 20px; }
```

## Netflix Nav - Part 2

1. **Selectors and Event Listeners:**
    - **`.open-btn`** represents the button used to open the dropdown menu.
    - **`.close-btn`** represents the button used to close the menu.
    - **`.nav`** selects all elements representing the menu.
    - **`openBtn`** and **`closeBtn`** are defined using **`document.querySelector`** to access the respective HTML elements.
    - **`nav`** is defined using **`document.querySelectorAll`** to select all menu elements.
2. **Event Listeners and Functions:**
    - A click event listener is added to **`openBtn`**.
    - When a click event occurs, it iterates over each menu element (**`nav_el`**) and adds the "visible" class to each. This class makes the menu visible.
    - A click event listener is also added to **`closeBtn`**.
    - When a click event occurs, it iterates over each menu element (**`nav_el`**) and removes the "visible" class from each. This hides the menu.
3. **Summary:**
    - Click events on the open and close buttons are associated with adding and removing the "visible" class, controlling the visibility of the menu.
    - This code block provides functionality for opening and closing the menu, allowing users to show or hide the menu by clicking the buttons.

```jsx
const openBtn = document.querySelector('.open-btn');
const closeBtn = document.querySelector('.close-btn');
const nav = document.querySelectorAll('.nav');

openBtn.addEventListener('click', () => {
  nav.forEach((nav_el) => {
    nav_el.classList.add('visible');
  });
});
closeBtn.addEventListener('click', () => {
  nav.forEach((nav_el) => {
    nav_el.classList.remove('visible');
  });
});
```
