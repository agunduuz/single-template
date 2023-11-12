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
