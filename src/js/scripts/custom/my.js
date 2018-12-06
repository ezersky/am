/*!
 * Offcanvas Sidebar v0.1
 * Copyright 2017 - present Morten Sørensen (https://moso.io)
 * Licensed under the MIT license
 * --------------------------------------------------------------
 * Script that clones the current Bootstrap markup,
 * and inserts it into a sidebar with some smooth animations
 *
 * - Built to work with Bootstrap 4 and supports multiple navbars
 * - Fully customizable with comments
 */

var window_height;
var window_width;
var navbar_initialized = false;
var nav_toggle;

var offCanvas = {
    sidenav: {
        // Sidenav is not visible by default.
        // Change to 1 if necessary
        sidenav_visible: 0
    },
    initSideNav: function initSideNav() {
        if (!navbar_initialized) {
            var $nav = $('nav');

            // Add the offcanvas class to the navbar if it's not initialized
            $nav.addClass('navbar-offcanvas');

            // Clone relevant navbars
            var $navtop = $nav.find('.navbar-top').first().clone(true);
            var $navbar = $nav.find('.navbar-collapse').first().clone(true);

            // Let's start with some empty vars
            var ul_content = '';
            var top_content = '';

            // Set min-height of the new sidebar to the screen height
            $navbar.css('min-height', window.screen.height);

            // Take the content of .navbar-top
            $navtop.each(function() {
                var navtop_content = $(this).html();
                top_content = top_content + navtop_content;
            });

            // Take the content of .navbar-collapse
            $navbar.children('ul').each(function() {
                var nav_content = $(this).html();
                ul_content = ul_content + nav_content;
            });

            // Wrap the new content inside an <ul>
            ul_content = '<ul class="navbar-nav sidebar-nav">' + ul_content + '</ul>';

            // Insert the html content into our cloned content
            $navbar.html(ul_content);
            $navtop.html(top_content);

            // Append the navbar to body,
            // and insert the content of the navicons navbar just below the logo/nav-image
            $('body').append($navbar);
            $('.nav-image').after($navtop);


            // Set the toggle-variable to the Bootstrap navbar-toggler button
            var $toggle = $('.navbar-toggler');

            // Add/remove classes on toggle and set the visiblity of the sidenav,
            // and append the overlay. Also if the user clicks the overlay,
            // the sidebar will close
            $toggle.on('click', function () {
                if (offCanvas.sidenav.sidenav_visible == 1) {
                    $('html').removeClass('nav-open');
                    offCanvas.sidenav.sidenav_visible = 0;
                    $('#overlay').remove();
                    setTimeout(function() {
                        $toggle.removeClass('toggled');
                    }, 300);
                } else {
                    setTimeout(function() {
                        $toggle.addClass('toggled');
                    }, 300);

                    // Add the overlay and make it close the sidenav on click
                    var div = '<div id="overlay"></div>';
                    $(div).appendTo("body").on('click', function() {
                        $('html').removeClass('nav-open');
                        offCanvas.sidenav.sidenav_visible = 0;
                        $('#overlay').remove();
                        setTimeout(function() {
                            $toggle.removeClass('toggled');
                        }, 300);
                    });

                    $('html').addClass('nav-open');
                    offCanvas.sidenav.sidenav_visible = 1;
                }
            });
            // Set navbar to initialized
            navbar_initialized = true;
        }
    }
};

$(document).ready(function () {
    window_width = $(window).width();

    nav_toggle = $('nav').hasClass('navbar-offcanvas') ? true : false;

    // Responsive checks
    if (window_width < 992 || nav_toggle) {
        offCanvas.initSideNav();
    }

    // Close the sidebar if the user clicks a link or a dropdown-item,
    // and close the sidebar
    $('.nav-link:not(.dropdown-toggle), .dropdown-item').on('click', function () {
        var $toggle = $('.navbar-toggler');

        $('html').removeClass('nav-open');
        offCanvas.sidenav.sidenav_visible = 0;
        setTimeout(function () {
            $toggle.removeClass('toggled');
        }, 300);
    });
});

