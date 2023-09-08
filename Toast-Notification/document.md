# DAY 27 - Toast Notifications

1. İlk olarak, HTML sayfasındaki belirli elementleri JavaScript ile bağlar. **`button`** adında bir düğme ve **`toasts`** adında bir konteyner div elementi tanımlanır. Bu düğme, kullanıcıya bildirim oluşturmak için tıklama imkanı sağlar.
2. **`messages`** adında bir dizi tanımlanır ve içine çeşitli rastgele mesajlar eklenir. Aynı şekilde **`types`** adında bir dizi tanımlanır ve içine çeşitli bildirim türleri (info, success, error) eklenir.
3. **`button`** üzerine bir "click" event listener eklenir. Kullanıcı bu düğmeye tıkladığında **`createNotification`** fonksiyonu çağrılır.
4. **`createNotification`** adında bir fonksiyon tanımlanır. Bu fonksiyon, belirtilen mesajı ve türü (veya rastgele bir türü) içeren bir bildirim oluşturur.
    - **`notif`** adında bir **`<article>`** elementi (bildirim kutusu) oluşturulur ve CSS sınıfları eklenir.
    - Mesaj belirtilmemişse veya null olarak geçilmişse, rastgele bir mesaj almak için **`getRandomMessage`** fonksiyonu çağrılır.
    - Tür belirtilmemişse veya null olarak geçilmişse, rastgele bir tür almak için **`getRandomType`** fonksiyonu çağrılır.
    - Bildirim kutusu içine mesaj eklenir.
    - **`toasts`** adındaki konteyner div içine bildirim kutusu eklenir.
    - Bildirimin otomatik olarak kapanması için **`setTimeout`** kullanılır. 3 saniye (3000 milisaniye) sonra bildirim kutusu DOM'dan kaldırılır.
5. **`getRandomMessage`** ve **`getRandomType`** adında iki yardımcı fonksiyon tanımlanır. Bu fonksiyonlar, rastgele mesaj ve tür seçmek için kullanılır.