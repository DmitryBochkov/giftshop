$(document).foundation();
$(document).ready(function() {
  $('.no-js').removeClass('no-js');

  //new-products slider
  $('.new-products__slider').slick({
    arrows: false,
    speed: 300,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  $('.new-products .prev').click(function(){
    console.log('click prev');
    $('.new-products__slider').slick('slickPrev');
  });

  $('.new-products .next').click(function(){
    $('.new-products__slider').slick('slickNext');
  });

  //featured-products slider
  $('.featured-products__slider').slick({
    arrows: false,
    speed: 300,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 680,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  $('.featured-products .prev').click(function(){
    $('.featured-products__slider').slick('slickPrev');
  });

  $('.featured-products .next').click(function(){
    $('.featured-products__slider').slick('slickNext');
  });

  // slide in animation
  $(window).scroll(function() {
    $(".slideanim").each(function(){
      var pos = $(this).offset().top;

      var winTop = $(window).scrollTop();
      console.log(winTop);
      if (pos < winTop + 600) {
        $(this).addClass("slide");
      }
    });
  });
});
