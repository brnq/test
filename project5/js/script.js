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

    let deadLine = "2019-02-15T12:00:00.000+05:00";

    function getTimeRemaining(endtime) {
        let interval = Date.parse(endtime) - Date.now();

        return {
            total: interval,
            seconds: Math.floor((interval / 1000) % 60),
            minutes: Math.floor((interval / 1000 / 60) % 60),
            hours: Math.floor((interval / 1000 / 60 / 60))
        };
    }

    function setClock(timerNodeId, endtime) {
        let timer = document.getElementById(timerNodeId),
            seconds = timer.querySelector(".seconds"),
            minutes = timer.querySelector(".minutes"),
            hours = timer.querySelector(".hours");

        function twoNumbers(num) {
            if (num < 10) {
                return "0" + num;
            } else {
                return "" + num;
            };
        }

        let timeIntervalId = setInterval(updateClock, 1000);
        updateClock();
        function updateClock() {
            let interval = getTimeRemaining(endtime);
            if (interval.total <= 0) {
                hours.textContent = "00";
                minutes.textContent = "00";
                seconds.textContent = "00";
                clearInterval(timeIntervalId);
                return;
            }
            hours.textContent = twoNumbers(interval.hours);
            minutes.textContent = twoNumbers(interval.minutes);
            seconds.textContent = twoNumbers(interval.seconds);
        }
    }
    setClock("timer", deadLine);
});