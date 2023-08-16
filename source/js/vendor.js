import './vendor/focus-visible-polyfill';
import './modules/hero-swiper';
import './modules/tours-swiper';
import './modules/training-swiper';
import './modules/review-swiper';
import './modules/advantages-swiper';
import './modules/gallery-swiper';
import L from 'leaflet';
import 'lazysizes';
// import a plugin
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

// Карта

export const map = L.map('map').setView([59.9682871, 30.3176164], 13);

export const tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'}).addTo(map);

export const marker = L.marker([59.9682871, 30.3176164]).addTo(map);
