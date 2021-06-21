// questions array
const questions = [
    {
        question:'1###',
        pickedanswer:['1.###','2.###','3.###','4.###'],
        answer:'1.###'
    },
    {
        question:'2###',
        pickedanswer:['1.###','2.###','3.###','4.###'],
        answer:'1.###'
    },
    {
        question:'3###',
        pickedanswer:['1.###','2.###','3.###','4.###'],
        answer:'1.###'
    },
    {
        question:'4###',
        pickedanswer:['1.###','2.###','3.###','4.###'],
        answer:'1.###'
    },
    {
        question:'5###',
        pickedanswer:['1.###','2.###','3.###','4.###'],
        answer:'1.###'
    },
    {
        question:'6###',
        pickedanswer:['1.###','2.###','3.###','4.###'],
        answer:'1.###'
    },
    {
        question:'7###',
        pickedanswer:['1.###','2.###','3.###','4.###'],
        answer:'1.###'
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
var finalscore = document.getElementById('finalscore');
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
var correctanswers = 0;
var questionIndex = 0;
function quiz(){
    currentquestion.textContent = questions[questionIndex].question;
    answerBtn1.textContent = questions[questionIndex].pickedanswer[0];
    answerBtn2.textContent = questions[questionIndex].pickedanswer[1];
    answerBtn3.textContent = questions[questionIndex].pickedanswer[2];
    answerBtn4.textContent = questions[questionIndex].pickedanswer[3];
}
function checkanswer1(){
    var selectedanswer = '';
        selectedanswer = answerBtn1.textContent;
        if(selectedanswer === questions[questionIndex].answer[questionIndex]){
            correctanswers++;
            questionIndex++;
            previousquestioncheck.textContent = 'That was correct!';
            answerBtn1.textContent = '';
            answerBtn2.textContent = '';
            answerBtn3.textContent = '';
            answerBtn4.textContent = '';
            quiz();
        } else{
            questionIndex++;
            previousquestioncheck.textContent = 'That was Incorrect';
            quiz();
        }
    };




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
    quiztimer();
    quiz();
    welcomepage.classList.add('hidden');
    questionpage.classList.remove('hidden');
    gameoverpage.classList.add('hidden');
    scorepage.classList.add('hidden');
}

// event listeners for buttons
startBtn.addEventListener('click', startquiz);
answerBtn1.addEventListener('click', checkanswer1);
answerBtn2.addEventListener('click', checkanswer2);
answerBtn3.addEventListener('click', checkanswer3);
answerBtn4.addEventListener('click', checkanswer4);
submitBtn.addEventListener('click', submitscore);