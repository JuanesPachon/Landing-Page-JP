
/* Capture HTML Elements */

const navbar = document.querySelector(".menu-container__icon");
const overlay = document.querySelector(".overlay")
const scrollLinks = document.querySelectorAll(".scroll-links__link--mobile")

navbar.addEventListener("click", function() {

    if (overlay.style.display === 'block') {
        overlay.style.display = 'none';
    } else {
        overlay.style.display = 'block';
    }
})

scrollLinks.forEach(link => {                 /* We use ForEach due to in this case scrollLinks is a nodelist */
    link.addEventListener("click", function() {      /* that`s why we gotta add an event for each scroll link */
        overlay.style.display = 'none';
    });
});




