  //Слайдер hotel
  var unreleasedSwiper = new Swiper('.unreleased', {
    // Optional parameters
    loop: true,
    
    // Navigation arrows
    navigation: {
      nextEl: '.unreleased__button--next',
      prevEl: '.unreleased__button--prev',
    },
    
    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },
  });