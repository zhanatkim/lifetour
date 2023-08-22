import Swiper from '../vendor/swiper';
import {setEventListener} from './media-player';
import {renderSlide} from './render-slide';
// Свайпер для хиро-хедера

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
heroSwiper.on('afterInit', renderSlide());
heroSwiper.on('slideChange', setEventListener);
heroSwiper.on('slideChangeTransitionEnd', renderSlide);
