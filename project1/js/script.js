let money, time;
let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true,
    moneyPerDay: 0,
    chooseExpenses: function() {
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
    },
    chooseOptExpenses: function() {
        for (let i = 1; i <= 3; i++){
            let optExpense = prompt("Статья необязательных расходов?");
            appData.optionalExpenses[i] = optExpense;
        }
    },
    detectDayBudget: function() {
        appData.moneyPerDay = money / 30;
        alert("Бюджет на 1 день: " + appData.moneyPerDay.toFixed());
    },
    detectLevel: function() {
        if (appData.moneyPerDay < 100) {
            console.log("Низкий уровень достатка.");
        } else if (appData.moneyPerDay >= 100 && appData.moneyPerDay < 2000) {
            console.log("Средний уровень достатка.");
        } else if (appData.moneyPerDay >= 2000) {
            console.log("Высокий уровень достатка.");
        } else {
            console.log("Произошла ошибка.");
        }
    },
    checkSavings: function() {
        if (appData.savings == true) {
            let save = +prompt("Какова сумма накоплений?"),
                percent = +prompt("Под какой процент?");
            appData.monthIncome = save / 100 / 12 * percent;
            alert("Прибыль с депозита за месяц: " + appData.monthIncome);
        }
    },
    chooseIncome: function() {
        let items = prompt("Что принесет дополнительный доход? (перечислите через запятую)");
        while (typeof(items) != "string" || items == "" || items == null) {
            items = prompt("Что принесет дополнительный доход? (перечислите через запятую)");
        }
        appData.income = items.split(", ");
        appData.income.push(prompt("Может что-то еще?"));
        appData.income.sort();
        let alertMsg = "Споособы доп. заработка: ";
        appData.income.forEach(function(value, index) {
            if (index > 0) {
                alertMsg += value;
                if (index != appData.income.length - 1) {
                    alertMsg += ", ";
                }
            }
        });
        alert(alertMsg);
    },
    about: function() {
        console.log("Наша программа включает в себя данные:");
        for (let key in appData){
            console.log(key);
        }
    }
};

function start() {
    money = +prompt("Ваш бюджет на месяц?");
    time = prompt("Введите дату в формате YYYY-MM-DD");

    while (isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?");
    }
}
start();

console.log("End of script");