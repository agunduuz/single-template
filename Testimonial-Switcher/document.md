# Testimonial Box Switcher

## Create Box & Progress Bar

### HTML

1. **Testimonial Container (Referans Konteyneri):**
    - Sayfanın bir bölümünü temsil eder ve kullanıcı yorumlarını içerir.
    - **`testimonial-container`** sınıfı ile stilize edilebilir.
2. **İlerleme Çubuğu:**
    - Görsel olarak bir ilerleme çubuğunu temsil eder.
    - **`progress-bar`** sınıfı ile stilize edilebilir.
3. **Alıntı İkonları:**
    - Alıntıların başlangıcını ve bitişini belirten font-awesome ikonları içerir.
    - Sağ tarafta **`fas fa-quote-right fa-quote`**, sol tarafta **`fas fa-quote-left fa-quote`**.
4. **Referans Metni:**
    - Kullanıcı yorumunu içeren bir paragraf (**`testimonial`**) bulunur.
    - Temiz tasarım, duyarlı düzen ve gerçek zamanlı yorum görüntüleme ile modern bir deneyim sunar.
5. **Kullanıcı Bilgileri:**
    - Kullanıcının profil resmi, adı ve rol bilgisi içerir.
    - **`user-image`**, **`username`** ve **`role`** sınıfları ile stilize edilebilir.
6. **Önemli Noktalar:**
    - Temiz tasarım ve duyarlı düzen, kullanıcı dostu bir deneyim sunar.
    - Gerçek zamanlı yorum görüntüleme, kullanıcı etkileşimini artırır.
    - Kullanıcı bilgileri, referansı kişiselleştirir ve güvenilirlik katkısı sağlar.

```html
<section class="testimonial-container">
        <div class="progress-bar"></div>
        <div class="fas fa-quote-right fa-quote"></div>
        <div class="fas fa-quote-left fa-quote"></div>
        <p class="testimonial">
            Your project seamlessly combines functionality and aesthetics, offering an intuitive and visually appealing platform for users to share comments. The clean design, responsive layout, and real-time comment display create a modern and user-friendly experience. The well-designed submission form and thoughtful use of styling elements contribute to an overall professional and engaging project. Great job on fostering effective user interaction
        </p>
        <div class="user">
            <img src="https://randomuser.me/api/portraits/women/60.jpg" alt="user" class="user-image">
            <div class="user-details">
                <h4 class="username">Miyah Myles</h4>
                <p class="role">Marketing</p>
            </div>
        </div>
    </section>
```

### CSS

1. **Testimonial Container Stilleri:**
    - Referans konteynerini genel olarak stilize eder.
    - Arkaplan rengi, kenar yuvarlaklık, kenar boşluğu ve maksimum genişlik gibi özellikler içerir.
    - Gölge efektleri, konteyneri belirginleştirir.
2. **Alıntı İkonları Stilleri:**
    - Sağda ve solda olmak üzere alıntı ikonlarını belirtir.
    - Font-awesome ikonları kullanılarak sağdaki **`fa-quote-right`** ve soldaki **`fa-quote-left`** ikonları belirli bir konumda pozisyonlandırılır.
3. **Referans Metni Stilleri:**
    - Referans metni, belirli bir hizalamaya sahip ve satır yüksekliği ayarlanmıştır.
    - Yazı metni tamamen dolu bir şekilde genişletilmiştir.
4. **Kullanıcı Bilgileri Stilleri:**
    - Kullanıcı bilgilerini içeren bölümü stilize eder.
    - Kullanıcı resmi, yuvarlak bir şekilde ve belirli bir gölge efekti ile görüntülenir.
    - Kullanıcı adı ve rol bilgisi, belirli bir düzen ve ağırlık ile stilize edilir.
5. **İlerleme Çubuğu Stilleri:**
    - Alt kısımda bulunan ilerleme çubuğunu tanımlar.
    - Belirli renk ve özelliklere sahip olan çubuk, bir animasyon ile belirli bir sürede genişler.
6. **Ekran Boyutlarına Göre Stiller:**
    - Ekran genişliği 768 pikselden küçük olduğunda bazı stil ayarları değişir.
    - Özellikle, padding değerleri ve alıntı ikonlarının görünürlüğü üzerinde değişiklikler yapılır.
7. **Önemli Noktalar:**
    - Renk ve stil sınıfları, genel tasarım tutarlılığını sağlar.
    - Animasyon ve gölgeler, kullanıcı deneyimini zenginleştirir.
    - Medya sorguları, mobil cihazlarda daha iyi bir görünüm sağlamak için kullanılır.

