const toggleBtn = document.querySelector(".toggle");
const slideMenu = document.querySelector(".slide-up");
const quote = document.querySelector(".quote");
const timer = document.querySelector(".timer");

const toggleSlide = () => {
  slideMenu.classList.toggle("toggleSlide");
  quote.classList.toggle("quote-animation");

  setTimeout(function () {
    quote.style.display = "none";
  }, 1000);
};

toggleBtn.addEventListener("click", toggleSlide);
