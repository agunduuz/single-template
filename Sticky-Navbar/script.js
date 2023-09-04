const header = document.querySelector('.header');
window.addEventListener('scroll', fixHeader);

function fixHeader() {
  if (window.scrollY > header.offsetHeight + 200) {
    header.classList.add('active');
  } else {
    header.classList.remove('active');
  }
}
