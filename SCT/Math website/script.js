var ans = 0;
var feedInt = 0;
var goodAns = 0;
var theLevel = 1;
var theMathLevel = 2;
var score = 0;
var minimum = 1;
var theProblem;
var feedBackSentences =
[
 "Welcome to my math game!",
 "Your answer is correct, goodjob!",
 "Your answer is incorrect, try again.",
 "Invalid answer (Nothing typed).",
 "Invalid answer (No use of numbers).",
 "Your answer is correct + next level!",
 "Choose your level."
];

giveFeedBack();
nextQuestion();
giveLevel();

document.getElementById("score").innerHTML = "<br> Score: <br>" + score;


document.addEventListener('keydown',(e)=>
{
 if(e.keyCode == 13)
 {
   checkAnswer();
   document.getElementById('theInput').value = "";

 }
})

function level1()
{
  let number1 = getNumber();
  let number2 = getNumber();

  theProblem = "<br/> Math problem: <br/>" + number1 + " x " + number2 + " = ?";

  ans = number1 * number2;

  giveMath();
}

function level2()
{
  let number1 = getNumber();
  let number2 = getNumber();

  ans = number1 * number2;

  theProblem = "<br/> Math problem: <br/>" + number1 + " x ? = " + ans;

  ans = number2;

  giveMath();
}

function level3()
{
  let number1 = getNumber();
  let number2 = getNumber();
  let number3 = getNumber();

  ans = number1 * number2 + number3;

  theProblem = "<br/> Math problem: <br/>" + number1 + " x " + number2 + " + " + number3 + " = ?";

  giveMath();
}

function level4()
{
  let number1 = getNumber();
  let number2 = getNumber();
  let number3 = getNumber();

  ans = number1 * number2 + number3;

  theProblem = "<br/> Math problem: <br/>" + number1 + " x ? + " + number3 + " = " +  ans;

  ans = number2;

  giveMath();
}

// function theEnd()
// {
//   theProblem = "You've finished this game, congrats. If you wish to play again, refresh by pressing the refresh button next to the websites search bar or by pressing F5.";
//
//   giveMath();
// }

function checkAnswer() {
 if(getAnswer() == "skip")
 {
   console.log("skip");
   theProblem = feedBackSentences[6];
   giveMath();
 }
 else if(theProblem == feedBackSentences[6])
 {
   console.log("wrong");
   theLevel = getAnswer();
   minimun = theLevel * 2;
   theMathLevel = minimum + 1;
   giveLevel();
   nextQuestion();
 }
 else if(getAnswer() == ans)
 {
   if(goodAns == 9)
   {
     theLevel += 1;
     console.log("stop");
     theMathLevel += 2;
     goodAns = 0;
     minimum += 2;
     feedInt = 5;
   }
   else{feedInt = 1}
   goodAns += 1;
   score += 10 * ((.1 * theLevel) + 1);
   document.getElementById("score").innerHTML = "<br> Score: <br>" + score;
   nextQuestion();
   giveLevel();
 }
 else if(getAnswer() == "")
 {
   feedInt = 3;
 }
 else
 {
   feedInt = 2;
 }
 giveFeedBack();
}

function nextQuestion()
{
  if(theLevel == 1)
  {
    level1();
  }
  else if(theLevel == 2)
  {
    level2();
  }
  else if(theLevel == 3)
  {
    level3();
  }
  else if(theLevel == 4)
  {
    level4();
  }
  // else if(theLevel == 5)
  // {
  //   theEnd();
  // }
}

function giveMath()
{
 document.getElementById("problem").innerHTML = theProblem;
}
function giveLevel()
{
 document.getElementById("level").innerHTML = "<br> Level: <br>" + theLevel;
}

function giveFeedBack()
{
 document.getElementById("solution").innerHTML = feedBackSentences[feedInt];
}

function getAnswer()
{
 return document.getElementById('theInput').value
}

function getNumber()
{
 return Math.floor(Math.random()* (theLevel * 5)) + 1;
}
