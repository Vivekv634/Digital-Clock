var hrs = document.querySelector(".hrs");
var min = document.querySelector(".min");
var sec = document.querySelector(".sec");
var colon1 = document.querySelector(".colon1");
var colon2 = document.querySelector(".colon2");

setInterval(() => {
    var currentDate = new Date();
    hrs.innerHTML = (currentDate.getHours() < 10 ? "0" : "") + currentDate.getHours();
    min.innerHTML = (currentDate.getMinutes() < 10 ? "0" : "") + currentDate.getMinutes();
    sec.innerHTML = (currentDate.getSeconds() < 10 ? "0" : "") + currentDate.getSeconds();
    colon1.classList.toggle("blink");
    colon2.classList.toggle("blink");
}, 1000);