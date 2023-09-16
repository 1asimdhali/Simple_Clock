var hours = document.getElementById("hours");
var minutes = document.getElementById("minutes");
var seconds = document.getElementById("seconds");

setInterval(function () {
    var date = new Date();

    var hour = date.getHours();
    var minute = date.getMinutes();
    var second = date.getSeconds();

    hours.innerText = hour;
    minutes.innerText = minute;
    seconds.innerText = second;
}, 1000);
