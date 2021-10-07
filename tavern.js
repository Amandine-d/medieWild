/* chifoumi 
to do list: 
- create objects Sandra and Player with choice and lifecounter key /done 
- create the listener  make a link with shifumi assets / Done
- create the function that compare playerChoice array and sandraChoice and chose the winner
- create the function that count amount of games won */

const sandra = {
  choice: [],
  winCounter: 0,
  tryVictoryMessage: "Sandra wins !",
  gameVictoryMessage: "Sandra wins, She kicks you out of the kitchen!",
};

const player = {
  choice: [],
  winCounter: 0,
  tryVictoryMessage: "You win !",
  gameVictoryMessage: "You win, enjoy your cup of coffee !",
};

//DOM variables

const choice = document.querySelectorAll(".player-choice");
const whoWins = document.querySelector(".who-wins");
const finalGameVictoryMessage = document.querySelector(
  ".final-game-victory-message"
);
const startChallenge = document.querySelector(".start-challenge");
const skipChallenge = document.querySelector(".skip-challenge");
const challenge = document.querySelector(".challenge");
const sandraTagScore = document.querySelector(".sandra-tag-score");
const playerTagScore = document.querySelector(".player-tag-score");
const playerChoiceContainer = document.querySelector(
  ".player-choice-container"
);
const sandraScore = document.querySelector(".sandra-score");
const playerScore = document.querySelector(".player-score");
const combatMessageContainer = document.querySelector(
  ".combat-message-container"
);
const shi = document.querySelector(".shi");
const fu = document.querySelector(".fu");
const mi = document.querySelector(".mi");
const tryVictoryMessageContainer = document.querySelector(
  ".try-victory-message-container"
);
const gameVictoryMessageContainer = document.querySelector(".game-victory-message-container");
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
function openChallengeDiv() {
  challenge.classList.remove("open");
  sandraTagScore.classList.add("open");
  playerTagScore.classList.add("open");
  playerChoiceContainer.classList.add("open");
}

startChallenge.addEventListener("click", openChallengeDiv);
startChallenge.addEventListener("touch", openChallengeDiv);

//main click and touch event player choice

for (let i = 0; i < choice.length; i++) {
  function fillPlayerChoice() {
    player.choice = [];
    player.choice.push(choice[i].value);
    sandra.choice = [];
    transformRandom();
    battleMessage();
    console.log(player.choice);
    console.log(sandra.choice);
    tryWinner();
    tryVictoryMessage();
    checkGameWinner();
    gameVictoryMessage();
    console.log(sandra.winCounter);
    console.log(player.winCounter);
  }
  choice[i].addEventListener("click", fillPlayerChoice);
  choice[i].addEventListener("touch", fillPlayerChoice);
}

//chose the winner and the add a win to the player or sandra score counter fill the whoWins Dom with victory message change score counter on tavern.html

function tryWinner() {
  if (sandra.choice[0] === player.choice[0]) {
    whoWins.innerHTML = `${"It's a tie"}`;
  } else if (
    (sandra.choice[0] === "paper" && player.choice[0] === "rock") ||
    (sandra.choice[0] === "rock" && player.choice[0] === "scissors") ||
    (sandra.choice[0] === "scissors" && player.choice[0] === "paper")
  ) {
    whoWins.innerHTML = `${sandra.tryVictoryMessage}`;
    sandra.winCounter += 1;
    if (sandra.winCounter !== 0) {
      sandraScore.innerHTML = `${sandra.winCounter}`;
    }
  } else {
    whoWins.innerHTML = `${player.tryVictoryMessage}`;
    player.winCounter += 1;
    if (player.winCounter !== 0) {
      playerScore.innerHTML = `${player.winCounter}`;
    }
  }
}

// check function to select a WINNER of the GAME reset won games counter fill the finalGameVictoryMessage DOM

function checkGameWinner() {
  if (sandra.winCounter === 3) {
    finalGameVictoryMessage.innerHTML = `${sandra.gameVictoryMessage}`;
    sandra.winCounter = 0;
    player.winCounter = 0;
    sandraScore.innerHTML = "0";
    playerScore.innerHTML = "0";
  } else if (player.winCounter === 3) {
    finalGameVictoryMessage.innerHTML = `${sandra.gameVictoryMessage}`;
    sandra.winCounter = 0;
    player.winCounter = 0;
    sandraScore.innerHTML = "0";
    playerScore.innerHTML = "0";
  }
}

//battle message animation shii fuu mii
function battleMessage() {
  playerChoiceContainer.classList.remove("open");
  combatMessageContainer.classList.add("open");
  shi.classList.add("open");
  shi.classList.remove("open");
  fu.classList.add("open");
  fu.classList.remove("open");
  mi.classList.add("open");
  mi.classList.remove("open");
  combatMessageContainer.classList.remove("open");
}

// try victory message with hand result function need to be finished (hands need to link the choice)

function tryVictoryMessage() {
  tryVictoryMessageContainer.classList.add(
    "open"
  );
  tryVictoryMessageContainer.classList.remove(
    "open"
  );
  playerChoiceContainer.classList.add("open");
}

function gameVictoryMessage(){
  gameVictoryMessageContainer.classList.add(".open");
  gameVictoryMessageContainer.classList.remove(".open");
}

/* footer pierre*/
const bubbleContainer = document.querySelector('.nav-pierre');

const menuPierre = document.querySelector('.floating-head')

menuPierre.addEventListener('click', function() {
    bubbleContainer.classList.toggle('active');

})