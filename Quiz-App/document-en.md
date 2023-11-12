# Quiz App

## Quiz UI

### HTML

1. **Quiz Container:**
    - Represents the main container containing questions and options.
    - Can be stylized using the **`quiz-container`** class.
2. **Question Title:**
    - Contains an **`h2`** title with the id **`question`** representing the text of the question.
    - The title can be stylized using the **`title`** class.
3. **Options Section:**
    - Resides within the **`quiz-header`** class, defining the box containing the questions.
    - Each option is within a list item (**`li.answer-item`**).
    - Each option includes a radio input (**`input[type='radio']`**) and a label (**`label`**).
    - Radio inputs share the same group name (**`name='answer'`**), creating a group allowing only one option to be selected.
    - Labels contain option texts and can be stylized using the **`text`** class.
4. **Submit Button:**
    - Represents the button initiating the submission process after answering the questions.
    - Has the id **`submit`** and the class **`btn`**.
5. **Key Points:**
    - HTML elements form the fundamental building blocks of the quiz application.
    - CSS style classes can be used to customize the appearance and layout.
    - JavaScript can be employed to handle user selections and evaluate quiz results.

```html
<section class="quiz-container" id="quiz">
        <h2 id="question" class="title">Question Text</h2>
        <div class="quiz-header">
            <ul class="answers-list">
                <li class="answer-item">
                    <input type="radio" name="answer" id="a" class="answer">
                    <label for="a" id="a_text" class="text">Question</label>
                </li>
                <li class="answer-item">
                    <input type="radio" name="answer" id="b" class="answer">
                    <label for="b" id="b_text" class="text">Question</label>
                </li>
                <li class="answer-item">
                    <input type="radio" name="answer" id="c" class="answer">
                    <label for="c" id="c_text" class="text">Question</label>
                </li>
                <li class="answer-item">
                    <input type="radio" name="answer" id="d" class="answer">
                    <label for="d" id="d_text" class="text">Question</label>
                </li>
            </ul>
        </div>
        <button id="submit" class="btn">Submit</button>
    </section>
```

### CSS

1. **Question Title Styles:**
    - The question title includes style properties like background color, box shadow, and text color.
    - Adjustments such as **`padding`**, **`text-align`**, and **`margin`** are defined within the title.
2. **Quiz Header Styles:**
    - General styling for the section containing questions and options is configured.
    - The **`padding`** property is used to create spacing between nested elements.
3. **Options List Styles:**
    - List items are stylized with zero padding.
    - Each option item is formatted with a specific font size and bottom border.
    - Color and border color change on hover is implemented.
4. **Option Text Styles:**
    - Cursor appearance and margin adjustments are applied to option texts.
5. **Submit Button Styles:**
    - The button has specific color and style properties.
    - Color change on hover and transition effects are added.
    - The outline is removed in the focus state.
6. **Key Points:**
    - Color and style classes provide visibility and consistency defined with variables.
    - Transition effects and shadows are used to create visually pleasing user experience.
    - Font sizes, spacing, and colors contribute to an attractive and readable design.

```css
section.quiz-container{
    background-color: #1e2228;
    border-radius: 10px;
    width:600px;
    overflow: hidden;
}
section.quiz-container .title{padding: 1rem; text-align: center; margin: 0; background-color:var(--detail-color);   box-shadow: 0 0 50px var(--detail-color), 0 0 25px var(--detail-color); color: #1e2228;}
section.quiz-container .quiz-header{padding: 4rem; }
section.quiz-container .quiz-header .answers-list{list-style-type: none; padding: 0;}
section.quiz-container .quiz-header .answers-list .answer-item{font-size: 1.2rem; padding: 1rem 0; border-bottom: 1px solid #e0e0e06b; }
section.quiz-container .quiz-header .answers-list .answer-item:hover{color: var(--font-color); border-bottom-color: var(--font-color);}
section.quiz-container .quiz-header .answers-list .answer-item .text{cursor: pointer; margin-left: 3px;}
section.quiz-container .btn{
    background-color: var(--primary-color);
    color: #1e2228;
    border: none;
    display: block;
    width: 100%;
    cursor: pointer;
    font-size: 1.2rem;
    font-family: inherit;
    padding: 1.3rem;
    transition: all ease 0.3s;
    font-weight: 700;
    box-shadow: 0 0 50px #1e2228, 0 0 25px var(--primary-color);
}
section.quiz-container .btn:hover{ background-color: var(--detail-color); }
section.quiz-container .btn:focus{outline: none; background-color: var(--primary-color); }
```

## Quiz Functionality

1. **Data Structure:**
    - Each question is represented by an object within an array called **`quizData`**.
    - Each object includes a question, four options, and the correct answer.
2. **HTML Elements and Variables:**
    - The **`quiz`** variable represents a section with the id "quiz" in HTML.
    - **`answerEls`** is a NodeList representing all options.
    - Question text and options are updated through relevant HTML elements and variables.
3. **Quiz Loading Function:**
    - The **`loadQuiz`** function loads the current question and places options in the HTML.
    - The **`currentQuizData`** variable contains data for the current question.
4. **Answer Selection and Deselection:**
    - The **`deselectAnswers`** function removes the selection from any option.
    - The **`getSelected`** function returns the selected answer.
5. **Submit Button Event Listener:**
    - There is a click event listener on **`submitBtn`**.
    - Upon click, the user's selected answer is checked.
    - If the correct answer is given, the **`score`** is incremented.
    - It moves to the next question or displays results if the quiz is completed.
6. **Displaying Results:**
    - When the quiz is completed, it shows how many questions the user answered correctly.
    - A "Reload" button is added to reload the page.
7. **Key Points:**
    - The connection between data and user interaction is established with HTML elements and JavaScript variables.
    - User answers are correctly checked, and the score is calculated.
    - Results are dynamically updated on the page and presented to the user.

```jsx
const quizData = [
  {
    question: 'What does HTML stand for?',
    a: 'Hyperlink and Text Markup Language',
    b: 'High-Level Text Management Language',
    c: 'Hyper Text Markup Language',
    d: 'Hyper Transfer Markup Language',
    correct: 'c',
  },
  {
    question: 'Which language is primarily used for styling web pages?',
    a: 'JavaScript',
    b: 'Java',
    c: 'Cascading Style Sheets (CSS)',
    d: 'Hypertext Preprocessor (PHP)',
    correct: 'c',
  },
  {
    question: 'What is the purpose of the JavaScript programming language in web development?',
    a: 'Server-side scripting',
    b: 'Styling and layout',
    c: 'Adding interactivity to web pages',
    d: 'Database management',
    correct: 'c',
  },
  {
    question: 'What is the role of a URL in web development?',
    a: 'Defining the structure of a web page',
    b: 'Locating and identifying resources on the internet',
    c: 'Storing data in a database',
    d: 'Managing server configurations',
    correct: 'b',
  },
];

const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  deselectAnswers();
  const currentQuizData = quizData[currentQuiz];

  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

function deselectAnswers() {
  answerEls.forEach((answerEl) => (answerEl.checked = false));
}

function getSelected() {
  let answer;

  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });

  return answer;
}

submitBtn.addEventListener('click', () => {
  const answer = getSelected();
  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }

    currentQuiz++;

    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `
            <h2 class="info"> You answered ${score} / ${quizData.length} questions correctly</h2>
            <button onclick= "location.reload()" class="btn">Reload</button>
        `;
    }
  }
});
```
