$(function () {

  $('.slider-blok__inner').slick({
    dots: true,
    prevArrow: '<button type = "button" class = "slick-prev"><img src="images/left.svg" alt="left"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="images/right.svg" alt=""></button>',
    responsive: [{
          breakpoint: 769,
          settings: {
            arrows: false,
          }
        },
      ]
  });

  $('.nav__btn, .nav a').on('click', function(){
    $('.header__top-inner').toggleClass('header__top-inner--active');
  });

  $(".nav a, .to-top").on("click", function (event) {
    event.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({
      scrollTop: top
    }, 1500);
  });

  var mixer = mixitup('.portfolio__content');
});