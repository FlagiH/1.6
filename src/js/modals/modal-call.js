const phoneButtons = document.querySelectorAll('.button-icon--phone');
const modalCall = document.querySelector('.modal-call');
const backButton = modalCall.querySelector('.button-icon--back');
const bodyContainer = document.querySelector('.body__content');
const menu = document.querySelector('.menu-container');

console.log(phoneButtons);

for (let i = 0; i < phoneButtons.length; i++) {
  phoneButtons[i].addEventListener('click', function () {
    if (modalCall.classList.contains('modal-call--hidden')) {
      modalCall.classList.remove('modal-call--hidden'); // show modal call
      menu.classList.add('menu-container--blur'); // hide menu
      bodyContainer.classList.add('body__content--blur'); // add blur effect
    }
  });
}

backButton.addEventListener('click', () => {
  if (!modalCall.classList.contains('modal-call--hidden')) {
    modalCall.classList.add('modal-call--hidden'); // hide modal call
    // menu.classList.remove('menu-container--hidden'); // show menu
    menu.classList.remove('menu-container--blur'); // remove blur effect on menu
    bodyContainer.classList.remove('body__content--blur'); // remove blur effect on body
  }
})