
const buttonMenu = document.querySelector('.menu-btn');
const menuList = document.querySelector('.header__nav');
const adresMenu = document.querySelector('.h-info__menu');
const buttonCalor = document.querySelector('.h-button__btn');
const headerIcon = document.querySelector('.h-icon');

buttonMenu.addEventListener('click', () => {
  buttonMenu.classList.toggle('open');
  if (menuList.classList.contains('show')) {
    menuList.classList.remove('show');
  } else {
    menuList.classList.add('show');
  }
});

const headerColor = document.querySelector('.header');
window.addEventListener('scroll', () => {
  let scrollDistance = window.scrollY;
  if (scrollY == 0) {
    headerColor.classList.remove('header--scroll');
    buttonCalor.classList.remove('h-button__btn--blue');
    headerIcon.classList.remove('h-icon--menu');
  } else {
    headerColor.classList.add('header--scroll');
    buttonCalor.classList.add('h-button__btn--blue');
    headerIcon.classList.add('h-icon--menu');
  }
})