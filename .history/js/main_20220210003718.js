var swiper = new Swiper('.swiper', {
  loop: false,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    265: {
      slidesPerView: 4,
      spaceBetween: 20
    },
  },

});