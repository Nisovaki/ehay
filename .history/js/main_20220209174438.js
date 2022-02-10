  //Слайдер hotel
  var unreleasedSwiper = new Swiper('.unreleased', {
    // Optional parameters
    loop: true,
    
    // Navigation arrows
    navigation: {
      nextEl: '.hotel-swiper__button--next',
      prevEl: '.hotel-swiper__button--prev',
    },
    
    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },
  });