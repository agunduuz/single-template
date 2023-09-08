# DAY 28 - GitHub Profiles
1. **`const APIURL = 'https://api.github.com/users/';`**:
    - GitHub API'sinin temel URL'si, **`APIURL`** değişkenine atanır.
2. **`const main = document.getElementById('main');`**, **`const form = document.getElementById('form');`**, ve **`const search = document.getElementById('search');`**:
    - HTML belgesindeki öğeler seçilir. **`main`**, sonuçların görüntüleneceği bölgeyi, **`form`** kullanıcı arama formunu, ve **`search`** kullanıcının girdiği kullanıcı adını içeren giriş alanını temsil eder.
3. **`async function getUser(username) { ... }`**:
    - **`getUser`** adında bir **`async`** fonksiyon tanımlanır. Bu fonksiyon, kullanıcının GitHub hesabını aramak için **`axios`** ile API isteği gönderir ve sonucu işler. Kullanıcı adını alır ve ilgili GitHub API URL'sini kullanarak kullanıcının bilgilerini alır. Hata durumunda hataları yakalar ve 404 hatası durumunda özel bir hata mesajı oluşturur.
4. **`async function getRepos(username) { ... }`**:
    - **`getRepos`** adında bir **`async`** fonksiyon tanımlanır. Bu fonksiyon, kullanıcının GitHub repo (depo) bilgilerini almak için ayrı bir API isteği gönderir. **`axios`** kullanarak kullanıcının repo bilgilerini getirir ve sıralayarak sonucu işler. Hata durumunda hataları yakalar ve hata mesajı oluşturur.
5. **`function createUserCard(user) { ... }`**:
    - **`createUserCard`** adında bir fonksiyon tanımlanır. Bu fonksiyon, kullanıcının GitHub profili bilgilerini kullanarak bir HTML kartı oluşturur ve bu kartı **`main`** bölgesine yerleştirir. Kullanıcının adı, avatarı, biyografisi ve takipçi, takip edilen ve repo sayısı gibi bilgileri kart üzerinde görüntülenir.
6. **`function createErrorCard(msg) { ... }`**:
    - **`createErrorCard`** adında bir fonksiyon tanımlanır. Bu fonksiyon, kullanıcıyı bulunamadığında veya herhangi bir hata durumunda gösterilecek özel bir hata kartı oluşturur ve bu kartı **`main`** bölgesine yerleştirir.
7. **`function addReposToCard(repos) { ... }`**:
    - **`addReposToCard`** adında bir fonksiyon tanımlanır. Bu fonksiyon, kullanıcının repo listesini alır ve ilk 10 repo'yu (**`slice(0, 10)`**) görüntülemek için HTML öğelerini oluşturur. Her repo bir bağlantı olarak oluşturulur ve yeni bir sekmede açılması için hedef (**`target`**) özelliği ayarlanır. Oluşturulan repo öğeleri **`reposEl`** adlı bir HTML bölgesine eklenir.
8. **`form.addEventListener('submit', (e) => { ... }`**:
    - HTML formu submit (gönder) olayını dinlemek için bir olay dinleyici eklenir. Form gönderildiğinde, bu olay dinleyici tetiklenir.
9. **`e.preventDefault();`**:
    - Formun varsayılan davranışını engellemek için **`e.preventDefault()`** kullanılır. Bu, sayfanın yeniden yüklenmesini veya formun sunucuya gönderilmesini engeller.
10. **`const user = search.value;`**:
    - Kullanıcının girdiği GitHub kullanıcı adı, arama alanından (**`search`**) alınır ve **`user`** değişkenine atanır.
11. **`if (user) { ... }`**:
    - Eğer **`user`** değişkeni boş değilse (yani kullanıcı bir kullanıcı adı girdiyse), **`getUser(user)`** işlevi çağrılır. Bu işlem, kullanıcıyı GitHub API'si ile aramak için kullanılır.
12. **`search.value = '';`**:
    - Arama alanı temizlenir, böylece kullanıcı yeni bir arama yapmak için bir sonraki girişi kolayca yapabilir.

Bu kod, GitHub API'sini kullanarak kullanıcıların profil bilgilerini ve repo listelerini görüntülemek için bir web uygulamasını oluşturur. Kullanıcı adı girildiğinde, kullanıcının profil bilgileri ve ilk 10 repo listesi görüntülenir. Eğer kullanıcı bulunamazsa veya hata oluşursa, uygun hata mesajları görüntülenir.

### Runtime Complexity

Bu kod, Runtime Complexity açısından çeşitli işlemler gerçekleştirir. İşte bu kodun içindeki bazı önemli işlemler ve bunların karmaşıklık dereceleri:

1. **`getUser(username)`**:
    - Bu fonksiyon, GitHub API'sini kullanarak bir kullanıcının profil bilgilerini alır ve **`createUserCard`** ve **`getRepos`** fonksiyonlarını çağırır.
    - Profil bilgilerini alma işlemi, API çağrısı nedeniyle O(1) karmaşıklığına sahiptir, çünkü kullanıcı profili bir istekte alınır ve isteğin boyutu kullanıcıdan bağımsızdır.
    - **`getRepos`** fonksiyonu çağrılır ve bu da O(1) karmaşıklığına sahiptir, çünkü repo listesi de tek bir istekle alınır ve listenin boyutu kullanıcıdan bağımsızdır.
2. **`getRepos(username)`**:
    - Bu fonksiyon, kullanıcının GitHub repo (depo) listesini alır ve bu listeyi işler.
    - Repo listesini alma işlemi, O(n) karmaşıklığına sahiptir, çünkü repo sayısı kadar işlem yapar (10 repo alındığı için genellikle n küçük bir sabit değerdir).
    - Her bir repo öğesini oluşturup **`reposEl`** öğesine eklerken de O(n) karmaşıklığına sahiptir.
3. **`addReposToCard(repos)`**:
    - Bu fonksiyon, kullanıcının repo listesini dolaşır ve her bir repo öğesini oluşturup HTML'e ekler.
    - Repo sayısı (genellikle 10) kadar işlem yapar, bu nedenle O(n) karmaşıklığına sahiptir.

Sonuç olarak, bu kodun karmaşıklığı çoğunlukla O(1) ve O(n) karmaşıklığına sahip işlemler içerir. Bu nedenle, bu kodun toplam Runtime Complexity'si büyük ölçüde giriş verilerinin boyutuna ve GitHub API'sine yapılan isteklere bağlıdır. Genellikle, bu kod küçük ila orta ölçekli repo listelerini işlemek için uygundur ve performans sorunlarına neden olmaz.