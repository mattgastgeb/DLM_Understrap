(function($){
  $(document).ready(function() {
    $(".remove-inner>div>div").unwrap();
    $(".add-inner-bootstrap-container>.wp-block-group__inner-container").addClass("container");
    $(".wp-block-columns>div").removeClass("wp-block-column");
    $(".contact-wrapper .wpcf7").removeClass("wpcf7");
    $(".advgb-tab-horz-desktop.advgb-tab-stack-mobile.advgb-tab-vert-tablet.advgb-tabs-wrapper.wp-block-advgb-adv-tabs").removeClass().addClass("advgb-tab-horz-desktop advgb-tab-stack-mobile advgb-tab-vert-tablet advgb-tabs-wrapper wp-block-advgb-adv-tabs");
    $(".plans-wrapper .wp-block-columns > div").wrapInner("<div class=\"plans-column-inner\"></div>");
    $(".tabs-wrapper").prepend("<div class=\"before-tabs-slant\">").append("<div class=\"after-tabs-slant\">");

    var heroHeight = $('.hero-wrapper').height();

    if($('body').hasClass('home')) {
      if(!$('#wrapper-navbar nav').hasClass('top-position')) {
        $('#wrapper-navbar nav').addClass('top-position');
      }
    }
  });

  // Check to see if item is in the view port
  $.fn.isInViewport = function() {
    var object = $(this);
    if (object.length) {
      var elementTop = object.offset().top;
      var elementBottom = elementTop + $(this).outerHeight();

      var windowTop = $(window).scrollTop();
      var windowBottom = windowTop + $(window).height();

      return elementBottom > windowTop && elementTop < windowBottom;
    }
  };

  // Animate things in center of viewport on scroll
    $(window).on('resize scroll', function() {
      $('.position-animate-this').each(function() {
        if ($(this).isInViewport()) {
          $(this).addClass('animate');
        }
      });
    });

  // Animate things in center of viewport on document load
    $(document).ready(function() {
      $('.position-animate-this').each(function() {
        if ($(this).isInViewport()) {
          setTimeout(function(){
            $(this).addClass('animate');
          }, 1000);
        }
      });
    });

  $(document).on('scroll', function(){
    var heroHeight = ($('.hero-wrapper').height() / 8);

    if($('body').hasClass('home')) {
      if($(document).scrollTop()>=heroHeight) {

        // if($('.navbar').hasClass('home-position')) {
          $('#wrapper-navbar nav').removeClass('top-position');
        // }
      }

      else {
        if(!$('#wrapper-navbar nav').hasClass('top-position')) {
          $('#wrapper-navbar nav').addClass('top-position');
        }
      }
    }
  });

  // Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          }
        });
      }
    }
  });
})( jQuery );
