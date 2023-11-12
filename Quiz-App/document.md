# Quiz App

## Quiz UI

### HTML

1. **Quiz Container (Sınav Konteyneri):**
    - Soruların ve seçeneklerin bulunduğu ana konteyneri temsil eder.
    - **`quiz-container`** sınıfı ile stilize edilebilir.
2. **Soru Başlığı:**
    - Sorunun metnini içeren **`question`** id'sine sahip bir **`h2`** başlığı bulunur.
    - Başlık, **`title`** sınıfı ile stilize edilebilir.
3. **Seçenekler Bölümü:**
    - Soruların bulunduğu kutucuğu tanımlayan **`quiz-header`** sınıfı içinde yer alır.
    - Her seçenek bir liste elemanında (**`li.answer-item`**) bulunur.
    - Her seçenek, bir radio input (**`input[type='radio']`**) ve bir label (**`label`**) içerir.
    - Radio input'lar aynı grup adına (**`name='answer'`**) sahiptir, bu sayede sadece bir seçeneğin seçilebileceği bir grup oluşturulur.
    - Label'lar, seçenek metinlerini içerir ve **`text`** sınıfı ile stilize edilebilir.
4. **Gönderme Düğmesi:**
    - Soruları cevapladıktan sonra gönderme işlemini başlatan bir düğmeyi temsil eder.
    - **`submit`** id'sine ve **`btn`** sınıfına sahiptir.
5. **Önemli Noktalar:**
    - HTML elemanları, sınav uygulamasının temel yapı taşlarını oluşturur.
    - CSS stil sınıfları, görünümü ve düzeni özelleştirmek için kullanılabilir.
    - JavaScript kullanılarak, kullanıcının seçimlerini işleyebilir ve sınav sonuçlarını değerlendirebilirsiniz.

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

1. **Quiz Container Stilleri:**
    - Sınav konteyneri, arkaplan rengi ve kenar yuvarlaklık gibi genel özelliklerle stilize edilir.
    - **`background-color`**, **`border-radius`**, **`width`**, ve **`overflow`** gibi özellikler belirlenir.
2. **Soru Başlığı Stilleri:**
    - Soru başlığı, arkaplan rengi, kutu gölgesi, metin rengi gibi stil özellikleri içerir.
    - Başlık içinde **`padding`**, **`text-align`**, ve **`margin`** gibi düzenleme özellikleri belirlenir.
3. **Quiz Header Stilleri:**
    - Soru ve seçenekleri içeren bölümün genel stil ayarları yapılır.
    - **`padding`** özelliği ile iç içe geçmiş öğeler arasındaki boşluk ayarlanır.
4. **Seçenek Listesi Stilleri:**
    - Liste öğeleri sıfır padding ile stilize edilir.
    - Her bir seçenek öğesi, belirli bir font boyutu ve alt kenarlık ile düzenlenir.
    - Hover durumunda renk ve kenarlık rengi değişimi eklenir.
5. **Seçenek Metni Stilleri:**
    - Seçenek metinleri üzerinde bir imleç görünmesi ve margin düzenlemeleri yapılır.
6. **Gönderme Düğmesi Stilleri:**
    - Düğme, belirli renk ve stil özelliklerine sahiptir.
    - Hover durumunda renk değişimi ve geçiş efekti eklenmiştir.
    - Focus durumunda dış çizgi kaldırılmıştır.
7. **Önemli Noktalar:**
    - Renk ve stil sınıfları, değişkenler ile tanımlanmış görünürlük ve tutarlılık sağlar.
    - Görsel olarak hoş bir kullanıcı deneyimi oluşturmak için geçiş efektleri ve gölgeler kullanılmıştır.
    - Font büyüklükleri, boşluklar ve renkler dikkat çekici ve okunabilir bir tasarım sunar.

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

1. **Veri Yapısı:**
    - **`quizData`** adlı bir dizi içinde, her soru için bir nesne bulunur.
    - Her nesne, bir soruyu, dört seçeneği, doğru cevabı içerir.
2. **HTML Elemanları ve Değişkenler:**
    - **`quiz`** değişkeni, HTML'de "quiz" id'li bir bölümü temsil eder.
    - **`answerEls`**, seçeneklerin hepsini temsil eden bir dizi NodeList'tir.
    - Soru metni ve seçenekler, ilgili HTML elemanları ve değişkenler aracılığıyla güncellenir.
3. **Quiz Yükleme Fonksiyonu:**
    - **`loadQuiz`** fonksiyonu, mevcut soruyu yükler ve seçenekleri HTML'e yerleştirir.
    - **`currentQuizData`** değişkeni, şu anki sorunun verilerini içerir.
4. **Cevap Seçme ve Temizleme:**
    - **`deselectAnswers`** fonksiyonu, seçeneklerden herhangi birinin seçimini kaldırır.
    - **`getSelected`** fonksiyonu, seçilen cevabı döndürür.
5. **Submit Butonu Olay Dinleyicisi:**
    - **`submitBtn`** üzerinde bir tıklama olayı dinleyicisi vardır.
    - Tıklama durumunda, kullanıcının seçtiği cevap kontrol edilir.
    - Doğru cevap verilirse, **`score`** artırılır.
    - Bir sonraki soruya geçilir veya quiz tamamlanırsa sonuçlar gösterilir.
6. **Sonuçları Gösterme:**
    - Quiz tamamlandığında, kullanıcının kaç soruya doğru cevap verdiği gösterilir.
    - Sayfanın yeniden yüklenmesini sağlayan bir "Reload" butonu eklenir.
7. **Önemli Noktalar:**
    - Veri ve kullanıcı etkileşimi arasındaki bağlantı, HTML elemanları ve JavaScript değişkenleriyle sağlanır.
    - Kullanıcının cevapları doğru bir şekilde kontrol edilir ve skor hesaplanır.
    - Sonuçlar, sayfa üzerinde dinamik olarak güncellenir ve kullanıcıya gösterilir.

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
