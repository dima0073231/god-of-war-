const openBtns = document.querySelectorAll('[data-open-buy]');
const closeBtn = document.querySelector('[data-close-buy]');
const backdrop = document.querySelector('.backdrop-buy');
const modalPrice = document.querySelector('[data-modal-price]');
openBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const item = btn.closest('.editions-list__item, .dual-list__item, explore-list__item');
    const priceElement = item?.querySelector('.editions-list__price, .dual-list__price');
    if (priceElement) {
      modalPrice.textContent = priceElement.textContent;
    }
    backdrop.classList.remove('is-hidden');
    document.body.style.overflow = 'hidden';
  });
});
closeBtn.addEventListener('click', () => {
  backdrop.classList.add('is-hidden');
  document.body.style.overflow = 'visible';
});
