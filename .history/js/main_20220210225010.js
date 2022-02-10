$(document).ready(function () {
  var unreleasedSwiper = new Swiper(".unreleased-swiper", {
    loop: false,

    navigation: {
      nextEl: ".unreleased-button-next",
      prevEl: ".unreleased-button-prev",
    },

    breakpoints: {
      320: {
        slidesPerView: 2,
        spaceBetween: 10,
        grid: {
          rows: 2,
        },
      },

      768: {
        slidesPerView: 3,
        spaceBetween: 10,
      },

      992: {
        slidesPerView: 4,
        spaceBetween: 15,
      },

      1200: {
        slidesPerView: 4,
        spaceBetween: 26,
      },
    },
  });




});