# Good, Cheap, Fast Checkboxes

### Style Checkboxes

Bu HTML kod parçası, bir projenin üç ana özelliğini (iyi, ucuz, hızlı) seçme imkanı sunan bir kullanıcı arayüzünü temsil eder.

1. **`<section class="toggle-container">`**:
    - Bu bölüm, bir anahtar (toggle) öğesi ile ilişkilendirilmiş bir seçeneği temsil eder.
    - Her seçenek "Good" (İyi), "Cheap" (Ucuz) ve "Fast" (Hızlı) olarak adlandırılmıştır.
2. **`<input type="checkbox" id="good" class="toggle">`**:
    - Bu **`<input>`** öğesi, bir seçenek seçeneğini temsil eder.
    - **`type="checkbox"`** ile bir onay kutusu oluşturur.
    - **`id="good"`** ile bir kimlik (ID) atanır.
    - **`class="toggle"`** ile "toggle" sınıfına sahip bir öğe olarak tanımlanır.
3. **`<label for="good" class="label">`**:
    - Bu **`<label>`** öğesi, onay kutusu ile ilişkilendirilen etiketi temsil eder.
    - **`for="good"`** ile ilgili **`<input>`** öğesinin kimliği belirtilir.
    - **`class="label"`** ile "label" sınıfına sahip bir öğe olarak tanımlanır.
4. **`<div class="ball"></div>`**:
    - Bu **`<div>`** öğesi, etiketin içinde bir top şeklinde görünür. Bu top, onay kutusunun durumunu gösterir.
5. **`<span class="text">Good</span>`**:
    - Bu **`<span>`** öğesi, seçeneğin adını içerir. Örneğin, "Good" (İyi).
6. **`<script src="app.js"></script>`**:
    - Bu satır, "app.js" adlı bir JavaScript dosyasını sayfaya dahil eder. JavaScript dosyası, bu onay kutularının etkileşimini ve seçimlerini işler.

```html
<body>
    <h2>How do you want your project to be?</h2>
    <section class="toggle-container">
        <input type="checkbox" id="good" class="toggle">
        <label for="good" class="label">
            <div class="ball"></div>
        </label>
        <span class="text">Good</span>
    </section>
    <section class="toggle-container">
        <input type="checkbox" id="cheap" class="toggle">
        <label for="cheap" class="label">
            <div class="ball"></div>
        </label>
        <span class="text">Cheap</span>
    </section>
    <section class="toggle-container">
        <input type="checkbox" id="fast" class="toggle">
        <label for="fast" class="label">
            <div class="ball"></div>
        </label>
        <span class="text">Fast</span>
    </section>
    <script src="app.js"></script>
</body>
```

<aside>
💡 Kullanıcılar bu seçenekler arasından sadece iki özelliği seçebilirler: İyi (Good), Ucuz (Cheap) veya Hızlı (Fast).

</aside>

### Basics CSS Document

Bu CSS kodu, bir kullanıcı arayüzünde üç anahtarlı (toggle) seçenekleri temsil etmek için kullanılan özelleştirilmiş stillemeyi tanımlar.

1. **`section.toggle-container`**:
    - Bu CSS kuralı, **`section`** öğesiyle sınırlı olan bir sınıfı hedefler. Bu sınıf, bir anahtarlı (toggle) seçeneğin genel görünümünü tanımlar.
    - **`display: flex;`** ile içerik öğelerinin yatay hizalanmasını (yatay düzende sıralanmasını) sağlar.
    - **`align-items: center;`** ile içerik öğelerini dikey eksende ortalar.
    - **`margin: 10px 0;`** ile üst ve alt kenarlarda 10 piksel boşluk bırakır.
    - **`width: 33%;`** ile öğenin genişliğini üçte biri kadar ayarlar.
2. **`section.toggle-container .toggle`**:
    - Bu kural, **`.toggle`** sınıfına sahip olan öğelerin görünürlüğünü gizler (visibility: hidden;). Bu, kullanıcıdan görünmeyen bir onay kutusu beklenmediğinden onay kutularını gizler.
