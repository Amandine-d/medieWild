/* chifoumi 
to do list: 
- create empty arrays for playerChoice /done
- create a const sandraChoice that show a random number between 1 and 3/ done  
- create the function to make a link with shifumi assets
- create the function that compare playerChoice array and sandraChoice and chose the winner
- create the function that count amount of games won */
let sandra = {
    choice: [],
    lifeCounter  : 3, 
};

let player = {
    choice: [],
    lifeCounter : 3,
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
  }
  choice[i].addEventListener("click", fillPlayerChoice);
  choice[i].addEventListener("touch", fillPlayerChoice);
}
// function choseTheWinner(){
//     if
// }
