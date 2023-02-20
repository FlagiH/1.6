
const readMoreSectionButton = document.querySelector('.section__button');
const cuttedBlockSection = document.querySelector('.section__text-read-more');

readMoreSectionButton.addEventListener('click', function () {

  if (!cuttedBlockSection.classList.contains('section__text-read-more--active')) {
    cuttedBlockSection.classList.add('section__text-read-more--active');
    readMoreSectionButton.classList.add('brands__box-read-more--rotated');
    readMoreSectionButton.textContent = 'Скрыть'; 
  } else {
    cuttedBlockSection.classList.remove('section__text-read-more--active');
    readMoreSectionButton.classList.remove('brands__box-read-more--rotated');
    readMoreSectionButton.textContent = 'Показать все';
  }
})