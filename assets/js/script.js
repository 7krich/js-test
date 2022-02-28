// create html elements
var body = document.body;
var h1El = document.createElement("h1");
var timeEl = document.createElement("div");
var scoreEl = document.createElement("div");
var infoEl = document.createElement("section");
var questionEl = document.createElement("div");
var listEl = document.createElement("ol");
var answersEl = document.createElement("li");
var answersEl = document.createElement("li");
var answersEl = document.createElement("li");
var answersEl = document.createElement("li");
var resultEl = document.createElement("div");

// add text to html elements
h1El.textContent = "Welcome to the Javascript assessment";
scoreEl.textContent = "View high Scores";
timeEl = "Time: "
questionEl = "What Javascript feature is helpful for examining a data set multiple times?"


// append (add) items to the page
body.appendChild(h1El);
body.append(scoreEl);
body.append(timeEl);
body.append(questionEl);
body.append(timerEl);

// set attributes

h1El.setAttribute("style", "margin:auto; width:50%; text-align:center;");


// var questions = [
//     {
//         prompt: "What Javascript feature is helpful for examining a data set multiple times?\n(A) If else statement\n(B) For Loop\n(C) While Loop\n(D) None of the above",
//         answer: "A"
//     },
//     {
//         prompt: "What does DOM stand for?\n(A) Document Object Maker\n(B) Developer Oganization Marker\n(C) Document Object Model\n(D) Document Organization Model",
//         answer: "C"
//     },
//     {
//         prompt: "What is a Javascript object?\n(A) A data set with properties\n(B) Any piece of data\n(C) An attribute\n(D) None of the above",
//         answer: "A"
//     },
// ];
// var score = 0;

// for (var i=0; i<questions.length; i++) {
//     var response = document.write(questions[i].prompt);
//     if(response == questions[i].answer) {
//         score++;
//     }
// };


// document.write("You got " + score + " out of 3.");

// timer

var timerEl = document.getElementById('countdown');
var mainEl = document.getElementById('main');

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

countdown();
