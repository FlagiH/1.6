
const burgerButton = document.querySelector('.button-icon--burger');
const menu = document.querySelector('.menu-container');
const backButton = menu.querySelector('.button-icon--back');
const bodyContainer = document.querySelector('.body__content');

burgerButton.addEventListener('click', function () {
  if (menu.classList.contains('menu-container--hidden')) {
    menu.classList.remove('menu-container--hidden');
    bodyContainer.classList.add('body__content--blur');
  }
})

backButton.addEventListener('click', function () {
  if (!bodyContainer.classList.contains('body__content--hidden')) {
    bodyContainer.classList.remove('body__content--blur');
    menu.classList.add('menu-container--hidden');
  }
})
