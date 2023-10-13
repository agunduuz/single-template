# Password Generator

### Random Functions

1. Bu kodlar, rastgele karakterler oluşturmak için kullanabileceğiniz dört farklı işlevi içerir.
2. **`getRandomLower`** İşlevi:
    - Bu işlev, küçük harf (a-z) rastgele bir karakter üretir.
    - **`Math.random()`** fonksiyonu rastgele bir ondalık sayı üretir (0 ile 1 arasında).
    - Bu rastgele sayıyı 26 ile çarpıp yuvarlayarak 0 ile 25 arasında bir tamsayı elde ederiz.
    - Elde edilen bu tamsayıyı 97 ekleyerek ASCII tablosundaki küçük harf aralığını temsil eden bir sayı elde ederiz.
    - **`String.fromCharCode()`** ile bu sayıyı ilgili karaktere dönüştürüp döndürür.
3. **`getRandomUpper`** İşlevi:
    - Bu işlev, büyük harf (A-Z) rastgele bir karakter üretir.
    - Mantık, **`getRandomLower`** ile benzerdir, ancak 65 ekleyerek büyük harf aralığına karşılık gelen bir ASCII değeri üretilir.
4. **`getRandomNumber`** İşlevi:
    - Bu işlev, 0 ile 9 arasında rastgele bir rakam karakteri üretir.
    - Benzer mantık kullanılır, ancak bu sefer 48 eklenerek rakamların ASCII değerleri elde edilir.
