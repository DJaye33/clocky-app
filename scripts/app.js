const toggleBtn = document.querySelector(".toggle");
const slideMenu = document.querySelector(".slide-up");
const quote = document.querySelector(".quote");
const timer = document.querySelector(".timer");
const toggleArrow = document.querySelector(".toggle-arrow");
const toggleText = document.querySelector(".toggle-text");
const timeZone = document.querySelector(".time-zone-title");
const timeYear = document.querySelector(".time-year-title");
const timeWeek = document.querySelector(".time-week-title");
const timeNumber = document.querySelector(".time-number-title");
const clockZone = document.querySelector(".clock-zone");
const clockHour = document.querySelector(".clock-hour");
const clockMinutes = document.querySelector(".clock-minutes");
const quoteText = document.querySelector(".quote-text");
const quoteAuthor = document.querySelector(".quote-author");
const quoteRefresh = document.querySelector(".quote img");
const locationCity = document.querySelector(".location-city");
const city = document.querySelector(".city");
const state = document.querySelector(".state");
const moon = document.querySelector(".moon");
const sun = document.querySelector(".sun");
const dayType = document.querySelector(".day-type-text");

const getRandomQuote = () => {
  quoteRefresh.classList.add("rotate");
  fetch("https://api.quotable.io/random")
    .then((response) => response.json())
    .then((data) => {
      quoteText.textContent = data.content;
      quoteAuthor.textContent = data.author;
    })
    .catch((err) => {
      console.log(err);
    });

  setTimeout(function () {
    quoteRefresh.classList.remove("rotate");
  }, 500);
};

// Request World Time
const getWorldTime = () => {
  fetch("https://worldtimeapi.org/api/ip")
    .then((response) => response.json())
    .then((data) => {
      slideAppData(data.timezone, data.day_of_year, data.week_number);
      getHoursMinutes(data.utc_datetime, data.abbreviation);
      convertDayOfWeek(data.day_of_week);
    })
    .catch(console.error);
};

const getCityCountry = () => {
  fetch("https://freegeoip.app/json/")
    .then((response) => response.json())
    .then((data) => {
      city.textContent = data.city;
      state.textContent = data.region_code;
    })
    .catch((err) => {
      console.log(err);
    });
};

getRandomQuote();
getWorldTime();
getCityCountry();

function slideAppData(timezone, dayofyear, weeknumber) {
  timeZone.textContent = timezone;
  timeYear.textContent = dayofyear;
  timeNumber.textContent = weeknumber;
}

function getHoursMinutes(datetime, abbreviation) {
  const myDate = new Date(datetime);
  const hour = myDate.getHours();
  const minutes = myDate.getMinutes();

  getGreeting(hour);

  if (hour <= 9) {
    clockHour.textContent = `0${hour}`;
  } else {
    clockHour.textContent = hour;
  }

  if (minutes <= 9) {
    clockMinutes.textContent = `0${minutes}`;
  } else {
    clockMinutes.textContent = minutes;
  }

  clockZone.textContent = abbreviation;
}

function getGreeting(time) {
  if (time >= 5 && time < 12) {
    dayType.textContent = "Good Morning";
  } else if (time >= 12 && time < 18) {
    dayType.textContent = "Good Afternoon";
  } else if (time >= 18 && time <= 24) {
    dayType.textContent = "Good Evening";
    sun.classList.add("inactive");
    moon.classList.remove("inactive");
    body.style.background = "url('/assets/mobile/bg-image-nigthttime.jpg')";
  } else {
    dayType.textContent = "Good Evening";
    body.style.background = "url('/assets/mobile/bg-image-nigthttime.jpg')";
  }
}

// getGreeting();

// Converts day of week number "0" to english "Sunday"
function convertDayOfWeek(number) {
  switch (number) {
    case 0:
      timeWeek.textContent = "Sunday";
      break;
    case 1:
      timeWeek.textContent = "Monday";
      break;
    case 2:
      timeWeek.textContent = "Tuesday";
      break;
    case 3:
      timeWeek.textContent = "Wednesday";
      break;
    case 4:
      timeWeek.textContent = "Thursday";
      break;
    case 5:
      timeWeek.textContent = "Friday";
      break;
    case 6:
      timeWeek.textContent = "Saturday";
      break;
    default:
      timeWeek.textContent = "N/A";
  }
}

// Slide Animations
const showMore = () => {
  slideMenu.classList.add("toggleSlide");
  quote.classList.remove("showquote");
  quote.classList.add("hidequote");
  toggleArrow.classList.add("rotate");
  toggleText.textContent = "Less";
  timer.classList.remove("timer-down");
  timer.classList.add("move-timer");
};

const showLess = () => {
  quote.style.display = "flex";

  slideMenu.classList.remove("toggleSlide");
  quote.classList.remove("hidequote");
  quote.classList.add("showquote");
  toggleArrow.classList.remove("rotate");
  toggleText.textContent = "more";
  timer.classList.remove("move-timer");
  timer.classList.add("timer-down");
};

const togglerText = () => {
  if (toggleText.textContent === "more") {
    showMore();
  } else {
    showLess();
  }
};

quoteRefresh.addEventListener("click", getRandomQuote);
toggleBtn.addEventListener("click", togglerText);
// End Slide Animations
