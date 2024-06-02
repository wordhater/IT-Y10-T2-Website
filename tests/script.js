const tests = [{
    "name": "cyberbullying",
    "answers": [0, 2, [0, 2, 3]],
    "qtypes": [0, 0, 1]
}, {
    "name": "phishing",
    "answers": [3, [0, 2, 3], [0, 1, 2], 2, [0, 1, 2, 4, 5], [1, 2, 4]],
    "qtypes": [0, 1, 1, 0, 1, 1]
}, {

}]

function end_test(test_id) {
    // get inputs
    let inputs = []
    for (let i = 0; i<tests[test_id].qtypes.length; i++){
        if (tests[test_id].qtypes[i] == 0){
            inputs[i] = Number(document.querySelector(`input[name="q${i+1}"]:checked`).value);
        } else if (tests[test_id].qtypes[i] == 1){
            let multichoice = document.querySelectorAll(`input[name="q${i+1}"]:checked`)
            console.log(multichoice)
            inputs[i] = []
            for (let ii = 0; ii<multichoice.length; ii++) {
                inputs[i][ii] = Number(multichoice[ii].value)
            }
        }
    }
    console.log(inputs)
    document.querySelectorAll('.result-icons').forEach(element => {element.classList.add("hidden")})
    //process inputs
    let states = []
    let correctnums = [0, 0]
    for (let i = 0; i<tests[test_id].qtypes.length; i++){
        if (tests[test_id].qtypes[i] == 0){
            if (inputs[i] == tests[test_id].answers[i]) {
                states[i] = 1
                correctnums[0] += 1
                correctnums[1] += 1
                console.log("CORRECT")
                document.getElementById(`q${i+1}-correct`).classList.remove('hidden')
            } else {
                correctnums[1] += 1
                console.log("INCORRECT")
                document.getElementById(`q${i+1}-incorrect`).classList.remove('hidden')
            }
        } else if (tests[test_id].qtypes[i] == 1){
            let correct = true
            if (inputs[i].length != tests[test_id].answers[i].length) {correct=false; console.log("incorrect selection")}
            for (let ii = 0; ii<inputs[i].length; ii++){
                if (inputs[i][ii] != tests[test_id].answers[i][ii]){correct=false}
            }
            if (correct) {
                states[i] = 1
                correctnums[0] += 1
                correctnums[1] += 1
                console.log("CORRECTmulti")
                document.getElementById(`q${i+1}-correct`).classList.remove('hidden')
            } else {
                correctnums[1] += 1
                console.log("INCORRECTmulti")
                document.getElementById(`q${i+1}-incorrect`).classList.remove('hidden')
            }
        }
    }
    // show results
    document.querySelectorAll('.scores').forEach(element => {element.remove()})
    let congrastring = ""
    if (correctnums[0] == correctnums[1]){
        congrastring = "Congratulations you got 100%! <a href='index.html'>click here to return to all tests</a>"
        play("all-correct")
    }
    let html = `
    <h3 class="scores">You Got: ${correctnums[0]}/${correctnums[1]}</h3>
    <h3 class="scores">${congrastring}</h3>
    `
    document.getElementById('score').appendChild(create(html))
}

// Jquery dependant

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