import { openModals, disableBLur } from ".";

const phoneButtons = document.querySelectorAll('.button-icon--phone');
const modalCall = document.querySelector('.modal-call');
const backButton = modalCall.querySelector('.button-icon--back');
const bodyContainer = document.querySelector('.body__content');
const menu = document.querySelector('.menu-container');


for (let i = 0; i < phoneButtons.length; i++) {
  phoneButtons[i].addEventListener('click', function (e) {
    e.stopPropagation();

    if (modalCall.classList.contains('modal-call--hidden')) {
      modalCall.classList.remove('modal-call--hidden'); // show modal call
      menu.classList.add('menu-container--blur'); // hide menu
      bodyContainer.classList.add('body__content--blur'); // add blur effect
      openModals.push('modal-call')
    }
  });
}

const closeCallModal = (e) => {
  if(e) {
    e.stopPropagation();
  }

  if (!modalCall.classList.contains('modal-call--hidden')) {
    modalCall.classList.add('modal-call--hidden'); // hide modal call
    openModals.pop();
    disableBLur();
  }
}

backButton.addEventListener('click', closeCallModal)

export default closeCallModal;