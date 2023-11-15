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
