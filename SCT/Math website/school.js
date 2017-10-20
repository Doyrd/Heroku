var ans = 0;
var feedInt = 0;
var goodAns = 1;
var e
var number1;
var number2;

var resultSentences =
[
  "Welcome to my game",
  "Your answer is correct!",
  "Your answer is incorrent."
]

var resultS = 0;

number1 = Math.floor((Math.random()*10)+1);
number2 = Math.floor((Math.random()*10)+1);

const problem = document.getElementById('problem');
problem.innerHTML = getProblem();

const solution = document.getElementById('solution');
solution.innerHTML = getSolution();

const score = document.getElementById('score');
score.innerHTML = getScoreCount();

const level = document.getElementById('level');
level.innerHTML = getLevelCount();


function getProblem()
{
  let ans = "<br/> Math problem: <br/>" + number1 + " x " + number2 + " = ?";
  return ans;
}

function getInput()
{
  input = document.getElementById('theInput').value;
  return input;
}

function giveResult()
{
  document.getElementById('result').innerHTML = resultSentences;
}

function getSolution()
{
  getInput();

  var solution = number1 * number2;
  console.log(solution);

  if(solution == input)
  {

  }

}

function getScoreCount()
{
  let ans = "<br> Score: " + getScore();
  return ans;
}

function getScore()
{
  var score = 0;
  return score;
}

function getLevelCount()
{
  let ans = "<br> Level: " + getLevel();
  return ans;
}

function getLevel()
{
  var level = 1;
  return level;
}
