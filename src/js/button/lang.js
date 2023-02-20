const langList = document.querySelector('.contacts__lang');
const buttonLang = langList.querySelectorAll('.contacts__lang-button');

for(let i = 0; i < buttonLang.length; i++) {
  buttonLang[i].addEventListener('click', () => {
    for(let j = 0; j < buttonLang.length; j++) {
      if(buttonLang[j].classList.contains('contacts__lang-button--active')) {
        buttonLang[j].classList.remove('contacts__lang-button--active');
      }
    }
    if(!buttonLang[i].classList.contains('contacts__lang-button--active')) {
      buttonLang[i].classList.add('contacts__lang-button--active');
    }
  })
}
