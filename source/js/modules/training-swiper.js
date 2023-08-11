import Swiper from '../vendor/swiper';

// Свайпер для Обучения

export const trainersSwiper = new Swiper('.training__swiper', {
  cssMode: true,
  slidesPerView: 1,
  spaceBetween: 15,
  breakpoints: {
    768: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 10,
    },
  },
  navigation: {
    nextEl: '.training__button--next',
    prevEl: '.training__button--prev',
  },
  keyboard: true,
});
