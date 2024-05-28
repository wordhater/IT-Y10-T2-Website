const tests = [{
    "name": "cyberbullying",
    "answers": [[0], [2], [0, 2, 3]],
    "qtypes": [0, 0, 1]
}, {

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
}