// questions array
const questions = [
    {
        question:'1###',
        pickedanswer:['1.###','2.###','3.###','4.###'],
        realanswer:'1.###'
    },
    {
        question:'2###',
        pickedanswer:['1.###','2.###','3.###','4.###'],
        realanswer:'1.###'
    },
    {
        question:'3###',
        pickedanswer:['1.###','2.###','3.###','4.###'],
        realanswer:'1.###'
    },
    {
        question:'4###',
        pickedanswer:['1.###','2.###','3.###','4.###'],
        realanswer:'1.###'
    },
    {
        question:'5###',
        pickedanswer:['1.###','2.###','3.###','4.###'],
        realanswer:'1.###'
    },
    {
        question:'6###',
        pickedanswer:['1.###','2.###','3.###','4.###'],
        realanswer:'1.###'
    },
    {
        question:'7###',
        pickedanswer:['1.###','2.###','3.###','4.###'],
        realanswer:'1.###'
    },
    
];
var questionsremaining = questions.length;
    console.log(questions.length);

// header variables
var highscoresBtn = document.getElementById(highscoresBtn);
var timer = document.getElementById("timer");
// welcome page variables
var welcomepage = document.getElementById('welcomepage');
var startBtn = document.getElementById('startBtn');
// question page variables
var questionpage = document.getElementById('questions-answers');
var currentquestion = document.getElementById('current-question');
var answerBtn1 = document.getElementById('answer1');
var answerBtn2 = document.getElementById('answer2');
var answerBtn3 = document.getElementById('answer3');
var answerBtn4 = document.getElementById('answer4');
var previousquestioncheck = document.getElementById('answer-check');
// quiz over/summary page vars
var gameoverpage = document.getElementById('summary');
var playerinitials = document.getElementById('initials-input');
var submitBtn = document.getElementById('submitBtn');
// High Score page vars
var scorepage = document.getElementById('scores');
var scoreList = document.getElementById('high-scores');
// set hid slides initial
welcomepage.classList.add('block');
questionpage.classList.add('hidden');
gameoverpage.classList.add('hidden');
scorepage.classList.add('hidden');


// quiz timer -done
function quiztimer(){
    var timeremaining = 1;
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
var correctanswers = 0;
function quiz(){


}

// check answer
function checkanswer(){

}

// gameover/summary
function gameover(){
    welcomepage.classList.add('hidden');
    questionpage.classList.add('hidden');
    gameoverpage.classList.remove('hidden');
    scorepage.classList.add('hidden');

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
    quiztimer();
    quiz();
    welcomepage.classList.add('hidden');
    questionpage.classList.remove('hidden');
    gameoverpage.classList.add('hidden');
    scorepage.classList.add('hidden');
}

// event listeners for buttons
startBtn.addEventListener('click', startquiz);
answerBtn1.addEventListener('click', checkanswer);
answerBtn2.addEventListener('click', checkanswer);
answerBtn3.addEventListener('click', checkanswer);
answerBtn4.addEventListener('click', checkanswer);
submitBtn.addEventListener('click', submitscore);