
setTimeout(() => {type([document.getElementById('typing'), document.getElementById('typing-2')], ["Keeping Safe Online","Stay Secure, Safe and Confident: Your Guide to Online Safety"], 50)}, 1000)

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

//   // moving elements
// var velocity = -1.5;
// function update(){ 
// var pos = $(window).scrollTop(); 
// $('.background').each(function() { 
//     var $element = $(this);
//     // subtract some from the height b/c of the padding
//     var height = $element.height()-18;
//     $(this).css('backgroundPosition', '50% ' + Math.round((height - pos) * velocity) +  'px'); 
//    }); 
//    };

//  $(window).bind('scroll', update);