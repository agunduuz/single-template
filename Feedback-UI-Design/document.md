# Feedback UI Design

## Feedback Boxes

### HTML

1. **Panel Bölgesi (Panel Container)**:
    - **`<section>`** etiketi ile tanımlanan bir bölgeyi temsil eder. Bu bölge, kullanıcıların memnuniyetlerini değerlendirebileceği bir panel içerir.
    - **`id="panel"`** ile belirli bir kimliğe sahiptir ve bu kimlikle JavaScript veya CSS tarafından hedef alınabilir.
    - **`class="panel-container"`** ile stil ve düzenlemeler için kullanılan bir sınıfı tanımlar.
2. **Başlık ve Soru**:
    - **`<strong>`** etiketi, panelin başlığını ve sorusunu içerir. Kullanıcılar müşteri destek performansı ile ilgili memnuniyet düzeyini buradan öğrenirler.
3. **Derecelendirme Kutuları**:
    - **`<div class="ratings-container">`** içinde, memnuniyeti ifade eden üç ayrı derecelendirme kutusu bulunur.
    - Her derecelendirme kutusu, bir **`<div class="rating">`** içinde bulunur.
    - Her derecelendirme kutusu, bir duygusal ifadeye karşılık gelen bir resim (**`<img>`**) içerir.
    - Ayrıca, derecenin altında bir metin etiketi (****`<small>`**) ile açıklama eklenir.
    - "Unhappy," "Neutral," ve "Satisfied" (Memnun) duygusal ifadeleri içerirler.
    - Aktif olan derecelendirme kutusu, varsayılan olarak "Satisfied" olarak işaretlenir ve farklı bir stili vardır.
4. **İnceleme Gönderme Düğmesi**:
    - Panelin altında bir **`<button class="btn" id="send">Send Review</button>`** bulunur.
    - Bu düğme, kullanıcıların memnuniyet düzeylerini seçtikten sonra incelemelerini göndermelerini sağlar.

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

1. **Panel Bölgesi Stili**:
    - **`section.panel-container`**, bir panel bölgesini temsil eder ve bu stil, panelin genel görünümünü belirler.
    - Arka plan rengi (**`background-color`**), kenar yuvarlaklığı (**`border-radius`**), gölge efektleri (**`box-shadow`**), ve metin boyutu (**`font-size`**) ayarları içerir.
    - İçerik düzeni, yatay olarak merkezlenmiş bir sütun halinde (**`display: flex; flex-direction: column; justify-content: center; align-items: center;`**).
    - Metin hizalaması ve padding ayarları, metnin ortalanmasını sağlar.
    - Maksimum genişlik (**`max-width`**) sınırı, panelin fazla genişlemesini önler.
    - Kenarlık (border) stil ve rengi, panelin sınırlarını tanımlar.
2. **Başlık Stili**:
    - **`section.panel-container strong`**, panel başlığının stilini belirler. Satır yüksekliği (**`line-height`**) ayarı metin okunabilirliğini artırır.
3. **Derecelendirme Kutuları Stili**:
    - Derecelendirme kutuları, **`section.panel-container .ratings-container`** içinde bulunur ve yatay bir düzende sıralanır.
    - Her derecelendirme kutusu (**`rating`**) için stil belirlenir. Bu stil, tıklanabilirlik ve padding/margin ayarlarını içerir.
    - Fare üzerine gelindiğinde veya aktif olduğunda, kutuların görünümü değişir (hover/active).
    - Resimlerin boyutu ve altındaki açıklamalar (**`small`**) için renk ayarları içerir.
4. **Gönderme Düğmesi Stili**:
    - **`section.panel-container .btn`**, inceleme gönderme düğmesinin stilini tanımlar. Arka plan rengi, yazı rengi, kenar yuvarlaklığı, ve diğer stil ayarlarını içerir.
    - Düğmeye odaklandığında ve tıklandığında stil değişiklikleri vardır (focus/active).
5. **FontAwesome Kalp İkonu Stili**:
    - **`.fa-heart`** sınıfı, kalp ikonunun stilini belirler. Rengi ve boyutu ile ilgili ayarlar içerir.

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

1. **Değişkenlerin Tanımlanması**:
    - Kod başlangıcında, HTML elemanlarına erişmek için kullanılacak değişkenler tanımlanır. Bu değişkenler arasında derecelendirmeleri temsil eden elemanlar, gönderme düğmesi, panel ve seçilen derecelendirme bulunur.
2. **Olay Dinleyicileri**:
    - Derecelendirme kutularına tıklama ve gönderme düğmesine tıklama gibi olaylar dinleyen olay dinleyicileri eklenir.
3. **Derecelendirme Seçimi**:
    - Kullanıcı bir derecelendirme kutusuna tıkladığında, bu seçimi takip etmek için bir işlev eklenir.
    - Seçilen derecelendirme kutusu vurgulanır ve seçilen derece belirlenir.
4. **Gönderme İşlevi**:
    - Kullanıcı "Send Review" düğmesine tıkladığında, panel içeriği değiştirilir.
    - Kullanıcıya teşekkür edilir ve seçilen derece gösterilir.
5. **`removeActive` Fonksiyonu**:
    - Tüm derecelendirme kutularındaki "active" sınıfını kaldırmak için bir işlev tanımlanır. Bu, sadece seçili kutuya "active" sınıfı eklenmiş olur.

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
