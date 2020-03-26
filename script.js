//create score function in html css and js.
//Create ending screen that shows score and what not 


//global variable for question index
let questionIndex = 0;
let score = 0;

let startGameBtn = document.getElementById("startBtn");
startGameBtn.addEventListener("click", startGame);

function endgame() {
  let questionsBox = document.getElementById("questions-and-answers");
  questionsBox.classList.add("hide");
  let totalScore = score / 4 * 100;
  let endBox = document.getElementById('end-game');
  endBox.classList.remove('hide');
  let endBoxText = document.getElementById('endText');
  endBoxText.innerHTML = '<p class="endGameText">Score: ' + totalScore + '%</p>';
}

function startGame() {
  let startMenu = document.getElementById("start-game");
  let questionsBox = document.getElementById("questions-and-answers");
  startMenu.classList.add("hide");
  questionsBox.classList.remove("hide");
  generateQuestions();
}

function showQuestion(question, answer) {
  let firstQuestion = (document.getElementById(
    "questionOne"
  ).innerHTML = question);
  let fullAnswers = document.querySelectorAll("#opt");
  for (let n = 0; n < fullAnswers.length; n++) {
    fullAnswers[n].innerHTML = "<p><span>&#10097</span>" + answer[n] + "</p>";
  }
}

function generateQuestions() {
  if (questionIndex === 4) {
    endgame();
  } else if (qAndA[questionIndex].question !== "none") {
    let questionSelect = qAndA[questionIndex].question;
    let answerSelect = qAndA[questionIndex].answers;
    let correctChoice = qAndA[questionIndex.correctAnswer];
    showQuestion(questionSelect, answerSelect);
  }
}
function checkAnswer(choice) {
  if (choice === qAndA[questionIndex].correctAnswer) {
    score++;
  } else console.log("That's Incorrect!");
  questionIndex++;
  generateQuestions();
}

const qAndA = [
  {
    question: "Who directed the original star wars movies?",
    answers: [
      "George Lucas",
      "Steven Soderbergh",
      "Steven Spielberg",
      "Stanley Kubrick"
    ],
    correctAnswer: 1
  },
  {
    question: "What sort of species is Chewbacca?",
    answers: ["Ewok", "Wookie", "Gungan", "Rodian"],
    correctAnswer: 2
  },
  {
    question:
      "Which small astromech droid has appeared in all Star Wars films?",
    answers: ["Gort", "VN-GO", "T-600", "RD-D2"],
    correctAnswer: 4
  },
  {
    question:
      "Han Solo responded to Princess Leia's 'I love You' before he was frozen in carbonite with:",
    answers: ["I love you too", "Do you?", "I will miss you", "I know"],
    correctAnswer: 4
  },
  { question: "none" }
];
