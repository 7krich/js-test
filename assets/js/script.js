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
const submitButton = document.getElementById("submit");
const userInitials = document.getElementById("initials")

// questions array
let questions = [
  {
    question: "1. What does DOM stand for?",
    choiceA: "A. Document Object Maker",
    choiceB: "B. Document Object Model",
    choiceC: "C. Data Object Marker",
    choiceD: "D. Data Output Module",
    correct: "B"
  },
  {
    question: "2. What javascript item makes it easy to evaluate data multiple times?",
    choiceA: "A. If, Else statements",
    choiceB: "B. DOM methods",
    choiceC: "C. For Loops",
    choiceD: "D. While Loops",
    correct: "C"
  },
  {
    question: "3. Javascript is important for what reason",
    choiceA: "A. Making websites interactive",
    choiceB: "B. Styling webpages",
    choiceC: "C. Local Storage",
    choiceD: "D. None of the above",
    correct: "A"
  },
  {
    question: "4. What DOM method allows you to return HTML content of an element?",
    choiceA: "A. innerHTML",
    choiceB: "B. getElementById",
    choiceC: "C. attribute",
    choiceD: "D. setAttribute",
    correct: "A"
  },
  {
    question: "5. How do you convert data into a string so it can be saved locally?",
    choiceA: "A. stringify",
    choiceB: "B. parse",
    choiceC: "C. getItem",
    choiceD: "D. setItem",
    correct: "A"
  },
]

// variables
let lastQuestion = questions.length-1;
let runningQuestion = 0;
let score = 0;
let count = 45;
let TIMER;
const questionTime = 45;

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

// end quiz
function endQuiz() {
  if (TIMER <= 0 || runningQuestion > lastQuestion) {
    document.write = "You have reached the end of the quiz!"
  }
}

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
  } if (count === -1) {
    clearInterval(TIMER);
    question.style.display= "none";
    choiceA.style.display= "none";
    choiceB.style.display= "none";
    choiceC.style.display= "none";
    choiceD.style.display= "none";
    scoreRender();
    formRender();
    endQuiz;
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
    count = count - 5;
  }
  count > 0;
  if(runningQuestion < lastQuestion) {
    runningQuestion++;
    renderQuestion();
  } else {
    // end quiz
    clearInterval(TIMER);
    question.style.display= "none";
    choiceA.style.display= "none";
    choiceB.style.display= "none";
    choiceC.style.display= "none";
    choiceD.style.display= "none";
    scoreRender();
    formRender();
    endQuiz;
  }
};

// score
function scoreRender() {
  scoreDiv.style.display = "block";

  // give user their score
  const scorePerCent = Math.round(100 * score/questions.length);
  scoreDiv.innerHTML += "<p>Score: " + scorePerCent + "%</p>";

    // add score to local storage
    // create array for score and initials
    submitButton.addEventListener("click", function(event) {
      event.preventDefault();
    
      user = {
        intiails: initials.value,
        scorePerCent
      }

    localStorage.setItem(scorePerCent + initials, JSON.stringify(user));
  })
};

// intials
function formRender() {
  initialsDiv.style.display = "block";
}


