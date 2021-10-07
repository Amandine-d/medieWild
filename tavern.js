const sandra = {
  name: "sandra",
  choice: [],
  winCounter: 0,
  tryVictoryMessage: "Sandra wins !",
  gameVictoryMessage: "Sandra wins, She kicks you out of the kitchen!",
};

const player = {
  name: "player",
  choice: [],
  winCounter: 0,
  tryVictoryMessage: "You win !",
  gameVictoryMessage: "You win, enjoy your cup of coffee !",
};
//js code variables

let winner;

//DOM variables

const choice = document.querySelectorAll(".player-choice");
const whoWins = document.querySelector(".who-wins");
const finalGameVictoryMessage = document.querySelector(
  ".final-game-victory-message"
);
const startChallenge = document.querySelector(".start-challenge");
const skipChallenge = document.querySelector(".skip-challenge");
const skipMessageContainer = document.querySelector(".skip-message-container");
const coffeeTimer = document.querySelector(".coffee-timer");
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
const sandraHand = document.querySelector(".sandra-hand");
const playerHand = document.querySelector(".player-hand");
const gameVictoryMessageContainer = document.querySelector(
  ".game-victory-message-container"
);
const whoWon = document.querySelector(".who-won");
const retryMessageContainer = document.querySelector(
  ".retry-message-container"
);
const retryChallenge = document.querySelector(".retry-challenge");
const skipRetryChallenge = document.querySelector(".skip-retry-challenge");
const finalTavernContainer = document.querySelector(".final-tavern-container");
const sandraHandAnimation = document.querySelector(".sandra-hand-animation");
const playerHandAnimation = document.querySelector(".player-hand-animation");
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
// function that command the accept challenge button

function startChallengeClick() {
  challenge.classList.add("hide");
  sandraTagScore.classList.remove("hide");
  playerTagScore.classList.remove("hide");
  playerChoiceContainer.classList.remove("hide");
}

startChallenge.addEventListener("click", startChallengeClick);
startChallenge.addEventListener("touch", startChallengeClick);

//function that command skip challenge in challenge container

function skipChallengeClick() {
  challenge.classList.add("hide");
  skipMessageContainer.classList.remove("hide");
  console.log(coffeeTimer.innerHTML);
  setTimeout(function () {
    coffeeTimer.innerHTML = "4";
  }, 1000);
  setTimeout(function () {
    coffeeTimer.innerHTML = "3";
  }, 2000);
  setTimeout(function () {
    coffeeTimer.innerHTML = "2";
  }, 3000);
  setTimeout(function () {
    coffeeTimer.innerHTML = "1";
  }, 4000);
  setTimeout(function () {
    coffeeTimer.innerHTML = "You can in !";
  }, 5000);
  setTimeout(function () {
    skipMessageContainer.classList.add("hide");
    finalTavernContainer.classList.remove("hide");
  }, 7000);
}

skipChallenge.addEventListener("click", skipChallengeClick);
skipChallenge.addEventListener("touch", skipChallengeClick);

// function that commands accept button in retry container

function retryChallengeClick() {
  challenge.classList.add("hide");
  sandraTagScore.classList.remove("hide");
  playerTagScore.classList.remove("hide");
  playerChoiceContainer.classList.remove("hide");
}

retryChallenge.addEventListener("click", retryChallengeClick);
retryChallenge.addEventListener("touch", retryChallengeClick);

//function that command skip challenge in retry container if sandra wins it follows skip challenge instruction if player wins it show the final tavern page

function skipRetryChallengeClick() {
  if (winner === "sandra") {
    gameVictoryMessageContainer.classList.add("hide");
    retryMessageContainer.classList.add("hide");
    skipMessageContainer.classList.remove("hide");
    setTimeout(function () {
      coffeeTimer.innerHTML = "4";
    }, 1000);
    setTimeout(function () {
      coffeeTimer.innerHTML = "3";
    }, 2000);
    setTimeout(function () {
      coffeeTimer.innerHTML = "2";
    }, 3000);
    setTimeout(function () {
      coffeeTimer.innerHTML = "1";
    }, 4000);
    setTimeout(function () {
      coffeeTimer.innerHTML = "You can in !";
    }, 5000);
    setTimeout(function () {
      skipMessageContainer.classList.add("hide");
      finalTavernContainer.classList.remove("hide");
    }, 7000);
  } else {
    gameVictoryMessageContainer.classList.add("hide");
    retryMessageContainer.classList.add("hide");
    finalTavernContainer.classList.remove("hide");
  }
}

skipRetryChallenge.addEventListener("click", skipRetryChallengeClick);
skipRetryChallenge.addEventListener("touch", skipRetryChallengeClick);

