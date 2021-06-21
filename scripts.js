// questions array
const questions = [
    {
        question:'',
        pickedanswer:['1.###','2.###','3.###','4.###'],
        realanswer:'1.###'
    },
    {
        question:'',
        pickedanswer:['1.###','2.###','3.###','4.###'],
        realanswer:'1.###'
    },
    {
        question:'',
        pickedanswer:['1.###','2.###','3.###','4.###'],
        realanswer:'1.###'
    },
    {
        question:'',
        pickedanswer:['1.###','2.###','3.###','4.###'],
        realanswer:'1.###'
    },
    {
        question:'',
        pickedanswer:['1.###','2.###','3.###','4.###'],
        realanswer:'1.###'
    },
    {
        question:'',
        pickedanswer:['1.###','2.###','3.###','4.###'],
        realanswer:'1.###'
    },
    {
        question:'',
        pickedanswer:['1.###','2.###','3.###','4.###'],
        realanswer:'1.###'
    },
    
];
var questionsremaining = questions.length;
var timer = document.getElementById("timer")
var currentscore = 0;
var finalscore = document.getElementById("finalscore");
var startButton = document.getElementById("startBtn");
var frontpage = document.getElementById("frontpage");
var quizpage = document.getElementById("questions-answers");
var scores = document.getElementById("scores");

var scoresBtn = document.getElementById("highscores");
var highscoresBtn = document.getElementById("scoreBtn")
var submitBtn = document.getElementById("initials-input");
var summary = document.getElementById("summary");
var welcometitle = document.getElementById("welcome");
var quiztime = 5;

var scoresList = document.getElementById('high-scores');



// hide slides not in use
quizpage.classList.add('hidden');
summary.classList.add('hidden');
scores.classList.add('hidden');

// timer
function countdown(){
    var timeInterval = setInterval(function(){
        timer.textContent ='Time Remaining: ' + quiztime + '/s';
        if (quiztime > 0){
            quiztime = quiztime -1;
        } else {
            gameover();
            clearInterval(timeInterval);
        }
    }, 1000);
}

// game over code
function gameover(){
    quizpage.classList.add('hidden');
    scores.classList.add('hidden');
    frontpage.classList.add('hidden');
    summary.classList.remove('hidden');
    timer.textContent = "Time's up!";
    finalscore.textContent = 'You scored ' + currentscore + ' points!';
}

// submit score
var playerinitials = document.getElementById('initials-input')
function submitscore(){
    var oldScores = localStorage.getItem('oldScores');
    var scoreArray = JSON.parse(oldScores);

    // playerscore object
    var playerscore = {
        initials: playerinitials,
        score: currentscore
    };
    // add score to array and save
    scoreArray.push(playerscore);
    var scoreArrayString = JSON.stringify(scoreArray);
    localStorage.setItem('oldScores', scoreArrayString);
    currentscore.textContent = '';
    // return to main page
    quizpage.classList.add('hidden');
    summary.classList.add('hidden');
    scores.classList.add('hidden');
    frontpage.classList.remove('hidden');

}

// questions propogate
var answer1 = document.getElementById("answer1");
var answer2 = document.getElementById("answer2");
var answer3 = document.getElementById("answer3");
var answer4 = document.getElementById("answer4");
var previousanswer = document.getElementById('answer-check');

function answerquestions(){
    frontpage.classList.add('hidden');
    summary.classList.add('hidden');
    scores.classList.add('hidden');
    quizpage.classList.remove('hidden');

    var currentquestion = document.getElementById('current-question');
    currentquestion.textContent = questions[questionIndex].question;
    answer1.textContent = questions[questionIndex].choices[0];
    answer2.textContent = questions[questionIndex].choices[1];
    answer3.textContent = questions[questionIndex].choices[2];
    answer4.textContent = questions[questionIndex].choices[3];
}

// start quiz main code
function startquiz(){
    countdown();
    answerquestions();

}

// // show high scores
function showHighScores(){
    quizpage.classList.add('hidden');
    summary.classList.add('hidden');
    frontpage.classList.add('hidden');
    scores.classList.remove('hidden');
    // get scores from local if there
    var oldScores = localStorage.getItem('oldScores');
    // check if there is any in local storage
    if (oldScores === null) {
        return;
    }
    console.log(oldScores);

    var savedscores = JSON.parse(oldScores);

    for (i = 0; i < savedscores.length; i++) {
        var nextHighScore = document.createElement("p");
        nextHighScore.innerHTML = savedscores[i].initials + ": " + savedscores[i].score;
        scoresList.appendChild(eachNewHighScore);
    }
}


startButton.addEventListener("click",startquiz);
highscoresBtn.addEventListener('click', showHighScores);
submitBtn.addEventListener('click', submitscore);