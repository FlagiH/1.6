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


const readMoreSectionButton = document.querySelector('.section__button');
const cuttedBlockSectionButton = document.querySelector('.section__text--hidden');

readMoreSectionButton.addEventListener('click', function () {

  if (cuttedBlockSectionButton.classList.contains('section__text--hidden')) {
    cuttedBlockSectionButton.classList.remove('section__text--hidden');
    readMoreSectionButton.classList.add('section__button--rotated');
    readMoreSectionButton.textContent = 'Скрыть';
  } else {
    cuttedBlockSectionButton.classList.add('section__text--hidden');
    readMoreSectionButton.classList.remove('section__button--rotated');
    readMoreSectionButton.textContent = 'Показать все';
  }
})
console.log(cuttedBlock);