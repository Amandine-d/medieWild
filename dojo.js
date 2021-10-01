function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

playButtons = document.getElementsByClassName("play");

let randomChoice = getRandomIntInclusive(1, 6);
console.log(randomChoice);
let userChoice;

for (let i = 0; i < playButtons.length; i++) {
  playButtons[i].addEventListener("click", function () {
    userChoice = playButtons[i].value;
    console.log(userChoice);
  });

  playButtons[i].addEventListener("click", function compare() {
    if (randomChoice == userChoice) {
      console.log("yataaa");
      randomChoice = getRandomIntInclusive(1, 6);
      console.log(randomChoice);
    } else {
      console.log("try again");
    }
  });
}
