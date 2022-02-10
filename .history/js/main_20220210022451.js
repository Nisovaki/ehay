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

  on: {// on the elements to add events
        slideChangeTransitionEnd: function () {
      if(this.isEnd){
        this.navigation.$nextEl.css('display','none');
      }else{
        this.navigation.$nextEl.css('display','block');  
      }
    },
  },

  on: {
         slideChangeTransitionStart: function () {
      if(this.isStart){
        this.navigation.$prevEl.css('display','none');
      }else{
        this.navigation.$prevEl.css('display','block');  
      }
    },
  },

});