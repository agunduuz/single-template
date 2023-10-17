# Notes App

### Notes HTML & CSS

### HTML

Bu HTML kodu, bir not alma uygulamasının temel bileşenlerini içerir.

1. **`<button class="add" id="add">`**: Bu HTML öğesi bir "Add Note" düğmesini temsil eder. Kullanıcı bu düğmeye tıkladığında, yeni bir not ekleyebilir.
2. **`<i class="fas fa-plus"></i>`**: Bu öğe, bir artı işareti simgesini içerir. Bu simge, not eklemek için düğmeye görsel bir simge ekler.
3. **`<script src="https://cdnjs.cloudflare.com/ajax/libs/marked/1.2.2/marked.min.js"></script>`**: Bu satır, "marked" adlı bir JavaScript kitaplığını dışarıdan projeye ekler. "marked" kitaplığı, metin içeriğini işaretleme ve HTML'e dönüştürme işlemlerini kolaylaştırır.
4. **`<script src="app.js"></script>`**: Bu satır, projenin ana JavaScript dosyasını yükler. "app.js" dosyası, not alma uygulamasının işlevselliğini ve mantığını içerir.

### CSS

1. **Font İçeriği Tanımlama**:
    - **`@import`** ile Google Fonts'dan "Poppins" fontunu içeri aktarır. Bu font, sayfanın metinlerinde kullanılacak.
2. **`root` Değişkenleri**:
    - **`:root`** ile başlayan bölüm, özel CSS değişkenleri tanımlar. Örneğin, **`-main-fill`**, **`-alternative-fill`**, ve **`-color-fill`** gibi değişkenler belirli renk değerlerini saklar. Bu değişkenler, sayfanın farklı bölümlerinde renkleri tutmak için kullanılabilir.
3. **Temel CSS Sıfırlama**:
    - **``** ile başlayan bölüm, tüm HTML öğelerinin kutularını (box) ve kenar boşluklarını sıfırlar. Bu, sayfanın herhangi bir özelleştirilmiş CSS ile öntanımlı tarayıcı stillerinden etkilenmemesini sağlar.
4. **`body` Özellikleri**:
    - **`font-family`** ile "Poppins" fontunu belirler ve sayfa metni için bu fontu kullanır.
    - **`background-image`** ile sayfanın arka planını bir lineer gradientle özelleştirir.
    - **`color`** ile metin rengini belirler.
    - **`display`**, **`min-height`**, ve **`height`** ile sayfa yüksekliğini ve döküman yüksekliğini ayarlar.
    - **`padding-top`** ile sayfanın üst kısmına bir yatay boşluk ekler.
    - **`font-size`** ve **`font-weight`** ile metin boyutunu ve kalınlığını tanımlar.
5. **`button.add` ve `div.note` Stilleri**:
    - **`button.add`** stillemesi, "Add Note" düğmesinin görünümünü özelleştirir.
    - **`div.note`** stillemesi, not kutularının görünümünü tanımlar.
6. **`div.note .tools .btn`**:
    - Bu stillemeler, not kutularının araç çubuğundaki düğmeleri (tools) ve düğmelerin görünümünü tanımlar.
7. **`div.note .textarea`**:
    - Bu stillemeler, not kutularının metin alanının görünümünü ve davranışını belirler.
8. **`.hidden`**:
    - Bu stilleme, "display: none;" ile başlayan bir sınıfı gizler. Bu, bir öğenin görünmez olmasını sağlar.
9. **`div.note .main`**:
    - Bu stil, not kutularının ana içerik bölümünün görünümünü tanımlar.

### Adding Notes To The DOM

1. **"Add Note" Düğmesi**:
    - **`addBtn`** değişkeni, sayfadaki "Add Note" düğmesini seçer.
    - Bu düğmeye tıklama olayı dinleyicisi eklenir. Düğmeye tıkladığınızda **`addNewNote`** fonksiyonu çalışır.
2. **`addNewNote` Fonksiyonu**:
    - Bu fonksiyon, yeni bir not eklemek için kullanılır.
    - Bir **`div`** öğesi oluşturur ve bu öğeye "note" sınıfını ekler.
    - İçeriği, notun araç çubuğunu, metin alanını ve notun ana içeriğini içeren HTML ile doldurur.
3. **Notun Araç Çubuğu ve Metin Alanı**:
    - Notun araç çubuğu, "Edit" ve "Delete" düğmelerini içerir.
    - Metin alanı, notun metnini girip düzenlemenizi sağlar.
    - Metin alanı gizliyken (hidden) ana içerik görüntülenir ve tam tersi de geçerlidir.
