# Day 27 - Double Vertical Slider

1. İlk beş satır, HTML dosyasındaki ilgili elementlere erişim sağlar. **`querySelector`** ile belirli sınıf isimlerine sahip div elementleri ve butonlar alınır. Bu elementler slaytın farklı bileşenlerini temsil ederler.
2. **`slidesLength`** değişkeni, sağ slaytta bulunan **`article`** elementlerinin sayısını belirler. Bu, toplam slayt sayısını temsil eder.
3. **`activeSlideIndex`** değişkeni, şu anki görünen slaytın indeksini tutar ve varsayılan olarak 0 olarak ayarlanır.
4. **`slideLeft.style.top`** satırı, sol slaytın yukarıdaki kısmını gizlemek için kullanılır. Bu, slaytın başlangıçta sol tarafta görünmemesi için gereklidir.
5. **`upButton`** ve **`downButton`** butonlarına tıklanması durumunda **`changeSlide`** işlevini çağırmak için **`addEventListener`** eklenir. Bu işlev, slaytın yukarı ve aşağı yönlü hareketini kontrol eder.
6. **`changeSlide`** işlevi, yukarı veya aşağı yönlü bir değişiklik istikametini (direction) kabul eder ve şu işlemleri gerçekleştirir:
    - **`sliderHeight`** değişkeni, slaytın yüksekliğini temsil eder.
    - Eğer **`direction`** 'up' ise, **`activeSlideIndex`** artırılır ve eğer son slayta ulaşılırsa sıfıra sıfırlanır.
    - Eğer **`direction`** 'down' ise, **`activeSlideIndex`** azaltılır ve eğer ilk slayta dönülüyorsa son slayta sıfırlanır.
    - **`slideRight`** ve **`slideLeft`** elementlerinin **`transform`** özellikleri, şu anki slaytın yukarı veya aşağı yönde hareket etmesini sağlar. Bu, slaytın görünümünü değiştirir.
    
    Bu kod, HTML ve CSS ile birlikte kullanılarak bir sayfa üzerinde yatay veya dikey slayt gösterisi oluşturmak için kullanılabilir. **`activeSlideIndex`** değişkeni ve **`transform`** özellikleri, şu anki slaytın konumunu ve görünümünü ayarlamak için kullanılır. Slaytın yönü, **`changeSlide`** işlevine tıklanan butona bağlı olarak değiştirilir.
    

## ENG:

1. The first five lines of code obtain access to relevant elements in the HTML file using **`querySelector`**. These elements include the **`.slider-container`**, **`.right-slide`**, **`.left-slide`**, **`.up-button`**, and **`.down-button`**, which represent different components of the slider.
2. The **`slidesLength`** variable calculates the number of **`article`** elements within the right slide using **`querySelectorAll`**. This represents the total number of slides.
3. The **`activeSlideIndex`** variable keeps track of the index of the currently visible slide and is initially set to 0.
4. The **`slideLeft.style.top`** line is used to hide the top portion of the left slide to ensure that it doesn't appear on the left initially.
5. Event listeners are added to the **`upButton`** and **`downButton`** buttons to call the **`changeSlide`** function when clicked. This function controls the upward and downward movement of the slider.
6. The **`changeSlide`** function accepts a direction ('up' or 'down') and performs the following actions:
    - The **`sliderHeight`** variable represents the height of the slider.
    - If the **`direction`** is 'up', the **`activeSlideIndex`** is incremented, and if it reaches the last slide, it wraps back to 0.
    - If the **`direction`** is 'down', the **`activeSlideIndex`** is decremented, and if it goes below 0, it wraps to the last slide.
    - The **`transform`** property of the **`slideRight`** and **`slideLeft`** elements is used to move the current slide up or down, altering its appearance.

This code, when used in conjunction with HTML and CSS, can create a horizontal or vertical slide show on a webpage. The **`activeSlideIndex`** variable and the **`transform`** properties are used to adjust the position and appearance of the current slide. The direction of the slide is changed based on the button clicked, which triggers the **`changeSlide`** function.