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
    loop: false,
    speed: 800,
    slidesPerView: 1,
    spaceBetween: 20,
    autoHeight: true,
    watchOverflow: true,
    
    navigation: {
      nextEl: ".unreleased-button-next",
      prevEl: ".unreleased-button-prev",
    },

    on: {
      init: function () {
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

  const swiperPrev = document.querySelector(".unreleased-button__prev");
  const swiperNext = document.querySelector(".unreleased-button__next");

  swiperPrev.addEventListener("click", () => {
    reviewsSlider.slidePrev();
  });
  swiperNext.addEventListener("click", () => {
    reviewsSlider.slideNext();
  });

  // const swiperPrevTwo = document.getElementById("unpublished__button--prev");
  // const swiperNextTwo = document.getElementById("unpublished__button--next");

  // swiperPrevTwo.addEventListener("click", () => {
  //   unpublishedSlider.slidePrev();
  // });
  // swiperNextTwo.addEventListener("click", () => {
  //   unpublishedSlider.slideNext();
  // });
});