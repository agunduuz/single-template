# Drag N Drop
- Sürükleme işlemi boyunca belirli zamanlarda belirli olayları tetiklememiz gerekiyor
1. Yapmak istediğim ilk işlem **“Drag”** fonksiyonlarını oluşturmak. Nelerdir bu fonksiyonlar?
    1. `dragStart()`
    2. `dragEnd()`
    3. `dragOver()`
    4. `dragEnter()`
    5. `dragLeave()`
    6. `dragDrop()`
    
    ```jsx
    function dragStart(){
    
    }
    function dragEnd(){
    
    }
    function dragOver(){
    
    }
    function dragEnter(){
    
    }
    function dragLeave(){
    
    }
    function dragDrop(){
    
    }
    ```
    
2. Peki bunları ne zaman çalıştırmak istiyoruz? İlk önce üzerinde çalışacağımız ekipmanlarımızı seçelim.
    1. Dolgu malzememiz. Resme sahip alan. `const fill`
    2. Ve tüm kutularımız. `const empties`
    
    ```jsx
    const fill = document.querySelector('.fill')
    const empties = document.querySelectorAll('.empty')
    ```
    
3. Dolgu malzememize iki adet event işlemi atayalım. Başlangıç ve Bitiş.
    
    ```jsx
    fill.addEventListener('dragstart', dragStart)
    fill.addEventListener('dragend', dragEnd)
    ```
    
4. Diğer kalan fonksiyonları ise Kutularımız için tanımlayalım. Bu işlemi yapmak için bir **“for”** döngüsü kullanacağız.
5. Her bir kutuya fonksiyonlarımızı tanımlayacağız.
    
    ```jsx
    for(const empty of empties){
    	empty.addEventListener('dragover', dragOver)
    	empty.addEventListener('dragenter', dragEnter)
    	empty.addEventListener('dragleave', dragLeave)
    	empty.addEventListener('drop', dragDrop)
    }
    ```
    
6. `dragStart()` fonksiyonumuza geri dönelim. İlk yapmak istediğimiz işlem **‘hold’** classını eklemek.
7. Kutudan kaldırdığımızda kutunun boşalmasını istiyorum. Ancak bu işlem için bir `setTimeout()` fonk. kullanıyorum. Resme tıkladıktan sonra bize zaman tanıması için.
    
    ```jsx
    function dragStart(){
    	this.className += ' hold'
    	setTimeout(() => this.className = 'invisible', 0)
    }
    ```
    
8. Şimdi `dragEnd()` fonk. üzerinde çalışalım.
9. Sürükleme işleminin sonunda sadece **‘fill’** class’ına sahip olmak istediğimizi belirtiyoruz. 
    
    ```jsx
    function dragEnd(){
    	this.className = 'fill'
    }
    ```
    
10. Hala fotoğrafı bıraktığımızda eklediğimiz kutunun içerisinde fotoğrafı göremiyoruz.
11. Bunun için `dragDrop()` fonk. gidiyoruz. Her biri aslında boş bir kutu sadece içerisinde **“fill”** class’ına sahip bir element eklemeliyiz.
12. Bu yüzden `append()` kullanıyoruz.
    
    ```jsx
    function dragDrop(){
    	this.className = 'empty'
    	this.append(fill)
    }
    ```
    
13. Hala resmimizi sürükleyip-bıraktığımızda işlemimiz gerçekleşmemekte.
14. Hem `"dragover"` hem de `"dragenter"` eventlerinin varsayılan eylemleri vardır. **ÖRN:** Submit Button gibi.
15. `"dragover"` kısmında mevcut sürükleme işleminin, üzerine sürüklediğimizde devre dışı kaldığını söyleyebiliriz. Bunu istemeyiz.
16. `"dragenter"` hedef, kullanıcı seçimlerini reddetme özelliği vardır.
17. Bu yüzden bu iki event fonksiyonunda event objesini çağırarak bunu 14. satırdaki örneğimiz gibi default hale getirmek.
    
    ```jsx
    function dragOver(e){
    	e.preventDefault()
    }
    function dragEnter(e){
    	e.preventDefault()
    }
    ```
    
18. Sürükle bırak işlemi bu kadardı. Şimdi üzerine geldiğimizde oluşacak hover özelliklerini ekleyelim.
19. Bunun için `dragEnter(e)` içerisinde çalışacağız ilk olarak. 
    
    ```jsx
    function dragEnter(e){
    	e.preventDefault()
    	this.className += ' hovered'
    }
    ```
    
20. Şu an her kutu üzerinde bir hover işlemi olduğu için kutunun üzerinden ayrılırken bu özelliği temizlememiz gerekiyor.
    
    ```jsx
    function dragLeave(){
    	this.className = 'empty'
    }
    ```
    
21. Projemizin tüm kodları aşağıda mevcuttur.
    
    ```jsx
    const fill = document.querySelector('.fill')
    const empties = document.querySelectorAll('.empty')
    
    fill.addEventListener('dragstart', dragStart)
    fill.addEventListener('dragend', dragEnd)
    
    for(const empty of empties){
    	empty.addEventListener('dragover', dragOver)
    	empty.addEventListener('dragenter', dragEnter)
    	empty.addEventListener('dragleave', dragLeave)
    	empty.addEventListener('drop', dragDrop)
    }
    
    function dragStart(){
    	this.className += ' hold'
    	setTimeout(() => this.className = 'invisible', 0)
    }
    function dragEnd(){
    	this.className = 'fill'
    }
    function dragDrop(){
    	this.className = 'empty'
    	this.append(fill)
    }
    function dragOver(e){
    	e.preventDefault()
    }
    function dragEnter(e){
    	e.preventDefault()
    	this.className += ' hovered'
    }
    function dragLeave(){
    	this.className = 'empty'
    }
    ```