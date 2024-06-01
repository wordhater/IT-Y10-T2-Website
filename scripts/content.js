function swapnav() {
    console.log("navtoggle")
    document.getElementById("side-nav").classList.toggle("navshown")
}

// Jquery Dependent

// current link highlighter
$(window).scroll(function() {
    let scrollPos = $(window).scrollTop();
    let navH = $('.headerbg').height();
    $('section').each(function(i){
        var offT = $(this).offset().top;
        if((offT-scrollPos-navH-200) <= 0) {
            $('.side-nav-current').removeClass('side-nav-current')
            $('.side-nav li').eq(i).addClass('side-nav-current')
        }
    })
});


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