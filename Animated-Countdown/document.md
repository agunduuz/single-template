# Animated Countdown

## Counter & Final Sections

### HTML

Bu HTML kodu, bir geri sayım ve basit bir oyunun kullanıcı arayüzünü temsil eder.

1. **`<section class="counter">`**:
    - Bu bölüm, geri sayım için kullanılır.
    - İçerisinde "Get Ready" metni bulunur.
    - Sayılar (3, 2, 1, 0) bir animasyonla bu bölümde sıralanır.
2. **`<section class="final">`**:
    - Bu bölüm, oyunun başlamasını temsil eder.
    - "GO!" başlığı burada görünür.
    - Ayrıca, "Replay" adında bir düğme bu bölümde bulunur.
3. **`.in`** Sınıfı:
    - Bu sınıf, geri sayımın başlangıcını belirleyen sayıyı vurgular.
4. **`id="replay"`**:
    - Bu düğmenin kimliği "replay" olarak belirlenmiştir.
    - Oyunun yeniden başlatılmasını sağlar.

Bu HTML kodu, kullanıcıya oyunun başlaması için hazır olmalarını söyler ve ardından "GO!" düğmesini tıklamalarını bekler. "Replay" düğmesi ise oyunu yeniden başlatır.

```html
<section class="counter">
      <div class="nums">
          <span class="in">3</span>
          <span>2</span>
          <span>1</span>
          <span>0</span>
      </div>
      <h4 class="text">Get Ready</h4>
    </section>

    <section class="final">
        <h1 class="text">GO!</h1>
        <button id="replay" class="replay">Replay</button>
    </section>
```

### CSS

Bu CSS kodları, iki farklı bölümün (geri sayım ve oyun başlangıcı) görünürlüğünü kontrol eden ve animasyonlar ekleyen kısımları içerir.

1. **`section.counter`**:
    - Bu CSS kuralları, "counter" adlı bölümün yerini ve görünürlüğünü ayarlar.
    - **`position: fixed`** ile bölümün sayfa içinde sabit konumda olmasını sağlar.
    - **`top`** ve **`left`** ile bölümü sayfanın ortasına konumlandırır.
    - **`transform`** ile bölümü yatay ve dikey eksende sayfanın merkezine taşır.
    - **`text-align: center`** ile bölüm içindeki metinlerin ortalandığını belirtir.
2. **`section.counter.hide`**:
    - Bu sınıf, "counter" bölümünün gizlendiği durumu temsil eder.
    - **`transform`** ile bölümün boyutunu sıfırlar ve görünmez hale getirir.
    - **`animation`** ile "hide" adlı animasyonun uygulandığını belirtir.
3. **`@keyframes hide`**:
    - "hide" adlı animasyon, bölümün küçültülerek gizlenmesini yönetir.
    - **`0%`** durumunda bölümün normal boyutta olduğunu, **`100%`** durumunda ise bölümün tamamen kaybolduğunu belirtir.
4. **`section.final`**:
    - Bu CSS kuralları, "final" adlı bölümün başlangıçta gizli olduğu durumu temsil eder.
    - **`transform`** ile bölümü boyutlandırır ve gizli hale getirir.
5. **`section.final.show`**:
    - Bu sınıf, "final" bölümünün göründüğü durumu temsil eder.
    - **`transform`** ile bölümün boyutunu büyütür ve görünür hale getirir.
    - **`animation`** ile "show" adlı animasyonun uygulandığını belirtir.
6. **`@keyframes show`**:
    - "show" adlı animasyon, bölümün büyütülerek görünür hale geldiği durumu yönetir.
    - **`0%`** durumunda bölümün başlangıçta görünmediğini, **`30%`** durumunda büyütüldüğünü, ve **`100%`** durumunda normal boyutta göründüğünü belirtir.

```css
section.counter{
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}
section.counter.hide{
  transform: translate(-50%, -50%) scale(0);
  animation: hide .2s ease-out;
}
@keyframes hide {
  0% {
    transform: translate(-50%, -50%) scale(1);
  }
  100%{
    transform: translate(-50%, -50%) scale(0);
  }
}
section.final{
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(0);
}
section.final.show{
  transform: translate(-50%,-50%) scale(1);
  animation: show 0.2s ease-out;
}
@keyframes show {
  0% {
    transform: translate(-50%, -50%) scale(0);
  }
  30% {
    transform: translate(-50%, -50%) scale(1.4);
  }
  100%{
    transform: translate(-50%, -50%) scale(1);
  }
}
```

## In & Out Animations

Bu CSS kodları, "counter" bölümünde kullanılan sayıların görünümünü ve animasyonlarını yönetir

1. **`section.counter .text`**:
    - Bu stillemeler, "text" sınıfına sahip öğelerin görünümünü tanımlar.
    - **`font-size`** ile metin boyutunu belirler.
    - **`margin`** ile metin etrafında bir kenar boşluğu bırakır.
    - **`text-transform`** ile metin içeriğini büyük harfe dönüştürür.
2. **`section.counter .nums`**:
    - Bu stillemeler, "nums" sınıfına sahip öğelerin görünümünü tanımlar.
    - **`color`** ile metin rengini belirler.
    - **`font-size`** ile metin boyutunu ayarlar.
    - **`position: relative`** ile öğenin içerik içindeki konumunu göreceli olarak belirler.
    - **`overflow: hidden`** ile içeriğin taşan kısımlarını gizler.
    - **`width`** ve **`height`** ile öğenin boyutlarını sınırlar.
