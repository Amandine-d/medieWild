/* chifoumi 
to do list: 
- create objects Sandra and Player with choice and lifecounter key /done 
- create the listener  make a link with shifumi assets / Done
- create the function that compare playerChoice array and sandraChoice and chose the winner
- create the function that count amount of games won */
let sandra = {
  choice: [],
  winCounter: 0,
  tryVictoryMessage: "Sandra wins !",
  gameVictoryMessage: "Sandra wins, She kicks you out of Tavern !",
  trashTryVictoryMessage:" You act like an octopus trying to unhook a bra !",
  trashGameVictoryMessage: "You cannot fuck me,You cannot fuck me, I am unfuckable! I have never been fucked !",
};

let player = {
  choice: [],
  winCounter: 0,
  tryVictoryMessage: "You win !",
  gameVictoryMessage: "You win, enjoy your cup of coffee !",
  trashTryVictoryMessage: "",
  trashGameVictoryMessage: "Come the fuck in or fuck the fuck off !",
};

const choice = document.querySelectorAll(".player-choice");

//  function transform random choice to rock scisors paper
function transformRandom() {
  const random = Math.floor(Math.random() * 3) + 1;
  if (random === 1) {
    sandra.choice.push("paper");
  } else if (random === 2) {
    sandra.choice.push("rock");
  } else if (random === 3) {
    sandra.choice.push("scissors");
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
    (sandra.choice[0] === "rock" && player.choice[0] === "scissors") ||
    (sandra.choice[0] === "scisors" && player.choice[0] === "paper")
  ) {
    console.log(sandra.tryVictoryMessage);
    sandra.winCounter += 1;
  } else {
    console.log(player.tryVictoryMessage);
    player.winCounter += 1;
  }
}

// check function to select a WINNER of the GAME

function checkGameWinner() {
  if (sandra.winCounter === 3) {
    console.log(sandra.gameVictoryMessage);
  } else if (player.winCounter === 3) {
    console.log(sandra.gameVictoryMessage);
  }
}

// button try again
// score table
// toggle trash version
