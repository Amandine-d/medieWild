function getRandomArbitrary() {
    let randomChoice = Math.floor(Math.random() * 6) + 1;
    return randomChoice;
}


console.log (randomChoice);

playButtons = document.getElementsByClassName("play");
let userChoice;

for (let i = 0; i < playButtons.length; i++) {
    
    playButtons[i].addEventListener("click", function () {
    userChoice = playButtons[i].value;
    /*console.log(userChoice)*/
})
  
    playButtons[i].addEventListener("click", function compare() {
    if (randomChoice == userChoice) {
      console.log("yataaa");
      getRandomArbitrary;
      console.log (randomChoice);
    } else {
      console.log("try again");
    }})

}
