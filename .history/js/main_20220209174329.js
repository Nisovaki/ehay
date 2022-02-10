var menuButton = document.querySelector(".menu-button");
  menuButton.addEventListener('click', function () {
    document.querySelector(".navbar-bottom").classList.toggle('navbar-bottom--visible');
  });
  //Слайдер hotel
  var hotelSwiper = new Swiper('.hotel-swiper', {
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