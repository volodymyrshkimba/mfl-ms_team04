// import Swiper from 'swiper/bundle';
// import 'swiper/css/bundle';

// const reviewsPhoneSwiper = new Swiper('.reviews-phone-swiper-select', {
//   loop: true,
//   slidesPerView: 1,
//   spaceBetween: 50,
// });

// const reviewsDesktopSwiper = new Swiper('.reviews-desktop-swiper-select', {
//   slidesPerView: 2.5,

//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },
// });

// VARIANT-2_____________________________________________________________________________

import Swiper from 'swiper/bundle';

const swiper3 = new Swiper('.swiper-container-3', {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  navigation: {
    nextEl: '.swiper-container-3 .swiper-button-next',
    prevEl: '.swiper-container-3 .swiper-button-prev',
  },
  breakpoints: {
    1200: { slidesPerView: 3, navigation: true },
    0: { navigation: false, slidesPerView: 1 },
  },
});
