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

let menuWrapper = document.getElementById("navWrapper");

if (
    "IntersectionObserver" in window &&
    "IntersectionObserverEntry" in window &&
    "intersectionRatio" in window.IntersectionObserverEntry.prototype
) {
    let observer = new IntersectionObserver((entries) => {
        if (entries[0].boundingClientRect.y < 0) {
            menuWrapper.classList.add("bg-primary");
            menuWrapper.classList.add("shadow-lg");
        } else {
            menuWrapper.classList.remove("bg-primary");
            menuWrapper.classList.remove("shadow-lg");
        }
    });
    observer.observe(document.querySelector("#top-of-site-pixel-anchor"));
}
