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

let link = document.getElementById("phone-number");

if (!getCookie("dataFetched")) {
  fetch("https://ipapi.co/json/")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      if (data.country_name === "Sweden") {
        link.href = "tel:+46 76-007 86 70";
        setCookie("dataFetched", true, 30);
      } else {
        link.href = "tel:+1 (778) 930-1924";
        setCookie("dataFetched", true, 30);
      }
    });
}

function getCookie(name) {
  let value = "; " + document.cookie;
  let parts = value.split("; " + name + "=");
  if (parts.length == 2) return parts.pop().split(";").shift();
}

function setCookie(name, value, days) {
  var expires = "";
  if (days) {
    let date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + value + expires + "; path=/";
}