```css
section.testimonial-container{ background-color: var(--detail-color); border-radius: 15px; margin: 20px auto; padding: 50px 80px; max-width: 768px; position: relative;box-shadow: 0 0 50px #1e2228, 0 0 25px var(--detail-color);}
section.testimonial-container .fa-quote{ font-size: 28px; color: rgba(0, 0, 0, 0.3); position: absolute; top: 60px; }
section.testimonial-container .fa-quote-right{left: 40px;}
section.testimonial-container .fa-quote-left{right: 40px;}

section.testimonial-container .testimonial{ line-height: 29px; text-align: justify; }
section.testimonial-container .user{ display: flex; align-items: center; justify-content: center; margin-top: 10px;}
section.testimonial-container .user .user-image{ border-radius: 50%; height: 75px; width: 75px; object-fit: cover; border: 3px solid var(--font-color); box-shadow: 0 0 50px var(--detail-color), 0 0 25px var(--font-color); }
section.testimonial-container .user .user-details{margin-left: 10px;}
section.testimonial-container .user .user-details .username{margin: 0;}
section.testimonial-container .user .user-details .role{font-weight: normal;}

section.testimonial-container .progress-bar{ background-color: var(--primary-color); height: 4px; width: 100%; animation: grow 10s linear infinite; transform-origin: left; border-radius: 30px;box-shadow: 0 0 2px var(--primary-color), 0 0 1px var(--primary-color); }

@keyframes grow {
    0% {
        transform: scaleX(0)
    }
}
@media screen and (max-width:768px) {
    section.testimonial-container {padding: 20px 30px;}
    section.testimonial-container .fa-quote{display: none;}
}
```

## Testimonial Switch

1. **Testimonial Verileri:**
    - **`testimonials`** adlı dizi, her bir referansın ismi, pozisyonu, fotoğrafı ve metni gibi bilgileri içerir.
2. **HTML Elemanları ve Değişkenler:**
    - HTML'deki belirli sınıflara sahip elemanlara erişim sağlayan değişkenler oluşturulmuştur.
    - **`testimonialsContainer`**, **`testimonial`**, **`userImage`**, **`username`**, ve **`role`** gibi değişkenler bulunmaktadır.
3. **Referans Güncelleme Fonksiyonu:**
    - **`updateTestimonial`** fonksiyonu, belirli aralıklarla referansları günceller.
    - Her bir referansın bilgisi, diziden alınarak ilgili HTML elemanlarına yerleştirilir.
    - Bir döngü şeklinde çalışır, tüm referanslar gösterildikten sonra başa döner.
4. **Interval Kullanımı:**
    - **`setInterval`** fonksiyonu, belirli bir süreyle tekrarlanan işlemleri sağlar.
    - Bu durumda, her 10 saniyede bir referans güncellenir.
5. **Önemli Noktalar:**
    - Referans verileri, dinamik olarak değişen bilgileri temsil eder.
    - **`setInterval`** kullanarak otomatik güncelleme sağlanır, böylece kullanıcılar farklı referansları görebilir.
    - HTML elemanlarına erişim sağlayan değişkenler, kodun daha okunabilir ve sürdürülebilir olmasını sağlar.

```jsx
const testimonialsContainer = document.querySelector('.testimonial-container');
const testimonial = document.querySelector('.testimonial');
const userImage = document.querySelector('.user-image');
const username = document.querySelector('.username');
const role = document.querySelector('.role');

const testimonials = [
  {
    name: 'Miyah Myles',
    position: 'Marketing',
    photo: 'https://randomuser.me/api/portraits/women/60.jpg',
    text: 'Your project seamlessly combines functionality and aesthetics, offering an intuitive and visually appealing platform for users to share comments. The clean design, responsive layout, and real-time comment display create a modern and user-friendly experience. The well-designed submission form and thoughtful use of styling elements contribute to an overall professional and engaging project. Great job on fostering effective user interaction',
  },
  {
    name: 'Elijah Turner',
    position: 'Product Management',
    photo: 'https://randomuser.me/api/portraits/men/32.jpg',
    text: 'Impressive work! Your project effortlessly combines style and functionality. The sleek design, along with the well-crafted form for user comments, creates a seamless experience. The real-time comment display adds a modern touch, making it user-friendly and visually pleasing.',
  },
  {
    name: 'Scarlett Garcia',
    position: 'UX/UI Designer',
    photo: 'https://randomuser.me/api/portraits/women/14.jpg',
    text: 'Your project is a masterpiece of user engagement. The clean layout and inviting design make it easy for users to share their thoughts. The responsive elements and real-time comment updates enhance the overall user experience. Kudos on a job well done!',
  },
  {
    name: 'Aiden Clark',
    position: 'Software Development',
    photo: 'https://randomuser.me/api/portraits/men/89.jpg',
    text: 'Fantastic implementation! Your project skillfully combines form and function. The user-friendly design, coupled with the efficient comment submission form, creates an enjoyable experience. Real-time updates elevate the project, making it both professional and engaging.',
  },
  {
    name: 'Sophie Brooks',
    position: 'Content Creation',
    photo: 'https://randomuser.me/api/portraits/women/22.jpg',
    text: 'Bravo! Your project strikes a perfect balance between aesthetics and usability. The intuitive design and thoughtful styling make it a pleasure for users to provide feedback. The dynamic comment display adds a modern flair, resulting in an impressive overall project.',
  },
  {
    name: 'Liam Foster',
    position: 'Customer Support',
    photo: 'https://randomuser.me/api/portraits/men/45.jpg',
    text: 'Well done on creating a user-centric project! The simplicity of the design and the effectiveness of the comment submission form stand out. Real-time updates enhance the user experience, making it both seamless and visually appealing. Keep up the excellent work!',
  },
];

let idx = 1;

function updateTestimonial() {
  const { name, position, photo, text } = testimonials[idx];

  testimonial.innerHTML = text;
  userImage.src = photo;
  username.innerHTML = name;
  role.innerHTML = position;

  idx++;

  if (idx > testimonials.length - 1) {
    idx = 0;
  }
}

setInterval(updateTestimonial, 10000);
```
