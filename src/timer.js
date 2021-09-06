

const timerInput = document.getElementById("time"); // Берём строку
const buttonRun = document.getElementById("button");// Берём кнопку запуска
const timerShow = document.getElementById("timer"); // Берём блок для показа времен
const buttonStop = document.getElementById("button_stop");
const tabTitles = Array.from(document.querySelectorAll(".tab_titles>button"));
const tabContents = Array.from(document.querySelectorAll(".tab_contents>div"));
let timer = null

function toggleTabContent(currentIndex) {
    tabContents.forEach((item, index) => {
        const isActive = index === currentIndex;
        const currentTitle = tabTitles[index];

        if (currentTitle) {
            currentTitle.classList.toggle("active", isActive);
        }

        item.classList.toggle("active", isActive);
    });
}

function onClickTabTitle(event) {
    const button = event.target;
    const buttonIndex = tabTitles.indexOf(button);

    toggleTabContent(buttonIndex);
};

function initializeTabs() {
    const currentTabIndexDefault = 0;

    tabTitles.forEach((titleButton) => {
        titleButton.addEventListener("click", onClickTabTitle);
    });

    toggleTabContent(currentTabIndexDefault)
}

initializeTabs();

function createInterval(timeOut, onTimeOut) {
    return setInterval(function () {
        seconds = timeOut % 60 // Получаем секунды
        minutes = timeOut / 60 % 60 // Получаем минуты
        hour = timeOut / 60 / 60 % 60 // Получаем часы
        // Условие если время закончилось то...
        if (timeOut <= 0) {
            // Таймер удаляется
            onTimeOut();
            timerShow.innerHTML = "Time Out";
            clearInterval(timer);
        } else { // Иначе
            // Создаём строку с выводом времени
            let strTimer = `${Math.trunc(hour)}:${Math.trunc(minutes)}:${seconds}`;
            // Выводим строку в блок для показа таймера
            timerShow.innerHTML = strTimer;
        }
        --timeOut; // Уменьшаем таймер
    }, 1000)
}

function playSound() {
    var sound = new Howl({
        src: ['audio/timer-bell_m1tycbno.mp3']
    });

    sound.play();
}

//При нажатии на кнопку берем данные из формы и приобразуем в числовой тип данных, т.к в форме хранится строковый тип, умножаем на 60 для получения минут
buttonRun.addEventListener('click', function () {
    let timeOut = parseInt(timerInput.value) * 60;
    clearInterval(timer);
    timer = createInterval(timeOut, playSound);

})

buttonStop.addEventListener('click', function () {
    if (timer)
        clearInterval(timer);
});




