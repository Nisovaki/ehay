// var swiper = new Swiper('.unreleased-swiper', {
//   loop: false,

//   navigation: {
//     nextEl: '.unreleased-button-next',
//     prevEl: '.unreleased-button-prev',
//   },

//   breakpoints: {
//     265: {
//       slidesPerView: 4,
//       spaceBetween: 20
//     },
//   },

//   on: {
//         slideChangeTransitionEnd: function () {
//       if(this.isEnd){
//         this.navigation.$nextEl.css('display','none');
//       }else{
//         this.navigation.$nextEl.css('display','block');  
//       }
//     },
//   },


// });
$(document).ready(function () {
  var unreleasedSlider = new Swiper(".unreleased-swiper", {
    navigation: {
      nextEl: ".unreleased-button-next",
      prevEl: ".unreleased-button-prev",
    },

    speed: 800,
    slidesPerView: 1,
    spaceBetween: 20,
    autoHeight: true,
    watchOverflow: true,

    on: {
      init: function () {
        console.log("swiper initialized");
        $(".unreleased-button-prev").addClass("unreleased-button-prev--hidden");
      },
    },

    breakpoints: {
      // when window width is >= 320px
      280: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      // when window width is >= 576px
      576: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      // when window width is >= 768px
      768: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      // when window width is >= 1060px
      1060: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
      // when window width is >= 1240px
      1240: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
    },
  });

  var swiperPrev = document.getElementById("unreleased-button--prev");
  var swiperNext = document.getElementById("unreleased-button--next");

  swiperPrev.addEventListener("click", () => {
    reviewsSlider.slidePrev();
  });
  swiperNext.addEventListener("click", () => {
    reviewsSlider.slideNext();
  });

  reviewsSlider.on("reachEnd", function () {
    // console.log("Конец слайдера");
    $(".unreleased-button-next").addClass("unreleased-button-next--hidden");
  });
  reviewsSlider.on("reachBeginning", function () {
    // console.log("Начало слайдера");
    $(".unreleased-button-prev").addClass("unreleased-button--prev--hidden");
  });
  reviewsSlider.on("fromEdge", function () {
    // console.log("Возврат из конечного положения слайдера");
    $(".unreleased-button-next").removeClass("unreleased-button-next--hidden");
    $(".unreleased-button--prev").removeClass("unreleased-button--prev--hidden");
  });

  // unpublishedSlider.on("reachEnd", function () {
  //   // console.log("Конец слайдера");
  //   $(".unpublished__button--next").addClass("unpublished__button--next--hidden");
  // });
  // unpublishedSlider.on("reachBeginning", function () {
  //   // console.log("Начало слайдера");
  //   $(".unpublished__button--prev").addClass("unpublished__button--prev--hidden");
  // });
  // unpublishedSlider.on("fromEdge", function () {
  //   // console.log("Возврат из конечного положения слайдера");
  //   $(".unpublished__button--next").removeClass("unpublished__button--next--hidden");
  //   $(".unpublished__button--prev").removeClass("unpublished__button--prev--hidden");
  // });




});