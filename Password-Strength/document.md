# Password Strength Background

## Creating The Form & Background

### HTML

1. **HTML Yapısı**:
    - İki **`<div>`** öğesi kullanılarak bir form ve ilgili giriş alanları oluşturulmuştur. İlk **`<div>`** öğesi arka planı temsil ederken, ikincisi form içeriğini içerir.
2. **Başlık ve Açıklama**:
    - **`<h1>`** öğesi, "Image Password Strength" başlığını temsil eder.
    - **`<p>`** öğesi, kullanıcıya "Change the password to see the effect" şeklinde bir açıklama sunar.
3. **Giriş Alanları**:
    - İki giriş alanı bulunur: biri "Email" girişi ve diğeri "Password" girişi. Her giriş alanı bir **`<label>`** ile eşleştirilir, bu da kullanıcılara ne girmeleri gerektiğini açıkça belirtir.
    - "Email" giriş alanı, **`<input type="text">`** kullanılarak metin girişi sağlar.
    - "Password" giriş alanı, **`<input type="password">`** kullanılarak şifre girişi sağlar.
4. **Gönderme Düğmesi**:
    - **`<button>`** öğesi, "Submit" adında bir gönderme düğmesini temsil eder. Kullanıcı bu düğmeye tıkladığında, formun içeriği sunucuya gönderilebilir.
5. **CSS Sınıfları**:
    - Çoğu öğe için CSS sınıfları kullanılmıştır. Bu sınıflar, öğelerin görünümünü ve düzenini belirler. Örneğin, **`rounded`**, **`p-10`**, **`text-center`**, vb.

```html
<div class="background" id="background"></div>
    <div class="bg-white rounded p-10 text-center shadow-md">
        <h1 class="text-3xl">Image Password Strength</h1>
        <p class="text-sm text-gray-700">Change the password to see the effect</p>
        <div class="my-4 text-left">
            <label for="email" class="text-gray-900">Email</label>
            <input type="text" class="border block w-full p-2 mt-2 rounded" placeholder="Enter Email" id="email">
        </div>
        <div class="my-4 text-left">
            <label for="email" class="text-gray-900">Password</label>
            <input type="password" class="border block w-full p-2 mt-2 rounded" placeholder="Enter Password" id="password">
        </div>

        <button class="bg-black text-white py-2 mt-4 inline-block w-full rounded" type="submit">Submit</button>
    </div>
</div>
```

### CSS

1. **Arka Plan Resmi**:
    - **`background`** özelliği, bir arka plan resmini belirtir.
    - **`url()`** fonksiyonu, resmin URL'sini içerir. Bu örnekte, bir uzak sunucudan resmin URL'si verilmiştir.
    - **`no-repeat`**, resmin yinelenmemesini (no-repeat) belirtir, yani bir kez gösterilir.
    - **`center center`** ile resmin yatay ve dikey olarak ortalanmasını sağlar.
    - **`/cover`**, resmin öğenin tamamını kaplamasını belirtir.
2. **Konumlandırma ve Boyutlama**:
    - **`position: absolute;`** ile öğenin mutlak bir konumda yer almasını sağlar.
    - **`top`**, **`bottom`**, **`left`**, ve **`right`** ile öğeyi sayfanın dört tarafına 20 piksel uzaklık ekler. Bu, resmin öğenin sınırlarının dışına taşmasını sağlar.
3. **Z-İndeksi**:
    - **`z-index`** özelliği, öğenin yığın düzenindeki sırasını belirler. Bu örnekte, arka plan resmi diğer öğelerin arkasına yerleştirilir. Z-index değeri negatiftir, böylece diğer öğelerin önündedir.
4. **Gauss Bulanıklığı**:
    - **`filter: blur(20px);`** ile resme Gauss bulanıklığı efekti uygulanır. Resim bulanık hale getirilir ve z-index ile belirtilen resmin üzerine daha belirgin bir şekilde görünmesi sağlanır.

```css
.background{
    background: url('https://images.pexels.com/photos/691668/pexels-photo-691668.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1') no-repeat center center/cover;
    position: absolute; top: -20px; bottom: -20px; left: -20px; right: -20px; z-index: -1; filter: blur(20px); }
```

## Change Blur On Input

1. **HTML Öğelerinin Seçimi**:
    ◦ JavaScript'te, **`getElementById`** yöntemi kullanılarak belirli HTML öğeleri seçilir. **`password`** ve **`background`** adlı iki element seçilir.
2. **Olay Dinleyicinin Ekleme**:
    ◦ **`addEventListener`** kullanılarak, **`password`** öğesine bir "input" olay dinleyici eklenir. Bu, kullanıcının şifre girişi yaparken olayın tetikleneceği anlamına gelir.
3. **Olay Dinleyici Fonksiyonu**:
    ◦ Olay dinleyici bir fonksiyonu tetikler. Bu fonksiyon, kullanıcının şifre girişini takip eder.
4. **Kullanıcı Girişi Alınması**:
    ◦ **`e.target.value`** kullanılarak, kullanıcının girdiği şifre metni alınır.
5. **Giriş Uzunluğunun Hesaplanması**:
    ◦ Giriş uzunluğu, **`input.length`** ile hesaplanır. Bu, kullanıcının girdiği şifrenin uzunluğunu temsil eder.
6. **Arka Plan Bulanıklığının Hesaplanması**:
    ◦ Bulanıklık miktarı, giriş uzunluğuna göre hesaplanır. Kullanıcının girdiği her karakter için, bulanıklık miktarı azaltılır. Bu, şifre ne kadar güçlüyse arka planın o kadar net olduğu anlamına gelir.
7. **Arka Planın Stiline Etkisi**:
    ◦ **`background.style.filter`** kullanılarak, arka planın "blur" efekti etkilenir. Bu efekt, CSS **`filter`** özelliğini kullanarak arka planın bulanıklaşmasını sağlar.
8. **Kodun Çalışması**:
    ◦ Kullanıcı şifre girdikçe, şifrenin uzunluğuna bağlı olarak arka plan bulanıklığı artar veya azalır. Bu, kullanıcının şifre gücünü görsel olarak anlamasını sağlar.

```jsx
const password = document.getElementById('password');
const background = document.getElementById('background');

password.addEventListener('input', (e) => {
  const input = e.target.value;
  const length = input.length;
  const blurValue = 20 - length * 2;
  background.style.filter = `blur(${blurValue}px)`;
});
```
