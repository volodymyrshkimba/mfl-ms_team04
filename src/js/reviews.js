import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

const reviewsPhoneSwiper = new Swiper('.reviews-phone-swiper-select', {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 50,
});

const reviewsDesktopSwiper = new Swiper('.reviews-desktop-swiper-select', {
  slidesPerView: 2,
  effect: 'coverflow',
  centeredSlides: true,
  initialSlide: 1,
  coverflowEffect: {
    rotate: 0,
    stretch: -125,
    depth: 425,
    modifier: 1,
    slideShadows: false,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