5. **`getRandomSymbol`** İşlevi:
    - Bu işlev, önceden tanımlanmış sembollerin (!@#$%^&*(){}[]+-=.,/<>) içinden rastgele bir sembolü seçer ve döndürür.
    - Semboller bir sabit dize içinde tanımlanmıştır, ve bu dizeden rastgele bir karakter seçilir.

    **`randomFunctions`** Nesnesi:

    - Bu nesne, dört farklı karakter türünü temsil eden işlevleri içerir: küçük harf, büyük harf, rakam ve sembol.
    - Bu işlevlere ulaşmak için nesne üzerinden ilgili anahtarları kullanabilirsiniz.

    ```jsx
    function getRandomLower() {
      return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
    }
    function getRandomUpper() {
      return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
    }
    function getRandomNumber() {
      return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
    }
    function getRandomSymbol() {
      const symbol = '!@#$%^&*(){}[]+-=.,/<>';
      return symbol[Math.floor(Math.random() * symbol.length)];
    }
    
    const randomFunctions = {
      lower: getRandomLower,
      upper: getRandomUpper,
      number: getRandomNumber,
      symbol: getRandomSymbol,
    };
    ```

### Generate Password

Bu JavaScript kodu, bir kullanıcının belirli özelliklere sahip rasgele şifreler oluşturmasını sağlayan bir web uygulaması için kullanılabilir.

1. **`generateEl.addEventListener('click', () => { ... });`**
    - Bu kod, bir "generateEl" adlı HTML öğesine bir tıklama olay dinleyicisi ekler.
    - Kullanıcı bu öğeye tıkladığında, bir fonksiyon tetiklenir ve bu fonksiyon rasgele bir şifre oluşturur ve sonucunu gösterir.
2. **`const length = +lengthEl.value;`**
    - Kullanıcının belirlediği şifre uzunluğunu "lengthEl" adlı HTML öğesinin değerinden alır.
3. **`const hasLower = lowercaseEl.checked;`**, **`const hasUpper = uppercaseEl.checked;`**, **`const hasNumber = numbersEl.checked;`**, **`const hasSymbol = symbolsEl.checked;`**
    - Kullanıcının belirlediği özellikleri (küçük harf, büyük harf, rakam, sembol) ilgili HTML onay kutularının durumlarından alır.
4. **`resultEl.innerText = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, length);`**
    - Oluşturulan şifreyi "resultEl" adlı bir HTML öğesinin metin içeriği olarak ayarlar. Bu, kullanıcıya oluşturulan şifreyi gösterir.
5. **`function generatePassword(lower, upper, number, symbol, length) { ... }`**
    - Bu işlev, rasgele bir şifre oluşturmak için kullanılır. İşte önemli adımları:
        - Şifrenin türlerini saymak için "typesCount" adlı bir değişken oluşturulur.
        - Kullanıcının seçtiği özellikleri bir dizi içinde saklayan "typesArr" adlı bir dizi oluşturulur.
        - Eğer kullanıcı hiçbir özelliği seçmezse, boş bir şifre döndürülür.
        - Belirtilen uzunlukta bir şifre oluşturmak için bir döngü kullanılır. Her dönüşte, tür dizisi "typesArr" üzerinde gezilir ve her tür için rasgele bir karakter eklenir.
        - Sonuç olarak, oluşturulan şifre, belirtilen uzunluğa kesilir ve döndürülür.

Bu kod, bir kullanıcının belirli özelliklere sahip özelleştirilmiş şifreler oluşturmasını sağlar. Kullanıcı, küçük harf, büyük harf, rakam ve sembol seçeneklerini etkinleştirebilir ve şifre uzunluğunu belirleyebilir.

```jsx
generateEl.addEventListener('click', () => {
  const length = +lengthEl.value;
  const hasLower = lowercaseEl.checked;
  const hasUpper = uppercaseEl.checked;
  const hasNumber = numbersEl.checked;
  const hasSymbol = symbolsEl.checked;

  resultEl.innerText = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, length);
});

function generatePassword(lower, upper, number, symbol, length) {
  let generatedPassword = '';
  const typesCount = lower + upper + number + symbol;
  const typesArr = [{ lower }, { upper }, { number }, { symbol }].filter((item) => Object.values(item)[0]);

  if (typesCount === 0) {
    return '';
  }

  for (let i = 0; i < length; i += typesCount) {
    typesArr.forEach((type) => {
      const funcName = Object.keys(type)[0];
      generatedPassword += randomFunctions[funcName]();
    });
  }

  const finalPassword = generatedPassword.slice(0, length);
  return finalPassword;
}
```

### Copy Password To Clipboard

Bu JavaScript kod parçası, kullanıcının oluşturulan şifreyi panoya (clipboard) kopyalamasını ve bir bildirimle kullanıcıya bunun başarılı bir şekilde gerçekleştirildiğini bildirmesini sağlar.

1. **`clipboardEl.addEventListener('click', () => { ... });`**
    - Bu kod, bir "clipboardEl" adlı HTML öğesine tıklama olay dinleyicisi ekler.
    - Kullanıcı bu öğeye tıkladığında, bir fonksiyon tetiklenir ve bu fonksiyon şifreyi panoya kopyalar.
2. **`const textarea = document.createElement('textarea');`**
    - Bu satırda, geçici bir **`textarea`** öğesi oluşturulur. Bu öğe, şifreyi panoya kopyalamak için kullanılacaktır.
3. **`const password = resultEl.innerText;`**
    - Bu kod, "resultEl" adlı bir HTML öğesinin içeriğini alır. Bu içerik, önceki kod parçasında oluşturulan şifreyi içerir.
4. **`if (!password) { return; }`**
    - Eğer şifre boşsa (yani oluşturulmamışsa), işlemi sonlandırır ve hiçbir şey yapmaz.
5. **`textarea.value = password;`**
    - **`textarea`** öğesinin değerine, önceki adımda alınan şifre atanır. Böylece, bu öğe şifreyi içerecektir.
6. **`document.body.appendChild(textarea);`**
    - **`textarea`** öğesi, belgedeki (document) vücuda (body) eklenir. Bu, geçici bir öğe olduğu için kullanıcı tarafından görülmeyecektir.
7. **`textarea.select();`**
    - **`textarea`** öğesinin içeriği seçilir. Bu, kullanıcının panoya kopyalanan şifreyi kolayca seçmesini sağlar.
8. **`document.execCommand('copy');`**
    - Bu kod, seçilen metni panoya kopyalar. Kullanıcı şifreyi panoya kopyalamış olur.
9. **`textarea.remove();`**
    - Geçici **`textarea`** öğesi belgeden kaldırılır. Artık gerekli olmadığı için bu öğe temizlenir.
10. **`alert('Password Copied to Clipboard');`**
    - Kullanıcıya, şifrenin panoya başarılı bir şekilde kopyalandığını bildiren bir bildirim penceresi gösterilir.

    ```jsx
    clipboardEl.addEventListener('click', () => {
    const textarea = document.createElement('textarea');
    const password = resultEl.innerText;

    if (!password) {
        return;
    }

    textarea.value = password;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    textarea.remove();
    alert('Password Copied to Clipboard');
    });
    ```
