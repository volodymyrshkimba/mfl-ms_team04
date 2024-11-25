import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

const galleryPhoneSwiper = new Swiper('.gallery-swiper', {
  loop: true,
  slidesPerView: 1.5,
});

const galleryDesktopSwiper = new Swiper('.gallery-desktop-swiper', {
  effect: 'coverflow',
  slidesPerView: 5,
  loop: true,
  centeredSlides: true,
  coverflowEffect: {
    rotate: 0,
    stretch: 50,
    depth: 150,
    modifier: 1,
    slideShadows: false,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
