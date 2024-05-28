/*OPTIMISE THIS*/
var i = 0;
var txt = 'Stay Secure, Safe and Confident: Your Guide to Online Safety';
var speed = 30;
function typeWriter() {
    if (i < txt.length) {
        document.getElementById("typing").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}
setTimeout(() => {typeWriter()}, 1000)

var i2 = 0;
var txt2 = 'KKeeping Safe Online';
function typeWriter2() {
    if (i2 < txt2.length) {
        document.getElementById("typing-2").innerHTML += txt2.charAt(i);
        i2++;
        setTimeout(typeWriter2, speed);
    }
}
setTimeout(() => {typeWriter2()}, 1000)

jQuery(function($) {
    // Function which adds the 'animated' class to any '.animatable' in view
    var doAnimations = function() {
      // Calc current offset and get all animatables
      var offset = $(window).scrollTop() + $(window).height(),
          $animatables = $('.animatable');
      // Unbind scroll handler if we have no animatables
      if ($animatables.size() == 0) {
        $(window).off('scroll', doAnimations);
      }
      
      // Check all elements and animate them if necessary
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