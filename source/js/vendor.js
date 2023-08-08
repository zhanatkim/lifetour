// Swiper 7.4.1
import Swiper from './vendor/swiper';
import './vendor/focus-visible-polyfill';

// Свайпер для хиро-хедера

export const heroSwiper = new Swiper('.main-header__swiper', {
  // cssMode: true,
  loop: true,
  pagination: {
    el: '.main-header__pagination',
    clickable: true,
  },
});

// Свайпер для Ближайших туров

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

// Свайпер для Преимуществ

const breakpoint = window.matchMedia('(min-width:1200px)');
let advantagesSwiper;

const setAdvantagesSwiper = () => {
  advantagesSwiper = new Swiper('.advantages__swiper', {
    cssMode: true,
    loop: true,
    slidesPerView: 'auto',
    // spaceBetween: 30,
    centeredSlides: true,
    keyboard: true,
    navigation: {
      nextEl: '.advantages__button--next',
      prevEl: '.advantages__button--prev',
    },
  });
};

const breakpointChecker = () => {
  if (!breakpoint.matches) {
    if (advantagesSwiper) {
      advantagesSwiper.destroy(true, true);
      // sliceSliders();
      return;
    }
  }
  setAdvantagesSwiper();
};

breakpoint.addListener(breakpointChecker);
breakpointChecker();


// Свайпер для Фотогалереи

export const gallerySwiper = new Swiper('.gallery__swiper', {
  slidesPerView: 'auto',
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
