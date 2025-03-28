let timer;
let timeLeft;
let isRunning = false;
let workTime = 0;
let restTime = 0;
let alarm = document.getElementById("alarm");

let workIntervals = [];
let restIntervals = [];

function startTimer(minutes, seconds) {
    if (isRunning) return;

    timeLeft = minutes * 60 + seconds;
    isRunning = true;

    updateDisplay();

    timer = setInterval(function () {
        timeLeft--;
        updateDisplay();

        if (timeLeft <= 0) {
            clearInterval(timer);
            isRunning = false;
            alarm.play();
            if (minutes === 25) {
                workTime += 25;
                startTimer(5, 0); // Automatically start a 5-minute rest after 25 minutes of work
            } else if (minutes === 5) {
                restTime += 5;
                startTimer(25, 0); // Automatically start a 25-minute work session after 5 minutes of rest
            } else if (minutes === 30) {
                restTime += 30;
                startTimer(25, 0); // Automatically start a 25-minute work session after 30 minutes of rest
            }
        }
    }, 1000);
}

function resetTimer() {
    clearInterval(timer);
    isRunning = false;
    updateDisplay();
}

function updateDisplay() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    document.getElementById("time-display").textContent =
        `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

function saveNote() {
    const note = document.getElementById("notes").value.trim();
    if (note) {
        if (timeLeft === 25 * 60) {
            workIntervals.push(note);
        } else {
            restIntervals.push(note);
        }
        document.getElementById("notes").value = ""; // Clear the note input
        updateStats();
    }
}

function updateStats() {
    document.getElementById("work-time").textContent = `Work Time: ${workTime} minutes`;
    document.getElementById("rest-time").textContent = `Rest Time: ${restTime} minutes`;
}

document.getElementById("start").addEventListener("click", () => startTimer(25, 0));
document.getElementById("rest-5").addEventListener("click", () => startTimer(5, 0));
document.getElementById("rest-30").addEventListener("click", () => startTimer(30, 0));
