$(document).ready(function () {
  var unreleasedSwiper = new Swiper(".unreleased-swiper", {
    direction: "horizontal",
    spaceBetween: 26,
    loop: false,

    grid: {
      rows: 1,
    },

    navigation: {
      nextEl: ".unreleased-button-next",
      prevEl: ".unreleased-button-prev",
    },

    breakpoints: {
      320: {
        slidesPerView: 2,
        spaceBetween: 10,
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


  var transparentButton = querySelector('.unreleased-button__prev')
  var swiperButtonDisabled = querySelector(.swiper-button-disabled)
  switch (num) {
    case 15:
      console.log('Еще год потерпи!');
    case 16:
      console.log('Ура можно!');
    break;
    default :
      console.log('Okkk');
  }

});