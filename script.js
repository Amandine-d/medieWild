/* chifoumi 
to do list: 
- create objects Sandra and Player with choice and lifecounter key /done 
- create the listener  make a link with shifumi assets / Done
- create the function that compare playerChoice array and sandraChoice and chose the winner
- create the function that count amount of games won */
let sandra = {
  choice: [],
  winCounter: 0,
};

let player = {
  choice: [],
  winCounter: 0,
};

let sandraChoice = [];
let playerChoice = [];

const choice = document.querySelectorAll(".player-choice");

//  function transform random choice to rock scisors paper
function transformRandom() {
  const random = Math.floor(Math.random() * 3) + 1;
  if (random === 1) {
    sandra.choice.push("paper");
  } else if (random === 2) {
    sandra.choice.push("rock");
  } else if (random === 3) {
    sandra.choice.push("scisors");
  }
}

//click and touch event choice
for (let i = 0; i < choice.length; i++) {
  function fillPlayerChoice() {
    player.choice = [];
    player.choice.push(choice[i].value);
    sandra.choice = [];
    transformRandom();
    console.log(player.choice);
    console.log(sandra.choice);
    tryWinner();
    checkGameWinner();
  }
  choice[i].addEventListener("click", fillPlayerChoice);
  choice[i].addEventListener("touch", fillPlayerChoice);
}

//chose the winner and the add a win to the player or sandra scorecounter

function tryWinner() {
  if (sandra.choice[0] === player.choice[0]) {
    console.log("It's a tie");
  } else if (
    (sandra.choice[0] === "paper" && player.choice[0] === "rock") ||
    (sandra.choice[0] === "rock" && player.choice[0] === "scisors") ||
    (sandra.choice[0] === "scisors" && player.choice[0] === "paper")
  ) {
    console.log("Sandra wins !");
    sandra.winCounter += 1;
  } else {
    console.log("You win !");
    player.winCounter += 1;
  }
}

// check function to select a WINNER of the GAME

function checkGameWinner() {
  if (sandra.winCounter === 3) {
    console.log("Sandra wins the game, She gets her cup of coffee first !");
  } else if (player.winCounter === 3) {
    console.log("You win the game, enjoy your cup of coffee !");
  }
}

// button try again
// score table 
