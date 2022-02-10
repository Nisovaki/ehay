var swiper = new Swiper('.swiper', {
  loop: true,
  disableOnInteraction: false,
  pauseOnMouseEnter: false,

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