3. **`section.toggle-container .label`**:
    - Bu kural, **`.label`** sınıfına sahip öğelerin görünümünü tanımlar.
    - **`background-color: var(--alternative-fill);`** ile arka plan rengini belirler.
    - **`cursor: pointer;`** ile işaretçinin fare üzerindeyken el işareti olmasını sağlar.
    - **`border-radius: 50px;`** ile kenarları yuvarlar.
    - **`display: inline-block;`** ile öğeyi iç içe geçen bir blok olarak görüntüler.
    - **`margin: 0 15px 0;`** ile yatayda boşluk bırakır.
    - **`height: 40px;`** ve **`width: 80px;`** ile öğenin boyutunu ayarlar.
    - **`position: relative;`** ile öğenin göreceli konumlandırılmasını belirler.
4. **`section.toggle-container .toggle:checked + .label`**:
    - Bu kural, seçenek işaretlendiğinde (checked), **`.label`** öğesinin arka plan rengini değiştirir.
5. **`section.toggle-container .label .ball`**:
    - Bu kural, **`.ball`** sınıfına sahip öğenin görünümünü tanımlar. Bu top, onay kutusunun görsel göstergesini temsil eder.
    - **`background-color: var(--color-fill);`** ile topun arka plan rengini belirler.
    - **`height: 34px;`** ve **`width: 34px;`** ile topun boyutunu ayarlar.
    - **`border-radius: 50%;`** ile topun kenarlarını yuvarlar.
    - **`position: absolute;`** ile topun kesin konumunu belirler.
    - **`top: 3px;`** ve **`left: 3px;`** ile topu içerisindeki etiketin içine yerleştirir.
    - **`align-items: center;`** ve **`justify-content: center;`** ile içeriği yatay ve dikey eksende merkezler.
    - **`animation: slideOff 0.3s linear forwards;`** ile topun kayma animasyonunu tanımlar.
6. **`section.toggle-container .toggle:checked + .label .ball`**:
    - Bu kural, seçenek işaretlendiğinde (checked), **`.ball`** öğesinin animasyonunu değiştirir.

```css
section.toggle-container {
    display: flex;
    align-items: center;
    margin: 10px 0;
    width: 33%;
}
section.toggle-container .toggle{visibility: hidden;}
section.toggle-container .label{
    background-color: var(--alternative-fill);
    cursor: pointer;
    border-radius: 50px;
    display: inline-block;
    margin: 0 15px 0;
    height: 40px;
    width: 80px;
    position: relative;
}
section.toggle-container .toggle:checked + .label {background-color: var(--main-fill);}
section.toggle-container .label .ball{
    background-color: var(--color-fill);
    height: 34px;
    width: 34px;
    border-radius: 50%;
    position: absolute;
    top: 3px;
    left: 3px;
    align-items: center;
    justify-content: center;
    animation: slideOff 0.3s linear forwards;
}
section.toggle-container .toggle:checked + .label .ball{
    animation: slideOn 0.3s linear forwards;
}
```

### Check Ball Animation

Bu CSS kodu, bir animasyonu tanımlar ve bu animasyonun iki durumunu yönetir.

1. **`@keyframes slideOn`**:
    - Bu CSS kuralı, "slideOn" adlı bir animasyonun başlangıç, orta ve son durumlarını tanımlar.
    - **`0%`** durumunda, topun başlangıç konumunu belirler (translateX(0)) ve normal boyutta (scale(1)).
    - **`50%`** durumunda, topu sağa doğru kaydırır ve büyütür (translateX(20px) scale(1.2)).
    - **`100%`** durumunda, topu son konumuna getirir (translateX(40px)) ve tekrar normal boyutta getirir (scale(1)).
