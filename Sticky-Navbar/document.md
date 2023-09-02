# Day 26 - Sticky Navbar

1. `const header = document.querySelector('.header');`
    1. Bu kod satırı, `.header` sınıfına sahip öğeyi seçer ve `header` değişkeninde saklar.
2. `window.addEventListener('scroll', fixHeader);`
    1. Bu kod satırı, pencere nesnesine bir olay dinleyicisi ekler. Olay dinleyicisi `scroll` olayını dinler ve olay tetiklendiğinde `fixHeader` işlevini çağırır.
3. `function fixHeader() {`
    1. Bu kod satırı `fixHeader` işlevini tanımlar.
4. `if (window.scrollY > header.offsetHeight + 200) {`
    1. Bu kod satırı, pencerenin geçerli kaydırma konumunun header öğesinin yüksekliğinden ve 200 pikselden büyük olup olmadığını kontrol eder. Eğer öyleyse, süslü parantezlerin içindeki kod yürütülecektir.
5. `header.classList.add('active');`
    1. Bu kod satırı, header öğesine `active` sınıfını ekler. Bu, header öğesinin görünümünün değişmesine, örneğin arka plan renginin değişmesine veya bir gölge eklenmesine neden olur.
6. `} else {`
    1. Bu kod satırı başka bloğu başlatır. Bu blok, eğer ifadesindeki koşul karşılanmazsa yürütülecektir.
7. `header.classList.remove('active');`
    1. Bu kod satırı, header öğesinden `active` sınıfını kaldırır. Bu, header öğesinin orijinal görünümüne dönmesine neden olur.
8. `}`
    1. Bu kod satırı başka bloğu kapatır.
9. `}`
    1. Bu kod satırı `fixHeader` işlevini kapatır.