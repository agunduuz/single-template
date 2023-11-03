# 3D Background

## Creating The Buttons & Boxes

### HTML

1. **Buton Oluşturma**:
    - **`<button>`** etiketi, bir düğme oluşturur. Bu düğme, belirli bir işlemi veya olayı tetiklemek için kullanılır.
    - **`id="btn"`** özelliği, düğmenin benzersiz bir kimliğini tanımlar, bu kimlikle JavaScript veya CSS ile erişebilirsiniz.
    - **"Magic 🎩"**, düğmenin metin içeriğidir. Bu metin, düğmenin üzerine tıklanınca gerçekleştirilecek olayı belirtir.
2. **Bir Bölüm Oluşturma**:
    - **`<section>`** etiketi, bir bölümü temsil eder. Bu bölüm, sayfa içeriğini düzenlemek veya belirli bir konsepti vurgulamak için kullanılabilir.
    - **`id="boxes"`** özelliği, bu bölümün kimliğini belirler ve bu kimlikle JavaScript veya CSS ile etkileşime girebilirsiniz.
    - **`class="boxes big"`**, bölümün sınıflarını belirtir. Sınıflar, CSS ile biçimlendirme veya stillendirme için kullanılır. "big" sınıfı muhtemelen bölümün boyutunu veya görünümünü etkiler.

```html
<button id="btn" class="magic">Magic 🎩</button>
<section id="boxes" class="boxes big">
</section>
```

### CSS

1. **Düğme Stili**:
    - **`.magic`** sınıfı için CSS kuralları, düğme için stil tanımlar. Önemli özellikler şunlardır:
        - **`background-color`**: Arka plan rengini belirler, düğmenin rengini gösterir.
        - **`color`**: Metin rengini belirler (bu örnekte beyazdır).
        - **`font-family`**: Font ailesini üst öğeden miras alır.
        - **`border`**: Düğmenin kenarlığını kaldırır.
        - **`border-radius`**: Düğmenin köşelerini yuvarlar.
        - **`font-size`**: Yazı tipi boyutunu 16 piksel olarak ayarlar.
        - **`padding`**: Düğme içindeki boşluğu artırmak için iç boşluk sağlar.
        - **`cursor`**: Düğme üzerine gelindiğinde fare işaretçisini bir el işaretçisine dönüştürür.
        - **`position`**: Düğmenin görüntüyü sabitlemesini sağlar.
        - **`top`**: Düğmeyi görüntünün üstünden 40 piksel mesafede konumlandırır.
        - **`letter-spacing`**: Metinde harf aralığı ekler.
        - **`box-shadow`**: Görsel bir efekt için kutu gölgeleri uygular.
        - **`z-index`**: Düğmenin yığın sırasını belirler.
2. **Düğme Durumları**:
    - Düğme ayrıca odak ve aktif durumlar için stillere sahiptir, böylece düğmeyle etkileşimde bulunulduğunda görsel geri bildirim sağlar.
        - **`:focus`**, düğme odaklandığında varsayılan dış çizgiyi kaldırır.
        - **`:active`**, düğme tıklandığında gölgeyi kaldırır ve düğmeye tıklandığında bir dönüşüm uygular.
3. **Bölüm Stili**:
    - **`.boxes`** sınıfı için CSS kuralları, kutuları içeren bölümün stilini belirler. Önemli özellikler şunlardır:
        - **`display`**: Kutuların bir flex konteynır olarak görüntülenmesini belirtir.
        - **`flex-wrap`**: Kutuların konteynırın genişliğini aştığında bir sonraki satıra kaymasına izin verir.
        - **`justify-content`**: Kutuları eşit aralıklarla konumlandırır.
        - **`height`** ve **`width`**: Bölümün başlangıç boyutlarını ayarlar.
        - **`position`**: İçindeki öğeleri mutlak bir konum olarak tanımlar.
        - **`transition`**: 0.4 saniyelik bir süre ile yumuşak bir geçiş efekti ekler.
