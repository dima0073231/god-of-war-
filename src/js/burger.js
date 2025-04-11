const burgerButton = document.querySelector('.header-btn');
const navList = document.querySelector('.nav-list');
burgerButton.addEventListener('click', function () {
  navList.classList.toggle('is-hidden');
});
