let sec = 0;
let min = 0;
let hr = 0;
let ds = 0;
let dm = 0;
let dh = 0;
let interval = null;
let status = "stopped";


function stopWatch() {

    sec++;


    if (sec / 60 === 1) {
        sec = 0;
        min++;

        if (min / 60 === 1) {
            min = 0;
            hr++;
        }

    }


    if (sec < 10) {
        ds = "0" + sec.toString();
    } else {
        ds = sec;
    }

    if (min < 10) {
        dm = "0" + min.toString();
    } else {
        dm = min;
    }

    if (hr < 10) {
        dh = "0" + hr.toString();
    } else {
        dh = hr;
    }


    document.getElementById("display").innerHTML = dh + ":" + dm + ":" + ds;

}



function startStop() {

    if (status === "stopped") {

        //Start the stopwatch (by calling the setInterval() function)
        interval = window.setInterval(stopWatch, 1000);
        document.getElementById("startStop").innerHTML = "Stop";
        status = "started";

    } else {

        window.clearInterval(interval);
        document.getElementById("startStop").innerHTML = "Start";
        status = "stopped";

    }

}


function reset() {

    window.clearInterval(interval);
    sec = 0;
    min = 0;
    hr = 0;
    document.getElementById("display").innerHTML = "00:00:00";
    document.getElementById("startStop").innerHTML = "Start";

}