document.querySelectorAll('[data-open-faq]').forEach(button => {
    button.addEventListener('click', () => {
      const item = button.closest('.faq-list__item');
      const overlay = item.querySelector('.faq-list__overlay');
      const isOpen = item.classList.contains('open');

      document.querySelectorAll('.faq-list__item.open').forEach(openItem => {
        if (openItem !== item) {
          openItem.classList.remove('open');
          openItem.querySelector('.faq-list__overlay').style.display = 'none';
        }
      });

      if (isOpen) {
        overlay.style.display = 'none';
        item.classList.remove('open');
      } else {
        overlay.style.display = 'block';
        item.classList.add('open');
      }
    });
  });
