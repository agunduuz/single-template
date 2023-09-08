# Day 29 - Double Heart Click

1. First, select an HTML element with the class **`loveMe`** and another element with the id **`times`**. The **`loveMe`** element responds to the click event, while the **`times`** element is used to keep track of how many times the user clicks.
2. Initialize a variable called **`clickTime`** and set it to zero initially. This variable is used to track the time of clicks by the user.
3. Add a click event to the **`loveMe`** element using **`addEventListener`**. When the user clicks on the **`loveMe`** element, this event is triggered.
4. Inside the click event, the code checks the user's click timing. On the first click, the **`clickTime`** variable is updated with the current time using **`new Date().getTime()`**.
5. On the second click, the code calculates the difference between the **`clickTime`** variable and the current time. If this difference is less than 800 milliseconds (meaning the user clicked quickly twice), the **`createHeart`** function is called, and a heart icon is created. Otherwise, the **`clickTime`** variable is updated again.
6. The **`createHeart`** function creates a heart icon at the click location of the user, taking into account the position of the click event (**`e`**) and the location inside the **`loveMe`** element (**`x`** and **`y`** coordinates).
7. With each click, the click count is incremented, and this count is reflected in the content of the **`times`** element.
8. After creating the heart icon, it is removed from the document after a delay of 1000 milliseconds (1 second) using **`setTimeout`**.

This code provides an interactive experience where the user can quickly click to create a heart icon and keeps track of how many times they clicked.