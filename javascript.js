var questionNumber = 0, quiz, quizScore, question, choice, choices, selectA, selectB, selectC, selectD, correct =0;
var questions = [
    ["What year did the Denver Broncos turn into the Denver BROWNcos?","2014", "2015","2016","2017","D"],
    ["What is that thing on Trumps head","raccoon","wig","roadkill","unknown","D"],
    ["When was the war of 1812 fought?","1811","1812","1978","1218","B"],
    ["Which is the only sport where both parties know they are playing?","Basketball","Big Game Hunting","Fishing","Deer Hunting","A"]
];
function _(x) {
return document.getElementById(x);
}
function askQuestion() {
quiz = _("quiz");
var quizScore=_("quizScore")
if (questionNumber >= questions.length) {
    quiz.innerHTML = "<h2>You got "+correct+ "of "+questions.length+" questions right</h2>";
    _("quizScore").innerHTML = "Test Complete";
    questionNumber=0;
    correct = 0;
    return false;
    
}
_("quizScore").innerHTML = "Question "+(questionNumber)+"of "+questions; question = questions[questionNumber] [0];
selectA = questions[questionNumber][1];
selectB = questions[questionNumber][2];
selectC = questions[questionNumber][3];
selectD = questions[questionNumber][4];

quizScore.innerHTML = "<h3>"+question+"</h3>";
quizScore.innerHTML += "<input type='radio' name='choices' value='A'> "+selectA+"<br>";
quizScore.innerHTML += "<input type='radio' name='choices' value='B'> "+selectB+"<br>";
quizScore.innerHTML += "<input type='radio' name='choices' value='C'> "+selectC+"<br>";
quizScore.innerHTML += "<input type='radio' name='choices' value='D'> "+selectD+"<br>";



}
function checkAnswer(){
choices = document.getElementsByName("choices");
for(var i=0; i<choices.length; i++) {
    if(choices[i].checked) {
        choice=choices[i].value;
    }
}
if(choice == questions[questionNumber] [5]) {
    correct++;

} 
questionNumber++;
askQuestion()

function countdown(minutes) {
    var seconds = 60;
    var mins = minutes
    function tick() {
         
        var counter = document.getElementById("counter");
        var current_minutes = mins-1
        seconds--;
        counter.innerHTML = current_minutes.toString() + ":" + (seconds < 10 ? "0" : "") + String(seconds);
        if( seconds > 0 ) {
            setTimeout(tick, 1000);
        } else {
            if(mins > 1){
                countdown(mins-1);           
            }
        }
    }
    tick();
}
}
_("quiz").innerHTML+= "<button onclick='checkAnswer()'>Submit</button>";




window.addEventListener("load", askQuestion, false);