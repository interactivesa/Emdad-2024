

$(document).ready(function () {






    // swiper home banner
    let swiper = new Swiper(".homeSwiper", {
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
    let swiper2 = new Swiper(".partnersSwiper", {
        slidesPerView: 5,
        // width:auto,
        spaceBetween: 10,
        slidesPerGroup: 5,
        // Responsive breakpoints
        breakpoints: {
          // when window width is >= 320px
          320: {
            slidesPerView: 1,
            spaceBetween: 20,
            slidesPerGroup: 1,
          },
          // when window width is >= 480px
          700: {
            slidesPerView: 2,
            spaceBetween: 30,
            slidesPerGroup: 2,
          },
          // when window width is >= 640px
          1000: {
            slidesPerView: 3,
            spaceBetween: 40,
            slidesPerGroup: 3,
          },
          1300: {
            slidesPerView: 5,
            spaceBetween: 10,
            slidesPerGroup: 5,
          }
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });


  $(".s_round").hover(function () {
    $(this).parent().parent().toggleClass("b_round_hover");
    // return false;
  });
  $(".s_round").click(function () {
    $(this).parent().prev().toggleClass("flipped");
    // $(this).addClass('s_round_click');
    $(this).children().toggleClass("s_arrow_rotate");
    $(this).toggleClass("b_round_back_hover");
    // return false;
  });
  $(".s_round").on("transitionend", function () {
    $(this).removeClass("s_round_click");
    $(this).addClass("s_round_back");
    // return false;
  });

      // Custom function which toggles between sticky class (is-sticky)
      var stickyToggle = function (sticky, stickyWrapper, scrollElement) {
        var stickyHeight = sticky.outerHeight();
        var stickyTop = stickyWrapper.offset().top;
        if (scrollElement.scrollTop() >= stickyTop) {
            stickyWrapper.height(stickyHeight);
            sticky.addClass("is-sticky");
        }
        else {
            sticky.removeClass("is-sticky");
            stickyWrapper.height('auto');
        }
    };

    // Find all data-toggle="sticky-onscroll" elements
    $('[data-toggle="sticky-onscroll"]').each(function () {
        var sticky = $(this);
        var stickyWrapper = $('<div>').addClass('sticky-wrapper'); // insert hidden element to maintain actual top offset on page
        sticky.before(stickyWrapper);
        sticky.addClass('sticky');

        // Scroll & resize events
        $(window).on('scroll.sticky-onscroll resize.sticky-onscroll', function () {
            stickyToggle(sticky, stickyWrapper, $(this));
        });

        // On page load
        stickyToggle(sticky, stickyWrapper, $(window));
    });
// end document ready
});


  if($('.homeClassParent').length ){
    $('.menuCustom').addClass('homeClass')
    $(window).scroll(function() {    
      var scroll = $(window).scrollTop();
  
      if (scroll >= 100) {
          $(".menuCustom ").removeClass("homeClass");
      } else {
          $(".menuCustom ").addClass("homeClass");
      }
  });
 }
