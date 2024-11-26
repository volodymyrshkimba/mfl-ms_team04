import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

const reviewsPhoneSwiper = new Swiper('.reviews-phone-swiper-select', {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 50,
});

const reviewsDesktopSwiper = new Swiper('.reviews-desktop-swiper-select', {
  slidesPerView: 2.5,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
