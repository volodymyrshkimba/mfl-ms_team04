import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

const galleryPhoneSwiper = new Swiper('.gallery-swiper', {
  loop: true,
  slidesPerView: 1.5,
});

const galleryDesktopSwiper = new Swiper('.gallery-desktop-swiper', {
  effect: 'coverflow',
  slidesPerView: 5,
  centeredSlides: true,
  initialSlide: 2,
  speed: 1000,
  coverflowEffect: {
    rotate: 0,
    stretch: 80,
    depth: 150,
    modifier: 1,
    slideShadows: false,
  },

  navigation: {
    nextEl: '.gallery-swiper-button-next',
    prevEl: '.gallery-swiper-button-prev',
  },
});
