const phoneButtons = document.querySelectorAll('.button-icon--sms');
const modalFeedBack = document.querySelector('.modal-feedback');
const backButton = modalFeedBack.querySelector('.button-icon--back');
const bodyContainer = document.querySelector('.body__content');
const menu = document.querySelector('.menu-container');

console.log(phoneButtons);

for (let i = 0; i < phoneButtons.length; i++) {
  phoneButtons[i].addEventListener('click', function () {
    if (modalFeedBack.classList.contains('modal-feedback--hidden')) {
      modalFeedBack.classList.remove('modal-feedback--hidden'); // show modal call
      menu.classList.add('menu-container--blur'); // hide menu
      bodyContainer.classList.add('body__content--blur'); // add blur effect
    }
  });
}

backButton.addEventListener('click', () => {
  if (!modalFeedBack.classList.contains('modal-feedback--hidden')) {
    modalFeedBack.classList.add('modal-feedback--hidden'); // hide modal call
    // menu.classList.remove('menu-container--hidden'); // show menu
    menu.classList.remove('menu-container--blur'); // remove blur effect on menu
    bodyContainer.classList.remove('body__content--blur'); // remove blur effect on body
  }
})