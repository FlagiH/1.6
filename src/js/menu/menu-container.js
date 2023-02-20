

const header = document.querySelector(".menu__container");
const btns = header.querySelectorAll(".menu__container-button");

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener('click', function () {
    for (let j = 0; j < btns.length; j++) {
      if (btns[j].classList.contains('menu__container-button--active')) {
        btns[j].classList.remove('menu__container-button--active');
      }
    }

    if (!btns[i].classList.contains('menu__container-button--active')) {
      btns[i].classList.add('menu__container-button--active');
    } 
  })
}