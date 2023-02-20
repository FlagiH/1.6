import { openModals, disableBLur } from ".";

const burgerButton = document.querySelector('.button-icon--burger');
const menu = document.querySelector('.menu-container');
const backButton = menu.querySelector('.button-icon--back');
const bodyContainer = document.querySelector('.body__content');

burgerButton.addEventListener('click', function (e) {
  e.stopPropagation();

  if (menu.classList.contains('menu-container--hidden')) {
    menu.classList.remove('menu-container--hidden');
    bodyContainer.classList.add('body__content--blur');
    openModals.push('menu-modal')
  }
})

function closeMenuModal(e) {
  if(e) {
    e.stopPropagation();
  }

  if (!bodyContainer.classList.contains('body__content--hidden')) {
    menu.classList.add('menu-container--hidden');
    openModals.pop();
    disableBLur();
  }
}

backButton.addEventListener('click', closeMenuModal)

export { closeMenuModal, menu };