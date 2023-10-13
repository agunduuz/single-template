# Password Generator

### Random Functions

1. These code snippets contain four different functions that you can use to generate random characters.
2. ***`getRandomLower`** Function:
    - This function generates a random lowercase letter (a-z).
    - The **`Math.random()`** function generates a random decimal number (between 0 and 1).
    - By multiplying this random number by 26 and rounding, we obtain an integer between 0 and 25.
    - We add this integer to 97 to get a number representing the lowercase letter range in the ASCII table.
    - Using **`String.fromCharCode()`**, we convert this number to the corresponding character and return it.
3. ***`getRandomUpper`** Function:
    - This function generates a random uppercase letter (A-Z).
    - The logic is similar to **`getRandomLower`**, but we add 65 to obtain an ASCII value corresponding to the uppercase letter range.
4. ***`getRandomNumber`** Function:
    - This function generates a random digit between 0 and 9.
    - Similar logic is used, but this time, we add 48 to obtain ASCII values for digits.
5. ***`getRandomSymbol`** Function:
    - This function selects and returns a random symbol from a predefined set of symbols (!@#$%^&*(){}[]+-=.,/<>).
    - The symbols are defined within a constant string, and a random character is chosen from this string.
    - ***`randomFunctions`** Object:
    - This object contains four functions representing four different character types: lowercase, uppercase, digit, and symbol.
    - You can access these functions by using the corresponding keys on the object.

    ```jsx
    function getRandomLower() {
      return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
    }
    function getRandomUpper() {
      return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
    }
    function getRandomNumber() {
      return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
    }
    function getRandomSymbol() {
      const symbol = '!@#$%^&*(){}[]+-=.,/<>';
      return symbol[Math.floor(Math.random() * symbol.length)];
    }
    
    const randomFunctions = {
      lower: getRandomLower,
      upper: getRandomUpper,
      number: getRandomNumber,
      symbol: getRandomSymbol,
    };
    ```

### Generate Password

This JavaScript code can be used for a web application that allows a user to generate random passwords with specific characteristics. Here are explanations of the important parts of this code:

1. **`generateEl.addEventListener('click', () => { ... });`**
    - This code adds a click event listener to an HTML element named "generateEl."
    - When the user clicks on this element, a function is triggered, and this function generates a random password and displays the result.
2. **`const length = +lengthEl.value;`**
    - It retrieves the password length specified by the user from the value of an HTML element named "lengthEl."
3. **`const hasLower = lowercaseEl.checked;`**, **`const hasUpper = uppercaseEl.checked;`**, **`const hasNumber = numbersEl.checked;`**, **`const hasSymbol = symbolsEl.checked;`**
    - These lines obtain the user's selected options (lowercase, uppercase, numbers, symbols) from the states of corresponding HTML checkboxes.
4. **`resultEl.innerText = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, length);`**
    - It sets the generated password as the text content of an HTML element named "resultEl." This displays the generated password to the user.
5. **`function generatePassword(lower, upper, number, symbol, length) { ... }**
    - This function is used to generate a random password. Here are the important steps:
        - A variable named "typesCount" is created to count the types of characters in the password.
        - An array named "typesArr" is created to store the user's selected character types in an array.
        - If the user doesn't select any character type, an empty password is returned.
        - To generate a password of the specified length, a loop is used. In each iteration, the "typesArr" is iterated over, and a random character is added for each type.
        - Finally, the generated password is sliced to the specified length and returned.

This code allows a user to create customized passwords with specific character types. The user can enable options for lowercase, uppercase, digits, and symbols, and can also choose the password length.

```jsx
generateEl.addEventListener('click', () => {
  const length = +lengthEl.value;
  const hasLower = lowercaseEl.checked;
  const hasUpper = uppercaseEl.checked;
  const hasNumber = numbersEl.checked;
  const hasSymbol = symbolsEl.checked;

  resultEl.innerText = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, length);
});

function generatePassword(lower, upper, number, symbol, length) {
  let generatedPassword = '';
  const typesCount = lower + upper + number + symbol;
  const typesArr = [{ lower }, { upper }, { number }, { symbol }].filter((item) => Object.values(item)[0]);

  if (typesCount === 0) {
    return '';
  }

  for (let i = 0; i < length; i += typesCount) {
    typesArr.forEach((type) => {
      const funcName = Object.keys(type)[0];
      generatedPassword += randomFunctions[funcName]();
    });
  }

  const finalPassword = generatedPassword.slice(0, length);
  return finalPassword;
}
```

### Copy Password To Clipboard

This JavaScript code snippet allows the user to copy the generated password to the clipboard and notifies the user with a success message. Here are explanations of the important parts of this code:

1. **`clipboardEl.addEventListener('click', () => { ... });`**
    - This code adds a click event listener to an HTML element named "clipboardEl."
    - When the user clicks on this element, a function is triggered, and this function copies the password to the clipboard.
2. **`const textarea = document.createElement('textarea');`**
    - In this line, a temporary **`textarea`** element is created. This element will be used to copy the password to the clipboard.
3. **`const password = resultEl.innerText;`**
    - This code retrieves the content of an HTML element named "resultEl." This content contains the password generated in the previous code snippet.
4. **`if (!password) { return; }`**
    - If the password is empty (i.e., not generated), it terminates the process and does nothing.
5. **`textarea.value = password;`**
    - The password is assigned to the value of the **`textarea`** element. This makes the **`textarea`** contain the password.
6. **`document.body.appendChild(textarea);`**
    - The **`textarea`** element is added to the document's body. This is done because it's a temporary element and won't be visible to the user.
7. **`textarea.select();`**
    - The content of the **`textarea`** element is selected. This allows the user to easily select the copied password from the clipboard.
8. **`document.execCommand('copy');`**
    - This code copies the selected text to the clipboard. This action ensures that the user has copied the password to the clipboard.
9. **`textarea.remove();`**
    - The temporary **`textarea`** element is removed from the document. It is cleaned up because it's no longer needed.
10. **`alert('Password Copied to Clipboard');`**
    - A notification window is shown to the user, informing them that the password has been successfully copied to the clipboard.

    ```jsx
    clipboardEl.addEventListener('click', () => {
    const textarea = document.createElement('textarea');
    const password = resultEl.innerText;

    if (!password) {
        return;
    }

    textarea.value = password;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    textarea.remove();
    alert('Password Copied to Clipboard');
    });
    ```
