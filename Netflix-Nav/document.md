# Netflix Mobile Navigation

## Netflix Nav - Part 1

### HTML

1. **Ana Navigasyon Butonları:**
    - Sayfanın üst kısmında, mobil cihazlarda görüntülenecek olan ana navigasyon butonları yer alır.
    - İlk buton, açılır menüyü göstermek için tasarlanmış ve "fas fa-bars" ikonunu içerir.
2. **Logo ve Başlık:**
    - Netflix logosu, sayfanın marka kimliğini temsil eder ve marka bilinirliğini artırır.
    - "Mobile Navigation" başlığı, mobil cihazlarda görünen navigasyonun amacını açıklar.
3. **Navigasyon Menüsü:**
    - İki farklı sürümde görünen navigasyon menüsü bulunur: siyah ve kırmızı.
    - Navigasyon menüleri, belirli renk sınıfları ile stilize edilmiştir.
4. **Menü İçeriği:**
    - Menüler içinde "Netflix" logosu tekrarlanır.
    - Ana menü öğeleri bir liste içinde sıralanır. Her bir öğe, "list-items" sınıfını içeren bir bağlantı içerir.
    - İç içe geçmiş bir menü, "items-list" sınıfını içeren özel bir alt menü içerir.
5. **Kapatma Butonu:**
    - Her menüde, menüyü kapatan bir "close-btn" butonu bulunur. Bu buton, "fas fa-times" ikonunu içerir.

```html
<button class="nav-btn open-btn">
        <i class="fas fa-bars"></i>
    </button>
    <img src="https://www.svgrepo.com/show/354108/netflix.svg" alt="Netflix" class="logo">
    <p class="text">Mobile Navigation</p>

    <div class="nav visible nav-black">
        <div class="nav visible nav-red">
            <nav class="nav visible nav-white">
                <button class="nav-btn close-btn">
                    <i class="fas fa-times"></i>
                </button>
                <img src="https://www.svgrepo.com/show/354108/netflix.svg" alt="Netflix" class="logo">

                <ul class="list">
                    <li class="list-items"><a href="#" class="link">Teams</a></li>
                    <li class="list-items"><a href="#" class="link">Locations</a></li>
                    <li class="list-items"><a href="#" class="link">Life at Netflix</a></li>
                    <li class="list-items">
                        <ul class="items-list">
                            <li class="list-items"><a href="#" class="link">Netflix Culture Memo</a></li>
                            <li class="list-items"><a href="#" class="link">Work Life Balance</a></li>
                            <li class="list-items"><a href="#" class="link">Inclusion & Diversity</a></li>
                            <li class="list-items"><a href="#" class="link">Blog</a></li>
                        </ul>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
```

### CSS

1. **Global Stiller**:
    - Logo boyutu (**`.logo`**) 150 piksel olarak belirlenir.
    - Metin dönüşümü, yani büyük harfe dönüştürme özelliği, üstteki metin elementi için (**`p.text`**) uygulanır.
    - Navigasyon butonları (**`button.nav-btn`**) için bazı temel stiller belirlenir. Border ve arka planı transparent, imleci bir el işareti şeklinde ve font boyutu 20 piksel olarak ayarlanır.
    - Açılır menü butonu, sabit bir konumda (fixed) ve sol üst köşede (**`button.nav-btn.open-btn`**) yer alır.
2. **Açılır Menü Stilleri**:
    - Açılır menü (**`div.nav`**) genel stil ayarları içerir. Bu menü, sayfanın üstünden aşağıya doğru kayarak görünür hale gelir.
    - Menü siyah renkte (**`div.nav.nav-black`**) ve belirli genişlik sınırları ile şekillendirilir.
    - Kırmızı renkteki ikinci bir menü, üstteki menünün içinde yer alır (**`div.nav .nav.nav-red`**).
    - Beyaz renkteki üçüncü bir menü, yine üstteki menünün içinde bulunur ve daha geniş bir alanı kaplar (**`div.nav .nav .nav.nav-white`**).
    - Kapatma butonu, sağ üst köşede konumlandırılmış ve düşük opaklığa sahiptir (**`div.nav .nav .nav .nav-btn.close-btn`**).
