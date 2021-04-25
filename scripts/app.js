const toggleBtn = document.querySelector(".toggle");
const slideMenu = document.querySelector(".slide-up");
const quote = document.querySelector(".quote");
const timer = document.querySelector(".timer");
const toggleArrow = document.querySelector(".toggle-arrow");
const toggleText = document.querySelector(".toggle-text");

const showMore = () => {
  slideMenu.classList.add("toggleSlide");
  quote.classList.remove("showquote");
  quote.classList.add("hidequote");
  toggleArrow.classList.add("rotate");
  toggleText.textContent = "Less";

  setTimeout(function () {
    quote.style.display = "none";
  }, 1000);
};

const showLess = () => {
  quote.style.display = "flex";

  slideMenu.classList.remove("toggleSlide");
  quote.classList.remove("hidequote");
  quote.classList.add("showquote");
  toggleArrow.classList.remove("rotate");
  toggleText.textContent = "more";
};

const toggler = () => {
  if (toggleText.textContent === "more") {
    showMore();
  } else {
    showLess();
    console.log("Create slide down function");
  }
};

toggleBtn.addEventListener("click", toggler);
