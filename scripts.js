// questions array
const questions = [
    {
      question: "What are variables used for in JavaScript Programs?",
      answers: ["Storing numbers, dates, or other values","Varying randomly","Causing high-school algebra flashback","None of the above"],
      realanswer: "Storing numbers, dates, or other values"
    },
    {
      question:"Which of the following is correct about features of JavaScript??",
      answers: ["JavaScript is complementary to, and intergrated with HTML","JavaScript is open and cross-platform.","Both A and B.","All of the above."],
      realanswer: "Both A and B."
    },
    {
      question: "Which built-in method calls a function for each element in the array?",
      answers: ["while() ", "loop()", "forEach()","None of the above"],
      realanswer:"forEach()"
    },
    {
      question:"Which of the following function of String object returns the calling string value converted to lower case?",
      answers: ["toLocaleLowerCase()", "toLowerCase()", "toString()","substring()"],
      realanswer:"toLowerCase()"
    },
    {
      question:"Which of the following function of Array object returns a string representing the array and its elements?",
      answers: ["toSource() ","sort()","splice()","toString()"],
      realanswer:"toString()"
    },
    {
      question: "Which of the following is not a valid JavaScript variable name?",
      answers: ["_first_and_last_names", "FirstAndLast", "None of the above", "2names"],
      realanswer:"2names"
    },
    {
      question: "Inside which HTML element do we put the JavaScript?",
      answers: ["<js>", "<scripting>", "<javascript>", "<script>"],
      realanswer:"<script>"
    },
    {
      question: "Which of the following is not considered a JavaScript operator?",
      answers: ["new", "this", "delete", "typeof"],
      realanswer:"this"
    },
    {
      question:
        "  Using _______ statement is how you test for a specific condition",
      answers: ["Select", "Switch", "If", "For"],
      realanswer: "If"
    },
    {
      question: "What is the correct JavaScript syntax to write Hello 'World'",
      answers: ["System.out.println 'Hello World'", "println 'Hello World'", "response.write 'Hello World'", "document.write 'Hello World'"],
      realanswer:"document.write 'Hello World'"
    },
  ];

var questionsremaining = questions.length;
    // console.log(questions.length);

// header variables
var highscoreBtn = document.getElementById('highscoreBtn');
var timer = document.getElementById("timer");
// welcome page variables
var welcomepage = document.getElementById('welcomepage');
var startBtn = document.getElementById('startBtn');
// question page variables
var questionPage = document.getElementById('quizContainer');
var currentquestion = document.getElementById('current-question');
var answerBtn = document.getElementById('answerBtn');
var previousquestioncheck = document.getElementById('checkanswer');
// quiz over/summary page vars
var gameoverpage = document.getElementById('summary');
var finalscore = document.getElementById('finalscore');
var playerinitials = document.getElementById('initials-input');
var submitBtn = document.getElementById('submitBtn');
// High Score page vars
var scorepage = document.getElementById('scores');
var scoreList = document.getElementById('scorelist');
//  answer button variables
var Btn1 = document.getElementById("btn1");
var Btn2 = document.getElementById("btn2");
var Btn3 = document.getElementById("btn3");
var Btn4 = document.getElementById("btn4");

var currentScore = 0;
var questionIndex = 0;


// quiz timer -done
var timeremaining = 100;
function quiztimer(){
    var timeInterval = setInterval(function(){
        if(timeremaining>0){
            timer.textContent = 'Remaining Time: ' + timeremaining + '/s';
            timeremaining--;
        } else{ 
            clearInterval(timeInterval);
            gameover();
        }
    }, 1000);
}

function checkAnswer(realanswer){
    if (questions[questionIndex].realanswer === questions[questionIndex].answers[realanswer]){
        currentScore++;
        previousquestioncheck.textContent = "Correct!"
    } else {
        timeremaining = timeremaining - 5;
        previousquestioncheck.textContent = "Incorrect!"
    }
    questionIndex++;
    console.log(currentScore);

    // go until no more questions
    if(questionIndex < questions.length){
        nextQuestion()
    } else {
        gameover()
    }
}

// fill in new data for question
function nextQuestion(){
    currentquestion.textContent = questions[questionIndex].question;
    Btn1.textContent = questions[questionIndex].answers[0];
    Btn2.textContent = questions[questionIndex].answers[1];
    Btn3.textContent = questions[questionIndex].answers[2];
    Btn4.textContent = questions[questionIndex].answers[3];
}

// different answer button presses
function choose1(){checkAnswer(0)};
function choose2(){checkAnswer(1)};
function choose3(){checkAnswer(2)};
function choose4(){checkAnswer(3)};

// gameover screen
function gameover(){
    welcomepage.style.display = "none";
    questionPage.style.display = "none";
    scorepage.style.display = "none";
    gameoverpage.style.display = "block";
    timer.textContent = "Quiz Finished";
    finalscore.textContent = "Your score is " + currentScore + "!"


}

// main order of functions
function startQuiz(){
    quiztimer();
    nextQuestion();
    welcomepage.style.display = "none";
    questionPage.style.display = "block";
    scorepage.style.display = "none";
    gameoverpage.style.display = "none";

}

// store new score
function storeScore(event){
    event.preventDefault();
    if (playerinitials === "") {
        alert("you must enter in a value")
        return;
    }
    welcomepage.style.display = "none";
    questionPage.style.display = "none";
    scorepage.style.display = "block";
    gameoverpage.style.display = "none";

    var savedScores = localStorage.getItem("High-Scores");
    var scoresArray;

    if (savedScores === null){
        scoresArray = [];
    } else {
        scoresArray = JSON.parse(savedScores);
    }

    var userInfo = {
        initials: playerinitials.value,
        score: finalscore
    }

    console.log(userInfo);
    scoresArray.push(userInfo);

    // turn back to string for storage
    var scoresArrayString = JSON.stringify(scoresArray);
    localStorage.setItem("High-Scores", scoresArrayString);
}

// showing high-score list
function listHighScores(){ 
    welcomepage.style.display = "none";
    questionPage.style.display = "none";
    scorepage.style.display = "block";
    gameoverpage.style.display = "none";

    var savedScores = localStorage.getItem("High-Scores");

    if (savedScores === null){
        return;
    }
    console.log(savedScores);
    var savedScores = JSON.parse(savedScores);

    // for loop to display saved scores
    for(i=0; i< savedScores.length; i++){
        var writeSavedScore = document.createElement('li');
        writeSavedScore.innerHTML = savedScores[i].initials + ": " + savedScores[i].score;
        scoreList.appendChild(writeSavedScore);
    }
}

// event listeners for buttons
btn1.addEventListener("click", choose1);
btn2.addEventListener("click", choose2);
btn3.addEventListener("click", choose3);
btn4.addEventListener("click", choose4);

startBtn.addEventListener('click', startQuiz);
submitBtn.addEventListener('click', storeScore);
highscoreBtn.addEventListener('click', listHighScores);
