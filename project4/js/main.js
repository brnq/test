let startBtn = document.getElementById("start");

let resultValues = {};
let resultTableItems = document.getElementsByClassName("result-table")[0].children;
for (let i = 0; i < resultTableItems.length; i++) {
    if (resultTableItems[i].className.indexOf("-value") != -1) {
        resultValues[resultTableItems[i].className] = resultTableItems[i];
    }
}

let inputExpenses = document.getElementsByClassName("expenses-item");

let allBtns = document.getElementsByTagName("button");
let confirmBtn = [],
    calcBtn;
for (let i = 0; i < allBtns.length; i++) {
    console.log(allBtns[i].textContent);
    if (allBtns[i].textContent == "Утвердить") {
        confirmBtn.push(allBtns[i]);
    } else if (allBtns[i].textContent == "Рассчитать") {
        calcBtn = allBtns[i];
    }
}

let inputOptExpenses = document.querySelectorAll(".optionalexpenses-item");

let inputChooseIncome = document.querySelector("#income"),
    checkboxSavings = document.querySelector("#savings"),
    inputSum = document.querySelector("#sum"),
    inputPercent = document.querySelector("#percent"),
    inputYear = document.querySelector(".year-value"),
    inputMonth = document.querySelector(".month-value"),
    inputDay = document.querySelector(".day-value");
