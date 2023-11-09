# Custom Range Slider

## Styling The Range

### HTML

1. **Başlık ve Konteyner**:
    - **`<h2>`** etiketi, sayfadaki başlığı temsil eder ve "Custom Range Slider" olarak ayarlanmıştır.
    - **`<section>`** etiketi içinde, özelleştirilmiş bir aralık kaydırıcısını barındıran bir konteyner bulunur.
2. **Aralık Kaydırıcısı**:
    - **`<input type="range">`** etiketi, kullanıcının bir değeri seçebileceği bir aralık kaydırıcısını temsil eder.
    - **`min`** ve **`max`** özellikleri, kaydırıcının minimum ve maksimum değerlerini belirler. Bu örnekte 0 ile 100 arasındadır.
    - **`id="range"`** ile belirlenmiş bir kimlik, JavaScript veya CSS ile erişim için kullanılabilir.
3. **Etiket ve Başlangıç Değeri**:
    - **`<label>`** etiketi, kaydırıcının mevcut değerini göstermek için kullanılır.
    - **`for="range"`** özelliği, bu etiketin hangi kaydırıcıya ait olduğunu belirtir.
    - Başlangıçta "50" değeri görüntülenir.

```html
<h2>Custom Range Slider</h2>
<section class="range-container">
        <input type="range" min="0" max="100" id="range">
        <label for="range">50</label>
</section>
```

### CSS

1. **Genel Stil ve Pozisyonlama**:
    - **`h2`** etiketi, sayfadaki başlık için konumlandırma stilini belirler. Mutlak konumlandırma ve 50 piksel üst konumda bulunacak şekilde ayarlanmıştır.
    - **`section.range-container`** sınıfı, içindeki öğeleri göreceğimiz bir göreceli konumlandırmaya sahiptir.
2. **Aralık Kaydırıcısı Stili**:
    - **`input[type='range']`**, aralık kaydırıcısının genel stilini belirler. Belirli bir genişlik, kenar yuvarlaklıklar, ve görünüş düzenlemeleri içerir.
    - Odaklandığında dış çizgiyi kaldırmak için **`:focus`** pseudo-class kullanılır.
    - Aralık kaydırıcısı ile ilişkilendirilmiş **`label`** etiketi, belirli bir stil içerir ve pozisyonlandırma ayarları içerir.
3. **Tarayıcı Uyumlu Stiller**:
    - **Chrome & Safari**:
        - **`::-webkit-slider-runnable-track`** ve **`::-webkit-slider-thumb`** pseudo-elementleri, Chrome ve Safari için stil ayarlarını içerir.
    - **Firefox**:
        - **`::-moz-range-track`** ve **`::-moz-range-thumb`** pseudo-elementleri, Firefox için özel stil ayarlarını içerir.
    - **Internet Explorer**:
        - **`::-ms-track`** ve **`::-ms-thumb`** pseudo-elementleri, Internet Explorer için özel stil ayarlarını içerir.

```css
h2{ position: absolute; top: 50px; }
section.range-container { position: relative; }
section.range-container input[type='range']{
    width: 300px;
    -webkit-appearance: none;
    margin: 10px 0;
    border-radius: 10px;
}
section.range-container input[type='range']:focus{ outline: none; }
section.range-container input[type='range'] + label{
    background-color: var(--detail-color);
    position: absolute;
    top: -60px;
    left: 110px;
    width: 80px;
    padding: 5px 0;
    text-align: center;
    border-radius: 4px;
    box-shadow: 0 0 50px #1e2228, 0 0 25px var(--detail-color);
    color:#1e2228 ;
    font-family: inherit;
    font-weight: 700;
    font-size: 1.2rem;
}

/* CHROME & SAFARI */
section.range-container input[type='range']::-webkit-slider-runnable-track{
    background: var(--primary-color);
    border-radius: 10px;
    height: 10px;
    width: 100%;
    cursor: pointer;
    box-shadow: 0 0 50px #1e2228, 0 0 15px var(--primary-color);

}
section.range-container input[type='range']::-webkit-slider-thumb{
    -webkit-appearance: none;
    height: 24px;
    width: 24px;
    background-color: #1e2228;
    border-radius: 50%;
    border: 1px solid var(--primary-color);
    margin-top: -6px;
    cursor: pointer;
}

/* FIREFOX */
section.range-container input[type='range']::-moz-range-track{
    background: var(--primary-color); 
    border-radius: 10px;
    height: 13px;
    width: 100%;
    cursor: pointer;
    box-shadow: 0 0 50px #1e2228, 0 0 15px var(--primary-color);
}
section.range-container input[type='range']::-moz-range-thumb{
    -webkit-appearance: none;
    height: 24px;
    width: 24px;
    background-color: #1e2228;
    border-radius: 50%;
    border: 1px solid var(--primary-color);
    margin-top: -6px;
    cursor: pointer;
}

/* INTERNET EXPLORER */
section.range-container input[type='range']::-ms-track{
    background: var(--primary-color); 
    border-radius: 10px;
    height: 13px;
    width: 100%;
    cursor: pointer;
    box-shadow: 0 0 50px #1e2228, 0 0 15px var(--primary-color);
}
section.range-container input[type='range']::-ms-thumb{
    -webkit-appearance: none;
    height: 24px;
    width: 24px;
    background-color: #1e2228;
    border-radius: 50%;
    border: 1px solid var(--primary-color);
    margin-top: -6px;
    cursor: pointer;
}
```

## Label Value & Movement

1. **Aralık Kaydırıcı Olayı**:
    - **`range`** değişkeni, HTML'deki aralık kaydırıcısına erişim sağlar.
    - **`input`** olay dinleyicisi, kaydırıcının değeri her değiştiğinde çalışır.
2. **Değer ve Etiket Güncellemesi**:
    - Kullanıcının seçtiği değeri almak için **`e.target.value`** kullanılır.
    - Kaydırıcının yanındaki etiketi temsil eden **`label`**, **`nextElementSibling`** ile seçilir.
    - Kaydırıcının genişliği ve etiketin genişliği hesaplanır.
3. **Değerin Genişlik İle İlişkilendirilmesi**:
    - Değerin kaydırıcı üzerindeki konumu, genişlik bilgisini kullanarak hesaplanır.
    - Bu hesaplamada, değerlerin oranları ve ölçekleme işlevi kullanılır.
    - Etiketin pozisyonu ve içeriği, bu hesaplamalar ile güncellenir.
4. **Ölçekleme İşlevi**:
    - **`scale`** adlı işlev, bir değeri bir aralıktan diğerine dönüştürmek için kullanılır.
    - Bu durumda, kaydırıcı değeri belirli bir aralıktan belirli bir diğerine dönüştürülerek kullanılır.

```jsx
const range = document.getElementById('range');

range.addEventListener('input', (e) => {
  const value = +e.target.value;
  const label = e.target.nextElementSibling;

  const range_width = getComputedStyle(e.target).getPropertyValue('width');
  const label_width = getComputedStyle(label).getPropertyValue('width');
  const num_width = +range_width.substring(0, range_width.length - 2);
  const num_label_width = +label_width.substring(0, label_width.length - 2);

  const max = +e.target.max;
  const min = +e.target.min;

  const left = value * (num_width / max) - num_label_width / 2 + scale(value, min, max, 10, -10);

  label.style.left = `${left}px`;

  label.innerHTML = value;
});

const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};
```
