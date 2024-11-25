const burgerBtnEl = document.querySelector('.header-burger');
const modalEl = document.querySelector('.mob-menu-overlay');
const closeBtnEl = document.querySelector('.mob-menu-close-btn');
const mobMenuNavLinksEls = document.querySelectorAll('.mob-menu-nav-link');

const handleCloseClick = () => {
  modalEl.classList.remove('mob-menu-is-open');
  document.body.style.overflow = 'visible';
};

const handleBurgerClick = () => {
  modalEl.classList.add('mob-menu-is-open');
  document.body.style.overflow = 'hidden';
};

burgerBtnEl.addEventListener('click', handleBurgerClick);
closeBtnEl.addEventListener('click', handleCloseClick);
mobMenuNavLinksEls.forEach(el =>
  el.addEventListener('click', handleCloseClick)
);
