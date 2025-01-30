// Stopwatch Variables
let minutes = 0, seconds = 0, milliseconds = 0;
let timer;
let isRunning = false;

// Get HTML Elements
const startPauseBtn = document.getElementById("startPauseBtn");
const resetBtn = document.getElementById("resetBtn");
const lapBtn = document.getElementById("lapBtn");
const minutesDisplay = document.getElementById("minutes");
const secondsDisplay = document.getElementById("seconds");
const millisecondsDisplay = document.getElementById("milliseconds");
const lapsContainer = document.getElementById("laps");

// Start/Pause Button Click Event
startPauseBtn.addEventListener("click", function () {
    if (isRunning) {
        clearInterval(timer);
        startPauseBtn.textContent = "Start";
    } else {
        timer = setInterval(updateStopwatch, 10);
        startPauseBtn.textContent = "Pause";
    }
    isRunning = !isRunning;
});

// Reset Button Click Event
resetBtn.addEventListener("click", function () {
    clearInterval(timer);
    minutes = seconds = milliseconds = 0;
    updateDisplay();
    lapsContainer.innerHTML = "";
    startPauseBtn.textContent = "Start";
    isRunning = false;
});

// Lap Button Click Event
lapBtn.addEventListener("click", function () {
    if (isRunning) {
        let lapTime = `${formatTime(minutes)}:${formatTime(seconds)}:${formatTime(milliseconds)}`;
        let lapItem = document.createElement("li");
        lapItem.textContent = `Lap ${lapsContainer.children.length + 1}: ${lapTime}`;
        lapsContainer.appendChild(lapItem);
    }
});

// Update Stopwatch Display
function updateStopwatch() {
    milliseconds++;
    if (milliseconds === 100) {
        milliseconds = 0;
        seconds++;
    }
    if (seconds === 60) {
        seconds = 0;
        minutes++;
    }
    updateDisplay();
}

// Update Time Display
function updateDisplay() {
    minutesDisplay.textContent = formatTime(minutes);
    secondsDisplay.textContent = formatTime(seconds);
    millisecondsDisplay.textContent = formatTime(milliseconds);
}

// Format Time (Add Leading Zero)
function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}
