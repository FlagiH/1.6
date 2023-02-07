import '../scss/style.scss'

const swiper = new Swiper('.swiper', {
  // Default parameters
  slidesPerView: 'auto',
  allowTouchMove: true, 
  // Responsive breakpoints
  breakpoints: {
    768: {
      enabled: false
    },
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
  },
})

//brands__button-read-more! 

const readMoreButton = document.querySelector('.brands__button-read-more');
const cuttedBlock = document.querySelector('.brands__block--cut');

readMoreButton.addEventListener('click', function () {

  if (cuttedBlock.classList.contains('brands__block--cut')) {
    cuttedBlock.classList.remove('brands__block--cut');
    readMoreButton.classList.add('brands__button-read-more--rotated');
    readMoreButton.textContent = 'Скрыть'; 
  } else {
    cuttedBlock.classList.add('brands__block--cut');
    readMoreButton.classList.remove('brands__button-read-more--rotated');
    readMoreButton.textContent = 'Показать все';
  }
})

//technics__button-read-more! 

const readMoreButtonTechnics = document.querySelector('.technics__button-read-more');
const cuttedBlockTechnics = document.querySelector('.technics__block--cut');

readMoreButtonTechnics.addEventListener('click', function () {

  if (cuttedBlockTechnics.classList.contains('technics__block--cut')) {
    cuttedBlockTechnics.classList.remove('technics__block--cut');
    readMoreButtonTechnics.classList.add('technics__button-read-more--rotated');
    readMoreButtonTechnics.textContent = 'Скрыть'; 
  } else {
    cuttedBlockTechnics.classList.add('technics__block--cut');
    readMoreButtonTechnics.classList.remove('technics__button-read-more--rotated');
    readMoreButtonTechnics.textContent = 'Показать все';
  }
})

//read-more button main!

const readMoreSectionButton = document.querySelector('.section__button');
const cuttedBlockSection = document.querySelector('.section__container');

readMoreSectionButton.addEventListener('click', function () {
  const texts = cuttedBlockSection.querySelectorAll('.section__text');

  if (cuttedBlockSection.classList.contains('section__container--cut')) {
    for (let i = 0; i < texts.length; i++) {
      texts[i].classList.remove('section__text--hidden');
    }
    readMoreSectionButton.classList.add('section__button--rotated');
    cuttedBlockSection.classList.remove('section__container--cut')
    readMoreSectionButton.textContent = 'Скрыть';
  } else {
    for (let i = 0; i < texts.length; i++) {
      texts[i].classList.add('section__text--hidden');
    }
    readMoreSectionButton.classList.remove('section__button--rotated');
    cuttedBlockSection.classList.add('section__container--cut')
    readMoreSectionButton.textContent = 'Показать все';
  }
})

//menu-container ! burger!

const burgerButton = document.querySelector('.button-icon--burger');
const menu = document.querySelector('.menu-container');
const backButton = document.querySelector('.button-icon--back');
const bodyContainer = document.querySelector('.body__content');

burgerButton.addEventListener('click', function () {
  if (menu.classList.contains('menu-container--hidden')) {
    menu.classList.remove('menu-container--hidden');
    bodyContainer.classList.add('body__content--hidden');
  }
})

console.log(burgerButton);

backButton.addEventListener('click', function () {
  if (bodyContainer.classList.contains('body__content--hidden')) {
    bodyContainer.classList.remove('body__content--hidden');
    menu.classList.add('menu-container--hidden');
  }
})

console.log(backButton);

//modal function !

const phoneButton = document.querySelector('.button-icon--phone');
const smsButton = document.querySelector('.button-icon--sms');
const modalFeedBack = document.querySelector('.modal-feedback');
const madalCall = document.querySelector('.modal-call');
