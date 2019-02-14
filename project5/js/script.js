window.addEventListener("DOMContentLoaded", function () {
    "use strict";

    let header = document.querySelector(".info-header"),
        tabBtn = document.querySelectorAll(".info-header-tab"),
        tabContent = document.querySelectorAll(".info-tabcontent");

    function hideTabContent(beginFrom) {
        for (let i = beginFrom; i < tabContent.length; i++) {
            if (!tabContent[i].classList.contains("hide")) {
                tabContent[i].classList.add("hide");
            }
            tabContent[i].classList.remove("show");
        }
    }

    function showTabContent(index) {
        tabContent[index].classList.remove("hide");
        if (!tabContent[index].classList.contains("show")) {
            tabContent[index].classList.add("show");
        }
    }

    hideTabContent(1);

    header.addEventListener("click", function (event) {
        let target = event.target;
        if (target && target.classList.contains("info-header-tab")) {
            hideTabContent(0);
            for (let i = 0; i < tabBtn.length; i++) {
                if (tabBtn[i] == target) {
                    showTabContent(i);
                    break;
                }
            }
        }
    });

    let deadLine = "2019-02-15";

    function getTimeResidual(endtime){
        let interval = Date.parse(endtime) - Date.parse(new Date());

        return {
            total : interval,
            seconds : Math.floor((interval / 1000) % 60),
            minutes : Math.floor((interval / 1000 / 60) % 60),
            hours : Math.floor((interval / 1000 / 60 / 60) % 60) 
        };
    }

    function setClock(timerId){
        let timer = document.getElementById(timerId),
            seconds = timer.querySelector(".seconds"),
            minutes = timer.querySelector(".minutes"),
            hours = timer.querySelector(".hours");
        

        function applyTime(time) {
            hours.textContent = time.hours;
            minutes.textContent = time.minutes;
            seconds.textContent = time.seconds;
            if (time.total <= 0) {
                // clearInterval(intervalId);
            }
        }
        
        let intervalId = setInterval(applyTime(getTimeResidual(deadLine)), 1000);
    }
    setClock("timer");
});