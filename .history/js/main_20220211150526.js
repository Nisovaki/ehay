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
 

    // modal
  var modalButton = $("[data-toggle=modal]");
  var closeModalButton = $(".modal__close");
  modalButton.on("click", openModal);
  closeModalButton.on("click", closeModal);
  
  function openModal() {
    var targetModal = $(this).attr("data-href");
    $(targetModal).find(".modal__overlay").addClass("modal__overlay--visible");
    $(targetModal).find(".modal__dialog").addClass("modal__dialog--visible");
  };

  function closeModal(event) {
    event.preventDefault();
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    modalOverlay.removeClass("modal__overlay--visible");
    modalDialog.removeClass("modal__dialog--visible");
  };

  $(document).keydown(function (event) {
    if (event.keyCode == 27) {
      $(".modal__overlay").removeClass("modal__overlay--visible");
      $(".modal__dialog").removeClass("modal__dialog--visible");
    }
  });


});