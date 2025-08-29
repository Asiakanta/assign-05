// const amount = parseInt(document.getElementById("add-amount").value); or,

let coins = 100;

// const callHistoryData = [];

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

  //   const data = {
  //     name: "",
  //     date: new Date().toLocaleTimeString(),
  //   };
  //   callHistoryData.push(data);
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

  //   const data = {
  //     name: "",
  //     date: new Date().toLocaleTimeString(),
  //   };
  //   callHistoryData.push(data);
}

// call history
// const callHistoryData = [];

// const data = {
//   name: "",
//   date: new Date().toLocaleTimeString(),
// };
// callHistoryData.push(data);

function makeCall(title, number) {
  let time = new Date().toLocaleTimeString();

  let entry = document.createElement("div");
  entry.className = "entry";
  entry.style.marginBottom = "8px";

  let topLine = document.createElement("div");
  topLine.innerHTML = `${title}&nbsp;&nbsp;&nbsp;&nbsp;${time}`;
  topLine.style.justifyContent = "space-between";
  topLine.style.fontWeight = "bold";

  let n = document.createElement("div");
  n.textContent = number;

  entry.appendChild(topLine);
  entry.appendChild(n);

  document.getElementById("history-list").prepend(entry);
}

function clearHistory() {
  document.getElementById("history-list").innerHTML = "";
}
