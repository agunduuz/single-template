# Todo List

## Todo List UI

### HTML

1. **Başlık (Heading):**
    - **`<h1>`** etiketi içinde, "Todos" başlığını içerir.
    - **`.heading`** sınıfı ile stilize edilebilir.
2. **Form ve Giriş Alanı:**
    - **`<form>`** etiketi içinde, kullanıcının yeni görev ekleyebileceği bir giriş alanı bulunur.
    - **`<input>`** etiketi, kullanıcının görev girmesi için bir metin kutusunu temsil eder.
    - **`.form`** ve **`.input`** sınıfları ile stilize edilebilir.
    - **`id="form"`** ve **`id="input"`** ile JavaScript tarafında bu öğelere erişim sağlanır.
3. **Görev Listesi (Todos):**
    - **`<ul>`** etiketi içinde, görevlerin listeleneceği bir liste bulunur.
    - **`.todos`** sınıfı ile stilize edilebilir.
    - **`id="todos"`** ile JavaScript tarafında bu listeye erişim sağlanır.
4. **Bilgi Metni (Info):**
    - **`<small>`** etiketi içinde, kullanıcıya görevleri nasıl yöneteceği konusunda bilgi veren metin bulunur.
    - **`.info`** sınıfı ile stilize edilebilir.
5. **Önemli Notlar:**
    - HTML yapısı, kullanıcıya görev ekleyebilme ve görevleri listeleyebilme imkanı sunar.
    - JavaScript ile bu yapı interaktif hale getirilerek görev ekleme, tamamlama ve silme gibi işlevselliği sağlar.
    - CSS stil sınıfları, sayfanın görünümünü özelleştirmek için kullanılabilir.

```html
<h1 class="heading">Todos</h1>
<form id="form" class="form">
    <input type="text" class="input" id="input" placeholder="Enter your todo" autocomplete="off">
    
    <ul class="todos" id="todos">

    </ul>
</form>
<small class="info"><span>Left click</span> to toggle completed. <br> <span>Right click</span> to delete todo</small>
```

### CSS

1. **Başlık Stilleri (Heading):**
    - **`.heading`** sınıfı ile stilize edilmiş.
    - **`color`** ile yazı rengi belirlenmiş.
    - **`font-size`** ile yazı boyutu ayarlanmış.
    - **`text-align`** ile metin hizalaması belirlenmiş.
    - **`opacity`** ile saydamlık ayarlanmış.
    - **`filter`** ile gölge efekti uygulanmış.
2. **Form ve Giriş Alanı Stilleri:**
    - **`.form`** sınıfı ile stilize edilmiş.
    - **`max-width`** ile maksimum genişlik belirlenmiş.
    - **`.input`** sınıfı ile giriş alanı stilize edilmiş.
    - **`border`** ile kenarlık kaldırılmış.
    - **`font-size`** ve **`padding`** ile metin boyutu ve iç boşluk ayarlanmış.
    - **`box-shadow`** ile gölge efekti eklenmiş.
    - **`border-radius`** ile köşeler yuvarlatılmış.
    - **`outline`** ile odaklandığında kenarlık rengi belirlenmiş.
    - **`background-color`** ile arkaplan rengi belirlenmiş.
    - **`color`** ile metin rengi belirlenmiş.
3. **Görev Listesi Stilleri (Todos):**
    - **`.todos`** sınıfı ile stilize edilmiş.
    - **`background-color`** ile arkaplan rengi belirlenmiş.
    - **`padding`** ile iç boşluk ayarlanmış.
    - **`margin-top`** ile üstten boşluk belirlenmiş.
    - **`box-shadow`** ile gölge efekti eklenmiş.
    - **`border-radius`** ile köşeler yuvarlatılmış.
4. **Görev Öğesi Stilleri (Todo):**
    - **`.todo`** sınıfı ile stilize edilmiş.
    - **`border-bottom`** ile alt kenarlık belirlenmiş.
    - **`cursor`** ile fare üzerine gelince imleç tipi belirlenmiş.
    - **`font-size`** ve **`padding`** ile metin boyutu ve iç boşluk ayarlanmış.
