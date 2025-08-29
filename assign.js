// const amount = parseInt(document.getElementById("add-amount").value); or,

let coins = 100;

const callButtons = document.querySelectorAll(".call-btn");
const coinValue = document.getElementById("coin-value");

// looping--------------------------->

for (let Button of callButtons) {
  Button.addEventListener("click", function (e) {
    e.preventDefault();
    if (coins > 0) {
      coins -= 20;
      coinValue.textContent = coins;
    } else {
      alert("NOT ENOUGH COINS!");
    }
  });
}

let heartValue = 0;

const heartIcons = document.querySelectorAll(".heart-icon");
const heartDisplay = document.getElementById("heartValue");

// looping--------------------------->

for (let heartIcon of heartIcons) {
  heartIcon.addEventListener("click", function (e) {
    e.preventDefault();
    heartValue += 1;
    heartDisplay.innerText = heartValue;
  });
}
