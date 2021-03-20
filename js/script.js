const hamburgerMenu = document.querySelector(".hamburger-menu");

hamburgerMenu.addEventListener("click", function (event) {
    event.preventDefault();
    if (subMenu.style.display === "block") {
        subMenu.style.display = "none";
    } else {
        subMenu.style.display = "block";
    }
});


const subMenu = document.querySelector(".sub-menu");

const themeSwitch = document.querySelector('input');

themeSwitch.addEventListener('change', () => {
    document.body.classList.toggle('dark-theme');
});