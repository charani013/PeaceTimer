let twentySecondsBtn = document.getElementById("twentySecondsBtn");
let thirtySecondsBtn = document.getElementById("thirtySecondsBtn");
let fortySecondsBtn = document.getElementById("fortySecondsBtn");
let oneMinuteBtn = document.getElementById("oneMinuteBtn")
let paragraphEl = document.getElementById("timerText");

let counter = 0;
let timerJs = "your moment is complete";
let timerId;

function clearPreviousTime() {
    clearInterval(timerId);
}

twentySecondsBtn.onclick = function() {
    counter = 20;
    clearPreviousTime();
    setTimerAndShow();
};

thirtySecondsBtn.onclick = function() {
    counter = 30;
    clearPreviousTime();
    setTimerAndShow();
};

fortySecondsBtn.onclick = function() {
    counter = 40;
    clearPreviousTime();
    setTimerAndShow();
};

oneMinuteBtn.onclick = function() {
    counter = 60;
    clearPreviousTime();
    setTimerAndShow();
};

function setTimerAndShow() {
    paragraphEl.textContent = counter;
    timerId = setInterval(function() {
        if (counter > 1) {
            counter = counter - 1;
            paragraphEl.textContent = counter;
        } else {
            clearPreviousTime();
            paragraphEl.textContent = timerJs;
        }
    }, 1000)
}