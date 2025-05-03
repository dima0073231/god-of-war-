const burgerButton = document.querySelector('.header-btn');
const navList = document.querySelector('.nav-list');
const closeButton = document.querySelector('.nav-list__close');

burgerButton.addEventListener('click', function () {
  if (window.innerWidth < 1200) {
    navList.classList.toggle('is-open');
  } else {
    navList.classList.toggle('is-hidden');
  }
});
closeButton.addEventListener('click', function () {
  if (window.innerWidth < 1200) {
    navList.classList.remove('is-open');
  } else {
    navList.classList.add('is-hidden');
  }
});
