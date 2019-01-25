let money, time;
let appData = {
    "budget": money,
    "timeData": time,
    "expenses": {},
    "optionalExpenses": {},
    "income": [],
    "savings": true,
    "moneyPerDay": 0
};

function start() {
    money = +prompt("Ваш бюджет на месяц?");
    time = prompt("Введите дату в формате YYYY-MM-DD");

    while (isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?");
    }
}

function chooseExpenses() {
    for (let i = 0; i < 2; i++) {
        let ans1 = prompt("Введите обязательную статью расходов в этом месяце");
        let ans2 = prompt("Во сколько обойдется?");
        if (ans1 == null || ans2 == null || ans1 == '' || ans2 == '' ||
            ans1.length > 50 || ans2.length > 50) {
            console.log("wrong data");
            i--;
        } else {
            appData.expenses[ans1] = ans2;
        }
    }
}

function chooseOptExpenses(){
    for (let i = 1; i <= 3; i++){
        let optExpense = prompt("Статья необязательных расходов?");
        appData.optionalExpenses[i] = optExpense;
    }
}

function detectDayBudget() {
    appData.moneyPerDay = money / 30;
    alert("Бюджет на 1 день: " + appData.moneyPerDay.toFixed());
}

function detectLevel() {
    if (appData.moneyPerDay < 100) {
        console.log("Низкий уровень достатка.");
    } else if (appData.moneyPerDay >= 100 && appData.moneyPerDay < 2000) {
        console.log("Средний уровень достатка.");
    } else if (appData.moneyPerDay >= 2000) {
        console.log("Высокий уровень достатка.");
    } else {
        console.log("Произошла ошибка.");
    }
}

function checkSavings() {
    if (appData.savings == true) {
        let save = +prompt("Какова сумма накоплений?"),
            percent = +prompt("Под какой процент?");
        appData.monthIncome = save / 100 / 12 * percent;
        alert("Прибыль с депозита за месяц: " + appData.monthIncome);
    }
}

start();
chooseExpenses();
chooseOptExpenses();
detectDayBudget();
detectLevel();
checkSavings();

console.log("End of script");