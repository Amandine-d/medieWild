*Start: 1 bouton
1ere question: Changer le fond ou les boutons si la reponse est correcte ou fausse
2eme question: reset
Compter le nombre de reponses justes 
Random questions?
Permettre l'entree a la salle */

const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions
let currentQuestionIndex
const maxQuestions = 4;

//When we click sur start : execute the code that's inside statGame
startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})


//When we atart the game
function startGame() {
    //Hide the start button once clicked
  startButton.classList.add('hide')
    //question.sort: if it's sorted - or + it's going to be sorted a certain way. Math random will give a number between 1 and 0.
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
    //we  remove the hide class on the questions' container to see it
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
    //Create a function to show the random question at the current question index
  showQuestion(shuffledQuestions[currentQuestionIndex])
}


function showQuestion(question) {
    //go inside the function question to ckeck to question
  questionElement.innerText = question.question
      //Create button answer on text
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    //Create button answer on text
    button.innerText = answer.text
        //We need to add the button class to it so we can click on it
    button.classList.add('btn')
    if (answer.correct) {
            //we need to add a data attribute to our button
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
    //remove the button if it's not need. ie: if it's a 2answers question instead of 44
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
    //e.target =  button we click on
  const selectedButton = e.target
    //we need to ckeck thedataset of correct
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)

  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
   if(maxQuestions < currentQuestionIndex) {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
    numberQuestion = 0;
    correctAnswerUser = 0;
    
   }
   else {
     //Fait apparaitre le next button
    nextButton.classList.remove('hide')
  }
}


function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

function endGame () {}

const questions = [
    {
      question:"What are theRegional Manager missions",
      answers: [
          {text:"Talent Week", correct: false },
          {text:"Give an experience", correct: false },
          {text:"Business Development", correct: true},
          {text:"Teaching", correct: false},
      ],
   },
  
   {
      question:"What are the Career Specialist Manager missions?",
      answers: [
          {text:"Talent Week", correct: true},
          {text:"Business Development", correct: false },
          {text:"undefined", correct: false},  
          {text:"Give an experience", correct: false },
      ],
  },
  
  {
      question:"What are the Wild Code School values?",
      answers: [
          {text:"Coding", correct: false },
          {text:"Creative and Fun", correct: false },
          {text:"Hakuna Matata", correct: false},
          {text:"Passion and Innovation", correct: true },
      ],
  },
  
  {
      question:"What does the ~ mean in GNU/Linux?",
      answers: [
          {text:"Sortcut to the system root directory", correct: false },
          {text:"Shortcut to the user's HOME directory", correct: true },
          {text:"Nothing", correct: false },
          {text:"Take me somewhere, please", correct: false},
      ],
  },

  {
      question:"What does the 'ul' element represent?",
      answers: [
          {text:"united list", correct: false},
          {text:"unordered list", correct: true},
          {text:"upper list", correct: false},
          {text:"ulysse 31", correct: false},
      ],
  },
  
  {
      question:"How can I check the remote(s) configured for my project?",
      answers: [
          {text:"git check remote", correct: false },
          {text:"git remote -v", correct: true },
          {text:"git remote --list", correct: false },
          {text:"git remote abracadabra", correct: false},
      ],
  },
  
  {
      question:"Which css 'property:value'couple doesn't exist?",
      answers: [
          {text:"display:block", correct: false },
          {text:"display:column", correct: true },
          {text:"display:none", correct: false },
          {text:"display:flex", correct: false},
      ],
  },
  
  {
      question:"I want to merge 'master' and feature 'branches',and publish it. What are the possible commands?",
      answers: [
          {text:"git checkout master | git merge feature | git push", correct: true },
          {text:"git diff master feature", correct: false },
          {text:"git fuse master feature", correct: false },
          {text:"git push all",correct: false},
      ],
  },
  
  {
      question:"Which symbol is the logical 'not' operator",
      answers: [
          {text:"!", correct: true },
          {text:":", correct: false },
          {text:"?", correct: false },
      ],
  },
  
  {
      question:"Which data type does not exists among the following?",
      answers: [
          {text:"string", correct: false },
          {text:"object", correct: false },
          {text:"function", correct: false},
          {text:"array", correct: true },
      ],
  },
  
  {
      question:"If you want to test if {text variable is between 0 and 10, which condition will you use?",
      answers: [
          {text:"if(value between 0 AND 10",correct: false},
          {text:"if(value >=0 && value <=10)", correct: true },
          {text:"if(0 < value < 10)", correct: false },
          {text:"if(value < 0 || value > 10)", correct: false },
      ],
  },
  
  {
      question:"How do you select an element in the DOM with its id'tacos'?",
      answers: [
          {text:"document.getElementByClassName('tacos')", correct: false },
          {text:"document.getElementById('tacos)", correct: true },
          {text:"document.getElementByTagName('tacos)", correct: false},
          {text:"document.querySelectorAll('tacos')", correct: false },
      ],
  },
  
  {
      question:"How to change the text colour of an element?",
      answers: [
          {text:"element.color = 'red'", correct: false },
          {text:"element.text.color = 'red", correct: false},
          {text:"element.style.color = 'red'", correct: true },
          {text:"element.css.color = 'red'", correct: false },
      ],
      correctAnswer: "{text",
  },

  {
      question:"What is the relative length available in CSS?",
      answers: [
          {text:"cm", correct: false},
          {text:"pt", correct: false},
          {text:"%",correct: true},
          {text:"px", correct: false},
      ]
  }
  ]


  /*footer pierre*/

 const audio = new Audio('assets/scream.mp3');
const bubbleContainer = document.querySelector('.nav-pierre');

const menuPierre = document.querySelector('.floating-head')

menuPierre.addEventListener('click', function() {
    bubbleContainer.classList.toggle('active');
    audio.play()

});
