let money, time;
money = prompt("Ваш бюджет на месяц?");
time = prompt("Введите дату в формате YYYY-MM-DD");

let appData = {
    "money": money,
    "timeData": time,
    "expenses": {
        ansver1: ansver2
    },
    optionalExpenses: null,
    income: null,
    savings: false
};

var ansver1 = prompt("Введите обязательную статью расходов в этом месяце");
var ansver2 = prompt("Во сколько обойдется?");

alert("Бюджет на 1 день: " + parseInt(money) / 30);

console.log("End of script");