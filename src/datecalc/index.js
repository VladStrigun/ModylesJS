import { formatErrorMessage } from "../helpers/formatErrorMessage";
import { diffDates } from "./helpers/diffDates";
import { diffToHtml } from "./helpers/diffToHtml";

const dateCalcForm = document.getElementById("datecalc");
const dateCalcResult = document.getElementById("datecalc__result");

dateCalcForm.addEventListener("submit", handleCalcDates);

function handleCalcDates(event) {
    dateCalcResult.innerHTML = "";
    event.preventDefault();

    let { firstDate, secondDate } = event.target.elements;
    firstDate = firstDate.value, secondDate = secondDate.value;

    if (firstDate && secondDate) {
        const diff = diffDates(firstDate, secondDate);
        dateCalcResult.innerHTML = diffToHtml(diff);
    } else {
        dateCalcResult.innerHTML = formatErrorMessage("Для расчета промежутка необходимо заполнить оба поля");
    }
}


