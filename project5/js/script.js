window.addEventListener("DOMContentLoaded", function() {
    'use strict';

    let header = document.querySelector(".info-header"),
        tabBtn = document.querySelectorAll(".info-header-tab"),
        tabContent = document.querySelectorAll(".info-tabcontent");

    function hideTabContent(beginFrom) {
        for (let i = beginFrom; i < tabContent.length; i++){
            if (!tabContent[i].classList.contains("hide")){
                tabContent[i].classList.add("hide");
            }
            tabContent[i].classList.remove("show");
        }
    }   

    function showTabContent(index){
        tabContent[index].classList.remove("hide");
        if (!tabContent[index].classList.contains("show")){
            tabContent[index].classList.add("show");
        }
    }

    hideTabContent(1);

    header.addEventListener("click", function(event) {
        let target = event.target;
        if (target && target.classList.contains("info-header-tab")){
            hideTabContent(0);
            for (let i = 0; i < tabBtn.length; i++){
                if (tabBtn[i] == target){
                    showTabContent(i);
                    break;
                }
            }
        }
    });
});