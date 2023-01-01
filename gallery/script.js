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

let currentYear = new Date().getFullYear();
document.getElementById("year").innerHTML = currentYear;

document
  .querySelector("#gothenburg-box")
  .addEventListener("click", function () {
    window.location.href = "gothenburg";
  });

document.querySelector("#vancouver-box").addEventListener("click", function () {
  window.location.href = "vancouver";
});

document
  .querySelector("#silver-star-box")
  .addEventListener("click", function () {
    window.location.href = "silver-star";
  });

document.querySelector("#trips-box").addEventListener("click", function () {
  window.location.href = "trips";
});
