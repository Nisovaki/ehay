$(document).ready(function () {

  $(".unreleased").slick({
          slidesToShow: 4,
          infinite: false,
          slidesToScroll: 1,
          autoplaySpeed: 2000,
          adaptiveHeight: true,
          prevArrow: prevArrow,
          nextArrow: nextArrow,
          asNavFor: ".slide-adaptive",
          responsive: [
              {
                  breakpoint: 1024,
                  settings: {
                      slidesToShow: 3,
                  },
              },
              {
                  breakpoint: 645,
                  settings: {
                      slidesToShow: 2,
                  },
              },
          ],
  });





});