//main game click and touch (player sign choice)

for (let i = 0; i < choice.length; i++) {
  function fillPlayerChoice() {
    player.choice = [];
    player.choice.push(choice[i].value);
    sandra.choice = [];
    transformRandom();
    battleMessage();
    fillTryVictoryMessageHands();
    console.log(player.choice);
    console.log(sandra.choice);
    tryWinner();
    checkGameWinner();
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
      setTimeout(function () {
        sandraScore.innerHTML = `${sandra.winCounter}`;
      }, 2800);
    }
  } else {
    whoWins.innerHTML = `${player.tryVictoryMessage}`;
    player.winCounter += 1;
    if (player.winCounter !== 0) {
      setTimeout(function () {
        playerScore.innerHTML = `${player.winCounter}`;
      }, 2800);
    }
  }
}

// check function to select a WINNER of the GAME reset won games counter fill the finalGameVictoryMessage DOM

function checkGameWinner() {
  if (sandra.winCounter === 3) {
    finalGameVictoryMessage.innerHTML = `${sandra.gameVictoryMessage}`;
    whoWon.classList.add("who-won-sandra");
    winner = "sandra";
    setTimeout(function () {
      sandra.winCounter = 0;
      player.winCounter = 0;
      sandraScore.innerHTML = "0";
      playerScore.innerHTML = "0";
      playerTagScore.classList.add("hide");
      sandraTagScore.classList.add("hide");
      playerChoiceContainer.classList.add("hide");
      tryVictoryMessageContainer.classList.add("hide");
      gameVictoryMessageContainer.classList.remove("hide");
      retryMessageContainer.classList.remove("hide");
    }, 4000);
  } else if (player.winCounter === 3) {
    finalGameVictoryMessage.innerHTML = `${player.gameVictoryMessage}`;
    whoWon.classList.add("who-won-player");
    winner = "player";
    setTimeout(function () {
      sandra.winCounter = 0;
      player.winCounter = 0;
      sandraScore.innerHTML = "0";
      playerScore.innerHTML = "0";
      playerTagScore.classList.add("hide");
      sandraTagScore.classList.add("hide");
      playerChoiceContainer.classList.add("hide");
      tryVictoryMessageContainer.classList.add("hide");
      gameVictoryMessageContainer.classList.remove("hide");
      retryMessageContainer.classList.remove("hide");
    }, 4000);
  }
}

// function that fill the hand button of win messsage in order to player choice and random choice of Sandra

function fillTryVictoryMessageHands() {
  playerHand.classList.add(`player-hand-${player.choice}`);
  sandraHand.classList.add(`sandra-hand-${sandra.choice}`);
}

//battle message animation shii fuu mii adn try victory message

function battleMessage() {
  playerChoiceContainer.classList.add("hide");
  combatMessageContainer.classList.remove("hide");
  shi.classList.remove("hide");
  sandraHandAnimation.classList.remove("hide");
  playerHandAnimation.classList.remove("hide");
  setTimeout(function () {
    shi.classList.add("hide");
    sandraHandAnimation.classList.add("hide");
    playerHandAnimation.classList.add("hide");
  }, 500);
  setTimeout(function () {
    fu.classList.remove("hide");
    sandraHandAnimation.classList.remove("hide");
    playerHandAnimation.classList.remove("hide");
  }, 1000);
  setTimeout(function () {
    fu.classList.add("hide");
    sandraHandAnimation.classList.add("hide");
    playerHandAnimation.classList.add("hide");
  }, 1500);
  setTimeout(function () {
    mi.classList.remove("hide");
    sandraHandAnimation.classList.remove("hide");
  playerHandAnimation.classList.remove("hide");
  }, 2000);
  setTimeout(function () {
    mi.classList.add("hide");
    sandraHandAnimation.classList.add("hide");
    playerHandAnimation.classList.add("hide");
  }, 2750);
  setTimeout(function () {
    combatMessageContainer.classList.add("hide");
  }, 2750);
  setTimeout(function () {
    tryVictoryMessageContainer.classList.remove("hide");
  }, 2750);
  setTimeout(function () {
    tryVictoryMessageContainer.classList.add("hide");
  }, 4000);
  setTimeout(function () {
    playerChoiceContainer.classList.remove("hide");
  }, 4000);
}

/* footer pierre*/
const audio = new Audio('assets/scream.mp3');
const bubbleContainer = document.querySelector('.nav-pierre');

const menuPierre = document.querySelector('.floating-head')

menuPierre.addEventListener('click', function() {
    bubbleContainer.classList.toggle('active');
    audio.play()

});
