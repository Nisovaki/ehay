var swiper = new Swiper('.unreleased-swiper', {
  loop: false,

  navigation: {
    nextEl: '.unreleased-button-next',
    prevEl: '.unreleased-button-prev',
  },

  breakpoints: {
    265: {
      slidesPerView: 4,
      spaceBetween: 20
    },
  },

  on: {
        slideChangeTransitionEnd: function () {
      if(this.isEnd){
        this.navigation.$nextEl.css('display','none');
      }else{
        this.navigation.$nextEl.css('display','block');  
      }
    },
  },


});

var reviewsSlider = new Swiper(".unreleased-swiper", {
    navigation: {
      nextEl: ".reviews__button--next",
      prevEl: ".reviews__button--prev",
    },

    // Мои параметры
    // effect: "fade",
    speed: 800,
    slidesPerView: 1,
    spaceBetween: 20,
    autoHeight: true,
    watchOverflow: true,
    on: {
      init: function () {
        console.log("swiper initialized");
        $(".reviews__button--prev").addClass("reviews__button--prev--hidden");
      },
    },

    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      // when window width is >= 576px
      576: {
        slidesPerView: 1,
        spaceBetween: 15,
      },
      // when window width is >= 768px
      768: {
        slidesPerView: 1,
        spaceBetween: 15,
      },
      // when window width is >= 1060px
      1060: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
    },
  });