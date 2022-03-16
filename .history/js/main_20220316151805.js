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
        slidesPerView: 1,
        spaceBetween: 10,
        slidesPerGroup: 1,
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
        slidesPerGroup: 1,
      },

      992: {
        slidesPerView: 3,
        spaceBetween: 15,
        slidesPerGroup: 1,
      },

      1200: {
        slidesPerView: 5,
        spaceBetween: 30,
        slidesPerGroup: 5,
      },

       1201: {
        slidesPerView: 5,
        spaceBetween: 30,
        slidesPerGroup: 1,
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
    document.querySelector(".navbar-top").classList.toggle('navbar-wrapper__block--mobile_visible');
  });

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

    $(".form").each(function () {
    $(this).validate({
      errorClass: "invalid",
      rules: {
        nameModal: {
          required: true,
          minlength: 2,
        },
        email: {
          required: true,
          email: true,
        },
        emailModal: {
          required: true,
          email: true,
        },
        phoneModal: {
          required: true,
          minlength: 18,
        },
      },
      messages: {
        nameModal: {
          required: "Пожалуйста введите свое имя",
          minlength: "Минимум 2 бкувы",
        },
        phoneModal: {
          required: "Пожалуйста введите свой телефон",
          minlength: "Минимум 10 цифр",
        },
        email: {
          required: "Пожалуйста введите свой Email",
          email: "Ваша почта должна быть формата name@domain.com",
        },
        emailModal: {
          required: "Пожалуйста введите свой Email",
        },
      },
    });
  });

  $(".phone").mask("+7 (000) 000-00-00");

  var heardLike = document.getElementById("heard");
  heardLike.addEventListener("click", function () {
    document.getElementById("heard").classList.toggle("trends-price__link--active");
  });

  var heardLike = document.getElementById("heard2");
  heardLike.addEventListener("click", function () {
    document.getElementById("heard2").classList.toggle("trends-price__link--active");
  });

  var heardLike = document.getElementById("heard3");
  heardLike.addEventListener("click", function () {
    document.getElementById("heard3").classList.toggle("trends-price__link--active");
  });

  var heardLike = document.getElementById("heard4");
  heardLike.addEventListener("click", function () {
    document.getElementById("heard4").classList.toggle("trends-price__link--active");
  });

  var heardLike = document.getElementById("heard5");
  heardLike.addEventListener("click", function () {
    document.getElementById("heard5").classList.toggle("trends-price__link--active");
  });

  var heardLike = document.getElementById("heard6");
  heardLike.addEventListener("click", function () {
    document.getElementById("heard6").classList.toggle("trends-price__link--active");
  });

  var mark = document.getElementById("markIcon");
  mark.addEventListener("click", function () {
    document.getElementById("markIcon").classList.toggle("history__img--active");
  });

  var mark = document.getElementById("markIcon2");
  mark.addEventListener("click", function () {
    document.getElementById("markIcon2").classList.toggle("history__img--active");
  });

  var mark = document.getElementById("markIcon3");
  mark.addEventListener("click", function () {
    document.getElementById("markIcon3").classList.toggle("history__img--active");
  });

  if (window.matchMedia("(max-width: 992px)").matches) {
  animOff();
  }
});