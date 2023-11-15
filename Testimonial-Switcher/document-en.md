# Testimonial Box Switcher

## Create Box & Progress Bar

### HTML

1. **Testimonial Container:**
    - Represents a section of the page containing user testimonials.
    - Can be styled using the **`testimonial-container`** class.
2. **Progress Bar:**
    - Visual representation of a progress bar.
    - Can be styled using the **`progress-bar`** class.
3. **Quote Icons:**
    - Contains Font Awesome icons indicating the beginning and end of quotations.
    - **`fas fa-quote-right fa-quote`** on the right, **`fas fa-quote-left fa-quote`** on the left.
4. **Testimonial Text:**
    - Includes a paragraph (**`testimonial`**) with the user's comment.
    - Offers a modern experience with a clean design, responsive layout, and real-time comment display.
5. **User Information:**
    - Consists of the user's profile picture, name, and role.
    - Can be styled using the **`user-image`**, **`username`**, and **`role`** classes.
6. **Key Points:**
    - Clean design and responsive layout provide a user-friendly experience.
    - Real-time comment display enhances user interaction.
    - User information personalizes the testimonial and adds credibility.
  
```html
<section class="testimonial-container">
        <div class="progress-bar"></div>
        <div class="fas fa-quote-right fa-quote"></div>
        <div class="fas fa-quote-left fa-quote"></div>
        <p class="testimonial">
            Your project seamlessly combines functionality and aesthetics, offering an intuitive and visually appealing platform for users to share comments. The clean design, responsive layout, and real-time comment display create a modern and user-friendly experience. The well-designed submission form and thoughtful use of styling elements contribute to an overall professional and engaging project. Great job on fostering effective user interaction
        </p>
        <div class="user">
            <img src="https://randomuser.me/api/portraits/women/60.jpg" alt="user" class="user-image">
            <div class="user-details">
                <h4 class="username">Miyah Myles</h4>
                <p class="role">Marketing</p>
            </div>
        </div>
    </section>
```

### CSS

```css
section.testimonial-container{ background-color: var(--detail-color); border-radius: 15px; margin: 20px auto; padding: 50px 80px; max-width: 768px; position: relative;box-shadow: 0 0 50px #1e2228, 0 0 25px var(--detail-color);}
section.testimonial-container .fa-quote{ font-size: 28px; color: rgba(0, 0, 0, 0.3); position: absolute; top: 60px; }
section.testimonial-container .fa-quote-right{left: 40px;}
section.testimonial-container .fa-quote-left{right: 40px;}

section.testimonial-container .testimonial{ line-height: 29px; text-align: justify; }
section.testimonial-container .user{ display: flex; align-items: center; justify-content: center; margin-top: 10px;}
section.testimonial-container .user .user-image{ border-radius: 50%; height: 75px; width: 75px; object-fit: cover; border: 3px solid var(--font-color); box-shadow: 0 0 50px var(--detail-color), 0 0 25px var(--font-color); }
section.testimonial-container .user .user-details{margin-left: 10px;}
section.testimonial-container .user .user-details .username{margin: 0;}
section.testimonial-container .user .user-details .role{font-weight: normal;}

section.testimonial-container .progress-bar{ background-color: var(--primary-color); height: 4px; width: 100%; animation: grow 10s linear infinite; transform-origin: left; border-radius: 30px;box-shadow: 0 0 2px var(--primary-color), 0 0 1px var(--primary-color); }

@keyframes grow {
    0% {
        transform: scaleX(0)
    }
}
@media screen and (max-width:768px) {
    section.testimonial-container {padding: 20px 30px;}
    section.testimonial-container .fa-quote{display: none;}
}
```

## Testimonial Switch

1. **Testimonial Container Styles:**
    - Provides general styling for the testimonial container.
    - Includes features such as background color, border-radius, margin, and maximum width.
    - Shadow effects enhance the visibility of the container.
