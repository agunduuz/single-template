# Day 29 - Double Heart Click

1. İlk olarak, **`loveMe`** adlı bir HTML elementi ve **`times`** adlı başka bir element seçilir. **`loveMe`** elementi kullanıcının tıklama işlemine yanıt verirken, **`times`** elementi kaç kez tıklandığını göstermek için kullanılır.
2. **`clickTime`** adlı bir değişken tanımlanır ve başlangıçta sıfır olarak ayarlanır. Bu değişken, kullanıcının tıklama zamanını takip etmek için kullanılır.
3. **`loveMe`** elementine bir tıklama olayı eklenir (**`addEventListener`**). Kullanıcı **`loveMe`** elementine tıkladığında, bu olay tetiklenir.
4. Tıklama olayının içindeki kod, kullanıcının tıklama zamanını kontrol eder. İlk tıklamada, **`clickTime`** değişkeni geçerli zaman (**`new Date().getTime()`**) ile güncellenir.
5. İkinci tıklamada, **`clickTime`** değişkeni ile geçerli zaman arasındaki fark hesaplanır. Eğer bu fark 800 milisaniyeden daha azsa (yani kullanıcı hızlıca iki kez tıklamışsa), **`createHeart`** fonksiyonu çağrılır ve bir kalp simgesi oluşturulur. Aksi takdirde, **`clickTime`** değişkeni yeniden güncellenir.
6. **`createHeart`** fonksiyonu, kullanıcının tıklama konumunda bir kalp simgesi oluşturur ve bu kalbi belgeye ekler. Kalp simgesi, tıklama olayının (**`e`**) konumunu (**`x`** ve **`y`** koordinatları) ve **`loveMe`** elementinin içerisindeki konumunu dikkate alarak yerleştirilir.
7. Her tıklamada, tıklama sayısı bir artırılır ve bu sayı **`times`** elementinin içeriğine yansıtılır.
8. Kalp simgesi oluşturulduktan sonra, **`setTimeout`** kullanılarak 1000 milisaniye (1 saniye) sonra kalp simgesi belgeden kaldırılır.

Bu kod, kullanıcının hızlıca tıkladığında kalp simgesi oluşturarak eğlenceli bir etkileşim sunar ve kaç kez tıklandığını sayar.