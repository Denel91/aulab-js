import {daysToWeeks, getDaysInMonth, getMonth, getWeeksInMonth, isThisMonth} from "date-fns";

const result = daysToWeeks(14);
console.log(result);

const response = isThisMonth(new Date(2024, 3, 20));
console.log(response);

const month = getMonth(new Date(2024, 3, 9));
console.log(month);

const gennaio = getDaysInMonth(new Date(2024, 0));
console.log(gennaio);

const febbraio = getDaysInMonth(new Date(2024, 1));
console.log(febbraio);

const weeksInMonth = getWeeksInMonth(new Date(2024, 3, 9));
console.log(weeksInMonth);

