import Swiper from '../vendor/swiper';
import {setEventListener} from './media-player';

// Свайпер для хиро-хедера

const setInert = () => {
  const wrapper = document.querySelector('.page-header-swiper__wrapper');
  const activeSlide = document.querySelector('.page-header-swiper__slide.swiper-slide-active');
  const bgImages = document.querySelectorAll('.page-header__bg-photo');
  if (!bgImages) {
    return;
  }
  bgImages.forEach((el) => el.classList.remove('page-header__bg-photo--active'));
  if (!activeSlide) {
    return;
  }
  const activeImage = Array.from(bgImages).find((item) => item.dataset.index === activeSlide.dataset.swiperSlideIndex);
  activeImage.classList.add('page-header__bg-photo--active');
  if (!wrapper) {
    return;
  }
  const focusableSlides = Array.from(wrapper.querySelectorAll('.page-header-swiper__slide')).filter((item) => !item.classList.contains('swiper-slide-active'));
  focusableSlides.forEach((el) => el.setAttribute('inert', true));
  activeSlide.removeAttribute('inert');
};

export const heroSwiper = new Swiper('.page-header__swiper', {
  cssmode: true,
  loop: true,
  pagination: {
    el: '.page-header-swiper__pagination',
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
  const slides = document.querySelectorAll('.page-header-swiper__slide');
  const activeSlide = document.querySelector('.page-header-swiper__slide.swiper-slide-active');
  const bgImages = document.querySelectorAll('.page-header__bg-photo');
  if (!bgImages) {
    return;
  }
  bgImages.forEach((el) => el.classList.remove('page-header__bg-photo--active'));
  if (!activeSlide) {
    return;
  }
  const activeImage = Array.from(bgImages).find((item) => item.dataset.index === activeSlide.dataset.swiperSlideIndex);
  activeImage.classList.add('page-header__bg-photo--active');
  slides.forEach((slide) => {
    slide.setAttribute('inert', true);
  });
  activeSlide.removeAttribute('inert');
});
