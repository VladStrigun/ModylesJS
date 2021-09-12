import { playSound } from './helpers/playSound';
import { createInterval } from './helpers/createInterval';
import { formatErrorMessage } from '../helpers/formatErrorMessage';

const timerInput = document.getElementById("time"); // Берём строку
const buttonRun = document.getElementById("button");// Берём кнопку запуска
const timerElement = document.getElementById("timer"); // Берём блок для показа времен
const buttonStop = document.getElementById("button_stop");
let timer = null

function onTimeOut() {
    timerElement.innerHTML = "Time Out";
    playSound()
}

function onTimeContinue(timeOut) {
    const seconds = timeOut % 60;
    const minutes = timeOut / 60 % 60;
    const hour = timeOut / 60 / 60 % 60;
    const strTimer = `${Math.trunc(hour)}:${Math.trunc(minutes)}:${seconds}`;

    timerElement.innerHTML = strTimer;
}

function onInvalidInput() {
    timerElement.innerHTML = formatErrorMessage("Заполни поле")
}

buttonRun.addEventListener('click', function () {
    const timeOut = parseInt(timerInput.value) * 60;
    console.log(timeOut);
    if (isNaN(timeOut)) {
        onInvalidInput()
    } else {
        clearInterval(timer);
        timer = createInterval(timeOut, onTimeContinue, onTimeOut);
    }
})

buttonStop.addEventListener('click', function () {
    if (timer) {
        clearInterval(timer);
    }
});
