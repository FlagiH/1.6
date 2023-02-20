
const header = document.querySelector(".nav");
const btns = header.querySelectorAll(".nav__button");

  for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', function () {
      for(let j = 0; j < btns.length; j++) {
        if(btns[j].classList.contains('nav__button--active')) {
          btns[j].classList.remove('nav__button--active');
        }
      }

      if(!btns[i].classList.contains('nav__button--active')){
        btns[i].classList.add('nav__button--active');
      }
    })
  }
