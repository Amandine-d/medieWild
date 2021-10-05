const result = document.getElementById("result");

//function choisir un nombre entier random
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
//ciblage de tous les boutons
playButtons = document.getElementsByClassName("play");

//choisir un nombre aleatoire entre 1 et 6
let randomChoice = getRandomIntInclusive(1, 6);
console.log(randomChoice);
let userChoice; //créer la boite userChoice

//loop pour listen le clic sur tous les boutons
for (let i = 0; i < playButtons.length; i++) {
  playButtons[i].addEventListener("click", function () {
    userChoice = playButtons[i].value; //quand clic->stock la valeur du bouton ds la boite user
    console.log(userChoice);
  });

  //quand clic compare userchoice et randomchoice
  playButtons[i].addEventListener("click", function compare() {
    if (randomChoice == userChoice) {
      result.innerHTML="How did you know?";
      randomChoice = getRandomIntInclusive(1, 6);
      //si identique, gagné et choisi un nouveau random number
      console.log(randomChoice);
    } else {
      result.innerHTML="Try again";
      //si perdu rien ne se passe
    }
  });
}