4. **Kutu Stili**:
    - Kutular, **`.box`** sınıfı kullanılarak stilize edilir ve arka plan resmi gibi özellikleri içerir.
        - **`background-image`**: Kutunun arka plan resmini belirler.
        - **`background-repeat`**: Arka plan resminin tekrarlanmasını engeller.
        - **`background-size`**: Arka plan resminin boyutunu tanımlar.
        - **`position`**: Kutuyu göreli bir pozisyon öğesi olarak ayarlar.
        - **`width`** ve **`height`**: Kutunun boyutlarını belirler.
        - **`transition`**: 0.4 saniyelik bir süre ile yumuşak bir geçiş efekti ekler.
5. **Yanılsal Öğeler**:
    - **`.box:before`** ve **`.box:after`** yanılsal öğeler, kutu için ekstra stil oluşturur ve köşegen öğeler ekler. Bu öğeler, görünümlerini elde etmek için CSS çarpık dönüşümü kullanır.

```css
button.magic{
    background-color: var(--second-color);
    color: #fff;
    font-family: inherit;
    border: 0;
    border-radius: 3px;
    font-size: 16px;
    padding: 12px 25px;
    cursor: pointer;
    position: fixed;
    top: 40px;
    letter-spacing: 1px;
    box-shadow: 0 0 10px var(--first-color), 0 0 50px var(--first-color);
    z-index: 100;
}
button.magic:focus{ outline: none; }
button.magic:active{ box-shadow: none; transform: translateY(2px); }

section.boxes{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    height: 500px;
    width: 500px;
    position: relative;
    transition: .4s ease;
}
section.boxes.big{ height: 600px; width: 600px; }
section.boxes.big .box { transform: rotateZ(360deg); }
section.boxes .box{
    background-image: url('https://media.giphy.com/media/kbuQOkATEo6VW/giphy.gif') ;
    background-repeat: no-repeat;
    background-size: 500px 500px;
    position: relative;
    width: 125px;
    height: 125px;
    transition: 0.4s ease;
}
.box:before{ content: ''; background-color: var(--alternative-color); position: absolute; bottom: -15px; left: 8px; height: 15px; width: 100%; transform: skewX(45deg); }
.box:after{ content: ''; background-color: var(--first-color); position: absolute; top: 8px; right: -15px; height: 100%; width: 15px; transform: skewY(45deg); }
```

## Background Position & Rotate Event

1. **Öğelerin Seçimi**:
    - Kod, **`boxesContainer`** ve **`btn`** adlı iki HTML öğesini seçer. **`boxesContainer`**, kutuların bulunduğu bölümü temsil ederken, **`btn`** düğmesini temsil eder.
2. **Olay Dinleyici Ekleme**:
    - Düğmeye tıklanma olayını dinlemek için **`btn`** öğesine bir tıklama olay dinleyici eklenir. Bu, düğmeye tıklanıldığında bir işlevin çalıştırılmasını sağlar.
3. **Düğme Tıklanıldığında İşlev**:
    - Düğmeye tıklandığında, **`boxesContainer`** öğesinin sınıfı **`big`** ile değiştirilir. Bu, kutuların boyutlarını büyüten veya küçülten bir geçiş yapar. Bu geçiş, sınıf eklemeyi ve kaldırmayı kullanır.
4. **Kutu Oluşturma İşlevi**:
    - **`createBoxes`** adlı bir işlev tanımlanır. Bu işlev, 4x4 bir kutu ızgarası oluşturur.
    - İki iç içe döngü kullanarak, toplam 16 kutu oluşturur.
    - Her kutu bir **`<div>`** öğesi olarak oluşturulur ve **`box`** sınıfı eklenir.
    - Kutuların arka plan resimlerinin konumu hesaplanarak ayarlanır.
    - Oluşturulan her kutu **`boxesContainer`** öğesine eklenir.
5. **Kutu Oluşturma Fonksiyonunun Çağrılması**:
    - Sayfa yüklendiğinde veya yenilendiğinde, **`createBoxes`** işlevi çağrılır ve kutular oluşturulur.

```jsx
const boxesContainer = document.getElementById('boxes');
const btn = document.getElementById('btn');

btn.addEventListener('click', () => {
  boxesContainer.classList.toggle('big');
});

function createBoxes() {
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      const box = document.createElement('div');
      box.classList.add('box');
      box.style.backgroundPosition = `${-j * 125}px ${-i * 125}px`;
      boxesContainer.appendChild(box);
    }
  }
}
createBoxes();
```
