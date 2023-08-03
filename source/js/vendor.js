// Swiper 7.4.1
import Swiper from './vendor/swiper';
import './vendor/focus-visible-polyfill';

export const heroSwiper = new Swiper('.main-header__swiper', {
  // cssMode: true,
  loop: true,
  pagination: {
    el: '.main-header__pagination',
    clickable: true,
  },
});

export const toursSwiper = new Swiper('.tours__swiper', {
  cssMode: true,
  slidesPerView: 1,
  spaceBetween: 15,
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 18,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
  navigation: {
    nextEl: '.tours__button--next',
    prevEl: '.tours__button--prev',
  },
  keyboard: true,
});

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
