# Mobile Tab Navigation

## Create & Style UI

### HTML

1. **`<section>`** Elementi:
    - Sayfa içeriğini sarmalayan ana bölümü temsil eder. Mobil sayfa içeriğinin bulunduğu bölümü çevreler.
2. **`<img>`** Etiketleri (Resimler):
    - Sayfa içeriğini oluşturan dört resmi temsil eder.
    - **`class`** özellikleri, resimlerin görünürlüğünü kontrol eder. İlk resim **"show"** sınıfına sahiptir, bu nedenle varsayılan olarak görüntülenirken, diğerleri görünmezdir.
3. **`<nav>`** Elementi:
    - Sayfanın gezinme menüsünü içerir.
    - Menü öğeleri **`<ul>`** (sırasız liste) içindedir.
4. Menü Öğeleri:
    - Her öğe bir liste öğesi olan **`<li>`** içinde bulunur.
    - **`<i>`** etiketi, bir simge veya ikonu temsil eder.
    - **`<p>`** etiketi, ilgili metin içeriğini içerir.
    - Örnek olarak, "Home", "Work", "Blog" ve "About Us" gibi menü seçenekleri vardır.

```html
<section class="mobile-container">
        <img src="..." class="content show">
        <img src="..." class="content ">
        <img src="..." class="content ">
        <img src="..." class="content ">
        <nav>
            <ul>
                <li>
                    <i class="fas fa-home"></i>
                    <p>Home</p>
                </li>
                <li>
                    <i class="fas fa-box"></i>
                    <p>Work</p>
                </li>
                <li>
                    <i class="fas fa-book-open"></i>
                    <p>Blog</p>
                </li>
                <li>
                    <i class="fas fa-users"></i>
                    <p>About Us</p>
                </li>
            </ul>
        </nav>
    </section>
```

### CSS

1. **`section.mobile-container` Stili**:
    - Sayfa içeriğini çevreleyen **`<section>`** öğesine uygulanır.
    - **`position: relative`** ile öğenin görece konumlandırılmasını sağlar.
    - **`overflow: hidden`**, öğenin taşan içeriği gizlemesini sağlar.
    - Kenarlıklar ve köşe yarıçapı belirlemek için **`border`** ve **`border-radius`** kullanılır.
    - Öğenin yüksekliği ve genişliği belirlenir ve gölge eklenir.
2. **`section.mobile-container .content` Stili**:
    - İçerik resimleri için kullanılır.
    - **`position: absolute`**, resimlerin kesilmeden üst üste bindiği bir konumlandırma sağlar.
    - Resimlerin geçiş efektini düzenlemek için **`transition`** kullanılır.
    - İlk başta resimlerin **`opacity`** değeri sıfırdır, bu nedenle görünmezdir.
    - Sadece "show" sınıfına sahip olan resimlerin **`opacity`** değeri 1'e ayarlanır, bu nedenle sadece bu resim görünür.
3. **`section.mobile-container nav` Stili**:
    - Gezinme menüsü için kullanılır.
    - **`position: absolute`**, menünün belirli bir konumda sabitlenmesini sağlar.
    - Alt kenarı biraz yukarı kaydırmak için **`margin-top`** kullanılır.
4. **`section.mobile-container nav ul` Stili**:
    - Menü seçeneklerini sıralayan sırasız bir liste için kullanılır.
    - Arka plan rengi belirlenir ve menü öğeleri yatay hizalanır.
    - **`list-style-type`** sıfırlanır ve iç boşluklar ayarlanır.
5. **`section.mobile-container nav ul li` Stili**:
    - Menü öğeleri için kullanılır.
    - Öğelerin metin rengi ve tıklanabilirlik özellikleri düzenlenir.
    - Öğelerin iç boşlukları ve yatay hizalaması ayarlanır.
6. **Mouse Üzerine ve Aktif Durum**:
    - **`:hover`** ve **`.active`** seçicileri ile, menü öğelerinin üzerine gelindiğinde ve tıklandığında metin renginin değişmesi sağlanır.

```css
section.mobile-container {
  position: relative;
  overflow: hidden;
  border: 3px solid var(--bg-color);
  border-radius: 15px;
  height: 600px;
  width: 340px;
  box-shadow: -1px -1px 47px 7px rgba(0, 0, 0, 0.45);
  -webkit-box-shadow: -1px -1px 47px 7px rgba(0, 0, 0, 0.45);
  -moz-box-shadow: -1px -1px 47px 7px rgba(0, 0, 0, 0.45);
}
section.mobile-container .content {
  opacity: 0;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  height: calc(100% - 60px);
  width: 100%;
  transition: opacity 0.4s ease;
}
section.mobile-container .content.show { opacity: 1; }

section.mobile-container nav { position: absolute; bottom: 0; left: 0; margin-top: -5px; width: 100%; }
section.mobile-container nav ul { background-color: var(--bg-color); display: flex; list-style-type: none; padding: 0; margin: 0; height: 60px; }
section.mobile-container nav ul li { color: var(--font-color); cursor: pointer; flex: 1; padding: 10px; text-align: center; }
section.mobile-container nav ul li p { font-size: 12px; margin: 2px 0; }

section.mobile-container nav ul li:hover,
section.mobile-container nav ul li.active {
  color: var(--alternative-color);
}
```

### Navigation Effect

1. **HTML Öğelerinin Seçimi**:
    - İlk olarak, sayfadaki içerik resimlerini temsil eden **`contents`** ve menü öğelerini temsil eden **`listItems`** adlı öğeleri seçiyoruz.
2. **Menü Öğelerinin Tıklama İşlevi**:
    - Bir dizi üzerinde döngü oluşturarak her menü öğesi için bir tıklama olayı dinleyici eklenir.
    - Bir menü öğesi tıklandığında, önce tüm içerik resimleri gizlemek için **`hideAllContents`** işlevi çağrılır.
    - Ardından, tüm menü öğelerinin "active" sınıfını kaldırmak için **`hideAllItems`** işlevi çağrılır.
    - Tıklanan menü öğesine "active" sınıfı eklenir, böylece görünümü vurgulanır.
    - Tıklanan menü öğesine karşılık gelen içerik resmi görünür hale getirilir.
3. **hideAllContents İşlevi**:
    - Bu işlev, tüm içerik resimlerini gizlemek için kullanılır. Her içerik resminin üzerinden geçilir ve "show" sınıfı kaldırılır.
4. **hideAllItems İşlevi**:
    - Bu işlev, tüm menü öğelerinin "active" sınıfını kaldırmak için kullanılır. Her menü öğesinin üzerinden geçilir ve "active" sınıfı kaldırılır.

```jsx
const contents = document.querySelectorAll('.content');
const listItems = document.querySelectorAll('nav ul li');

listItems.forEach(function (item, index) {
  item.addEventListener('click', () => {
    hideAllContents();
    hideAllItems();

    item.classList.add('active');
    contents[index].classList.add('show');
  });
});

function hideAllContents() {
  contents.forEach((content) => content.classList.remove('show'));
}

function hideAllItems() {
  listItems.forEach((item) => item.classList.remove('active'));
}
```
