//typing effect

let index = 0
function type(elements, texts, speed){
    let skips = 0
    console.log("running")
    for (let i = 0; i<elements.length; i++) {
        if (index < texts[i].length) {
            elements[i].innerHTML += texts[i].charAt(index)
        } else {skips += 1}}
    index++
    if (skips != elements.length){
        setTimeout(() => {type(elements, texts, speed)}, speed)
    }
}
console.log("about script loaded")
setTimeout(() => {type([document.getElementById('typing'), document.getElementById('typing-2')], ["Keeping Safe Online","Stay Secure, Safe and Confident: Your Guide to Online Safety"], 50)}, 1000)

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