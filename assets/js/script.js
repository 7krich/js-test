// element selection
const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const choiceD = document.getElementById("D");
const timerEl = document.getElementById("countdown");
const mainEl = document.getElementById("main");
const progress = document.getElementById("progress");
const scoreCounter = document.getElementById("scoreContainer");

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
    question: "JSON is an important feature related to what topic",
    choiceA: "Making websites interactive",
    choiceB: "Creating new HTML elements with Javascript",
    choiceC: "Event handling",
    choiceD: "Local Storage",
    correct: "D"
  },
]

// start quiz
start.addEventListener("click", startQuiz);

function startQuiz() {
  start.style.display = "none";
  renderQuestion();
  quiz.style.display = "block";
  countdown();
  score();
}

function score() {
  scoreContainer.style.display = "block";
  let scorePerCent = Math.round(100 * score/questions.length);
  scoreContainer.innerHTML = scorePerCent + "%";
}

// display questions

let lastQuestion = questions.length-1;
let runningQuestion = 0;

function renderQuestion() {
  let q = questions[runningQuestion];
  question.innerHTML = "<p>" + q.question + "</p>";
  choiceA.innerHTML = q.choiceA;
  choiceB.innerHTML = q.choiceB;
  choiceC.innerHTML = q.choiceC;
  choiceD.innerHTML = q.choiceD;
};

start.style.display = "block";
quiz.style.display = "none;"

runningQuestion = 0;

// check answer function
function checkAnswer (answer) {
  //check if the correct answer was chosen
  if (questions[runningQuestion].correct == answer) {
    // if true add to the score
    score++;
  } else {
    answerIsWrong();
    //reduce time here

  }
  // stop at the last question
  if (runningQuestion < lastQuestionIndex) {
    // display new questions
    count = 0;
    runningQuestionIndex++
    quesitonRender();
  } else {
    // clear timer interval and show the score when done 
    clearInterval();
    ScoreRender();
  }
}

//render timer
let count = 100
const questionTime = 100;


// Timer that counts down from 100
function countdown() {
  var timeLeft = 100;

  // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
  var timeInterval = setInterval(function () {
    // As long as the `timeLeft` is greater than 1
    if (timeLeft > 1) {
        // Set the `textContent` of `timerEl` to show the remaining seconds
        timerEl.textContent = timeLeft + ' seconds remaining';
        // Decrement `timeLeft` by 1
        timeLeft--;
    } else if (timeLeft === 1) {
        // When `timeLeft` is equal to 1, rename to 'second' instead of 'seconds'
        timerEl.textContent = timeLeft + ' second remaining';
        timeLeft--;
    } else {
        // when time runs out notfiy the user
        timerEl.textContent = "You are out of time!";
    }
  }, 1000);
}


