const openBtn = document.querySelector('[data-open-buy]');
const closeBtn = document.querySelector('[data-close-buy]');
const backdrop = document.querySelector('.backdrop-buy');

openBtn.addEventListener('click', () => {
  backdrop.classList.remove('is-hidden');
  document.body.style.overflow = 'hidden';
});

closeBtn.addEventListener('click', () => {
  backdrop.classList.add('is-hidden');
  document.body.style.overflow = 'visible';
});
