/* chifoumi 
to do list: 
- create empty arrays for playerChoice /done
- create a const sandraChoice that show a random number between 1 and 3/ done  
- create the function to make a link with shifumi assets
- create the function that compare playerChoice array and sandraChoice and chose the winner
- create the function that count amount of games won */

let sandraChoice = Math.floor(Math.random() * 3) + 1;
let playerChoice = [];

const choice = document.querySelectorAll(".player-choice");

const paper = "1";
const rock = "2";
const scisors = "3";

//click and touch event choice
for (let i = 0; i < choice.length; i++) {
function fillPlayerChoice() {
    playerChoice = [];
    playerChoice.push(choice[i].value);
    console.log(playerChoice);
  }
  choice[i].addEventListener("click", fillPlayerChoice);
  choice[i].addEventListener("touch", fillPlayerChoice);
}



// function that chose the winner

// function chooseTheWinner(){
//     if()
// }