5. **Tamamlanmış Görev Stilleri (Completed Todo):**
    - **`.completed`** sınıfı ile stilize edilmiş.
    - **`color`** ile metin rengi belirlenmiş.
    - **`text-decoration`** ile metin üstü çizgisi eklenmiş.
6. **Bilgi Metni Stilleri (Info):**
    - **`.info`** sınıfı ile stilize edilmiş.
    - **`color`** ile metin rengi belirlenmiş.
    - **`margin-top`** ile üstten boşluk belirlenmiş.
    - **`text-align`** ile metin hizalaması belirlenmiş.
    - **`opacity`** ile saydamlık ayarlanmış.
7. **Bilgi Metni İçindeki Element Stilleri (Info Span):**
    - **`.info span`** selector'ü ile stilize edilmiş.
    - **`color`** ile metin rengi belirlenmiş.
    - **`opacity`** ile saydamlık ayarlanmış.

```css
h1.heading{color: var(--font-color);font-size: 10rem;text-align:  center; opacity: 0.4; filter:drop-shadow(0 0 7px var(--font-color)) }

form.form{max-width: 100%; width: 400px; }

form.form .input{ border: none; font-size: 1.75rem; padding: 0.5rem 1.5rem; display: block; width: 100%;  box-shadow: 0 0 5px var(--detail-color), 0 0 10px var(--detail-color); border-radius: 10px; outline: none; background-color: var(--detail-color); color: #1e2228; font-family: inherit;}
form.form .input::placeholder{color: #1e2228;}

form.form .todos{ background-color: var(--primary-color); padding:0; margin: 0; list-style-type: none; border-radius: 10px 10px 0 0 ; margin-top: 10px; box-shadow: 0 0 5px var(--primary-color), 0 0 10px var(--primary-color);  }
form.form .todos .todo{ border-bottom: 1px solid #ddd; cursor: pointer; font-size: 1.5rem; padding: 1rem 2rem; }
form.form .todos .todo.completed{ color: #b6b6b6; text-decoration: line-through; border-bottom: 1px solid #ddd;}

.info{ color: var(--font-color); margin-top: 3rem; text-align: center; opacity: 0.5;}
.info span{ color: var(--detail-color); opacity: 1; }
```

## Add, Remove & Mark Complete

1. **Form ve Input Dinleme (Event Listening):**
    - **`form`** ve **`input`** HTML öğeleri, **`document.getElementById`** ile seçildi.
    - **`form`** üzerinde **`submit`** olayı dinlenir.
    - Form gönderimini engellemek için **`e.preventDefault()`** kullanıldı.
2. **Todo Eklemek İçin Fonksiyon (addTodo):**
    - **`addTodo`** isimli bir fonksiyon tanımlandı.
    - Eğer parametre olarak bir todo objesi alınırsa, bu objenin metni alındı; aksi takdirde input değeri alındı.
    - Alınan metin boş değilse, bir **`li`** öğesi oluşturuldu ve **`todo`** sınıfı eklendi.
    - Eğer gelen todo objesi varsa ve tamamlanmışsa, **`completed`** sınıfı da eklenir.
    - Oluşturulan öğenin metni belirlendi ve click ve contextmenu (sağ tıklama) olayları dinlenerek, görsel değişiklikler yapıldı.
    - Oluşturulan todo öğesi, **`todosUL`** listesine eklenir ve input değeri temizlendi.
3. **Ekleme İşlemlerinin Dinlenmesi (Event Listeners):**
    - **`form`** üzerinde submit olayını dinleyerek, yeni bir todo eklemek için **`addTodo`** fonksiyonunu çağırır.
    - Yeni bir todo eklenirken, kullanıcının sayfayı yenileme isteğini engellemek için **`e.preventDefault()`** kullanıldı.
