$(document).ready(function () {
  var swiper = new Swiper(".genres-swiper", {
    direction: "horizontal",
    spaceBetween: 26,
    grid: {
      rows: 1,
    },
    navigation: {
      nextEl: ".genres-swiper-button-next",
      prevEl: ".genres-swiper-button-prev",
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
        grid: {
          rows: 1,
        },
      },
      992: {
        slidesPerView: 4,
        spaceBetween: 15,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 26,
        grid: {
          rows: 1,
        },
      },
    },
  });




});