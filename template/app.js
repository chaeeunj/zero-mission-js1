// do something!

// const arrowBtn = document.querySelector('.toggle');
// arrowBtn.addEventListener('click', openNav);

// function openNav() {
//   document.querySelector('.navigation').style.width = '200px';
//   document.querySelector('.navigation').style.backgroundColor = 'black';
// }

const nav = document.querySelector('nav');
const arrowBtn = document.querySelector('.toggle');

arrowBtn.addEventListener('click', addClass);

function addClass() {
  nav.classList.toggle('active');
}
