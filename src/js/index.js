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

const readMoreButton = document.querySelector('.brands__button-read-more');
const cuttedBlock = document.querySelector('.brands__block--cut');

readMoreButton.addEventListener('click', function () {
  // if container block has class 'container__block--cut'
    // 1. reset max-height to show content  max-height: initial;
    // 2. rotate before arrows; 
    // 3. change text 'from read' more to 'hide'
  // else
    // 1. set max-height to 186px
    // 2. reset before arrows
    // 3. change text from 'hide' to 'read more'

  if (cuttedBlock.classList.contains('brands__block--cut')) {
    cuttedBlock.classList.remove('brands__block--cut');
    readMoreButton.classList.add('brands__button-read-more--rotated')
    readMoreButton.textContent = 'Скрыть'; 
  } else {
    cuttedBlock.classList.add('brands__block--cut');
    readMoreButton.classList.remove('brands__button-read-more--rotated')
    readMoreButton.textContent = 'Показать все';
  }
})

console.log(cuttedBlock);