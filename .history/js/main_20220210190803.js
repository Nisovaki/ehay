$(document).ready(function () {
  const prevArrow = $(".unreleased-button-prev");
  const nextArrow = $(".slider__button-next");
  $(".unreleased").slick({
          slidesToShow: 4,
          infinite: false,
          slidesToScroll: 1,
          autoplaySpeed: 2000,
          adaptiveHeight: true,
          prevArrow: prevArrow,
          nextArrow: nextArrow,
          asNavFor: ".unreleased-wrapper",
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