# Image Carousel

## Carousel UI

### HTML

Bu HTML yapısı, resim karuselinin temel iskeletini oluşturur.

1. **`<section class="carousel">`**:
    - Bu bölüm, resim karuseli container'ını temsil eder.
    - Birden fazla resmin yan yana görüntüleneceği alanı içerir.
    - Karusel için "image-container" sınıfına sahip bir **`<div>`** olan "imgs" içerir.
2. **`<div class="image-container" id="imgs">`**:
    - Bu **`<div>`**, resimleri içeren bir konteynerdır.
    - İçinde bir dizi resim bulunur, her biri **`<img>`** etiketi ile temsil edilir.
    - Resimlerin **`src`** özelliği, her bir resmin URL'sini belirtir. Bu örnekte resimler harici kaynaklardan alınmış gibi görünüyor, ve her biri farklı bir görseli temsil eder.
3. **`<div class="buttons-container">`**:
    - Bu **`<div>`**, resim karuselinin altında bulunan gezinme düğmelerini içerir.
    - İki gezinme düğmesi bulunur: "Prev" ve "Next". Bu düğmeler sırasıyla önceki ve sonraki resimlere geçişi sağlar.
    - Düğmelere "left" ve "right" kimlikleri (id) atanmıştır.

```html
<section class="carousel">
        <div class="image-container" id="imgs">
            <img src="https://images.pexels.com/photos/1683724/pexels-photo-1683724.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1">
            <img src="https://images.pexels.com/photos/16854690/pexels-photo-16854690/free-photo-of-butterfly-sitting-on-flower.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1">
            <img src="https://images.pexels.com/photos/105808/pexels-photo-105808.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1">
            <img src="https://images.pexels.com/photos/13514042/pexels-photo-13514042.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1">
            <img src="https://images.pexels.com/photos/1715092/pexels-photo-1715092.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="">
        </div>
    </section>
    <div class="buttons-container">
        <button id="left" class="btn">Prev</button>
        <button id="right" class="btn">Next</button>
    </div>
```

### CSS

Bu CSS kodları, resim karuselinin görünümünü ve düğmelerin stilini belirler.

1. **`section.carousel`**:
    - Karusel container'ına uygulanan stillemeleri içerir.
    - **`box-shadow`** ile hafif bir gölgelendirme efekti ekler.
    - **`height`** ve **`width`** ile karuselin boyutunu belirler.
    - **`overflow`** ile içerik taşarsa gizlenmesini sağlar.
2. **`section.carousel .image-container`**:
    - Resimleri içeren container'ın görünümünü ayarlar.
    - **`display: flex`** ile resimleri yatay hizalar.
    - **`transform`** ve **`transition`** ile resim geçişlerini düzenler.
3. **`section.carousel .image-container img`**:
    - Karuseldeki resimlerin görünümünü tanımlar.
    - **`width`** ve **`height`** ile resim boyutlarını ayarlar.
    - **`object-fit: cover`** ile resimlerin container'a sığacak şekilde ölçeklenmesini sağlar.
4. **`.buttons-container`**:
    - Düğmelerin container'ını stillemek için kullanılır.
    - **`display: flex`** ile düğmeleri yatay hizalar.
    - **`justify-content: center`** ile düğmeleri ortalar.
5. **`.buttons-container .btn`**:
    - Düğmelerin genel stillemesini içerir.
    - **`color`** ile metin rengini belirler.
    - **`border`** ile kenarlığı kaldırır.
    - **`padding`** ile düğme içeriğinin iç kenar boşluğunu ayarlar.
    - **`border-radius`** ile düğme köşelerini yuvarlar.
    - **`background-color`** ile düğme arkaplan rengini belirler.
    - **`font-family`** ile yazı tipini kalıtılan değer kullanır.
    - **`font-size`** ile metin boyutunu ayarlar.
    - **`letter-spacing`** ile harf aralığını artırır.
    - **`text-transform`** ile metin içeriğini büyük harfe dönüştürür.
    - **`font-weight`** ile yazı tipinin kalınlığını belirler.
6. **`.buttons-container .btn:hover`** ve **`.buttons-container .btn:focus`**:
    - Düğmelere fare üzerine geldiğinde ve odaklandığında uygulanacak stillemeleri tanımlar.
    - Genellikle düğmelerin opaklığını azaltmak veya odak sırasında görsel geribildirim eklemek için kullanılır.

