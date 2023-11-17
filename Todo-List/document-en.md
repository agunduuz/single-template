# Todo List

## Todo List UI

### HTML

1. **Title (Heading):**
    - Contains the "Todos" title within the **`<h1>`** tag.
    - Can be styled using the **`.heading`** class.
2. **Form and Input Area:**
    - Within the **`<form>`** tag, there is an input area for users to add new tasks.
    - The **`<input>`** tag represents a text box for entering tasks.
    - Stylized using the **`.form`** and **`.input`** classes.
    - Accessible in JavaScript via **`id="form"`** and **`id="input"`**.
3. **Task List (Todos):**
    - Within the **`<ul>`** tag, a list for displaying tasks is present.
    - Can be styled using the **`.todos`** class.
    - Accessible in JavaScript via **`id="todos"`**.
4. **Information Text (Info):**
    - Inside the **`<small>`** tag, there is text providing information on how to manage tasks.
    - Stylized using the **`.info`** class.
5. **Key Notes:**
    - The HTML structure allows users to add and list tasks.
    - JavaScript adds interactivity for features like adding, completing, and deleting tasks.
    - CSS classes provide customization for the page's appearance.

```html
<h1 class="heading">Todos</h1>
<form id="form" class="form">
    <input type="text" class="input" id="input" placeholder="Enter your todo" autocomplete="off">
    
    <ul class="todos" id="todos">

    </ul>
</form>
<small class="info"><span>Left click</span> to toggle completed. <br> <span>Right click</span> to delete todo</small>
```

### CSS

1. **Heading Styles:**
    - Styled with the **`.heading`** class.
    - Text color defined with **`color`**.
    - Font size adjusted with **`font-size`**.
    - Text alignment set with **`text-align`**.
    - Opacity adjusted with **`opacity`**.
    - Shadow effect applied with **`filter`**.
2. **Form and Input Area Styles:**
    - Styled with the **`.form`** class.
    - Maximum width set with **`max-width`**.
    - Input area stylized with **`.input`** class.
    - Border removed with **`border`**.
    - Font size and padding adjusted for text size and inner spacing.
    - Shadow effect added with **`box-shadow`**.
    - Corners rounded with **`border-radius`**.
    - Outline color defined when focused with **`outline`**.
    - Background color set with **`background-color`**.
    - Text color defined with **`color`**.
3. **Task List Styles (Todos):**
    - Styled with the **`.todos`** class.
    - Background color defined with **`background-color`**.
    - Padding set for inner spacing.
    - Top margin defined with **`margin-top`**.
    - Shadow effect added with **`box-shadow`**.
    - Corners rounded with **`border-radius`**.
4. **Task Item Styles (Todo):**
    - Styled with the **`.todo`** class.
    - Bottom border defined with **`border-bottom`**.
    - Cursor type set on hover with **`cursor`**.
    - Font size and padding adjusted for text size and inner spacing.
5. **Completed Task Styles (Completed Todo):**
    - Styled with the **`.completed`** class.
    - Text color defined with **`color`**.
    - Text decoration added with **`text-decoration`**.
6. **Info Text Styles (Info):**
    - Styled with the **`.info`** class.
    - Text color defined with **`color`**.
    - Top margin defined with **`margin-top`**.
    - Text alignment set with **`text-align`**.
    - Opacity adjusted with **`opacity`**.
7. **Elements Inside Info Text Styles (Info Span):**
    - Styled with the **`.info span`** selector.
    - Text color defined with **`color`**.
    - Opacity adjusted with **`opacity`**.

```css
h1.heading{color: var(--font-color);font-size: 10rem;text-align:  center; opacity: 0.4; filter:drop-shadow(0 0 7px var(--font-color)) }

form.form{max-width: 100%; width: 400px; }

form.form .input{ border: none; font-size: 1.75rem; padding: 0.5rem 1.5rem; display: block; width: 100%;  box-shadow: 0 0 5px var(--detail-color), 0 0 10px var(--detail-color); border-radius: 10px; outline: none; background-color: var(--detail-color); color: #1e2228; font-family: inherit;}
form.form .input::placeholder{color: #1e2228;}

form.form .todos{ background-color: var(--primary-color); padding:0; margin: 0; list-style-type: none; border-radius: 10px 10px 0 0 ; margin-top: 10px; box-shadow: 0 0 5px var(--primary-color), 0 0 10px var(--primary-color);  }
form.form .todos .todo{ border-bottom: 1px solid #ddd; cursor: pointer; font-size: 1.5rem; padding: 1rem 2rem; }
form.form .todos .todo.completed{ color: #b6b6b6; text-decoration: line-through; border-bottom: 1px solid #ddd;}

.info{ color: var(--font-color); margin-top: 3rem; text-align: center; opacity: 0.5;}
.info span{ color: var(--detail-color); opacity: 1; }
```

