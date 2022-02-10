var swiper = new Swiper('.swiper', {
  loop: true,

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

  swiper.on('reachEnd', function(){
    swiper.autoplay = false;
})

});