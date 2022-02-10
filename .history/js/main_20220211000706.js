$(document).ready(function () {
  var unreleasedSwiper = new Swiper(".unreleased-swiper", {
    direction: "horizontal",
    spaceBetween: 25,
    
Properties
swiper.$el	Dom7Array	
Dom7 element with slider container HTML element. To get vanilla HTMLElement use swiper.el

swiper.$wrapperEl	Dom7Array	
Dom7 element with slider wrapper HTML element. To get vanilla HTMLElement use swiper.wrapperEl

swiper.activeIndex	number	
Index number of currently active slide

Note, that in loop mode active index value will be always shifted on a number of looped/duplicated slides

swiper.allowSlideNext	boolean	
Disable / enable ability to slide to the next slides by assigning false / true to this property

swiper.allowSlidePrev	boolean	
Disable / enable ability to slide to the previous slides by assigning false / true to this property

swiper.allowTouchMove	boolean	
Disable / enable ability move slider by grabbing it with mouse or by touching it with finger (on touch screens) by assigning false / true to this property

swiper.animating	boolean	
true if swiper is in transition

swiper.clickedIndex	number	
Index number of last clicked slide

swiper.clickedSlide	HTMLElement	
Link to last clicked slide (HTMLElement)

swiper.el	HTMLElement	
Slider container HTML element

swiper.height	number	
Height of container

swiper.isBeginning	boolean	
true if slider on most "left"/"top" position

swiper.isEnd	boolean	
true if slider on most "right"/"bottom" position

swiper.originalParams	SwiperOptions	
Object with original initialization parameters

swiper.params	SwiperOptions	
Object with passed initialization parameters

swiper.previousIndex	number	
Index number of previously active slide

swiper.progress	number	
Current progress of wrapper translate (from 0 to 1)

swiper.realIndex	number	
Index number of currently active slide considering duplicated slides in loop mode

swiper.slides	Dom7Array	
Dom7 array-like collection of slides HTML elements. To get specific slide HTMLElement use swiper.slides[1]

swiper.touches	object	
Object with the following touch event properties:

swiper.touches.startX
swiper.touches.startY
swiper.touches.currentX
swiper.touches.currentY
swiper.touches.diff
swiper.translate	number	
Current value of wrapper translate

swiper.widthpx,
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
        spaceBetween: 25,
      },
    },
  });



});