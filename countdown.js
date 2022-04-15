var start = document.getElementById('s');
var reset = document.getElementById('r');

var hr = document.getElementById("hr");
var min = document.getElementById("min");
var sec = document.getElementById("sec");


var startTimer = null;

start.addEventListener('click', function() {
   
    function startInterval() {
        startTimer = setInterval(function() {
            timer();
        }, 1000);
    }
    startInterval();
})

reset.addEventListener('click', function() {
    hr.value = 0;
    min.value = 0;
    sec.value = 0;
    //stop the timer after pressing "reset"
    stopInterval()
})

function timer() {
    if (hr.value == 0 && min.value == 0 && sec.value == 0) {
        hr.value = 0;
        min.value = 0;
        sec.value = 0;
    } else if (sec.value != 0) {
        sec.value--;
    } else if (min.value != 0 && sec.value == 0) {
        sec.value = 59;
        min.value--;
    } else if (hr.value != 0 && min.value == 0) {
        min.value = 60;
        hr.value--;
    }
    return;
}

function stopInterval() {
    clearInterval(startTimer);
}