```css
section.carousel{
    box-shadow: 2px 2px 5px rgba(255, 255, 255, 0.3);
    height: 500px;
    width: 500px;
    overflow: hidden;
}
section.carousel .image-container{
    display: flex;
    transform: translateX(0);
    transition: transform 0.5s ease-in-out;
}
section.carousel .image-container img{
    width: 500px;
    height: 500px;
    object-fit: cover;
}
.buttons-container{
    display: flex;
    justify-content: center;
}
.buttons-container .btn{
    color: var(--color-fill);
    border: none;
    padding: 1rem 3rem;
    width: 49.5%;
    margin: 1rem;
    border-radius: 5px;
    background-color: var(--alternative-fill);
    font-family: inherit;
    font-size: 14px;
    letter-spacing: 2px;
    text-transform: uppercase;
    font-weight: 600;
    cursor: pointer;
    z-index: 1;
}
.buttons-container .btn:hover{opacity: 0.9;}
.buttons-container .btn:focus{outline: none;}
```

### Carousel Functionality

Bu JavaScript kodları, bir resim karuselinin işlevselliğini ve otomatik geçişini kontrol eder.

1. **Değişkenler**:
    - **`imgs`**, **`leftBtn`**, ve **`rightBtn`** değişkenleri, HTML belgesindeki belirli öğeleri seçmek için kullanılır.
    - **`img`** değişkeni, tüm resimleri içeren **`imgs`** öğesinin altındaki resimlerin koleksiyonunu seçer.
2. **Başlangıç Değerleri**:
    - **`idx`** değişkeni, görüntülenen resmin dizinini takip eder. Başlangıçta 0 olarak ayarlanır.
    - **`interval`**, otomatik geçiş için kullanılan zamanlayıcıyı temsil eder. Başlangıçta **`run`** işlevi her 2 saniyede bir çağrılır.
3. **`run` Fonksiyonu**:
    - Bu işlev, resim geçişlerini otomatik olarak yönetir.
    - **`idx`** değeri artırılarak sonraki resme geçiş yapılır.
    - **`changeImage`** işlevi çağrılarak görüntü güncellenir.
4. **`changeImage` Fonksiyonu**:
    - Bu işlev, görüntüyü değiştirir ve karuseli kaydırır.
    - **`idx`** değeri kontrol edilir ve resimlerin sonuna veya başına gelindiğinde sıfırlanır.
    - **`imgs`** öğesinin **`style.transform`** özelliği kullanılarak görüntüyü yatay olarak kaydırır.
5. **`resetInterval` Fonksiyonu**:
    - Bu işlev, zamanlayıcıyı sıfırlar ve yeniden başlatır.
    - **`clearInterval`** ile mevcut zamanlayıcı durdurulur ve ardından **`setInterval`** ile **`run`** işlevi 2 saniyede bir çağrılarak yeniden başlatılır.
6. **Olay Dinleyicileri**:
    - **`rightBtn`** ve **`leftBtn`** düğmelerine tıklamalara yanıt veren olay dinleyiciler eklenir.
    - **`idx`** değeri tıklamalara göre artırılır veya azaltılır ve **`changeImage`** işlevi çağrılarak görüntü güncellenir.
    - Ayrıca, **`resetInterval`** işlevi çağrılarak zamanlayıcı sıfırlanır ve otomatik geçiş 2 saniyede bir devam eder.

```jsx
const imgs = document.getElementById('imgs');
const leftBtn = document.getElementById('left');
const rightBtn = document.getElementById('right');

const img = document.querySelectorAll('#imgs img');

let idx = 0;
let interval = setInterval(run, 2000);

function run() {
  idx++;
  changeImage();
}

function changeImage() {
  if (idx > img.length - 1) {
    idx = 0;
  } else if (idx < 0) {
    idx = img.length - 1;
  }

  imgs.style.transform = `translateX(${-idx * 500}px)`;
}

function resetInterval() {
  clearInterval(interval);
  interval = setInterval(run, 2000);
}

rightBtn.addEventListener('click', () => {
  idx++;
  changeImage();
  resetInterval();
});
leftBtn.addEventListener('click', () => {
  idx--;
  changeImage();
  resetInterval();
});
```
