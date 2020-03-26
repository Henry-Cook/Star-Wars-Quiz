//Add event listener to the start button
let startGameBtn = document.getElementById('startBtn');
startGameBtn.addEventListener('click', startGame);


//Function to change start menu to the first question
function startGame(){
 let startMenu = document.getElementById('start-game');
 let questionsBox = document.getElementById('questions-and-answers');
 startMenu.classList.add('hide');
 questionsBox.classList.remove('hide');
 showQuestion();
}

function showQuestion(){
 let firstQuestion = document.getElementById('questionOne').innerHTML = qAndA.questionOne; 
 let fullAnswers = document.querySelectorAll('#opt');
    for(let n = 0; n < fullAnswers.length; n++){
        fullAnswers[n].innerHTML = '<p><span>&#10097</span>' + qAndA.answerOne[n] + '</p>';
}
};

function checkAnswer(){
    console.log('Hi');
};



const qAndA = {
    questionOne: "Who directed the original star wars movies?",
    answerOne: ['George Lucas','Steven Soderbergh', 'Steven Spielberg', 'Stanley Kubrick', ],

}

console.log(qAndA.answerOne[0]);

