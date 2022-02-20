$(document).ready(function () {
  var cardSwiper = new Swiper(".card-swiper", {
    direction: "horizontal",
    spaceBetween: 26,
    slidesPerGroup: 1,
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
        spaceBetween: 0,
        slidesPerGroup: 2,
        grid: {
          rows: 2,
        },
      },

      768: {
        slidesPerView: 3,
        spaceBetween: 10,
        slidesPerGroup: 1,
        grid: {
          rows: 1,
        },
      },

      992: {
        slidesPerView: 3,
        spaceBetween: 15,
        slidesPerGroup: 1,
        grid: {
          rows: 1,
        },
      },

      1200: {
        slidesPerView: 4,
        spaceBetween: 15,
        slidesPerGroup: 1,
        grid: {
          rows: 1,
        },
      },
  },
});

  //  var hotelSlider = new Swiper('.card-swiper', {
  //   direction: 'horizontal',
  //   slidesPerView: 1,
  //   slidesPerGroup: 1,
  //   slidesPerColumn: 2,

  //   breakpoints: {
  //     320: {
  //       slidesPerView: 2,
  //       slidesPerGroup: 1,
  //       spaceBetween: 10,
  //     },

  //     768: {
  //       slidesPerView: 3,
  //       slidesPerGroup: 1,
  //       spaceBetween: 10,
  //     },
      
  //     992: {
  //       slidesPerView: 3,
  //       slidesPerGroup: 1,
  //       spaceBetween: 15,
  //     },

  //     1200: {
  //       slidesPerView: 4,
  //       slidesPerGroup: 1,
  //       spaceBetween: 30
  //     },
  //   },

  //   navigation: {
  //     nextEl: '.card-button-next',
  //     prevEl: '.card-button-prev',
  //   },

  //   keyboard: {
  //     enabled: true,
  //     onlyInViewport: true,
  //   },

  // });

  var unreleasedSwiper = new Swiper(".unreleased-swiper", {
    direction: "horizontal",
    spaceBetween: 32,
    slidesPerGroup: 1,
    loop: false,

    grid: {
      rows: 1,
    },

    navigation: {
      nextEl: ".unreleased__button--next",
      prevEl: ".unreleased__button--prev",

      grid: {
          rows: 1,
      },
    },

    breakpoints: {
      480: {
        slidesPerView: 2,
        spaceBetween: 10,
        grid: {
          rows: 1,
        },
      },
      
      576: {
        slidesPerView: 2,
        spaceBetween: 10,        
        slidesPerGroup: 2,
        grid: {
          rows: 1,
        },
      },

      768: {
        slidesPerView: 3,
        spaceBetween: 10,
      },

      992: {
        slidesPerView: 3,
        spaceBetween: 15,
        slidesPerGroup: 1,
      },

      1200: {
        slidesPerView: 4,
        spaceBetween: 32,
        slidesPerGroup: 1,
      },

       1201: {
        slidesPerView: 5,
        spaceBetween: 32,
        slidesPerGroup: 1
      },
    },
  });

  var player1;
  $(".video-play").on("click", function onYouTubeIframeAPIReady() {
    player1 = new YT.Player("player1", {
      height: "100%",
      width: "100%",
      videoId: "Ci8GJ6D0lJY",
      events: {
        onReady: videoPlay,
      },
    });
  });
  var player2;
  $(".video-play-2").on("click", function onYouTubeIframeAPIReady() {
    player2 = new YT.Player("player2", {
      height: "100%",
      width: "100%",
      videoId: "Ci8GJ6D0lJY",
      events: {
        onReady: videoPlay,
      },
    });
  });
  var player3;
  $(".video-play-3").on("click", function onYouTubeIframeAPIReady() {
    player3 = new YT.Player("player3", {
      height: "100%",
      width: "100%",
      videoId: "Ci8GJ6D0lJY",
      events: {
        onReady: videoPlay,
      },
    });
  });
  var player4;
  $(".video-play-4").on("click", function onYouTubeIframeAPIReady() {
    player4 = new YT.Player("player4", {
      height: "100%",
      width: "100%",
      videoId: "Ci8GJ6D0lJY",
      events: {
        onReady: videoPlay,
      },
    });
  });
  function videoPlay(event) {
    event.target.playVideo();
  };
 

  var menuButton = document.querySelector(".menu-button__top");
  menuButton.addEventListener('click', function () {
    document.querySelector(".navbar-wrapper__block").classList.toggle('navbar-wrapper__block--mobile_visible');
  });


});