2. **`@keyframes slideOff`**:
    - Bu CSS kuralı, "slideOff" adlı bir animasyonun başlangıç, orta ve son durumlarını tanımlar.
    - **`0%`** durumunda, topu son konumunda (translateX(40px)) ve normal boyutta (scale(1)) başlatır.
    - **`50%`** durumunda, topu sağa doğru kaydırır ve büyütür (translateX(20px) scale(1.2)).
    - **`100%`** durumunda, topu başlangıç konumuna getirir (translateX(0)) ve tekrar normal boyutta getirir (scale(1)).

```css
@keyframes slideOn{
    0% {
        transform: translateX(0) scale(1);
    }
    50% {
        transform: translateX(20px) scale(1.2);
    }
    100% {
        transform: translateX(40px) scale(1)
    }
}
@keyframes slideOff{
    0% {
        transform: translateX(40px) scale(1);
    }
    50% {
        transform: translateX(20px) scale(1.2);
    }
    100% {
        transform: translateX(0) scale(1)
    }
}
```

<aside>
💡 Bu animasyonlar, bir "toggle" seçeneğinin durumunu değiştirdiğinizde, yani seçeneği işaretlediğinizde veya işaretlemeyi kaldırdığınızda topun görünümünü değiştirir. "slideOn" animasyonu topu sağa kaydırırken büyütür ve "slideOff" animasyonu topu sola kaydırırken küçültür.

</aside>

### JavaScript Logic

Bu JavaScript kodu, üç anahtarlı (toggle) seçeneklerin davranışını kontrol eden bir işlev içerir.

1. **`const toggles = document.querySelectorAll('.toggle');`**, **`const good = document.querySelector('#good');`**, **`const cheap = document.querySelector('#cheap');`**, **`const fast = document.querySelector('#fast');`**:
    - Bu satırlar, HTML'deki elementleri JavaScript ile etkileşim kurmak için seçer.
    - **`.toggle`** sınıfına sahip tüm elementleri (seçenekleri) **`toggles`** adlı bir dizi içinde toplar.
    - **`#good`**, **`#cheap`**, ve **`#fast`** kimliklerine sahip olan elementleri sırasıyla **`good`**, **`cheap`**, ve **`fast`** adlı değişkenlere atar. Bu kimlikler, üç anahtarlı seçenekleri temsil eder.
2. **`toggles.forEach((toggle) => { ... });`**:
    - Bu döngü, her bir anahtarlı seçeneğe bir "değişim" olayı dinleyicisi ekler.
    - Her bir anahtarlı seçeneğin değişimini (işaretlenmesini veya işaretin kaldırılmasını) izler.
3. **`function doTheTrick(theClickedOne) { ... }`**:
    - Bu işlev, üç anahtarlı seçeneklerin durumunu kontrol eden ve belirli bir davranışı uygulayan ana işlevdir.
    - Eğer "Good", "Cheap" ve "Fast" seçenekleri aynı anda işaretlendiğinde, bu işlev olayları ele alır ve kullanıcının yalnızca bir seçeneği işaretlemesine izin verir.
    - İşlev, tıklanan seçenekle diğer seçenekleri karşılaştırır ve gerektiğinde diğerlerini iptal eder.

```jsx
const toggles = document.querySelectorAll('.toggle');
const good = document.querySelector('#good');
const cheap = document.querySelector('#cheap');
const fast = document.querySelector('#fast');

toggles.forEach((toggle) => {
  toggle.addEventListener('change', (e) => {
    doTheTrick(e.target);
  });
});

function doTheTrick(theClickedOne) {
  if (good.checked && cheap.checked && fast.checked) {
    if (good === theClickedOne) {
      fast.checked = false;
    }
    if (cheap === theClickedOne) {
      good.checked = false;
    }
    if (fast === theClickedOne) {
      cheap.checked = false;
    }
  }
}
```

<aside>
💡 Bu kod, kullanıcının yalnızca üç seçenek arasından yalnızca birini seçmesini sağlar ve seçimler arasındaki karışıklığı önler. Bu tür seçimler, projelerin gelişim sürecinde "Üçlü Kısıtlamalar" problemine bir gönderme yapar ve bu kod kullanıcıların bu kısıtlamaları takip etmelerine yardımcı olur.

</aside>
