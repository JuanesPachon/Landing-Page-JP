/* Capture HTML Elements */

const navbar = document.querySelector(".menu-container__icon");
const overlay = document.querySelector(".overlay");
const menuOptions = document.querySelectorAll(".scroll-links__link--mobile");

const scrollLinks = document.querySelectorAll(".scroll-links__link");
const routes = document.querySelector("#third-section");
const locationRoute = document.querySelector("#fourth-section");
const plans = document.querySelector("#fifth-section");

navbar.addEventListener("click", function () {
  if (overlay.style.display === "block") {
    overlay.style.display = "none";
  } else {
    overlay.style.display = "block";
  }
});

scrollLinks[0].addEventListener("click", () => {
  routes.scrollIntoView({ behavior: "smooth" });
});

scrollLinks[1].addEventListener("click", () => {
  locationRoute.scrollIntoView({ behavior: "smooth" });
});

scrollLinks[2].addEventListener("click", () => {
  plans.scrollIntoView({ behavior: "smooth" });
});

menuOptions.forEach((option) => {
  /* We use ForEach due to in this case menuOptions is a nodelist */
  option.addEventListener("click", function () {
    /* that`s why we gotta add an event for each scroll link */ overlay.style.display =
      "none";
  });
});

menuOptions[0].addEventListener("click", () => {
  routes.scrollIntoView({ behavior: "smooth" });
});

menuOptions[1].addEventListener("click", () => {
  locationRoute.scrollIntoView({ behavior: "smooth" });
});
