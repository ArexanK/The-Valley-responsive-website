const navbarIcon = document.querySelector(".navbar-icon");
const navbarMenu = document.querySelector(".navbar-menu");
navbarIcon.addEventListener("click", function () {
    navbarMenu.classList.toggle("show");
});


$(document).ready(function () {
    $('.slider').slick({
        dots: true,
        arrows: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1
    });
});