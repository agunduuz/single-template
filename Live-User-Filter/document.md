# Live User Filter

## User List UI

### HTML

1. **HTML Yapısı**:
    - Bir **`<section>`** etiketi içinde, kullanıcıların canlı bir şekilde filtreleme yapabileceği bir bileşen yer alır.
2. **Başlık ve Açıklama**:
    - **`<header>`** etiketi içinde, bir başlık (**`<h4>`**) ve başlık altında bir alt başlık (**`<small>`**) bulunur. Bu başlık ve alt başlık, kullanıcılara filtrelemenin ne için olduğunu açıklar.
3. **Arama Girişi**:
    - Bir **`<input>`** etiketi, kullanıcıların ad ve/veya konuma göre arama yapabilecekleri bir metin giriş alanıdır. **`id="filter"`** özelliği, bu giriş alanına JavaScript veya CSS ile erişmek için kullanılır.
4. **Sonuçlar Listesi**:
    - Bir **`<ul>`** etiketi olan sonuçlar listesi, kullanıcıların sonuçları göreceği yerdir. Başlangıçta "Loading..." metni içeren bir tek **`<li>`** öğesi vardır.

```html
<section class="container">
        <header class="header">
            <h4 class="title">Live User Filter</h4>
            <small class="subtitle">Search by name and/or location</small>
            <input type="text" id="filter" placeholder="Search...">
        </header>
        <ul id="result" class="user-list">
            <li>
                <h3>Loading...</h3>
            </li>
        </ul>
    </section>
```

### CSS

1. **Container Stili**:
    - **`section.container`** sınıfı, bir konteyner bölgesini temsil eder. Bu bölgeye kenar yuvarlaklığı (border-radius) ve gölge (box-shadow) efektleri ekler.
    - **`overflow: hidden;`** ile içeriğin taşmasını engeller.
    - **`width: 450px;`** ile bölgenin genişliğini 450 piksel olarak ayarlar.
2. **Header Bölgesi**:
    - **`section.container .header`** içindeki stil, konteynerin başlık bölgesini tanımlar. Burada başlık arka plan rengi, yazı rengi ve yükseklik gibi özellikler belirlenir.
    - Başlık metni (**`h4`**) için font boyutu ve margin ayarları yapılır.
    - Alt başlık (**`subtitle`**) için arkaplan rengi, font rengi ve opaklık (opacity) ayarları yapılır.
    - **`input`** etiketi, bir giriş alanının stilini tanımlar. Arka plan rengi, border-radius, yazı rengi ve kenarlık (box-shadow) gibi özellikler yer alır.
    - Placeholder metni için rengi ve opaklığı ayarlanır.
    - Giriş alanına odaklandığında (focus), kenarlık (outline) kaldırılır.
3. **Kullanıcı Listesi**:
    - **`section.container .user-list`** bölgesi, kullanıcıların listelendiği alanın stilini belirler. Arka plan rengi, liste stilini (list-style), kenar boşlukları ve yükseklik gibi özellikleri içerir.
    - Her kullanıcı öğesi (**`li`**) için stil tanımlanır. Bu stil, kullanıcılar arasındaki ayıran çizgileri (border-bottom) belirler.
    - Kullanıcı resimleri için border-radius ve boyut ayarları yapılır.
    - Kullanıcı bilgileri (**`user-info`**) için stil belirlenir, başlık (**`h4`**) ve paragraf (**`p`**) etiketleriyle ilgili özellikler ayarlanır.
    - **`li.hide`** sınıfı, görünmez kullanıcıları gizlemek için kullanılır (display: none;).

