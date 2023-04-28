const hamburgerButton = document.querySelector("#hamburger-button");
const closeButton = document.querySelector("#close-button");

hamburgerButton.addEventListener("click", function () {
  if ((document.getElementById("close-button").style.display = "none")) {
    document.getElementById("hamburger-button").style.display = "none";
    document.getElementById("close-button").style.display = "block";
    document.getElementById("mobile-menu").style.display = "block";
  }
});

closeButton.addEventListener("click", function () {
  if ((document.getElementById("close-button").style.display = "block")) {
    document.getElementById("hamburger-button").style.display = "block";
    document.getElementById("close-button").style.display = "none";
    document.getElementById("mobile-menu").style.display = "none";
  }
});






const swedishNumber = [
  "Sweden",
  "Denmark",
  "Norway",
  "Germany",
  "Netherlands",
  "Spain",
  "Switzerland",
];
const canadianNumber = ["Canada", "United States"];

let phoneLink = document.getElementById("phone-number");

if (!getCookie("phoneNumber")) {
  fetch("https://ipapi.co/json/")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      if (swedishNumber.includes(data.country_name)) {
        setCookie("phoneNumber", "tel:+46 76-007 86 70", 30);
        phoneLink.href = getCookie("phoneNumber");
      } else if (canadianNumber.includes(data.country_name)) {
        setCookie("phoneNumber", "tel:+1 (778) 930-1924", 30);
        phoneLink.href = getCookie("phoneNumber");
      } else {
        setCookie("phoneNumber", "tel:null", 30);
      }
    });
} else {
  phoneLink.href = getCookie("phoneNumber");
}

function getCookie(name) {
  let value = "; " + document.cookie;
  let parts = value.split("; " + name + "=");
  if (parts.length == 2) return parts.pop().split(";").shift();
}

function setCookie(name, value, days) {
  let expires = "";
  if (days) {
    let date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + value + expires + "; path=/";
}
