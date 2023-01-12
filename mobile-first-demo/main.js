const navbarIcon = document.querySelector(".navbar-icon");
const navbarMenu = document.querySelector(".navbar-menu");
navbarIcon.addEventListener("click", function () {
    navbarMenu.classList.toggle("show");
});