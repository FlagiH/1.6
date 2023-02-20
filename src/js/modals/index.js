import closeFeedbackModal from "./modal-feedback";
import closeCallModal from "./modal-call";
import { closeMenuModal, menu } from "./menu";

const openModals = [];

function find(classValue, classListValue) {
  for (let i = 0; i < classListValue.length; i += 1) {
      const sliced = classListValue.slice(i, classValue.length + i);
      
      if (classValue === sliced) {
          return true;
      }
  }
  
  return false;
}

const disableBLur = () => {
  const bodyContent = document.querySelector('.body__content');

  if (openModals.length === 0) {
    bodyContent.classList.remove('body__content--blur'); // remove blur effect on body
  } else {
    menu.classList.remove('menu-container--blur'); // remove blur effect on menu
  }
}

const modalNameList = ['menu-modal', 'modal-call', 'modal-feedback'];

const body = document.querySelector('.body__container');

body.addEventListener('click', (event) => {
  const classList = event.target.classList; // target click classes;
  let isModal = false;

  for (let i = 0; i < classList.length; i++) {
    for (let j = 0; j < modalNameList.length; j++) {
      if (find(modalNameList[j], classList[i])) {
        isModal = true;
      }
    }
  }

  if (openModals.length && !isModal) {
    closeModalDictionary[openModals[openModals.length - 1]]();
  }
})

const closeModalDictionary = {
  'menu-modal': closeMenuModal,
  'modal-feedback': closeFeedbackModal,
  'modal-call': closeCallModal
}

export { disableBLur, openModals }