var swiper = new Swiper('.swiper', {
  loop: true,
  disableOnInteraction: false,
  centerInsufficientSlides: boolean,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    320: {
      slidesPerView: 4,
      spaceBetween: 20
    },
  },

  

});