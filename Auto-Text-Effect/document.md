# Auto Text Effect

1. HTML belgesinde bulunan metni dinamik olarak yazdırmak için kullanılan bir JavaScript örneğini temsil eder.
2. **`textEl`** ve **`speedEl`** adında iki değişken tanımlanmıştır. Bunlar, HTML belgesindeki ilgili elementlere referans sağlamak için kullanılacaktır. **`textEl`**, metni göstermek için ve **`speedEl`**, hızı ayarlamak için kullanılır.
3. **`text`** adında bir metin değişkeni tanımlanmıştır. Bu metin, yazılacak olan metni temsil eder.
4. **`idx`** ve **`speed`** adında iki değişken daha tanımlanmıştır. **`idx`**, metnin yazılma ilerlemesini izlemek için kullanılırken, **`speed`** ise yazma hızını temsil eder. **`speed`** değişkeni, başlangıçta **`300 / speedEl.value`** değeri ile başlar ve kullanıcı metin yazma hızını değiştirdiğinde bu değer güncellenir.
5. **`writeText`** adında bir fonksiyon tanımlanmıştır. Bu fonksiyon, metni adım adım yazdırmak için kullanılır. İlgili metin, **`text.slice(0, idx)`** ile **`textEl`** elementinin içine yazılır. Ardından **`idx`** artırılır ve metin sonuna ulaşıldığında **`idx`** sıfırlanır. **`setTimeout`** fonksiyonu kullanılarak **`writeText`** fonksiyonu periyodik olarak çağrılır ve yazma hızı (**`speed`**) ile belirtilen sıklıkta çalışır.
6. **`speedEl`** elementi üzerine bir "input" olayı dinleyicisi eklenmiştir. Kullanıcı hızı değiştirdiğinde bu dinleyici çalışır ve **`speed`** değişkeni güncellenir. Bu, yazma hızının dinamik olarak ayarlanmasını sağlar.
