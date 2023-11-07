# Live User Filter

## User List UI

### HTML

1. **HTML Structure**:
    - Inside a **`<section>`** tag, there is a component where users can perform live filtering.
2. **Title and Description**:
    - Inside a **`<header>`** tag, there is a title (**`<h4>`**) and below it, a subtitle (**`<small>`**). These title and subtitle provide an explanation of what the filtering is for.
3. **Search Input**:
    - An **`<input>`** tag serves as a text input area where users can search by name and/or location. The **`id="filter"`** attribute is used to access this input area via JavaScript or CSS.
4. **Results List**:
    - The results list, contained within a **`<ul>`** tag, is where users will see the results. Initially, it contains a single **`<li>`** element with the text "Loading...".

```html
<section class="container">
        <header class="header">
            <h4 class="title">Live User Filter</h4>
            <small class="subtitle">Search by name and/or location</small>
            <input type="text" id="filter" placeholder="Search...">
        </header>
        <ul id="result" class="user-list">
            <li>
                <h3>Loading...</h3>
            </li>
        </ul>
    </section>
```

### CSS

1. **Container Style**:
    - The class **`section.container`** represents a container area. This class adds rounded corners (border-radius) and shadow effects (box-shadow) to the container.
    - **`overflow: hidden;`** prevents content from overflowing.
    - **`width: 450px;`** sets the width of the container to 450 pixels.
2. **Header Area**:
    - The styles inside **`section.container .header`** define the header area of the container. Here, properties like background color, text color, and height are specified.
    - Font size and margin settings are applied to the title text (**`h4`**).
    - For the subtitle (**`subtitle`**), background color, font color, and opacity settings are defined.
    - The **`input`** element defines the style of an input area. It includes properties such as background color, border-radius, text color, and box shadow.
    - Color and opacity are adjusted for the input placeholder text.
    - When the input area is focused, the outline is removed.
3. **User List**:
    - The **`section.container .user-list`** area sets the style for the section where users are listed. It includes properties like background color, list style (list-style), margins, and height.
    - Style is defined for each user item (****`li**`**). This style sets the separators (border-bottom) between users.
    - Border-radius and size settings are applied to user images.
    - User information (**`user-info`**) is styled, and properties are set for the title (**`h4**`) and paragraph (`p**`**) elements.
    - The **`li.hide`** class is used to hide invisible users (display: none;)

```css
section.container {
  border-radius: 5px;
  box-shadow: 0 0 10px var(--primary-color), 0 0 50px var(--detail-color);

  overflow: hidden;
  width: 450px;
}
section.container .header { background-color: var(--primary-color); color: var(--detail-color); padding: 30px 20px; text-align: center; }
section.container .header .title { margin: 0; font-size: 24px;}
section.container .header .subtitle { display: inline-block; margin: 5px 0 20px; opacity: 0.8; }
section.container .header input {
    background-color: rgba(255, 255, 255, 0.3);
    border: 0;
    border-radius: 50px;
    color: var(--detail-color);
    font-size: 14px;
    padding: 10px 15px;
    margin-top: 20px;
    width: 100%;
    font-family: inherit;
    box-shadow: 0 0 5px var(--primary-color), 0 0 100px var(--font-color);
}
section.container .header input::placeholder {
    color: var(--detail-color);
    opacity: 1; /* Firefox */
  }
section.container .header input:focus { outline: none; }

section.container .user-list{
    background-color: var(--font-color);
    list-style: none;
    margin: 0;
    padding: 0;
    overflow-y: auto;
    max-height: 400px;
}
section.container .user-list li{ display: flex; padding: 20px; }
section.container .user-list li img{ border-radius: 50%; object-fit: cover; height: 50px; width: 50px; }
section.container .user-list li .user-info{ margin-left: 10px; }
section.container .user-list li .user-info h4{ margin:0 0 10px; }
section.container .user-list li .user-info p{ font-size: 12px; }

section.container .user-list li:not(:last-of-type){ border-bottom: 1px solid  #00002250; }
section.container .user-list li.hide{display: none;}
```

## Fetch & Filter Users

1. **Getting HTML Elements**:
    - **`result`** and **`filter`** are variables that store references to HTML elements with the IDs 'result' and 'filter'.
    - **`listItems`** is an empty array to keep track of list items for filtering.
2. **Fetching Data from API**:
    - The **`getData`** function is an asynchronous function that fetches user data from the '[https://randomuser.me](https://randomuser.me/)' API.
    - The API returns an array of user objects in the **`results`** variable.
    - The code first clears any existing content inside the **`result`** element.
3. **Populating User Data**:
    - For each user object in the **`results`** array, a new list item (**`<li>`**) is created using **`document.createElement('li')`**.
    - These list items are stored in the **`listItems`** array for later use.
    - Inside each list item, an image, user's name, and location information are added.
4. **Filtering User Data**:
    - The **`filterData`** function is invoked when the user types into the **`filter`** input.
    - It iterates through the **`listItems`** array to check if the text content of each list item includes the search term (case-insensitive).
    - If there's a match, the list item is displayed; otherwise, it's hidden by adding the 'hide' class.

```jsx
const result = document.getElementById('result');
const filter = document.getElementById('filter');
const listItems = [];

getData();

filter.addEventListener('input', (e) => {
  filterData(e.target.value);
});

async function getData() {
  const res = await fetch('https://randomuser.me/api?results=50');
  const { results } = await res.json();

  // Clear Results
  results.innerHTML = '';
  results.forEach((user) => {
    const li = document.createElement('li');
    listItems.push(li);

    li.innerHTML = `
        <img src="${user.picture.large}" alt="${user.name.first}" />
        <div class="user-info">
            <h4>${user.name.first} ${user.name.last}</h4>
            <p>${user.location.city}, ${user.location.country}</p>
        </div>
    `;

    result.appendChild(li);
  });
}

function filterData(searchTerm) {
  listItems.forEach((item) => {
    if (item.innerText.toLowerCase().includes(searchTerm.toLowerCase())) {
      item.classList.remove('hide');
    } else {
      item.classList.add('hide');
    }
  });
}
```
