# Random Image Feed

## Random Image Feed Project

### HTML

1. **Başlık (Heading):**
    - **`<h1>`** etiketi ile belirlenmiş, "Random Image Feed" başlığını içerir.
2. **Görsel Konteyner (Image Container):**
    - **`<section>`** etiketi içinde tanımlanmış, görsellerin yer alacağı konteyneri temsil eder.
    - Bu alanda dinamik olarak oluşturulacak görsel içeriklerin yer alacağı anlaşılır.
3. **Önemli Noktalar:**
    - Kod, bir sayfanın başlık ve görsel içerikten oluşan basit bir yapısını temsil eder.
    - Görsel içeriklerin dinamik olarak yükleneceği bir konteyner bulunmaktadır.
    - Sayfa üzerinde rastgele görsel içeriklerin görüntülenmesi amaçlanmış olabilir.
    - HTML kodu, sayfanın temel yapısını oluşturan ana unsurları içerir.

```html
<h1>Random Image Feed</h1>
<section class="image-container"></section>
```

### CSS

1. **Görsel Konteyner Stilleri:**
    - **`.image-container`** sınıfı ile belirlenmiş olan görsel konteyneri stilize eder.
    - **`display: flex;`** ile içerisindeki öğeleri yatay bir şekilde düzenler.
    - **`align-items`** ve **`justify-content`** ile öğeleri dikey ve yatayda merkeze hizalar.
    - **`flex-wrap: wrap;`** ile içerisindeki öğelerin sığmadığı durumda alt satıra geçmelerini sağlar.
    - **`max-width: 1000px;`** ile konteynerin maksimum genişliğini belirler.
    - **`gap: 1em;`** ile içerideki öğeler arasındaki boşluğu belirler.
2. **Görsel Stilleri:**
    - **`.image-container img`** selector'ü, görselleri stilize eder.
    - **`object-fit: cover;`** ile görsel içeriği kaplayacak şekilde boyutlandırma yapar.
    - **`margin: 10px;`** ile görseller arasına 10 piksel boşluk bırakır.
    - **`height: 300px;`** ve **`width: 300px;`** ile görsellerin sabit yükseklik ve genişlikte olmasını sağlar.
    - **`max-width: 100%;`** ile görsellerin maksimum genişliklerini belirler.
    - **`position: relative;`** ile görsellerin içinde pozisyon almasını sağlar.
    - **`border: 3px solid var(--detail-color);`** ile kenarlık rengini belirler.
    - **`border-radius: 10px;`** ile kenarları yuvarlar.
    - **`box-shadow`** ile hafif bir gölge efekti ekler.
3. **Önemli Noktalar:**
    - Flexbox kullanılarak görsel konteyner ve görsel düzeni sağlanmıştır.
    - Görsel boyutları, kenarlık ve gölge efekti gibi stil özellikleri belirlenmiştir.
    - Responsive tasarım için **`max-width`** ve **`max-width: 100%;`** gibi özellikler kullanılmıştır.

```css
section.image-container {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    max-width: 1000px;
    gap: 1em;
}

section.image-container img{
    object-fit: cover;
    margin: 10px;
    height: 300px;
    width: 300px;
    max-width: 100%;
    position: relative;
    border: 3px solid var(--detail-color);
    border-radius: 10px;
    box-shadow: 0 0 5px #1e2228, 0 0 10px var(--detail-color);
}
```

### JavaScript

1. **HTML Konteyner Bağlantısı:**
    - **`const container = document.querySelector('.image-container');`** ile HTML'de **`.image-container`** sınıfına sahip bir konteyner seçilir.
2. **Unsplash API URL'si:**
    - **`const unsplashURL = 'https://source.unsplash.com/random/';`** ile Unsplash API'nin rastgele görsel alma URL'si tanımlanır.
3. **Görsel Sayısı ve Döngü:**
    - **`const rows = 10;`** ile her satırda kaç görsel olacağını belirler.
    - **`for`** döngüsü ile belirlenen satır sayısına ve her satırda üç görsel olacak şekilde toplam görsel sayısına kadar dönülür.
4. **Görsel Oluşturma ve Eklenmesi:**
    - **`document.createElement('img');`** ile yeni bir **`img`** HTML öğesi oluşturulur.
    - Oluşturulan görsel öğesine rastgele boyutlarda bir Unsplash görseli URL'si atanır: **`img.src =`** ${unsplashURL}${getRandomSize()}**`;`**.
    - Oluşturulan görsel öğesi, seçilen konteynerin içine eklenir: **`container.appendChild(img);`**.
5. **Rastgele Boyut Fonksiyonları:**
    - **`getRandomSize`** fonksiyonu, rastgele bir genişlik ve yükseklik değeri üretir: **`return`** ${getRandomNr()}x${getRandomNr()}**`;`**.
    - **`getRandomNr`** fonksiyonu, belirli bir aralıkta rastgele bir sayı üretir: **`return Math.floor(Math.random() * 10) + 300;`**.
6. **Önemli Noktalar:**
    - Her bir görsel, Unsplash API'den rastgele boyutlarda alınarak oluşturulur.
    - Döngü içinde belirlenen sayıda görsel, HTML konteynerine eklenir.
    - Rastgele boyutlar, **`getRandomSize`** ve **`getRandomNr`** fonksiyonları ile sağlanır.

```jsx
const container = document.querySelector('.image-container');
const unsplashURL = 'https://source.unsplash.com/random/';
const rows = 10;

for (let i = 0; i < rows * 3; i++) {
  const img = document.createElement('img');
  img.src = `${unsplashURL}${getRandomSize()}`;
  container.appendChild(img);
}

function getRandomSize() {
  return `${getRandomNr()}x${getRandomNr()}`;
}

function getRandomNr() {
  return Math.floor(Math.random() * 10) + 300;
}
```
