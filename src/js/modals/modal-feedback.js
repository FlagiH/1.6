import { openModals, disableBLur } from ".";

const phoneButtons = document.querySelectorAll('.button-icon--sms');
const modalFeedBack = document.querySelector('.modal-feedback');
const backButton = modalFeedBack.querySelector('.button-icon--back');
const bodyContainer = document.querySelector('.body__content');
const menu = document.querySelector('.menu-container');

console.log(phoneButtons);

for (let i = 0; i < phoneButtons.length; i++) {
  phoneButtons[i].addEventListener('click', function (e) {
    e.stopPropagation();
    console.log('click feedback')
    if (modalFeedBack.classList.contains('modal-feedback--hidden')) {
      modalFeedBack.classList.remove('modal-feedback--hidden'); // show modal call
      menu.classList.add('menu-container--blur'); // hide menu
      bodyContainer.classList.add('body__content--blur'); // add blur effect
      openModals.push('modal-feedback')
    }
  });
}

const closeFeedbackModal = (e) => {
  if(e) {
    e.stopPropagation();
  }

  if (!modalFeedBack.classList.contains('modal-feedback--hidden')) {
    modalFeedBack.classList.add('modal-feedback--hidden'); // hide modal call
    openModals.pop();
    disableBLur();
  }
};

backButton.addEventListener('click', closeFeedbackModal)

export default closeFeedbackModal;