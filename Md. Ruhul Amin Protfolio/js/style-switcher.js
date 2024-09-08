/* =======================  Toggle Style Switcher ================== */

const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");

styleSwitcherToggle.addEventListener("click", () => {
  document.querySelector(".style-switcher").classList.toggle("open");
});

/* =======================  Hide Style Switcher on Scroll ================== */
document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", () => {
    const styleSwitcher = document.querySelector(".style-switcher");

    if (styleSwitcher && styleSwitcher.classList.contains("open")) {
      styleSwitcher.classList.remove("open");
    }
  });
});

/* =======================  Theme Color ================== */
const alternateStyle = document.querySelectorAll(".alternate-style");

function setActiveStyle(color) {
  alternateStyle.forEach((style) => {
    if (color === style.getAttribute("title")) {
      style.removeAttribute("disabled");
    } else {
      style.setAttribute("disabled", "true");
    }
  });
}
/* =======================  Theme Light and Dark Mode ================== */

const dayNight = document.querySelector(".day-night");

dayNight.addEventListener("click", () => {
  dayNight.querySelector("i").classList.toggle("fa-sun");
  dayNight.querySelector("i").classList.toggle("fa-moon");
  document.body.classList.toggle("dark");
});

window.addEventListener("load", () => {
  if (document.body.classList.contains("dark")) {
    dayNight.querySelector("i").classList.add("fa-sun");
  } else {
    dayNight.querySelector("i").classList.add("fa-moon");
  }
});
