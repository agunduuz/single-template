# Feedback UI Design

## Feedback Boxes

### HTML

1. **Panel Area (Panel Container)**:
    - Represented by a **`<section>`** tag, this area contains a panel where users can evaluate their satisfaction.
    - It has an **`id="panel"`** which provides a specific identity, allowing it to be targeted by JavaScript or CSS.
    - It uses the class "panel-container" for styling and layout purposes.
2. **Title and Question**:
    - Within a **`<strong>`** tag, the panel features a title and a question. Users can determine their satisfaction level regarding customer support performance here.
3. **Rating Boxes**:
    - Inside a **`<div class="ratings-container">`**, there are three separate rating boxes that represent different satisfaction levels.
    - Each rating box is enclosed within a **`<div class="rating">`**.
    - They each contain an image (**`<img>`**) corresponding to an emotional expression.
    - Additionally, there is a text label (******`<small>`***) below each rating box to provide an explanation.
    - These rating boxes express "Unhappy," "Neutral," and "Satisfied" emotions.
    - The active rating box is marked as "Satisfied" by default and has a distinct style.
4. **Submit Review Button**:
    - At the bottom of the panel, there's a **`<button class="btn" id="send">Send Review</button>`**.
    - This button allows users to submit their reviews after selecting their satisfaction level."

```html
<section id="panel" class="panel-container">
        <strong>How satisfied are you with our <br> customer support performance?</strong>
        <div class="ratings-container">
            <div class="rating">
                <img src="https://www.svgrepo.com/show/492547/cry.svg" alt="unhappy">
                <small>Unhappy</small>
            </div>
            <div class="rating">
                <img src="https://www.svgrepo.com/show/492558/deadpan-1.svg" alt="neutral">
                <small>Neutral</small>
            </div>
            <div class="rating active">
                <img src="https://www.svgrepo.com/show/492552/in-love.svg" alt="satisfied">
                <small>Satisfied</small>
            </div>
        </div>
        <button class="btn" id="send">Send Review</button>
    </section>
```

### CSS

1. **Panel Area Style**:
    - **`section.panel-container`** represents a panel area and its style defines the overall appearance of the panel.
    - It includes background color (**`background-color`**), border radius (**`border-radius`**), box shadow effects (**`box-shadow`**), and text size (**`font-size`**).
    - The content layout is organized as a centered column in a horizontal fashion (**`display: flex; flex-direction: column; justify-content: center; align-items: center;`**).
    - Text alignment and padding settings center the text within the panel.
    - The maximum width (**`max-width`**) limit prevents the panel from expanding too wide.
    - Border style and color define the panel's boundaries.
2. **Title Style**:
    - **`section.panel-container strong`** defines the style of the panel's title. The line height (**`line-height`**) setting enhances text readability.
3. **Rating Boxes Style**:
    - The rating boxes are contained within **`section.panel-container .ratings-container`** and are arranged horizontally.
    - Style is specified for each rating box (**`rating`**), including settings for clickability and padding/margin.
    - When hovered over or active, the appearance of the boxes changes (hover/active).
    - Color settings for the size of images and descriptions (**`small`**) are included.
4. **Submit Button Style**:
    - **`section.panel-container .btn`** defines the style of the submit review button. It includes background color, text color, border radius, and other style settings.
    - When the button is focused on or clicked, style changes occur (focus/active).
5. **FontAwesome Heart Icon Style**:
    - The **`.fa-heart`** class specifies the style of the heart icon from FontAwesome. It includes color and size settings.

```css
section.panel-container{
    background-color: #1e2228;
    box-shadow: 0 0 50px #1e2228, 0 0 25px var(--primary-color);
    border-radius: 4px;
    font-size: 90%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 30px;
    max-width: 400px;
    border: 2px solid var(--primary-color);
}
section.panel-container strong{line-height: 20px;}
section.panel-container .ratings-container{ display: flex; margin: 20px 0; }
section.panel-container .ratings-container .rating{
    flex: 1;
    cursor: pointer;
    padding: 20px;
    margin: 10px 5px;
}
section.panel-container .ratings-container .rating:hover,
section.panel-container .ratings-container .rating.active
{
    border-radius: 4px;
    box-shadow: 0 0 50px var(--primary-color), 0 0 5px var(--font-color);
}
section.panel-container .ratings-container .rating img{width: 50px;}
section.panel-container .ratings-container .rating small{
    color: #555;
    display: inline-block;
    margin: 10px 0 0;
}
section.panel-container .ratings-container .rating:hover small,
section.panel-container .ratings-container .rating.active small
{
    color: #ddd;
}
section.panel-container .btn{
    background-color: var(--detail-color);
    font-family: inherit;
    font-weight: 600;
    border: 0;
    border-radius: 4px;
    padding: 12px 30px;
    color: #1e2228;
    cursor: pointer;
    box-shadow: 0 0 50px #1e2228, 0 0 10px var(--detail-color);

}
section.panel-container .btn:focus{outline: 0;}
section.panel-container .btn:active{transform: scale(0.98);}
.fa-heart{ color:#d00000 ; font-size: 30px; margin-bottom: 10px; }
```

## Select & Submit Feedback

1. **Variable Definitions**:
    - At the beginning of the code, variables are defined to access HTML elements. These variables include elements representing ratings, the send button, the panel, and the selected rating.
2. **Event Listeners**:
    - Event listeners are added to listen for events such as clicks on the rating boxes and the "Send Review" button.
3. **Rating Selection**:
    - When a user clicks on a rating box, a function is invoked to track this selection.
    - The selected rating box is highlighted, and the chosen rating is determined.
4. **Submission Function**:
    - When the user clicks the "Send Review" button, the content within the panel is updated.
    - The user is thanked, and the selected rating is displayed.
5. **`removeActive` Function**:
    - A function is defined to remove the "active" class from all rating boxes. This ensures that only the selected box has the "active" class.

```jsx
const ratings = document.querySelectorAll('.rating');
const ratingsContainer = document.querySelector('.ratings-container');
const sendBtn = document.getElementById('send');
const panel = document.getElementById('panel');
let selectedRating = 'Satisfied';

ratingsContainer.addEventListener('click', (e) => {
  if (e.target.parentNode.classList.contains('rating')) {
    removeActive();
    e.target.parentNode.classList.add('active');
    selectedRating = e.target.nextElementSibling.innerHTML;
  }
});

sendBtn.addEventListener('click', (e) => {
  panel.innerHTML = `
        <i class = "fas fa-heart"></i>
        <strong> Thank you! </strong>
        <br>
        <strong class="feedback-info">Feedback: ${selectedRating}</strong>
        <p>We'll use your feedback to improve <br> our customer support.</p>
    `;
});

function removeActive() {
  for (let i = 0; i < ratings.length; i++) {
    ratings[i].classList.remove('active');
  }
}

```