## Add, Remove & Mark Complete

1. **Form and Input Listening (Event Listening):**
    - HTML elements **`form`** and **`input`** are selected using **`document.getElementById`**.
    - The **`submit`** event is listened on the **`form`**.
    - **`e.preventDefault()`** is used to prevent form submission.
2. **Function to Add Todo (addTodo):**
    - A function named **`addTodo`** is defined.
    - If a todo object is passed as a parameter, its text is taken; otherwise, the input value is taken.
    - If the obtained text is not empty, an **`li`** element is created and the **`todo`** class is added.
    - If there is a passed todo object and it is completed, the **`completed`** class is also added.
    - The text of the created element is set, and click and contextmenu events are listened to make visual changes.
    - The created todo element is appended to the **`todosUL`** list, and the input value is cleared.
3. **Listening for Addition Operations (Event Listeners):**
    - The submit event on the **`form`** is listened to invoke the **`addTodo`** function for adding a new todo.
    - **`e.preventDefault()`** is used to prevent the user's request to reload the page when adding a new todo.
4. **Visual Changes to Todo Items:**
    - Operations on todo items:
        - **Click:** Marked as completed or incomplete.
        - **Contextmenu (Right Click):** Deletion operation is performed.
5. **Adding Todos and Visual Changes:**
    - When creating a new todo, the text of the todo item is determined, and visual features are added.
    - The created todo item is appended to the **`todosUL`** list.
    - After adding a todo, the input value is cleared.

```jsx
const form = document.getElementById('form');
const input = document.getElementById('input');
const todosUL = document.getElementById('todos');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  addTodo();
});

function addTodo(todo) {
  let todoText = input.value;

  if (todo) {
    todoText = todo.text;
  }

  if (todoText) {
    const todoEl = document.createElement('li');
    todoEl.classList.add('todo');
    if (todo && todo.completed) {
      todoEl.classList.add('completed');
    }
    todoEl.innerText = todoText;
    todoEl.addEventListener('click', () => {
      todoEl.classList.toggle('completed');
    });

    todoEl.addEventListener('contextmenu', (e) => {
      e.preventDefault();
      todoEl.remove();
    });
    todosUL.appendChild(todoEl);
    input.value = '';
  }
}
```

## Saving Todos to Local Storage

1. **Local Storage Check:**
    - When the page loads, **`localStorage.getItem`** is used to check for previously saved todos.
    - If there are todos, the **`addTodo`** function is called for each todo, and they are displayed on the page.
2. **Add and Update Todo:**
    - Changes made to todo items (completion or deletion) trigger the **`updateLS`** function.
    - For each todo item, a array is created with its text content and completion status.
    - The created array is stored under the "todos" key using **`localStorage.setItem`**.
3. **Update Local Storage:**
    - The **`updateLS`** function iterates over all todo items on the page.
    - For each todo item, an object is created with its text content and completion status.
    - These objects are added to an array.
    - This array is stored as an updated version under the "todos" key using **`localStorage.setItem`**.
4. **Key Points:**
    - Upon page load, existing todos in localStorage are retrieved and displayed on the screen.
    - Changes made to each todo update localStorage, ensuring persistent storage.
    - Local Storage retains data even after the browser is closed.

```jsx
...

const todos = JSON.parse(localStorage.getItem('todos'));
if (todos) {
  todos.forEach((todo) => addTodo(todo));
}

...

function addTodo(todo) {
...

  if (todoText) {
    ...
    todoEl.addEventListener('click', () => {
      ...
      updateLS();
    });

    todoEl.addEventListener('contextmenu', (e) => {
      ...
      updateLS();
    });
    ...
    updateLS();
  }
}

function updateLS() {
  const todosEl = document.querySelectorAll('li');

  const todos = [];

  todosEl.forEach((todoEl) => {
    todos.push({
      text: todoEl.textContent,
      completed: todoEl.classList.contains('completed'),
    });
  });

  localStorage.setItem('todos', JSON.stringify(todos));
}
```
