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


var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}


window.formbutton = window.formbutton || function () { (formbutton.q = formbutton.q || []).push(arguments) };

/* customize formbutton below*/
formbutton("create", {
    action: "https://formspree.io/f/moqyajdl",
    title: "How can we help?",
    fields: [
        {
            type: "email",
            label: "Email:",
            name: "email",
            required: true,
            placeholder: "your@email.com"
        },
        {
            type: "textarea",
            label: "Message:",
            name: "message",
            placeholder: "What's on your mind?",
        },
        { type: "submit" }
    ],
    styles: {
        title: {
            backgroundColor: "gray"
        },
        button: {
            backgroundColor: "gray"
        }
    }
});