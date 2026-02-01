var myNav = document.getElementById("mynav");

window.onscroll = function () {
    "use strict";
    if (document.body.scrollTop >= 80 || document.documentElement.scrollTop >= 80) {
        myNav.classList.add("nav-scrolled");
    } else {
        myNav.classList.remove("nav-scrolled");
    }
};

// Mobile nav toggle
var navBtn = document.querySelector(".nav-toggle");
navBtn.onclick = function () {
    myNav.classList.toggle("nav-open");
    navBtn.textContent = myNav.classList.contains("nav-open") ? "✕" : "☰";
};