3. **`section.counter .nums span`**:
    - Bu stillemeler, "nums" içindeki **`span`** öğelerinin görünümünü tanımlar.
    - **`position: absolute`** ile her bir sayıyı öğenin içinde belirli bir konuma yerleştirir.
    - **`top`** ve **`left`** ile sayıları yatay ve dikey eksende merkezler.
    - **`transform`** ile sayıları döndürerek yerleştirir. (**`rotate`** ile döndürme yapılır)
    - **`transform-origin`** ile döndürme noktasını alt merkez olarak belirler.
4. **`section.counter .nums span.in`** ve **`section.counter .nums span.out`**:
    - Bu stillemeler, "in" ve "out" sınıfına sahip **`span`** öğelerinin görünümünü ve animasyonlarını tanımlar.
    - Sayıların içeri girişi ve çıkışı için farklı dönme açıları ve animasyonlar kullanılır.
5. **`@keyframes goIn`** ve **`@keyframes goOut`**:
    - Bu animasyonlar, sayıların içeri girişi (**`goIn`**) ve çıkışı (**`goOut`**) için kullanılır.
    - **`0%`** durumunda başlangıç konumunu, **`100%`** durumunda hedef konumunu belirler.
    - Her bir animasyon, sayıların belirli bir dönme hareketi yapmasını sağlar.

```css
section.counter .text{
  font-size: 20px;
  margin: 5px;
  text-transform: uppercase;
}
section.counter .nums{
  color: var(--main-fill);
  font-size: 50px;
  position: relative;
  overflow: hidden;
  width: 250px;
  height: 50px;
}
section.counter .nums span{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(120deg);
  transform-origin: bottom center;
}
section.counter .nums span.in{
  transform: translate(-50%, -50%) rotate(0deg);
  animation: goIn .5s ease-in-out;
}
section.counter .nums span.out{
  transform: translate(-50%, -50%) rotate(0deg);
  animation: goOut .5s ease-in-out;
}
@keyframes goIn {
  0%{
    transform: translate(-50%, -50%) rotate(120deg);
  }

  30% {
    transform: translate(-50%, -50%) rotate(-20deg);
  }

  60% {
    transform: translate(-50%, -50%) rotate(10deg);
  }

  100% {
    transform: translate(-50%, -50%) rotate(0deg);
  }
}
@keyframes goOut {
  0%{
    transform: translate(-50%, -50%) rotate(0deg);
  }

  60% {
    transform: translate(-50%, -50%) rotate(20deg);
  }

  100% {
    transform: translate(-50%, -50%) rotate(-120deg);
  }
}
```

## Dynamic Animation With JS

Bu JavaScript kodları, sayfadaki sayıların animasyonlu bir geri sayımı temsil eden bir sayıcı veya geri sayım uygulamasını kontrol eder.

1. **`const`** İfadeleri:
    - Bu satırlar, belirli HTML öğelerini seçmek için kullanılır.
    - **`nums`** değişkeni, sayfa üzerindeki tüm sayıları temsil eden **`span`** öğelerini seçer.
    - **`counter`** değişkeni, sayfanın geri sayım bölümünü temsil eder.
    - **`finalMsg`** değişkeni, geri sayım tamamlandığında gösterilecek sonuç mesajını temsil eder.
    - **`replay`** değişkeni, geri sayım tamamlandığında geri sayımı yeniden başlatmak için kullanılan "Replay" düğmesini temsil eder.
2. **`resetDOM()`** Fonksiyonu:
    - Bu fonksiyon, sayfanın başlangıç durumuna sıfırlanmasını sağlar.
    - **`counter`** ve **`finalMsg`** öğelerinden gizleme sınıflarını kaldırır.
    - **`nums`** üzerindeki tüm sayıların sınıf değerlerini temizler.
    - İlk sayıya "in" sınıfını ekler.
3. **`runAnimation()`** Fonksiyonu:
    - Bu fonksiyon, sayıların animasyonlarını yönetir.
    - Her sayı üzerinde bir dizi olay dinleyici ekler.
    - Sayılar arasında animasyonlar ilerlerken, gerekli sınıfları ekler ve kaldırır.
    - Sayılar arasında geçiş yaparken "in" ve "out" sınıfları kullanılır.
    - Geri sayım tamamlandığında, **`counter`** ve **`finalMsg`** öğelerine gerekli sınıfları ekler ve sonuç mesajını gösterir.
4. **`replay`** Düğmesinin Tıklanması:
    - "Replay" düğmesine tıklama olayı dinleyicisi eklenir.
    - Düğmeye tıklandığında, sayfa sıfırlanır ve geri sayım animasyonu yeniden başlatılır.

```jsx
const nums = document.querySelectorAll('.nums span');
const counter = document.querySelector('.counter');
const finalMsg = document.querySelector('.final');
const replay = document.querySelector('#replay');

runAnimation();

function resetDOM() {
  counter.classList.remove('hide');
  finalMsg.classList.remove('show');

  nums.forEach((num) => {
    num.classList.value = '';
  });

  nums[0].classList.add('in');
}

function runAnimation() {
  nums.forEach((num, idx) => {
    const nextToLast = nums.length - 1;

    num.addEventListener('animationend', (e) => {
      if (e.animationName === 'goIn' && idx !== nextToLast) {
        num.classList.remove('in');
        num.classList.add('out');
      } else if (e.animationName === 'goOut' && num.nextElementSibling) {
        num.nextElementSibling.classList.add('in');
      } else {
        counter.classList.add('hide');
        finalMsg.classList.add('show');
      }
    });
  });
}

replay.addEventListener('click', function () {
  resetDOM();
  runAnimation();
});
```
