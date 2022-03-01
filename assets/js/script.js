// element selection
const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const choiceD = document.getElementById("D");
const counter = document.getElementById("counter");
const scoreDiv = document.getElementById("scoreContainer")
const progress = document.getElementById("progress");
const initialsDiv = document.getElementById("initialsForm");

// questions array
let questions = [
  {
    question: "What does DOM stand for?",
    choiceA: "Document Object Maker",
    choiceB: "Document Object Model",
    choiceC: "Data Object Marker",
    choiceD: "Data Output Module",
    correct: "B"
  },
  {
    question: "What javascript item makes it easy to evaluate data multiple times?",
    choiceA: "If, Else statements",
    choiceB: "DOM methods",
    choiceC: "For Loops",
    choiceD: "While Loops",
    correct: "C"
  },
  {
    question: "JSON is an important feature related to what topic?",
    choiceA: "Making websites interactive",
    choiceB: "Creating new HTML elements with Javascript",
    choiceC: "Event handling",
    choiceD: "Local Storage",
    correct: "D"
  },
  {
  question: "What DOM method allows you to return HTML content of an element",
  choiceA: "innerHTML",
  choiceB: "getElementById",
  choiceC: "attribute",
  choiceD: "setAttribute",
  correct: "A"
  },
]

// variables
let lastQuestion = questions.length-1;
let runningQuestion = 0;
let score = 0;
let count = 100;
let TIMER;
const questionTime = 100;

//

//
//
// functions for game to work
// display questions
function renderQuestion() {
  let q = questions[runningQuestion];
  question.innerHTML = "<p>" + q.question + "</p>";
  choiceA.innerHTML = q.choiceA;
  choiceB.innerHTML = q.choiceB;
  choiceC.innerHTML = q.choiceC;
  choiceD.innerHTML = q.choiceD;
};

// start quiz
start.addEventListener("click", startQuiz);

function startQuiz() {
  start.style.display = "none";
  renderQuestion();
  quiz.style.display = "block";
  renderProgress();
  renderCounter();
  TIMER = setInterval(renderCounter,1000);
};

// progress
function renderProgress() {
  for(let qIndex = 0; qIndex <= lastQuestion; qIndex++) {
    progress.innerHTML += "<div class='prog' id="+ qIndex +"></div>";
  }
};

// countdown 
function renderCounter() {
  if(count <= questionTime) {
    counter.innerHTML = count;
    count--;
  } else {
    count = 0;
    answerIsWrong();
    if(runningQuestion < lastQuestion){
      runningQuestion++;
      renderQuestion();
    } else {
      clearInterval(TIMER);
      scoreRender();
    }
  }
}

// check answer function
function checkAnswer (answer) {
  //check if the correct answer was chosen
  if (answer == questions[runningQuestion].correct) {
    // if correct add to the score
    score++;
  } else {
    // if wrong
    answerIsWrong();
  }
  count > 0;
  if(runningQuestion < lastQuestion) {
    runningQuestion++;
    renderQuestion();
  } else {
    // end quiz
    clearInterval(TIMER);
    scoreRender();
    formRender();
  }
};

//answer is wrong
function answerIsWrong() {
  count = count - 5;
};

// score
function scoreRender() {
  scoreDiv.style.display = "block";

  // give user their score
  const scorePerCent = Math.round(100 * score/questions.length);
  scoreDiv.innerHTML += "<p>Score: " + scorePerCent + "%</p>";
};

// intials
function formRender() {
  initialsDiv.style.display = "block";
}