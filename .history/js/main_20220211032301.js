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

  var player0;
  $(".video-play").on("click", function onYouTubeIframeAPIReady() {
    player0 = new YT.Player("player0", {
      height: "100%",
      width: "100%",
      videoId: "5qap5aO4i9A",
      events: {
        onReady: videoPlay,
      },
    });
  });
  var player2;
  $(".video-button--first").on("click", function onYouTubeIframeAPIReady() {
    player2 = new YT.Player("player2", {
      height: "100%",
      width: "100%",
      videoId: "5gf20QoQbWg",
      events: {
        onReady: videoPlay,
      },
    });
  });
  var player3;
  $(".video-button--second").on("click", function onYouTubeIframeAPIReady() {
    player3 = new YT.Player("player3", {
      height: "100%",
      width: "100%",
      videoId: "5gf20QoQbWg",
      events: {
        onReady: videoPlay,
      },
    });
  });
  var player4;
  $(".video-button--therd").on("click", function onYouTubeIframeAPIReady() {
    player4 = new YT.Player("player4", {
      height: "100%",
      width: "100%",
      videoId: "5gf20QoQbWg",
      events: {
        onReady: videoPlay,
      },
    });
  });
  function videoPlay(event) {
    event.target.playVideo();
  }

});