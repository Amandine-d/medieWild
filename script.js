/* chifoumi 
to do list: 
- create empty arrays for playerChoice /done
- create a const sandraChoice that show a random number between 1 and 3/ done  
- create the function to make a link with shifumi assets
- create the function that compare playerChoice array and sandraChoice and chose the winner
- create the function that count amount of games won */

let sandraChoice = [];
let playerChoice = [];

const choice = document.querySelectorAll(".player-choice");

//  function transform random choice to rock scisors paper
function transformRandom() {
  const random = Math.floor(Math.random() * 3) + 1;
  if (random === 1) {
    sandraChoice.push("paper");
  } else if (random === 2) {
    sandraChoice.push("rock");
  } else if (random === 3) {
    sandraChoice.push("scisors");
  }
}

//click and touch event choice
for (let i = 0; i < choice.length; i++) {
  function fillPlayerChoice() {
    playerChoice = [];
    playerChoice.push(choice[i].value);
    sandraChoice = [];
    transformRandom();
    console.log(playerChoice);
    console.log(sandraChoice);
  }
  choice[i].addEventListener("click", fillPlayerChoice);
  choice[i].addEventListener("touch", fillPlayerChoice);
}
// function choseTheWinner(){
//     if
// }
