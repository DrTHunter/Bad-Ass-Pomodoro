let timer;
let timeLeft;
let isRunning = false;
let workTime = 0;
let restTime = 0;
let alarm = document.getElementById("alarm");

function startTimer(minutes = 25, seconds = 0) {
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
                updateStats();
                startTimer(5, 0); // Automatically start 5-min rest
            } else if (minutes === 5 || minutes === 30) {
                restTime += minutes;
                updateStats();
                startTimer(25, 0); // Automatically start 25-min work
            }
        }
    }, 1000);
}

function pauseTimer() {
    clearInterval(timer);
    isRunning = false;
}

function resetTimer() {
    clearInterval(timer);
    isRunning = false;
    timeLeft = document.getElementById("minutes").value * 60;
    updateDisplay();
}

function updateDisplay() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    document.getElementById("time-display").textContent =
        `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

function updateStats() {
    document.getElementById("work-time").textContent = `Work Time: ${workTime} minutes`;
    document.getElementById("rest-time").textContent = `Rest Time: ${restTime} minutes`;
}

document.getElementById("start").addEventListener("click", () => startTimer());
document.getElementById("pause").addEventListener("click", pauseTimer);
document.getElementById("reset").addEventListener("click", resetTimer);
