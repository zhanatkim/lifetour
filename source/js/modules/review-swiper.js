// Swiper 7.4.1
import Swiper from '../vendor/swiper';

// Свайпер для Отзывов

export const reviewSwiper = new Swiper('.review__swiper', {
  cssMode: true,
  slidesPerView: 1,
  spaceBetween: 15,
  breakpoints: {
    768: {
      slidesPerView: 'auto',
      spaceBetween: 10,
    },
  },
  navigation: {
    nextEl: '.review__button--next',
    prevEl: '.review__button--prev',
  },
  keyboard: true,
});
