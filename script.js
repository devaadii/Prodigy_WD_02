// script.js
let isRunning = false;
let startTime;
let interval;
const display = document.getElementById("display");
const laps = document.getElementById("laps");

function startStop() {
  if (isRunning) {
    clearInterval(interval);
    document.getElementById("startStop").textContent = "Start";
  } else {
    startTime = startTime ? startTime : new Date().getTime();
    interval = setInterval(updateTime, 10);
    document.getElementById("startStop").textContent = "Pause";
  }
  isRunning = !isRunning;
}

function reset() {
  clearInterval(interval);
  isRunning = false;
  display.innerHTML = "00:00:00";
  document.getElementById("startStop").textContent = "Start";
  laps.innerHTML = "";
}

function updateTime() {
  const currentTime = new Date().getTime();
  const elapsedTime = currentTime - startTime;
  const time = new Date(elapsedTime);
  display.innerHTML = time.toISOString().substr(11, 8);
}

function lap() {
  if (isRunning) {
    const lapTime = display.innerHTML;
    const li = document.createElement("li");
    li.textContent = lapTime;
    laps.appendChild(li);
  }
}
