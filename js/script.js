const stopWatch = document.querySelector("section#stopWatch");

const hrsSpan = document.querySelectorAll("#stopWatch span")[0];
const minsSpan = document.querySelectorAll("#stopWatch span")[2];
const secSpan = document.querySelectorAll("#stopWatch span")[4];
const msecSpan = document.querySelectorAll("#stopWatch span")[6];

const btnSection = document.querySelector("section.btns");

const startBtn = document.querySelectorAll("section.btns input")[0];
const stopBtn = document.querySelectorAll("section.btns input")[1];
const resetBtn = document.querySelectorAll("section.btns input")[2];

startBtn.addEventListener("click", function () {
    console.log("startbtn clicked");
    start();
    startBtn.setAttribute("disabled", true);
    startBtn.style.borderColor = "rgb(108 156 27)";
    startBtn.style.color = "rgb(108 156 27)";
    setTimeout(() => {
        startBtn.style.borderColor = "#972897";
        startBtn.style.color = "#972897";
    }, 400);
});
stopBtn.addEventListener("click", function () {
    console.log("stopbtn clicked");
    stop();
    startBtn.removeAttribute("disabled");
    stopBtn.style.borderColor = "rgb(108 156 27)";
    stopBtn.style.color = "rgb(108 156 27)";
    setTimeout(() => {
        stopBtn.style.borderColor = "#972897";
        stopBtn.style.color = "#972897";
    }, 400);
});
resetBtn.addEventListener("click", function () {
    console.log("resetbtn clicked");
    reset();
    resetBtn.style.borderColor = "rgb(108 156 27)";
    resetBtn.style.color = "rgb(108 156 27)";
    setTimeout(() => {
        resetBtn.style.borderColor = "#972897";
        resetBtn.style.color = "#972897";
    }, 400);
});

function start() {
    timer();
}
function stop() {
    clearInterval(timerId);
}
function reset() {
    window.location.reload();
}

let seconds = 0, minutes = 0, hours = 0, milliseconds = 0, timerId = null;
function timer() {
    timerId = setInterval(() => {
        if (milliseconds == 100) {
            milliseconds = 0, seconds++;
        }
        if (seconds == 60) {
            seconds = 0, minutes++;
        }
        if (minutes == 60) {
            minutes = 0, hours++;
        }
        console.log(seconds, minutes);
        if (hours < 10) {
            hrsSpan.innerHTML = "0" + hours;
        }
        else {
            hrsSpan.innerHTML = hours;
        }

        if (minutes < 10) {
            minsSpan.innerHTML = "0" + minutes;
        }
        else {
            minsSpan.innerHTML = minutes;
        }

        if (seconds < 10) {
            secSpan.innerHTML = "0" + seconds;
        }
        else {
            secSpan.innerHTML = seconds;
        }
        if (milliseconds < 10) {
            msecSpan.innerHTML = "0" + milliseconds;
        }
        else {
            msecSpan.innerHTML = milliseconds;
        }
        milliseconds++;
    }, 10);
}