3. **Menü İçeriği Stilleri**:
    - Menü içindeki liste ve bağlantılar için stil ayarları yapılır (**`div.nav .nav .nav .list .list-items`** ve **`.link`**).
    - İç içe geçmiş bir alt menü, sol iç tarafta bir boşluk bırakılarak düzenlenir (**`div.nav .nav .nav .list .list-items .items-list`**).
    - Padding ve margin değerleri sıfıra ayarlanarak varsayılan liste stilleri sıfırlanır.
    - Renk ve metin büyüklüğü ayarları yapılır.

```css
/* BEGIN: GLOBAL CODE*/
.logo { width: 150px;  }
p.text { text-transform: uppercase; }
button.nav-btn { border: none; background-color: transparent; cursor: pointer; font-size: 20px; }
button.nav-btn.open-btn { position: fixed; top: 10px; left: 10px; }
div.nav { position: fixed; top: 0; left: 0; height: 100vh; transform: translateX(-100%); transition: transform 0.3s ease-in-out; }
div.nav.visible { transform: translateX(0); }
/* END: GLOBAL CODE*/

div.nav.nav-black{ background-color: var(--detail-color); width: 60%; max-width: 480px; min-width: 320px; }
div.nav .nav.nav-red{ background-color: var(--primary-color); width: 95%; }
div.nav .nav .nav.nav-white{ background-color: var(--font-color); width: 95%; padding: 40px; position: relative; }

div.nav .nav .nav .nav-btn.close-btn{ position: absolute; top: 40px; right: 30px; opacity: 0.3; }
div.nav .nav .nav .list, div.nav .nav .nav .list .list-items .items-list{list-style-type: none; padding: 0;}
div.nav .nav .nav .list .list-items{margin: 20px 0;}
div.nav .nav .nav .list .list-items .link{color: var(--detail-color); font-size: 14px; text-decoration: none; text-transform: uppercase;}
div.nav .nav .nav .list .list-items .items-list{ list-style-type: none; padding-left: 20px; }
```

## Netflix Nav - Part 2

1. **Seçiciler ve Olay Dinleyicileri**:
    - **`.open-btn`**, açılır menüyü açmak için kullanılan butonu temsil eder.
    - **`.close-btn`**, menüyü kapatmak için kullanılan butonu temsil eder.
    - **`.nav`**, menüyü temsil eden tüm öğeleri seçer.
    - **`openBtn`** ve **`closeBtn`**, ilgili HTML öğelerine erişim sağlamak için **`document.querySelector`** kullanılarak tanımlanır.
    - **`nav`**, tüm menü öğelerini seçmek için **`document.querySelectorAll`** kullanılarak tanımlanır.
2. **Olay Dinleyicileri ve Fonksiyonlar**:
    - **`openBtn`** üzerinde bir tıklama olayı (**`click`**) dinleyicisi eklenir.
    - Tıklama olayı gerçekleştiğinde, her bir menü öğesine (**`nav_el`**) sırasıyla gezinerek, her birine "visible" sınıfı eklenir. Bu sınıf, menünün görünür olmasını sağlar.
    - **`closeBtn`** üzerinde de bir tıklama olayı dinleyicisi eklenir.
    - Tıklama olayı gerçekleştiğinde, her bir menü öğesine (**`nav_el`**) sırasıyla gezinerek, her birinden "visible" sınıfı kaldırılır. Bu, menünün gizlenmesini sağlar.
3. **Özet**:
    - Açma ve kapatma butonlarına tıklama olayları, menünün görünürlüğünü kontrol eden sınıf eklemeleri ve kaldırmaları ile ilişkilendirilir.
    - Bu kod bloğu, menü açma ve kapatma işlevselliğini sağlar, böylece kullanıcılar butonlara tıkladığında menü gösterilebilir veya gizlenebilir.

```jsx
const openBtn = document.querySelector('.open-btn');
const closeBtn = document.querySelector('.close-btn');
const nav = document.querySelectorAll('.nav');

openBtn.addEventListener('click', () => {
  nav.forEach((nav_el) => {
    nav_el.classList.add('visible');
  });
});
closeBtn.addEventListener('click', () => {
  nav.forEach((nav_el) => {
    nav_el.classList.remove('visible');
  });
});
```
