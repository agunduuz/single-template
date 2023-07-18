### Button Ripple Effect

```jsx
<span class="circle" style="top: 27px; left: 82px"></span>
```

1. Dalgalanma işlemine ulaşabilmek için “ripple” classına sahip olması gerekecek.
2. İlk olarak butonumuzu tanımlayalım. Bir buton üzerinde, birden fazla butona işlem yapıyormuşuz gibi eylem uygulayacağımız için `querySelectorAll()` kullanıyoruz.
    
    ```jsx
    const buttons = document.querySelectorAll('.ripple')
    ```
    
3. Ardından bu butonları alalım ve bir `forEach()` döngü haline getirelim. İçeride bir `addEventListener()` işlemi uygulayalım. 
4. Birden fazla değer elde etmek istiyoruz:
    1. Butonda tıkladığımız alan, butona tıkladığımızda tetiklenecek. `const x = e.clientX` &  `const y = e.clientY`
    2. Butonun kendisinin konumu. `const buttonTop = e.target.offsetTop` & `const buttonLeft = e.target.offsetLeft` 
    
    ```jsx
    buttons.forEach(button => {
    	button.addEventListener('click', (e) => {
    		const x = e.clientX
    		const y = e.clientY
    
    		const buttonTop = e.target.offsetTop
    		const buttonLeft = e.target.offsetLeft
    	})
    })
    ```
    
5. Butonun içindeki konumu alabilmek için ise;
    1. x değeri, tüm görüntü alanında tıkladığımız yerdir. Butonun kendi konumundaki offset değer. Bunları çıkartırız. Buton içindeki X değerini buluruz.
    2. Aynı işlem yInside içinde yaparız.
    
    ```jsx
    buttons.forEach(button => {
    	button.addEventListener('click', (e) => {
    		const x = e.clientX
    		const y = e.clientY
    
    		const buttonTop = e.target.offsetTop
    		const buttonLeft = e.target.offsetLeft
    		
    		const xInside = x - buttonLeft
    		const yInside = y - buttonTop
    	})
    })
    ```
    
6. Şimdi içeride yapacağımız şey, **‘circle’** class sahip elementi yaratmak.
7. Buton içerisinde tıkladığımız alanın **‘top’** ve **‘left’** değerlerini style ile belirlemek.
8. Yukarıda Arrow Funct. kullandığımız için buradaki `this.` çalışmayacaktır. Bu fonksiyonu Arrow Funct. yerine Regular Funct. kullanmamız gerekecektir.
    
    ```jsx
    buttons.forEach(button => {
    	button.addEventListener('click', function (e) {
    		const x = e.clientX
    		const y = e.clientY
    
    		const buttonTop = e.target.offsetTop
    		const buttonLeft = e.target.offsetLeft
    		
    		const xInside = x - buttonLeft
    		const yInside = y - buttonTop
    		
    		const circle = document.createElement('span')
    		circle.classList.add('circle')
    		circle.style.top = yInside + 'px'
    		circle.style.left = xInside + 'px'
    
    		this.appendChild(circle)
    	})
    })
    ```
    
9. Görünürde bir sorun yoktur ancak. Tıkladığımız her işlemde DOM üzerinde HTML’e kaydolur. Bu durumdan kurtulmamız gerekir. 
10. DOM’a eklediğiniz bir işlemi böyle durumlarda çıkartmamız gerekir.
11. Bu işlem için kullanacağımız yöntem `setTimeout ()` fonksiyonudur. 
    
    ```jsx
    const buttons = document.querySelectorAll('.ripple')
    
    buttons.forEach(button => {
    	button.addEventListener('click', function (e) {
    		const x = e.clientX
    		const y = e.clientY
    
    		const buttonTop = e.target.offsetTop
    		const buttonLeft = e.target.offsetLeft
    		
    		const xInside = x - buttonLeft
    		const yInside = y - buttonTop
    		
    		const circle = document.createElement('span')
    		circle.classList.add('circle')
    		circle.style.top = yInside + 'px'
    		circle.style.left = xInside + 'px'
    
    		this.appendChild(circle)
    		
    		setTimeout(()=> circle.remove(), 500)
    	})
    })
    ```
    
12. Tüm işlem tamamlandı. Bir sonraki projemizde görüşmek üzere 🙂