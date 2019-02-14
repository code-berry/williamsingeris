const el1 = $('#home-row');
const el2 = $('#home-bg2');

AOS.init();

$(document).on('scroll', function() {
	var y_scroll_pos = window.pageYOffset;
	if (window.innerWidth < 500) {
		el1.css('display', 'flex').hide().fadeIn(1000);
		$(document).off('scroll');
	} else {
		if (y_scroll_pos > 200) {
			el1.css('display', 'flex').hide().fadeIn(1000);
			$(document).off('scroll');
		}
	}
});

$(document).ready(function() {
	setTimeout(function() {
		$('.cure').textillate({loop: false});
	}, 750);
	$('#lm-h-button').fadeIn(2000);
	$('#lhr').animate({width: "25%"}, 1000);
	$('#rhr').animate({width: "25%"}, 1000);
	
	if (window.innerWidth < 390) {
		$('.nav-link').removeClass('animated').removeClass('fadeIn');
		$('#lm-h-button').text('Donate Now');
		$('#lm-h-button').css('width', 'unset');
	}
	else if (window.innerWidth < 768) {
		$('.nav-link').removeClass('animated').removeClass('fadeIn');
	}
});

$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
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
          };
        });
      }
    }
  });
