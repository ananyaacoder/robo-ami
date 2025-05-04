
// Stopwatch functionality
let timer;
let isRunning = false;
let seconds = 0;
const display = document.getElementById('display');
const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
const resetBtn = document.getElementById('resetBtn');
const floatingStopwatch = document.getElementById('floatingStopwatch');
const stopwatchHeader = document.getElementById('stopwatchHeader');
const minimizeBtn = document.getElementById('minimizeBtn');
const stopwatchContent = document.getElementById('stopwatchContent');

function formatTime(secs) {
  const hours = Math.floor(secs / 3600);
  const minutes = Math.floor((secs % 3600) / 60);
  const seconds = secs % 60;
  
  return [
    hours.toString().padStart(2, '0'),
    minutes.toString().padStart(2, '0'),
    seconds.toString().padStart(2, '0')
  ].join(':');
}

function updateDisplay() {
  display.textContent = formatTime(seconds);
}

function startTimer() {
  if (!isRunning) {
    isRunning = true;
    timer = setInterval(() => {
      seconds++;
      updateDisplay();
    }, 1000);
    startBtn.disabled = true;
    stopBtn.disabled = false;
  }
}

function stopTimer() {
  if (isRunning) {
    clearInterval(timer);
    isRunning = false;
    startBtn.disabled = false;
    stopBtn.disabled = true;
  }
}

function resetTimer() {
  stopTimer();
  seconds = 0;
  updateDisplay();
  startBtn.disabled = false;
}

function toggleMinimize() {
  floatingStopwatch.classList.toggle('collapsed');
  minimizeBtn.textContent = floatingStopwatch.classList.contains('collapsed') ? '+' : '−';
}

// Make the stopwatch draggable
let isDragging = false;
let offsetX, offsetY;

stopwatchHeader.addEventListener('mousedown', (e) => {
  if (e.target === minimizeBtn) return;
  
  isDragging = true;
  offsetX = e.clientX - floatingStopwatch.getBoundingClientRect().left;
  offsetY = e.clientY - floatingStopwatch.getBoundingClientRect().top;
  floatingStopwatch.style.cursor = 'grabbing';
});

document.addEventListener('mousemove', (e) => {
  if (!isDragging) return;
  
  floatingStopwatch.style.left = `${e.clientX - offsetX}px`;
  floatingStopwatch.style.top = `${e.clientY - offsetY}px`;
  floatingStopwatch.style.right = 'auto';
  floatingStopwatch.style.bottom = 'auto';
});

document.addEventListener('mouseup', () => {
  isDragging = false;
  floatingStopwatch.style.cursor = 'pointer';
});

// Event listeners
startBtn.addEventListener('click', startTimer);
stopBtn.addEventListener('click', stopTimer);
resetBtn.addEventListener('click', resetTimer);
minimizeBtn.addEventListener('click', toggleMinimize);
stopwatchHeader.addEventListener('dblclick', toggleMinimize);

// Initialize display
updateDisplay();