# DAY 28 - GitHub Profiles
1. **`const APIURL = 'https://api.github.com/users/';`**:
    - The base URL for the GitHub API is assigned to the **`APIURL`** variable. This URL is used to send requests to the GitHub API.
2. **`const main = document.getElementById('main');`**, **`const form = document.getElementById('form');`**, and **`const search = document.getElementById('search');`**:
    - Elements from the HTML document are selected to interact with them using JavaScript. **`main`** represents the area where results will be displayed, **`form`** represents the user search form, and **`search`** represents the input field where the user enters a username.
3. **`async function getUser(username) { ... }`**:
    - An **`async`** function named **`getUser`** is defined. This function sends an API request to search for the user's GitHub account using **`axios`** and processes the result. It takes the username as input, constructs the relevant GitHub API URL, and retrieves the user's information. In case of errors, it catches and handles them, displaying a custom error message for a 404 status code.
4. **`async function getRepos(username) { ... }`**:
    - An **`async`** function named **`getRepos`** is defined. This function sends a separate API request to fetch the user's GitHub repositories. It uses **`axios`** to retrieve the user's repo information and sorts it by creation date. In case of errors, it handles them and displays an error message.
5. **`function createUserCard(user) { ... }`**:
    - A function named **`createUserCard`** is defined. This function creates an HTML card using the user's GitHub profile information and inserts this card into the **`main`** area. It displays the user's name, avatar, bio, and details such as followers, following, and public repositories.
6. **`function createErrorCard(msg) { ... }`**:
    - A function named **`createErrorCard`** is defined. This function creates a custom error card to display when a user is not found or when any error occurs. It inserts this error card into the **`main`** area.
7. **`function addReposToCard(repos) { ... }`**:
    - A function named **`addReposToCard`** is defined. This function takes the user's list of repositories and creates HTML elements to display the first 10 repositories. Each repository is created as a link, and **`target`** is set to open them in a new tab. These repo elements are appended to an HTML container element with the id **`repos`**.
8. **`form.addEventListener('submit', (e) => { ... }`**:
    - An event listener is added to listen for the submit event of the HTML form. When the form is submitted, this event listener is triggered.
9. **`e.preventDefault();`**:
    - **`e.preventDefault()`** is used to prevent the default behavior of the form submission, which would cause a page reload or a server request.
10. **`const user = search.value;`**:
    - The GitHub username entered by the user is retrieved from the search input field (**`search`**) and assigned to the **`user`** variable.
11. **`if (user) { ... }`**:
    - If the **`user`** variable is not empty (meaning the user has entered a username), the **`getUser(user)`** function is called. This process is used to search for the user on the GitHub API.
12. **`search.value = '';`**:
    - The search input field is cleared so that the user can easily enter a new search query.

This code creates a web application that uses the GitHub API to search for users, display their profile information, and list their repositories. When a username is entered, the user's profile information and the first 10 repositories are displayed. If the user is not found or an error occurs, appropriate error messages are displayed.

### Runtime Complexity

This code operates with various operations in terms of Runtime Complexity. Here are some significant operations within this code and their complexity degrees:

1. **`getUser(username)`**:
    - This function retrieves a user's profile information using the GitHub API and calls the **`createUserCard`** and **`getRepos`** functions.
    - The process of fetching profile information has a complexity of O(1) since the user's profile is obtained in a single request, and the request's size is independent of the user.
    - The **`getRepos`** function is called, which also has O(1) complexity because the list of repositories is fetched in a single request, and the size of the list is independent of the user.
2. **`getRepos(username)`**:
    - This function retrieves the GitHub repository (repo) list for the user and processes this list.
    - The process of fetching the repo list has a complexity of O(n) because it performs operations for each repo (usually 10 repos are fetched, so n is typically a small constant).
    - It also has O(n) complexity when creating each repo element and adding it to the **`reposEl`** element.
3. **`addReposToCard(repos)`**:
    - This function iterates through the user's repo list and creates and appends HTML elements for each repo.
    - It performs operations for each repo (typically 10), resulting in O(n) complexity.

In conclusion, this code mainly involves operations with O(1) and O(n) complexities. Therefore, the total Runtime Complexity of this code depends largely on the size of the input data and the requests made to the GitHub API. Typically, this code is suitable for processing small to medium-sized repo lists and does not cause performance issues.