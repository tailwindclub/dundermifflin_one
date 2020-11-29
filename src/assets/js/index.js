console.log("index.js");

/*
	Navigation
*/

let menuIcon = document.getElementById("menuIcon");
let menuIconClose = document.getElementById("menuCloseIcon");
let menu = document.getElementById("menu");

menuIcon.addEventListener("click", function () {
    menu.classList.remove("hidden");

    menuIcon.classList.add("opacity-0");
    menuIconClose.classList.remove("hidden");
    menuIconClose.classList.add("absolute");
});

menuIconClose.addEventListener("click", function () {
    menu.classList.add("hidden");

    menuIcon.classList.remove("opacity-0");
    menuIconClose.classList.add("hidden");
    menuIconClose.classList.remove("absolute");
});
