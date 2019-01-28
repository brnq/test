// function start(callbackfn) {
function start() {
    let menuParent = document.querySelector(".menu"),
        menuList = document.getElementsByClassName("menu-item");
    menuParent.insertBefore(menuList[2], menuList[1]);

    document.body.style.backgroundImage = "url(./img/apple_true.jpg)";

    let title = document.getElementById("title");
    let titleWords = title.innerText;
    let knife = titleWords.indexOf("технику");
    title.innerText = titleWords.slice(0, knife) + "подлинную " + titleWords.slice(knife);

    document.querySelector(".adv").remove();

    //callbackfn();
}

function question() {
    let answer = prompt("Какое у вас отношение к технике apple?");
    document.getElementById("prompt").innerText = answer;
}

// start(question); //не работает с последовательной загрузкой
start();
setTimeout(question, 1000);