2. **Quote Icons Styles:**
    - Specifies the position of quote icons on the right and left.
    - Font Awesome icons, namely **`fa-quote-right`** on the right and **`fa-quote-left`** on the left, are positioned accordingly.
3. **Testimonial Text Styles:**
    - Styles the testimonial text with specific alignment and line height.
    - The text expands fully within its designated space.
4. **User Information Styles:**
    - Styles the section containing user information.
    - The user's image is displayed in a rounded shape with a specific shadow effect.
    - Username and role information are stylized with a specific layout and font weight.
5. **Progress Bar Styles:**
    - Defines the progress bar located at the bottom.
    - The bar, with specific color and properties, expands over a certain duration with an animation.
6. **Styles for Different Screen Sizes:**
    - Some style adjustments are made when the screen width is less than 768 pixels.
    - Particularly, changes are applied to padding values and the visibility of quote icons.
7. **Key Points:**
    - Color and style classes ensure overall design consistency.
    - Animation and shadows enrich the user experience.
    - Media queries are used to enhance the appearance on mobile devices.

```jsx
const testimonialsContainer = document.querySelector('.testimonial-container');
const testimonial = document.querySelector('.testimonial');
const userImage = document.querySelector('.user-image');
const username = document.querySelector('.username');
const role = document.querySelector('.role');

const testimonials = [
  {
    name: 'Miyah Myles',
    position: 'Marketing',
    photo: 'https://randomuser.me/api/portraits/women/60.jpg',
    text: 'Your project seamlessly combines functionality and aesthetics, offering an intuitive and visually appealing platform for users to share comments. The clean design, responsive layout, and real-time comment display create a modern and user-friendly experience. The well-designed submission form and thoughtful use of styling elements contribute to an overall professional and engaging project. Great job on fostering effective user interaction',
  },
  {
    name: 'Elijah Turner',
    position: 'Product Management',
    photo: 'https://randomuser.me/api/portraits/men/32.jpg',
    text: 'Impressive work! Your project effortlessly combines style and functionality. The sleek design, along with the well-crafted form for user comments, creates a seamless experience. The real-time comment display adds a modern touch, making it user-friendly and visually pleasing.',
  },
  {
    name: 'Scarlett Garcia',
    position: 'UX/UI Designer',
    photo: 'https://randomuser.me/api/portraits/women/14.jpg',
    text: 'Your project is a masterpiece of user engagement. The clean layout and inviting design make it easy for users to share their thoughts. The responsive elements and real-time comment updates enhance the overall user experience. Kudos on a job well done!',
  },
  {
    name: 'Aiden Clark',
    position: 'Software Development',
    photo: 'https://randomuser.me/api/portraits/men/89.jpg',
    text: 'Fantastic implementation! Your project skillfully combines form and function. The user-friendly design, coupled with the efficient comment submission form, creates an enjoyable experience. Real-time updates elevate the project, making it both professional and engaging.',
  },
  {
    name: 'Sophie Brooks',
    position: 'Content Creation',
    photo: 'https://randomuser.me/api/portraits/women/22.jpg',
    text: 'Bravo! Your project strikes a perfect balance between aesthetics and usability. The intuitive design and thoughtful styling make it a pleasure for users to provide feedback. The dynamic comment display adds a modern flair, resulting in an impressive overall project.',
  },
  {
    name: 'Liam Foster',
    position: 'Customer Support',
    photo: 'https://randomuser.me/api/portraits/men/45.jpg',
    text: 'Well done on creating a user-centric project! The simplicity of the design and the effectiveness of the comment submission form stand out. Real-time updates enhance the user experience, making it both seamless and visually appealing. Keep up the excellent work!',
  },
];

let idx = 1;

function updateTestimonial() {
  const { name, position, photo, text } = testimonials[idx];

  testimonial.innerHTML = text;
  userImage.src = photo;
  username.innerHTML = name;
  role.innerHTML = position;

  idx++;

  if (idx > testimonials.length - 1) {
    idx = 0;
  }
}

setInterval(updateTestimonial, 10000);
```
