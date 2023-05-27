// do something!

const nav = document.querySelector('nav');
const arrowBtn = document.querySelector('.toggle');

arrowBtn.addEventListener('click', isActive);

function isActive() {
  nav.classList.toggle('active');
  nav.classList.contains('active')
    ? localStorage.setItem('navMenu', 'open')
    : localStorage.setItem('navMenu', 'close');
}

localStorage.getItem('navMenu') === 'open'
  ? (nav.classList.add('active'), (document.body.style.visibility = 'visible'))
  : (document.body.style.visibility = 'visible');
