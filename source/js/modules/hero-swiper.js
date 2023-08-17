import Swiper from '../vendor/swiper';
import {setEventListener} from './media-player';

// Свайпер для хиро-хедера
const setInert = () => {
  const wrapper = document.querySelector('.main-header__wrapper');
  if (!wrapper) {
    return;
  }
  const focusableSlides = Array.from(wrapper.querySelectorAll('.main-header__slide')).filter((item) => !item.classList.contains('swiper-slide-active'));
  focusableSlides.forEach((el) => el.setAttribute('inert', true));
  const activeSlide = document.querySelector('.main-header__slide.swiper-slide-active');
  activeSlide.removeAttribute('inert');
};

export const heroSwiper = new Swiper('.main-header__swiper', {
  cssmode: true,
  loop: true,
  focusableElements: '.main-header__button',
  pagination: {
    el: '.main-header__pagination',
    clickable: true,
  },
  on: {
    init: setEventListener(),
  },
  keyboard: true,
});
heroSwiper.on('afterInit', setInert());
heroSwiper.on('slideChange', setEventListener);
heroSwiper.on('slideChangeTransitionEnd', function () {
  const slides = document.querySelectorAll('.main-header__slide');
  const activeSlide = document.querySelectorAll('.main-header__slide.swiper-slide-active');

  slides.forEach((slide) => {
    slide.setAttribute('inert', true);
  });
  activeSlide.forEach((slide) => {
    slide.removeAttribute('inert');
  });
});
