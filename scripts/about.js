// Trigger typing animation
setTimeout(() => {type([document.getElementById('typing'), document.getElementById('typing-2')], ["About Us", "Why this site was built"], 100)}, 1000)

// Jquery Dependent

// scroll animations
jQuery(function($) {
    var doAnimations = function() {
        var offset = $(window).scrollTop() + $(window).height(),
        $animatables = $('.animatable');
      	if ($animatables.size() == 0) {
        	$(window).off('scroll', doAnimations);
      	}
        $animatables.each(function(i) {
        	var $animatable = $(this);
        	if (($animatable.offset().top + $animatable.height() - 20) < offset) {
        	  	$animatable.removeClass('animatable').addClass('animated');
    		}
    	});
    };
    // Hook doAnimations on scroll, and trigger a scroll
    $(window).on('scroll', doAnimations);
    $(window).trigger('scroll');
});