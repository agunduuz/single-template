### Content Placeholder

1. Değişkenlerimizi tanımlayalım:
    
    ```jsx
    const header = document.getElementById('header');
    const title = document.getElementById('title');
    const excerpt = document.getElementById('excerpt');
    const profile_img = document.getElementById('profile_img');
    const name = document.getElementById('name');
    const date = document.getElementById('date');
    
    const animated_bgs = document.querySelectorAll('.animated-bg');
    const animated_bgs_texts = document.querySelectorAll('.animated-bg-text');
    ```
    
2. `getData` adında bir fonk. oluşturalım. Eklemek istediğimiz verileri tanımladığımız bir fonk. alanı olacak.
    
    ```jsx
    function getData() {
      header.innerHTML =
        '<img src="https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>';
      title.innerHTML = 'Laptop MC';
      excerpt.innerHTML =
        'Ram 8GB, SSD 256GB, CPU i5, VGA 2GB, 14 inch, Full HD, Windows 10';
      profile_img.innerHTML =
        '<img src="https://randomuser.me/api/portraits/men/41.jpg" />';
      name.innerHTML = 'Shadow Moon';
      date.innerHTML = 'Aug 16, 2023';
    
      animated_bgs.forEach((bg) => bg.classList.remove('animated-bg'));
      animated_bgs_texts.forEach((bg) => bg.classList.remove('animated-bg-text'));
    }
    ```