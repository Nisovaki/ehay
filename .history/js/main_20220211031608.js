$(document).ready(function () {
  var cardSwiper = new Swiper(".card-swiper", {
    direction: "horizontal",
    spaceBetween: 26,
    loop: false,

    grid: {
      rows: 1,
    },

    navigation: {
      nextEl: ".card-button-next",
      prevEl: ".card-button-prev",
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

  var unreleasedSwiper = new Swiper(".unreleased-swiper", {
    direction: "horizontal",
    spaceBetween: 32,
    loop: false,

    grid: {
      rows: 1,
    },

    navigation: {
      nextEl: ".unreleased__button--next",
      prevEl: ".unreleased__button--prev",
    },

    breakpoints: {
    //   320: {
    //     slidesPerView: 2,
    //     spaceBetween: 10,
    //   },

    //   768: {
    //     slidesPerView: 3,
    //     spaceBetween: 10,
    //   },

    //   992: {
    //     slidesPerView: 4,
    //     spaceBetween: 15,
    //   },

      1200: {
        slidesPerView: 5,
        spaceBetween: 32,
      },
    },
  });

  var player;
  $('video__play').on('click', function onYouTubeIframeAPIReady() {
        player = new YT.Player('player', {
          height: '1005',
          width: '380',
          videoId: 'Ci8GJ6D0lJY',
          events: {
            'onReady': videoPlay,
          }
        });
      });

  function videoPlay(params) {
    
  }

});