$(window).resize(function () {
    window_width = $(window).width();

    // More responsive checks if the user resize the browser
    if (window_width < 992) {
        offCanvas.initSideNav();
    }

    if (window_width > 992 && !nav_toggle) {
        $('nav').removeClass('navbar-offcanvas');
        offCanvas.sidenav.sidenav_visible = 1;
        navbar_initialized = false;
    }
});



// Swiper
var swiper = new Swiper('.single', {
  slidesPerView: 1,
  //grabCursor: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

var swiper = new Swiper('.swiper-container.multi-2', {
  slidesPerView: 2,
  spaceBetween: 30,
  freeMode: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    1200: {
      slidesPerView: 2,
      spaceBetween: 30
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 30
    },
    900: {
      slidesPerView: 2,
      spaceBetween: 30
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 10
    },
    320: {
      slidesPerView: 1,
      spaceBetween: 10
    },
    280: {
      slidesPerView: 1,
      spaceBetween: 10
    }
  }
});


var swiper = new Swiper('.swiper-container.multi-3', {
  slidesPerView: 3,
  spaceBetween: 30,
  freeMode: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    1200: {
      slidesPerView: 3,
      spaceBetween: 30
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 30
    },
    900: {
      slidesPerView: 2,
      spaceBetween: 30
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 10
    },
    320: {
      slidesPerView: 1,
      spaceBetween: 10
    },
    280: {
      slidesPerView: 1,
      spaceBetween: 10
    }
  }
});

var swiper = new Swiper('.swiper-container.multi-4', {
  slidesPerView: 4,
  spaceBetween: 30,
  freeMode: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    1200: {
      slidesPerView: 4,
      spaceBetween: 30
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 30
    },
    900: {
      slidesPerView: 3,
      spaceBetween: 30
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 10
    },
    320: {
      slidesPerView: 1,
      spaceBetween: 10
    },
    280: {
      slidesPerView: 1,
      spaceBetween: 10
    }
  }
});

var swiper = new Swiper('.swiper-container.multi-6', {
  slidesPerView: 6,
  spaceBetween: 30,
  freeMode: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    1200: {
      slidesPerView: 6,
      spaceBetween: 30
    },
    1024: {
      slidesPerView: 6,
      spaceBetween: 30
    },
    900: {
      slidesPerView: 4,
      spaceBetween: 30
    },
    640: {
      slidesPerView: 3,
      spaceBetween: 10
    },
    320: {
      slidesPerView: 2,
      spaceBetween: 10
    },
    280: {
      slidesPerView: 2,
      spaceBetween: 10
    }
  }
});

// ScrollUp require full jQuery
$(document).ready(function(){
    //Check to see if the window is top if not then display button
    $(window).scroll(function(){
      if ($(this).scrollTop() > 100) {
        $('.scrollToTop').fadeIn();
      } else {
        $('.scrollToTop').fadeOut();
      }
    });
    //Click event to scroll to top
    $('.scrollToTop').click(function(){
      $('html, body').animate({scrollTop : 0},800);
      return false;
    });
});

$('a[rel="external"]').attr('target', '_blank');

$('.cussel').selectpicker({
  style: 'btn-white',
  actionsBox: true,
  size: 4,
  width: '100%',
  selectAllText: 'Выбрать все',
  deselectAllText: 'Убрать все',
  noneSelectedText: 'Ничего не выбрано',
  noneResultsText: 'Совпадений не найдено {0}',
  countSelectedText: 'Выбрано {0} из {1}',
  doneButtonText: 'Закрыть',
  multipleSeparator: ', ',
  iconBase: 'fas',
  tickIcon: 'fa-check'
});

$("[data-morphing]").fancyMorph({
  hash : 'morphing'
});
