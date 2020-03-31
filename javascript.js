var questionNumber = 0, quiz, quizScore, question, choice, choices, selectA, selectB, selectC, selectD, correct =0;
var questions = [
    ["What year did the Denver Broncos win their last title?","2011", "2013","2015","2016","D"],
    ["What is that thing on Trumps head","raccoon","whig","roadkill","unknown","unknown"],
    ["Who is the greatest basketball player of all time?","Lebron James","Michael Jordan","Bill Russell","Larry Bird","B"],
    ["Who is the most underrated inventor of all time?","Tesla","Edison","DiVinci","Bell","A"]
];
function _(x) {
return document.getElementById(x);
}
function askQuestion() {
quiz = _("quiz");
if questionNumber >= questions.length) {
    quiz.innerHTML = "<h2>You got "+correct+ "of "+questions.length+" questions right</h2>";
    _("quizScore").innerHTML = "Test Complete";
    questionNumber=0;
    correct = 0;
    return false;
    
}
_("quizScore").innerHTML = "Question "+(questionNumber+1)+"of "+questions; question = questions[questionNumber] [0];
selectA = questions[questionNumber][1];
selectB = questions[questionNumber][2];
selectC = questions[questionNumber][3];
selectD = questions[questionNumber][4];

quiz.innerHTML = "<h3>"+question+"</h3>";
quiz.innerHTML += "<input type='radio' name='choices' value='A'> "+selectA+"<br>";
quiz.innerHTML += "<input type='radio' name='choices' value='B'> "+selectB+"<br>";
quiz.innerHTML += "<input type='radio' name='choices' value='C'> "+selectC+"<br>";
quiz.innerHTML += "<input type='radio' name='choices' value='D'> "+selectD+"<br>";

quiz.innerHTML+= "<button onclick='checkAnswer()'>Submit</button>";

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


}
questionNumber++;
askQuestion();
}
window.addEventListener("load", askQuestion, false);