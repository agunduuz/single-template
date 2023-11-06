# Day 41 - Verify Account UI

## UI Design

### HTML

1. **HTML Yapısı**:
    - "container" sınıfıyla bir **`<section>`** etiketi kullanılarak içeriği tutmak için bir konteyner oluşturulur.
    - "title" sınıfıyla bir **`<h2>`** etiketi, bölümün başlığını temsil eder.
    - "content" sınıfıyla bir **`<p>`** etiketi, doğrulama kodunun amacını açıklayan metni içerir.
    - "code-container" sınıfına sahip bir **`<article>`** etiketi içinde, altı haneli bir doğrulama kodu girmek için altı giriş alanı bulunur.
    - "info" sınıfına sahip bir **`<small>`** etiketi, tasarım hakkında ek bilgi sağlar.
2. **Kod Giriş Alanları**:
    - "code" sınıfına sahip altı **`<input>`** alanı, doğrulama kodunun her basamağını girmek için kullanılır.
    - "type="number"" özelliği, yalnızca sayısal girişin kabul edilmesini sağlar.
    - "min" ve "max" özellikleri girişin 0 ile 9 arasındaki değerlerle sınırlanmasını sağlar.
    - "required" özelliği, her alanın doldurulmadan gönderilmeden önce doldurulması gerektiğini zorunlu kılar.
3. **İçerik Stili**:
    - **`<p>`** etiketi içindeki metinde, bir **`<bold>`** etiketi ile kalın vurgulanmış bir ifade bulunur.
    - Tasarım, **`<small>`** etiketi içinde açıklanır ve sadece tasarım konsepti olduğunu ve gerçek bir e-posta işlevselliği olmadığını belirtir.

Bu kod, altı haneli doğrulama kodunu girmek için basit bir kullanıcı arayüzü oluşturur. Stil ve tasarım unsurları dahil edilmiştir ve gerçek bir e-posta işlevselliği olmadığını belirtmek önemlidir.

```html
    <section class="container">
      <h2 class="title">Verify Your Container</h2>
      <p class="content">
        We emailed you the <bold>six digit code</bold> to verify@gmail.com <br />
        Enter the code below to confirm your email address.
      </p>
      <article class="code-container">
        <input type="number" class="code" placeholder="0" min="0" max="9" required>
        <input type="number" class="code" placeholder="0" min="0" max="9" required>
        <input type="number" class="code" placeholder="0" min="0" max="9" required>
        <input type="number" class="code" placeholder="0" min="0" max="9" required>
        <input type="number" class="code" placeholder="0" min="0" max="9" required>
        <input type="number" class="code" placeholder="0" min="0" max="9" required>
      </article>
      <small class="info">
        This is design only. We didn't actually send you an email as we don't have your email, right?
      </small>
    </section>
```

### CSS

1. **Konteyner Tasarımı**:
    - **`.container`** sınıfına sahip **`<section>`** etiketi, bir arka plan rengi, kenarlık, yuvarlak köşeler ve içeriği çerçeveleyen bir alan oluşturur.
    - **`max-width`** ile konteynerin maksimum genişliği sınırlanır ve içeriğin düzenli bir şekilde sığmasını sağlar.
    - **`text-align: center`**, içeriğin yatay olarak ortalanmasını sağlar.
2. **Doğrulama Kodu Giriş Alanları**:
    - **`.code-container`** sınıfı, doğrulama kodu giriş alanlarını içeren bir bölümü ortalar ve dikey hizalamayı düzenler.
    - **`.code`** sınıfına sahip **`<input>`** alanları, kodun girileceği büyük, yuvarlak köşeli kutular oluşturur.
    - Kutuların görünümü, köşelerin yuvarlaklığı, yazı boyutu ve sınırlar gibi bir dizi stil özelliği ile özelleştirilmiştir.
    - **`moz-appearance`** ve **`webkit-outer-spin-button`** ile giriş alanlarının art düğmeleri kaldırılır.
    - **`.code:valid`** ile doğru bir şekilde girilen kodlar belirli bir stil (örneğin, yeşil bir çerçeve ve gölgelendirme) alır.
3. **Tasarım Duyarlılığı (Responsive Design)**:
    - **`@media`** sorguları, sayfanın dar ekranlarda nasıl görüneceğini belirler.
    - Ekran genişliği belirli değerlere (örneğin, 700px ve 580px) düştüğünde, tasarım değişiklikleri uygulanır.
    - Genişlik ve yükseklik gibi özellikler, giriş alanlarının boyutunu ve düzenini küçültmek için ayarlanır.

