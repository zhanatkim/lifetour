import Swiper from '../vendor/swiper';
import {setEventListener} from './media-player';

// Свайпер для хиро-хедера

const heroSwiper = new Swiper('.main-header__swiper', {
  loop: true,
  pagination: {
    el: '.main-header__pagination',
    clickable: true,
  },
  on: {
    init: setEventListener(),
  },
});

heroSwiper.on('slideChange', setEventListener);
