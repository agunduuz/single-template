1. Canvas elementi getirmek ve elementin 2D Contextini almak
    
    ```jsx
    const canvas = document.getElementById('canvas'); // Canvas elementi getiriyoruz.
    const ctx = canvas.getContext('2d'); // Canvas elementinin 2d contextini alıyoruz.
    ```
    
2. **Global Değişkenlerimiz**
    
    ```jsx
    let size = 10;
    let isPressed = false; // Mouse basılı mı?
    let color = 'black';
    let x;
    let y;
    ```
    
3. Bir adet fonkiyon yaratalım `drawCircle()` adında.
    
    ```jsx
    function drawCircle(x, y){ // Çember çizme fonksiyonu.
        ctx.beginPath(); // Yeni bir yol çizmeye başla.
        ctx.arc(x, y, size, 0, Math.PI * 2); // Çember çiz.
        ctx.fillStyle = color ; // Çemberin rengini yukarıda belirlenen color yap.
        ctx.fill(); // Çemberi doldur. 
    }
    ```
    
4. Bir adet fonkiyon yaratalım `drawLine()` adında.
    
    ```jsx
    function drawLine(x1, y1, x2, y2) {
      ctx.beginPath();
      ctx.moveTo(x1, y1); // Başlangıç noktası.
      ctx.lineTo(x2, y2); // Bitiş noktası.
      ctx.strokeStyle = color; // Çizginin rengi.
      ctx.lineWidth = size * 2; // Çizginin kalınlığı.
      ctx.stroke(); // Çizgiyi çiz.
    }
    ```
    
5. Mouse Event ile basılı tutup sürükleyebilmek, bırakmak ve çizgi çizmek istiyoruz.
    
    ```jsx
    canvas.addEventListener('mousedown', (e) => { // Mouse basıldığında.
      isPressed = true; // Mouse basıldığında isPressed true olur.
      x = e.offsetX; // Mouse'un x koordinatı.
      y = e.offsetY; // Mouse'un y koordinatı.
    })
    canvas.addEventListener('mouseup', (e) => {
      // Mouse bırakıldığında.
      isPressed = false; // Mouse bırakıldığında isPressed false olur.
      x = undefined; // Mouse'un x koordinatı undefined olur.
      y = undefined; // Mouse'un y koordinatı undefined olur.
    });
    canvas.addEventListener('mousemove', (e) => {
      // Mouse hareket ettirildiğinde.
      if (isPressed) {
        // Eğer mouse basılıysa.
        const x2 = e.offsetX; // Mouse'un x koordinatı.
        const y2 = e.offsetY; // Mouse'un y koordinatı.
    
        drawCircle(x2, y2); // Çember çizme fonksiyonunu çağır.
        drawLine(x, y, x2, y2); // Çizgi çizme fonksiyonunu çağır.
    
        x = x2; // x2'yi x'e ata.
        y = y2; // y2'yi y'ye ata.
      }
    });
    ```
    
6. Rengi değiştirmek, çizgi kalınlığını ayarlamak ve sıfırlamak.
7. İlk olarak tüm kontrollerimizi getirelim.
    
    ```jsx
    const increaseBtn = document.getElementById('increase'); // Arttırma butonunu getiriyoruz.
    const decreaseBtn = document.getElementById('decrease'); // Azaltma butonunu getiriyoruz
    const sizeEl = document.getElementById('size'); // Boyutu getiriyoruz
    const colorEl = document.getElementById('color'); // Renk seçiciyi getiriyoruz
    const clearEl = document.getElementById('clear'); // Temizleme butonu getiriyoruz
    ```
    
8. Önce renk seçiciyi yapalım colorEl için bir event oluşturalım.
    
    ```jsx
    colorEl.addEventListener('change', (e) => (color = e.target.value)); // Renk seçicinin değeri değiştiğinde color değişkenini değiştir.
    ```
    
9. Boyutu arttırma increaseBtn üzerinde event uygulamak
    
    ```jsx
    increaseBtn.addEventListener('click', () => {
      size += 5; // Boyutu 5 arttır.
      if (size > 50) {
        size = 50; // Boyut 50'den büyükse 50 yap.
      }
      updateSizeOnScreen(); // Boyutu güncellemek için bir fonk. çağırıyoruz.
    });
    ```
    
10. Çağırdığımız fonk. oluşturalım.
    
    ```jsx
    function updateSizeOnScreen(){
        sizeEl.innerText = size; // Boyutu güncelle.
    }
    ```
    
11. Boyutu azaltma decreaseBtn üzerinde event uygulamak
    
    ```jsx
    decreaseBtn.addEventListener('click', () => {
      size -= 5; // Boyutu 5 azalt.
      if (size < 5) {
        size = 5; // Boyut 5'den küçükse 5 yap.
      }
      updateSizeOnScreen(); // Boyutu güncellemek için bir fonk. çağırıyoruz.
    });
    ```
    
12. Temizleme butonunu kullanmak clearEl için bir event uygulamak
    
    ```jsx
    clearEl.addEventListener('click', () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height); // Canvas'ı temizle.
    });
    ```