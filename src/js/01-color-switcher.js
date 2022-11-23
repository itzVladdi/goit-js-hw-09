function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');
let timerId;

stopBtn.disabled = true;

function colorChanger() {
  document.body.style.backgroundColor = getRandomHexColor();
}

function btnSwitcherDisable() {
  startBtn.disabled = !startBtn.disabled;
  stopBtn.disabled = !stopBtn.disabled;
}

function onStartBtnClick() {
  colorChanger();
  timerId = setInterval(colorChanger, 1000);
  btnSwitcherDisable();
}

function onStopBtnClick() {
  clearInterval(timerId);
  btnSwitcherDisable();
}

startBtn.addEventListener('click', onStartBtnClick);

stopBtn.addEventListener('click', onStopBtnClick);