```css
section.container {
  border-radius: 5px;
  box-shadow: 0 0 10px var(--primary-color), 0 0 50px var(--detail-color);

  overflow: hidden;
  width: 450px;
}
section.container .header { background-color: var(--primary-color); color: var(--detail-color); padding: 30px 20px; text-align: center; }
section.container .header .title { margin: 0; font-size: 24px;}
section.container .header .subtitle { display: inline-block; margin: 5px 0 20px; opacity: 0.8; }
section.container .header input {
    background-color: rgba(255, 255, 255, 0.3);
    border: 0;
    border-radius: 50px;
    color: var(--detail-color);
    font-size: 14px;
    padding: 10px 15px;
    margin-top: 20px;
    width: 100%;
    font-family: inherit;
    box-shadow: 0 0 5px var(--primary-color), 0 0 100px var(--font-color);
}
section.container .header input::placeholder {
    color: var(--detail-color);
    opacity: 1; /* Firefox */
  }
section.container .header input:focus { outline: none; }

section.container .user-list{
    background-color: var(--font-color);
    list-style: none;
    margin: 0;
    padding: 0;
    overflow-y: auto;
    max-height: 400px;
}
section.container .user-list li{ display: flex; padding: 20px; }
section.container .user-list li img{ border-radius: 50%; object-fit: cover; height: 50px; width: 50px; }
section.container .user-list li .user-info{ margin-left: 10px; }
section.container .user-list li .user-info h4{ margin:0 0 10px; }
section.container .user-list li .user-info p{ font-size: 12px; }

section.container .user-list li:not(:last-of-type){ border-bottom: 1px solid  #00002250; }
section.container .user-list li.hide{display: none;}
```

## Fetch & Filter Users

1. **HTML Öğelerini Almak**:
    - **`result`** ve **`filter`**, 'result' ve 'filter' ID'lerine sahip HTML öğelerine referansları saklayan değişkenlerdir.
    - **`listItems`**, filtreleme için liste öğelerini takip etmek için kullanılan boş bir dizi (array) olarak tanımlanır.
2. **API'den Veri Almak**:
    - **`getData`** fonksiyonu, '[https://randomuser.me](https://randomuser.me/)' API'sinden kullanıcı verilerini asenkron olarak alır.
    - API, kullanıcı nesnelerini **`results`** değişkeni içinde döndürür.
    - Kod, önce 'result' öğesi içindeki mevcut içeriği temizler.
3. **Kullanıcı Verilerini Doldurmak**:
    - **`results`** dizisindeki her kullanıcı nesnesi için, yeni bir liste öğesi (**`<li>`**) oluşturulur.
    - Bu liste öğeleri, daha sonra kullanım için **`listItems`** dizisinde saklanır.
    - Her liste öğesinin içinde bir resim, kullanıcının adı ve konum bilgileri eklenir.
4. **Kullanıcı Verilerini Filtrelemek**:
    - Kullanıcı, 'filter' girişine yazı girdiğinde **`filterData`** fonksiyonu çağrılır.
    - Bu fonksiyon, liste öğeleri dizisi (**`listItems`**) üzerinde dolaşarak her liste öğesinin metin içeriğinin arama terimini (büyük/küçük harf duyarlılığı olmadan) içerip içermediğini kontrol eder.
    - Eğer eşleşme varsa, liste öğesi görüntülenir; aksi takdirde 'hide' sınıfı eklenerek gizlenir.

```jsx
const result = document.getElementById('result');
const filter = document.getElementById('filter');
const listItems = [];

getData();

filter.addEventListener('input', (e) => {
  filterData(e.target.value);
});

async function getData() {
  const res = await fetch('https://randomuser.me/api?results=50');
  const { results } = await res.json();

  // Clear Results
  results.innerHTML = '';
  results.forEach((user) => {
    const li = document.createElement('li');
    listItems.push(li);

    li.innerHTML = `
        <img src="${user.picture.large}" alt="${user.name.first}" />
        <div class="user-info">
            <h4>${user.name.first} ${user.name.last}</h4>
            <p>${user.location.city}, ${user.location.country}</p>
        </div>
    `;

    result.appendChild(li);
  });
}

function filterData(searchTerm) {
  listItems.forEach((item) => {
    if (item.innerText.toLowerCase().includes(searchTerm.toLowerCase())) {
      item.classList.remove('hide');
    } else {
      item.classList.add('hide');
    }
  });
}
```
