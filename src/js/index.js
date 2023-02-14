import '../scss/style.scss'

import './modals/index'
import './modals/modal-feedback';
import './modals/modal-call';
import './modals/menu';
import './modals/menu-container';
import './modals/nav';
import './modals/read-more';

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










