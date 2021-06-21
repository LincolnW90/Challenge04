// questions array
const questions = [
    {
      question: "What are variables used for in JavaScript Programs?",
      answers: [
        { text: "Storing numbers, dates, or other values ", correct: true },
        { text: "Varying randomly", correct: false },
        { text: "Causing high-school algebra flashback", correct: false },
        { text: "None of the above", correct: false },
      ],
    },
    {
      question:
        "Which of the following is correct about features of JavaScript??",
      answers: [
        {text: "JavaScript is complementary to, and intergrated with HTML",correct: false,},
        { text: "JavaScript is open and cross-platform.", correct: false },
        { text: "Both A and B.", correct: true },
        { text: "All of the above.", correct: false },
      ],
    },
    {
      question:
        "Which built-in method calls a function for each element in the array?",
      answers: [
        { text: "while() ", correct: false },
        { text: "loop()", correct: false },
        { text: "forEach()", correct: true },
        { text: "None of the above", correct: false },
      ],
    },
    {
      question:
        "Which of the following function of String object returns the calling string value converted to lower case?",
      answers: [
        { text: "toLocaleLowerCase()", correct: false },
        { text: "toLowerCase()", correct: true },
        { text: "toString()", correct: false },
        { text: "substring()", correct: false },
      ],
    },
    {
      question:
        "Which of the following function of Array object returns a string representing the array and its elements?",
      answers: [
        { text: "toSource() ", correct: false },
        { text: "sort()", correct: false },
        { text: "splice()", correct: false },
        { text: "toString()", correct: true },
      ],
    },
    {
      question: "Which of the following is not a valid JavaScript variable name?",
      answers: [
        { text: "_first_and_last_names", correct: false },
        { text: "FirstAndLast", correct: false },
        { text: "None of the above", correct: false },
        { text: "2names", correct: true },
      ],
    },
    {
      question: " Inside which HTML element do we put the JavaScript?",
      answers: [
        { text: "<js>", correct: false },
        { text: "<scripting>", correct: false },
        { text: "<javascript>", correct: false },
        { text: "<script>", correct: true },
      ],
    },
    {
      question:
        " Which of the following is not considered a JavaScript operator?",
      answers: [
        { text: "new", correct: false },
        { text: "this", correct: true },
        { text: "delete", correct: false },
        { text: "typeof", correct: false },
      ],
    },
    {
      question:
        "  Using _______ statement is how you test for a specific condition",
      answers: [
        { text: "Select", correct: false },
        { text: "Switch", correct: false },
        { text: "If", correct: true },
        { text: "For", correct: false },
      ],
    },
    {
      question: "What is the correct JavaScript syntax to write Hello 'World'",
      answers: [
        { text: "System.out.println 'Hello World'", correct: false },
        { text: "println 'Hello World'", correct: false },
        { text: "response.write 'Hello World'", correct: false },
        { text: "document.write 'Hello World'", correct: true },
      ],
    },
  ];
var questionsremaining = questions.length;
    console.log(questions.length);

// header variables
var highscoresBtn = document.getElementById(highscoreBtn);
var timer = document.getElementById("timer");
// welcome page variables
var welcomepage = document.getElementById('welcomepage');
var startBtn = document.getElementById('startBtn');
// question page variables
var questionpage = document.getElementById('questions-answers');
var currentquestion = document.getElementById('current-question');
var answerBtn = document.getElementById('answerBtn');
var previousquestioncheck = document.getElementById('answer-check');
// quiz over/summary page vars
var gameoverpage = document.getElementById('summary');
var finalscore = document.getElementById('finalscore');
var playerinitials = document.getElementById('initials-input');
var submitBtn = document.getElementById('submitBtn');
// High Score page vars
var scorepage = document.getElementById('scores');
var scoreList = document.getElementById('high-scores');
// set hid slides initial
questionpage.classList.add('hidden');
gameoverpage.classList.add('hidden');
scorepage.classList.add('hidden');

var correctanswers = 0;
var questionIndex = 0;


// quiz timer -done
function quiztimer(){
    var timeremaining = 15;
    var timeInterval = setInterval(function(){
        if(timeremaining>0){
            timer.textContent = 'Remaining Time: ' + timeremaining + '/s';
            timeremaining--;
        } else{
            timer.textContent = 'Quiz is over';
            clearInterval(timeInterval);
            gameover();
        }
    }, 1000);
}




// quiz itself
function quiz(){
    currentquestion.textContent = questions[questionIndex].question;
    createanswerBtn
};
// create answer buttons
var createAnswerBtn = function () {
    //clears inner HTML on each button.
    answerButtonEl.innerHTML = "";
    //For loop to run thorugh each array for each answer and create corresponding buttons for each.
    for (var i = 0; i < questions[currentQuestionIndex].answers.length; i++) {
      var thisButton = document.createElement("BUTTON");
      thisButton.classList.add("btn");
      thisButton.textContent = questions[currentQuestionIndex].answers[i].text;
      if (questions[currentQuestionIndex].answers[i].correct) {
        thisButton.setAttribute("id", "true");
      }
      thisButton.addEventListener("click", showNextQuestion);
      answerButtonEl.append(thisButton);
    }
  };

// checkanswer
function checkanswer(){

}




// gameover/summary
function gameover(){
    welcomepage.classList.add('hidden');
    questionpage.classList.add('hidden');
    gameoverpage.classList.remove('hidden');
    scorepage.classList.add('hidden');
    // display score
    finalscore.textContent = 'You scored ' + correctanswers + ' points!';
}

// submit score
function submitscore(){
    
}

// high scores shown
function showhighscores(){
    welcomepage.classList.add('hidden');
    questionpage.classList.add('hidden');
    gameoverpage.classList.add('hidden');
    scorepage.classList.remove('hidden');

}


// start quiz function
function startquiz(){
    welcomepage.classList.add('hidden');
    questionpage.classList.remove('hidden');
    gameoverpage.classList.add('hidden');
    scorepage.classList.add('hidden');
    // quiztimer();
    quiz();
}

// event listeners for buttons
startBtn.addEventListener('click', startquiz);
submitBtn.addEventListener('click', submitscore);
highscoresBtn.addEventListener('click', showhighscores);
