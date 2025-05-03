//   document.addEventListener('DOMContentLoaded', function () {
//     const newsSlider = new Swiper('.news-slider', {
//       slidesPerView: 'auto', // щоб виходили за межі екрана
//       spaceBetween: 16,
//       loop: true,
//       navigation: {
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev',
//       },
//     });
//   });



// document.addEventListener('DOMContentLoaded', function () {
//     const newsSwiper = new Swiper('.news-slider', {
//       wrapperClass: 'news-list',
//       slideClass: 'news-list__item',
//       loop: true,
//       allowTouchMove: false, // вимкнути звичайний свайп
//       navigation: {
//         nextEl: '#swiper-next',
//         prevEl: '#swiper-prev',
//       },
//       breakpoints: {
//         768: {
//           slidesPerView: 1,
//           spaceBetween: 18
//         },
//         1024: {
//           slidesPerView: 2,
//           spaceBetween: 18
//         },
//       },
//       effect: 'slide',
//       speed: 500,
//     });
  
//     // Клік по стрілках
//     document.getElementById('swiper-prev').addEventListener('click', () => {
//       newsSwiper.slidePrev();
//     });
//     document.getElementById('swiper-next').addEventListener('click', () => {
//       newsSwiper.slideNext();
//     });
  
//     // Перехоплення події скролу сторінки
//     let isScrolling = false;
//     window.addEventListener('wheel', function(event) {
//       if (isScrolling) return; // Якщо вже відбувається прокрутка, не обробляти події знову
//       isScrolling = true;
  
//       if (event.deltaY > 0) {
//         newsSwiper.slideNext(); // Перехід до наступного слайду
//       } else {
//         newsSwiper.slidePrev(); // Перехід до попереднього слайду
//       }
  
//       // Таймер для запобігання зайвому виклику події
//       setTimeout(() => {
//         isScrolling = false;
//       }, 500); // Дозволити прокрутку через 500 мс (можна налаштувати)
//     });
//   });
  



document.addEventListener('DOMContentLoaded', function () {
    const newsSwiper = new Swiper('.news-game__swiper', {
      wrapperClass: 'news-game__list',
      slideClass: 'news-game__item',
      loop: true,
      grabCursor: true,
      navigation: {
        nextEl: '#swiper-next',
        prevEl: '#swiper-prev',
      },  
      breakpoints: {
        768: {
          slidesPerView: 1,
          spaceBetween: 18
        },
        1024: {
          slidesPerView: 2,
          spaceBetween: 18
        },
      },
      effect: 'slide',
      speed: 500,
    });
    const prevBtn = document.getElementById('swiper-prev');
    const nextBtn = document.getElementById('swiper-next');
    prevBtn.addEventListener('click', function () {
      newsSwiper.slidePrev();
    });
    nextBtn.addEventListener('click', function () {
      newsSwiper.slideNext();
    });
  });