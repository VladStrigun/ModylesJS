export function createInterval(timeOut, onTimeContinue, onTimeOut) {
    return setInterval(function () {
        if (timeOut <= 0) {
            // Таймер удаляется
            onTimeOut();
            clearInterval(timer);
        } else { // Иначе
            onTimeContinue(timeOut);
        }
        --timeOut; // Уменьшаем таймер
    }, 1000)
}