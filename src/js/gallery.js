import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css/navigation';

import 'swiper/css';

const galleryPhoneSwiper = new Swiper('.gallery-swiper', {
  loop: true,
  slidesPerView: 1.5,
});

const galleryDesktopSwiper = new Swiper('.gallery-desktop-swiper', {
  modules: [Navigation],
  loop: true,
  slidesPerView: 5,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
