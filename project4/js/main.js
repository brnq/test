let startBtn = document.getElementById("start"),
    budgetValue = document.getElementsByClassName("budget-value")[0],
    dayBudgetValue = document.getElementsByClassName("daybudget-value")[0],
    levelValue = document.getElementsByClassName("level-value")[0],
    expensesValue = document.getElementsByClassName("expenses-value")[0],
    optionalExpensesValue = document.getElementsByClassName("optionalexpenses-value")[0],
    incomeValue = document.getElementsByClassName("income-value")[0],
    monthSavingsValue = document.getElementsByClassName("monthsavings-value")[0],
    yearSavingsValue = document.getElementsByClassName("yearsavings-value")[0],
    expensesItem = document.getElementsByClassName("expenses-item"),
    expensesItemBtn = document.getElementsByTagName("button")[0],
    optionalExpensesBtn = document.getElementsByTagName("button")[1],
    countBudgetBtn = document.getElementsByTagName("button")[2],
    optionalExpensesItem = document.querySelectorAll(".optionalexpenses-item"),
    chooseIncome = document.querySelector("#income"),
    checkboxSavings = document.querySelector("#savings"),
    chooseSum = document.querySelector("#sum"),
    choosePercent = document.querySelector("#percent"),
    yearValue = document.querySelector(".year-value"),
    monthValue = document.querySelector(".month-value"),
    dayValue = document.querySelector(".day-value");

expensesItemBtn.disabled = true;
optionalExpensesBtn.disabled = true;
countBudgetBtn.disabled = true;

let appData = {
    budget: 0,
    timeData: 0,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false,
    moneyPerDay: 0
};

startBtn.addEventListener("click", function () {
    appData.timeData = new Date(Date.parse(prompt("Введите дату в формате YYYY-MM-DD")));
    appData.budget = +prompt("Ваш бюджет на месяц?");
    while (isNaN(appData.budget) || appData.budget == "" || appData.budget == null) {
        appData.budget = +prompt("Ваш бюджет на месяц?");
    }
    budgetValue.textContent = appData.budget;
    yearValue.value = appData.timeData.getFullYear();
    monthValue.value = appData.timeData.getMonth() + 1;
    dayValue.value = appData.timeData.getDate();
    expensesItemBtn.disabled = false;
    optionalExpensesBtn.disabled = false;

});

expensesItemBtn.addEventListener("click", function () {
    let summ = 0;
    for (let i = 0; i < expensesItem.length; i++) {
        appData.expenses[expensesItem[i].value] = +expensesItem[++i].value;
        summ += +expensesItem[i].value;
    }
    expensesValue.textContent = summ;
    countBudgetBtn.disabled = false;
});

optionalExpensesBtn.addEventListener("click", function () {
    optionalExpensesValue.textContent = "";
    optionalExpensesItem.forEach(function (item, key) {
        appData.optionalExpenses[key] = item.value;
        optionalExpensesValue.textContent += item.value + " ";
    });
});

countBudgetBtn.addEventListener("click", function () {
    let expensesSum = 0;
    for (let key in appData.expenses) {
        expensesSum += appData.expenses[key];
    }
    appData.moneyPerDay = ((appData.budget - expensesSum) / 30).toFixed(1);
    dayBudgetValue.textContent = appData.moneyPerDay;

    if (appData.moneyPerDay < 100) {
        levelValue.textContent = "Низкий уровень достатка.";
    } else if (appData.moneyPerDay >= 100 && appData.moneyPerDay < 2000) {
        levelValue.textContent = "Средний уровень достатка.";
    } else if (appData.moneyPerDay >= 2000) {
        levelValue.textContent = "Высокий уровень достатка.";
    } else {
        levelValue.textContent = "Произошла ошибка.";
    }
});

chooseIncome.addEventListener("input", function () {
    appData.income = chooseIncome.value.split(", ");
    incomeValue.textContent = appData.income;
});

checkboxSavings.addEventListener("click", function () {
    if (appData.savings == false) {
        appData.savings = true;
    } else {
        appData.savings = false;
    }
});

function calcIncome() {
    if (appData.savings == true && chooseSum.value != undefined && choosePercent.value != undefined) {
        appData.monthIncome = (chooseSum.value / 100 / 12 * choosePercent.value).toFixed(2);
        appData.yearIncome = (chooseSum.value / 100 * choosePercent.value).toFixed(2);
        monthSavingsValue.textContent = appData.monthIncome;
        yearSavingsValue.textContent = appData.yearIncome;
    }
}
chooseSum.addEventListener("input", calcIncome);
choosePercent.addEventListener("input", calcIncome);