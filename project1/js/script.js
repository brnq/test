let money = +prompt("Ваш бюджет на месяц?"),
    time = prompt("Введите дату в формате YYYY-MM-DD");

let appData = {
    "budget": money,
    "timeData": time,
    "expenses": {},
    "optionalExpenses": {},
    "income": [],
    "savings": false,
    "moneyPerDay": money / 30
};

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

//Вариант цикла №2
// let counter = 0;
// while (counter < 2) {
//     let ans1 = prompt("Введите обязательную статью расходов в этом месяце");
//     let ans2 = prompt("Во сколько обойдется?");
//     if (ans1 == null || ans2 == null || ans1 == '' || ans2 == '' ||
//         ans1.length > 50 || ans2.length > 50) {
//         console.log("wrong data");
//         counter--;
//     } else {
//         appData.expenses[ans1] = ans2;
//     }
//     counter++;
// }

//Вариант цикла №3
// let counter = 0;
// do {
//     let ans1 = prompt("Введите обязательную статью расходов в этом месяце");
//     let ans2 = prompt("Во сколько обойдется?");
//     if (ans1 == null || ans2 == null || ans1 == '' || ans2 == '' ||
//         ans1.length > 50 || ans2.length > 50) {
//         console.log("wrong data");        
//     } else {
//         appData.expenses[ans1] = ans2;
//         counter++;
//     }
// }
// while (counter < 2);



alert("Бюджет на 1 день: " + appData.moneyPerDay);

console.log("End of script");