Bu CSS kodu, doğrulama kodu giriş alanlarını içeren bir sayfa bölümünün stilini ve görünümünü tanımlar. Stil özellikleri, sayfanın genişliği ve kullanıcının cihazına göre uyum sağlayacak şekilde düzenlenmiştir.

```css
section.container {
  background-color: #fff;
  border: 3px solid var(--primary-color);
  border-radius: 10px;
  padding: 50px;
  max-width: 1000px;
  text-align: center;
}

section.container .code-container {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 40px 0;
}

section.container .code-container .code{
  border-radius: 5px;
  font-size: 75px;
  font-family: inherit;
  height: 120px;
  width: 100px;
  border: 1px solid var(--primary-color);
  margin: 1%;
  text-align: center;
  font-weight: 300;
  -moz-appearance: textfield;
}

section.container .code-container .code::-webkit-outer-spin-button, section.container .code-container .code::-webkit-inner-spin-button{ -webkit-appearance: none; margin: 0; }

section.container .code-container .code:valid{
  border-color: #13d1c8;
  box-shadow: 0 5px 15px 5px rgba(0, 0, 0, 0.25);
}
section.container .code-container .code:focus{
 outline: none;
}
section.container .info{
  background-color: #eaeaea;
  display: inline-block;
  padding: 10px;
  line-height: 20px;
  max-width: 75%;
  color: #777;
  border-radius: 5px;
}

@media(max-width:700px){
  section.container {
    padding: 20px;
    width: 90%;
  }
  section.container .code-container {
    flex-wrap: wrap;
  }
  section.container .code-container .code{
    font-size: 50px;
    height: 80px;
    max-width: 70px;
  }
}
@media(max-width:580px){
  section.container {
    padding: 20px;
    width: 100%;
  }
  section.container .code-container {
    flex-wrap: wrap;
  }
  section.container .code-container .code{
    font-size: 35px;
    height: 60px;
    max-width: 50px;
  }
}
```

### JavaScript

1. **HTML Öğelerini Seçme**:
    - **`document.querySelectorAll('.code')`** ifadesi, **`.code`** sınıfına sahip tüm HTML öğelerini seçer. Bu durumda, bunlar bir doğrulama kodu için giriş alanlarıdır.
2. **Başlangıç Odak Noktası**:
    - **`codes[0].focus()`** satırı, ilk giriş alanına başlangıç odak noktasını ayarlar ve sayfa yüklendiğinde kullanıcı girişine hazır hale getirir.
3. **Klavye Olayı Dinleyicileri**:
    - Bir **`forEach`** döngüsü, seçilen her giriş alanı için ayrı olay işleme sağlar.
    - **`keydown`** olay dinleyicisi, klavye tuşlarına basılmayı dinler.
4. **Giriş İşleme**:
    - Eğer basılan tuş '0' ile '9' aralığında ise, yani bir rakam tuşu ise, kod mevcut giriş alanını temizler, değerini boş bir dize olarak ayarlar ve sıradaki giriş alanına odaklanır. Bu, kullanıcıların her giriş alanına sırasıyla tek bir rakam girmesine olanak tanır.
5. **Geri Al Tuşu İşleme**:
    - 'Backspace' tuşu basıldığında, kod kısa bir süre (10 milisaniye) bekler ve ardından önceki giriş alanına odaklanır. Bu, kullanıcıların gitmek ve girdilerini düzeltebilmelerine olanak tanır.

Özetle, bu kod, bir doğrulama kodunun girişini etkili bir şekilde yönetir. Kullanıcılar rakam tuşlarına basıldığında giriş alanları arasındaki odaklamayı kontrol eder ve 'Backspace' tuşu ile kolayca düzeltme yapmalarına izin verir.

```jsx
const codes = document.querySelectorAll('.code');

codes[0].focus();

codes.forEach((code, idx) => {
  code.addEventListener('keydown', (e) => {
    if (e.key >= 0 && e.key <= 9) {
      codes[idx].value = '';
      setTimeout(() => {
        codes[idx + 1].focus();
      }, 10);
    } else if (e.key === 'Backspace') {
      setTimeout(() => {
        codes[idx - 1].focus();
      }, 10);
    }
  });
});
```
