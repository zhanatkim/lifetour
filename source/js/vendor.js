// Swiper 7.4.1
import Swiper from './vendor/swiper';
import './vendor/focus-visible-polyfill';

export const heroSwiper = new Swiper('.main-header__swiper', {
  spaceBetween: 30,
  effect: "fade",
  pagination: {
    el: '.main-header__pagination',
    clickable: true,
  },
});
