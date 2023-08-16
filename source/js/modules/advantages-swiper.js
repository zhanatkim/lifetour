import Swiper from '../vendor/swiper';

// Свайпер для Преимуществ

const breakpoint = window.matchMedia('(min-width:1200px)');
let advantagesSwiper;

const setAdvantagesSwiper = () => {
  advantagesSwiper = new Swiper('.advantages__swiper', {
    loop: true,
    slidesPerView: 'auto',
    centeredSlides: true,
    freeMode: true,
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
    }
    return;
  }
  setAdvantagesSwiper();
};

breakpoint.addListener(breakpointChecker);
breakpointChecker();
