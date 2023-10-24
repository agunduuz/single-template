# Hoverboard

## Styling The Board Squares

### HTML

Bu projede HTML dosyamızda sadece “container” yapımız mevcut. İçeriği Javascript ile dolduracağız.

```html
<section class="container" id="container">
       
</section>
```

### CSS

Bu CSS kodları, bir kutu (square) öğesinin görünümünü tanımlar.

1. **`.container`**:
    - **`display: flex`** ile içeriği yatayda hizalar ve öğeleri bir satırda düzenler.
    - **`align-items: center`** ve **`justify-content: center`** ile öğeleri dikey ve yatayda merkezler.
    - **`flex-wrap: wrap`** ile içerik sığmazsa öğelerin yeni satırlara kaymasını sağlar.
    - **`max-width: 400px`** ile container'ın maksimum genişliğini sınırlar.
2. **`.container .square`**:
    - Arkaplan rengini (#1d1d1d) ve gölgeyi tanımlar.
    - **`width: 16px`** ve **`height: 16px`** ile kutunun boyutlarını belirler.
    - **`margin: 2px`** ile öğeler arasında bir kenar boşluğu ekler.
    - **`transition`** ile animasyon süresini ve geçişin kolaylığını belirler.
    - **`border-radius: 5px`** ile köşeleri yuvarlar.
3. **`.container .square:hover`**:
    - Fare üzerine gelindiğinde animasyon süresini sıfırlar, böylece anında tepki verir.

```css
section.container {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    max-width: 400px;
}

section.container .square{
    background-color: #1d1d1d;
    box-shadow: 0 0  2px #000;
    width: 16px;
    height: 16px;
    margin: 2px;
    transition: 2s ease;
    border-radius: 5px;
}
section.container .square:hover{
    transition-duration: 0s;
}
```

## Hoverboard Effect

1. **Container ve Renkler**:
    - **`container`** değişkeni, "container" kimliğine sahip HTML öğesini seçmek için kullanılır.
    - Bir dizi olan **`colors`**, çeşitli renk değerlerini depolar.
    - **`SQUARES`**, oluşturulacak karelerin sayısını belirler ve 400 olarak ayarlanır.
2. **Karelerin Oluşturulması**:
    - Bir **`for`** döngüsü, dinamik olarak 400 kare öğesi oluşturmak için kullanılır.
    - Her kare, **`document.createElement('div')`** kullanılarak oluşturulur ve ona "square" sınıfı eklenir.
    - Her karenin üzerine gelinme ve üzerinden ayrılma olayları için fare olay dinleyicileri eklenir.
3. **Kare Renklerinin Ayarlanması**:
    - Bir kareye fare üzerine gelindiğinde **`setColor`** işlevi çağrılır.
    - Bu işlev, **`getRandomColor`** işlevini kullanarak **`colors`** dizisinden rastgele bir renk oluşturur.
    - Karenin arka planı ve gölgesi seçilen renk ile güncellenir.
4. **Kare Renklerinin Sıfırlanması**:
    - Fare bir karenin üzerinden ayrıldığında **`removeColor`** işlevi çağrılır.
    - Karenin arka plan rengi ve gölgesi varsayılan değerlerine sıfırlanır.
5. **Rastgele Renk Seçimi**:
    - **`getRandomColor`** işlevi, **`colors`** dizisinden rastgele bir renk seçer.

Bu kod, fareyle üzerine gelindiğinde rengi değişen ve fare ayrılınca orijinal rengine dönen karelerin bir ızgarasını dinamik olarak oluşturur.

```jsx
const container = document.getElementById('container');
const colors = ['#0079FF', '#FF8400', '#DD58D6', '#16FF00', '#FFED00', '#C0EEE4', '#F5EA5A', '#FF9E9E', '#B3FFAE'];
const SQUARES = 400;

for (let i = 0; i < SQUARES; i++) {
  const square = document.createElement('div');
  square.classList.add('square');

  square.addEventListener('mouseover', () => setColor(square));
  square.addEventListener('mouseout', () => removeColor(square));

  container.appendChild(square);
}

function setColor(element) {
  const color = getRandomColor();
  element.style.background = color;
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(element) {
  element.style.background = '#1d1d1d';
  element.style.boxShadow = '0 0  2px #000';
}

function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}
```
