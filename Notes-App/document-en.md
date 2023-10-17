# Notes App

### Notes HTML & CSS

### HTML

This HTML code includes the fundamental components of a note-taking application.

1. `<button class="add" id="add">`: This HTML element represents an "Add Note" button. When the user clicks this button, they can add a new note.
2. `<i class="fas fa-plus"></i>`: This element contains a plus sign icon, which adds a visual icon to the button for adding notes.
3. `<script src="https://cdnjs.cloudflare.com/ajax/libs/marked/1.2.2/marked.min.js"></script>`: This line imports the "marked" JavaScript library from an external source. The "marked" library simplifies text parsing and conversion to HTML.
4. `<script src="app.js"></script>`: This line loads the main JavaScript file for the project. The "app.js" file contains the functionality and logic of the note-taking application.

### CSS

1. Defining Font Content:
    - The section starting with `@import` imports the "Poppins" font from Google Fonts. This font will be used for the text on the page.
2. Root Variables:
    - The section starting with `:root` defines custom CSS variables. For example, variables like `-main-fill`, `-alternative-fill`, and `-color-fill` store specific color values. These variables can be used to maintain consistent colors across different sections of the page.
3. Basic CSS Reset:
    - The section starting with `` resets the boxes and margin properties of all HTML elements. This ensures that the page is not influenced by default browser styles and is a blank slate for custom styling.
4. `body` Properties:
    - `font-family` specifies the "Poppins" font for text on the page.
    - `background-image` customizes the background of the page with a linear gradient.
    - `color` defines the text color.
    - `display`, `min-height`, and `height` set the page's height and document height.
    - `padding-top` adds a horizontal space to the top of the page.
    - `font-size` and `font-weight` specify text size and weight.
5. Styles for `button.add` and `div.note`:
    - Styling for `button.add` customizes the appearance of the "Add Note" button.
    - Styling for `div.note` defines the appearance of note containers.
6. Styles for `div.note .tools .btn`:
    - These styles define the appearance of the buttons in the toolbar of note containers.
7. Styles for `div.note .textarea`:
    - These styles define the appearance and behavior of the text area within the note containers.
8. `.hidden`:
    - This style hides elements by starting with `display: none;`. It ensures that an element is not visible.
9. `div.note .main`:
    - This style defines the appearance of the main content section within note containers."
    -

### Adding Notes To The DOM

1. "Add Note" Button:
    - The `addBtn` variable selects the "Add Note" button on the page.
    - A click event listener is added to this button. When you click the button, the `addNewNote` function is executed.
2. `addNewNote` Function:
    - This function is used to add a new note.
    - It creates a `div` element and adds the "note" class to it.
    - The content is populated using HTML that includes the note's toolbar, text area, and main content.
3. Note's Toolbar and Text Area:
    - The note's toolbar contains "Edit" and "Delete" buttons.
    - The text area allows you to enter and edit the note's text.
    - When the text area is hidden, the main content is displayed, and vice versa.
4. Edit and Delete Buttons:
    - Clicking the "Edit" button toggles between the text area and the main content, allowing you to edit the note.
    - Clicking the "Delete" button removes the note itself from the page.
5. Updating Text Area Content:
    - When the user enters text into the text area, this text is captured using the `input` event.
    - The text in the text area is converted to Markdown and stored in the `main` content and in localStorage."

    ```jsx
    const addBtn = document.getElementById('add');
    
    addBtn.addEventListener('click', () => addNewNote());
    
    function addNewNote(text = '') {
      const note = document.createElement('div');
      note.classList.add('note');
    
      note.innerHTML = `
            <div class="tools">
                <button class="btn edit"><i class="fas fa-edit"></i></button>
                <button class="btn delete"><i class="fas fa-trash-alt"></i></button>
            </div>
    
            <div class="main ${text ? '' : 'hidden'}"></div>
            <textarea class="textarea ${text ? 'hidden' : ''}"></textarea>
        `;
    
      const editBtn = note.querySelector('.edit');
      const deleteBtn = note.querySelector('.delete');
      const main = note.querySelector('.main');
      const textarea = note.querySelector('.textarea');
    
      textarea.value = text;
      main.innerHTML = marked(text);
    
      deleteBtn.addEventListener('click', () => {
        note.remove();
      });
    
      editBtn.addEventListener('click', () => {
        main.classList.toggle('hidden');
        textarea.classList.toggle('hidden');
      });
    
      textarea.addEventListener('input', (e) => {
        const { value } = e.target;
        main.innerHTML = marked(value);
        updateLS();
      });
    
      document.body.appendChild(note);
    }
    ```

### **Save Notes To Local Storage**

These JavaScript code snippets handle the functionality of storing notes in local storage and displaying them on the page when loaded.

1. **Loading Notes from Local Storage**:
    - The first line of code retrieves the "notes" item from local storage and converts this data into a JavaScript object using **`JSON.parse`**.
    - If the "notes" item exists in local storage and contains notes (the **`notes`** variable), these notes are passed to the **`addNewNote`** function using a **`forEach`** loop.
    - This loads previously saved notes every time the page is loaded.
2. **The `updateLS` Function**:
    - This function is used to update notes and save them to local storage.
    - It selects all text areas on the page using **`querySelectorAll`**.
    - The content of each text area is retrieved and added to an empty array named **`notes`**.
    - The notes in this array are converted to JSON format and saved to local storage with the name "notes."
    - So, when a user adds or edits a note, this function is called to update the notes in local storage.

This code segment retrieves notes stored in local storage when the page loads and displays them on the page. It also uses **`localStorage`** to store changes when you add or edit notes. This ensures that a user's notes are preserved for future visits, allowing them to see notes they added earlier.

    ```jsx
    deleteBtn.addEventListener('click', () => {
        // ... Last Codes
        updateLS();
    });

    textarea.addEventListener('input', (e) => {
        // ... Last Codes
        updateLS();
    });
    // ...
    const notes = JSON.parse(localStorage.getItem('notes'));
    if (notes) {
    notes.forEach((note) => addNewNote(note));
    }

    function updateLS() {
    const notesText = document.querySelectorAll('textarea');
    const notes = [];

    notesText.forEach((note) => notes.push(note.value));
    localStorage.setItem('notes', JSON.stringify(notes));
    }
    ```
