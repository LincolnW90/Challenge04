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
var score = 0;
var startButton = document.getElementById("startBtn");
var frontpage = document.getElementById("frontpage");
var quizpage = document.getElementById("questions-answers");
var scorepage = document.getElementById("scores");
var welcometitle = document.getElementById("welcome");
var quiztime = 60;

quizpage.classList.add('hidden');
scorepage.classList.add('hidden')
// timer
function countdown(){
    setInterval(function(){
        timer.textContent ='Time Remaining: ' + quiztime + '/s';
        if (quiztime > 0){
            quiztime = quiztime -1;
        } else {
            gameover()
        }
    }, 1000);
}


function startquiz(){
    frontpage.classList.add('hidden');
    quizpage.classList.remove('hidden');
    countdown();
    answerquestions();

}

startButton.addEventListener("click",startquiz)