4. **Edit ve Delete Düğmeleri**:
    - "Edit" düğmesine tıklandığında, metin alanı ve ana içerik arasında geçiş yapar. Yani not düzenlemeye uygun hale gelir.
    - "Delete" düğmesine tıklanınca notun kendisi sayfadan kaldırılır.
5. **Metin Alanı İçeriği Güncelleme**:
    - Kullanıcı metin alanına metin girerken, bu metin **`input`** olayıyla yakalanır.
    - Metin alanındaki metin, Markdown biçimine dönüştürülüp **`main`** içeriğine ve localStorage'a kaydedilir.

    ```jsx
    const addBtn = document.getElementById('add');
    
    addBtn.addEventListener('click', () => addNewNote());
    
    function addNewNote(text = '') {
      const note = document.createElement('div');
      note.classList.add('note');
    
      note.innerHTML = `
            <div class="tools">
                <button class="btn edit"><i class="fas fa-edit"></i></button>
                <button class="btn delete"><i class="fas fa-trash-alt"></i></button>
            </div>
    
            <div class="main ${text ? '' : 'hidden'}"></div>
            <textarea class="textarea ${text ? 'hidden' : ''}"></textarea>
        `;
    
      const editBtn = note.querySelector('.edit');
      const deleteBtn = note.querySelector('.delete');
      const main = note.querySelector('.main');
      const textarea = note.querySelector('.textarea');
    
      textarea.value = text;
      main.innerHTML = marked(text);
    
      deleteBtn.addEventListener('click', () => {
        note.remove();
      });
    
      editBtn.addEventListener('click', () => {
        main.classList.toggle('hidden');
        textarea.classList.toggle('hidden');
      });
    
      textarea.addEventListener('input', (e) => {
        const { value } = e.target;
        main.innerHTML = marked(value);
        updateLS();
      });
    
      document.body.appendChild(note);
    }
    ```

### Save Notes To Local Storage

Bu JavaScript kodları, notların yerel depolamada (localStorage) saklanması ve yüklendiğinde sayfada gösterilmesi işlevini yerine getirir

1. **localStorage'dan Notları Yükleme**:
    - İlk kod satırı, localStorage'dan "notes" adlı öğeyi alır ve **`JSON.parse`** ile bu veriyi bir JavaScript nesnesine dönüştürür.
    - Eğer "notes" öğesi localStorage'da bulunuyorsa ve notlar varsa (**`notes`** değişkeni), bu notlar **`forEach`** döngüsüyle sırayla **`addNewNote`** fonksiyonuna iletilir.
    - Bu, sayfa her yüklendiğinde daha önce kaydedilmiş notları yükler.
2. **`updateLS` Fonksiyonu**:
    - Bu fonksiyon, notları güncellemek ve localStorage'a kaydetmek için kullanılır.
    - **`querySelectorAll`** ile sayfadaki tüm metin alanları (textarea) seçilir.
    - Her bir metin alanının içeriği alınır ve **`notes`** adlı boş bir diziye eklenir.
    - Bu dizideki notlar, JSON formatına dönüştürülüp **`localStorage`**'a "notes" adıyla kaydedilir.
    - Yani, kullanıcı not eklediğinde veya düzenlediğinde, bu işlev çağrılarak notlar localStorage'da güncellenir.

    Bu kod parçası, sayfanın her yüklenişinde localStorage'da saklanan notları alır ve sayfada gösterir. Aynı zamanda, notlar eklediğinizde veya düzenlediğinizde bu değişiklikleri saklamak için **`localStorage`**'ı kullanır. Bu, kullanıcının daha sonraki ziyaretlerinde notlarını korur ve daha önce eklediği notları tekrar görmesini sağlar.

    ```jsx
    // ... Bazı Eklemeler
    deleteBtn.addEventListener('click', () => {
        // ... Önceki Kodlar
        updateLS();
    });

    textarea.addEventListener('input', (e) => {
        // ... Önceki Kodlar
        updateLS();
    });
    // ...
    const notes = JSON.parse(localStorage.getItem('notes'));
    if (notes) {
    notes.forEach((note) => addNewNote(note));
    }

    function updateLS() {
    const notesText = document.querySelectorAll('textarea');
    const notes = [];

    notesText.forEach((note) => notes.push(note.value));
    localStorage.setItem('notes', JSON.stringify(notes));
    }
    ```
