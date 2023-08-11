// Swiper 7.4.1
import Swiper from '../vendor/swiper';

// Свайпер для Фотогалереи

export const gallerySwiper = new Swiper('.gallery__swiper', {
  slidesPerView: 2,
  spaceBetween: 3,
  breakpoints: {
    768: {
      slidesPerView: 'auto',
      spaceBetween: 5,
    },
  },
  navigation: {
    nextEl: '.gallery__button--next',
    prevEl: '.gallery__button--prev',
  },
  keyboard: true,
});