4. **Todo Öğelerinin Görsel Değişimleri:**
    - Todo öğeleri üzerinde yapılan işlemler:
        - **Click:** Tamamlanmış veya tamamlanmamış olarak işaretlenir.
        - **Contextmenu (Sağ Tıklama):** Silme işlemi gerçekleştirilir.
5. **Todo Ekleme ve Görsel Değişikliklerin Eklenmesi:**
    - Yeni bir todo oluşturulurken, todo öğesinin metni belirlenir ve görsel özellikleri eklenir.
    - Oluşturulan todo öğesi, **`todosUL`** listesine eklenir.
    - Eklenen todo sonrasında input değeri temizlenir.

```jsx
const form = document.getElementById('form');
const input = document.getElementById('input');
const todosUL = document.getElementById('todos');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  addTodo();
});

function addTodo(todo) {
  let todoText = input.value;

  if (todo) {
    todoText = todo.text;
  }

  if (todoText) {
    const todoEl = document.createElement('li');
    todoEl.classList.add('todo');
    if (todo && todo.completed) {
      todoEl.classList.add('completed');
    }
    todoEl.innerText = todoText;
    todoEl.addEventListener('click', () => {
      todoEl.classList.toggle('completed');
    });

    todoEl.addEventListener('contextmenu', (e) => {
      e.preventDefault();
      todoEl.remove();
    });
    todosUL.appendChild(todoEl);
    input.value = '';
  }
}
```

## Saving Todos to Local Storage

1. **Local Storage Kontrolü (Local Storage Check):**
    - Sayfa yüklendiğinde, daha önce kaydedilmiş todos'ları kontrol etmek için **`localStorage.getItem`** kullanılır.
    - Eğer todos varsa, her bir todo için **`addTodo`** fonksiyonu çağrılır ve sayfa üzerinde gösterilir.
2. **Todo Ekleme ve Güncelleme (Add and Update Todo):**
    - Todo öğeleri üzerinde yapılan değişiklikler (tamamlama veya silme), **`updateLS`** fonksiyonunu çağırır.
    - Her todo öğesi için, metin içeriği ve tamamlanma durumu alınarak bir dizi oluşturulur.
    - Oluşturulan dizi, **`localStorage.setItem`** ile "todos" anahtarı altında depolanır.
3. **LocalStorage Güncelleme (Update Local Storage):**
    - **`updateLS`** fonksiyonu, sayfadaki tüm todo öğelerini seçerek döngüye alır.
    - Her todo öğesi için, metin içeriği ve tamamlanma durumu alınarak bir obje oluşturulur.
    - Oluşturulan objeler, bir diziye eklenir.
    - Bu dizi, **`localStorage.setItem`** ile "todos" anahtarı altında güncellenmiş olarak saklanır.
4. **Önemli Noktalar:**
    - Sayfa yüklendiğinde, localStorage'da var olan todos'lar alınarak ekrana getirilir.
    - Her todo üzerinde yapılan değişiklikler, localStorage'ı güncelleyerek kalıcı olarak saklanmasını sağlar.
    - Local Storage, tarayıcı kapatıldıktan sonra bile verilerin korunmasını sağlar.

```jsx
...

const todos = JSON.parse(localStorage.getItem('todos'));
if (todos) {
  todos.forEach((todo) => addTodo(todo));
}

...

function addTodo(todo) {
...

  if (todoText) {
    ...
    todoEl.addEventListener('click', () => {
      ...
      updateLS();
    });

    todoEl.addEventListener('contextmenu', (e) => {
      ...
      updateLS();
    });
    ...
    updateLS();
  }
}

function updateLS() {
  const todosEl = document.querySelectorAll('li');

  const todos = [];

  todosEl.forEach((todoEl) => {
    todos.push({
      text: todoEl.textContent,
      completed: todoEl.classList.contains('completed'),
    });
  });

  localStorage.setItem('todos', JSON.stringify(todos));
}
```
