//Global Variables
//__________________________________________________________________________
let rightAnswer = 0;
let wrongAnswer = 0;
let tempQuestion = []; //holds object from array
let userAnswer; //userguess
let randQuestion = [];
//  Variable that will hold our setInterval that runs the timer
let intervalId;
// prevents the clock from being sped up unnecessarily
let clockRunning = false;
let time = 15;
let lap = 1;

//Objects
//__________________________________________________________________________

const coffeQuestions = [

{
  Question: "Where is coffee from?",
  Answer: ["A plant", "The ground", "Europe"],
  Correct: "Africa",
},
{
  Question: "When was coffee discovered?",
  Answer: ["1800", "300 B.C.", "1995"],
  Correct: "No one really knows",
},
{
  Question: "What is a drip coffee?",
  Answer: ["A leaky coffee", "A slow coffee, drip drip.", "Coffee from an Espresso Machine"],
  Correct: "Coffee that has water slowly poured over it",
},
{
  Question: "What does latte mean?",
  Answer: ["My favorite drink!", "What I get every morning", "Drip coffee with steamed milk"],
  Correct: "Milk",
}

];


// Functions
// __________________________________________________________________________

function startGame() {
  $("#startButton").hide();
  let tempQuestion = coffeQuestions[Math.floor(Math.random() * coffeQuestions.length)];
 // var tempQuestion = coffeQuestions[0].Question;
   console.log (tempQuestion);

   
   $("#question").text(tempQuestion.Question);
   $("#answer4").text(tempQuestion.Correct);
   $("#answer1").text(tempQuestion.Answer[0]);
   $("#answer2").text(tempQuestion.Answer[1]);
   $("#answer3").text(tempQuestion.Answer[2]);
   startClock();
    } 
//submitAnswer checks radio button and verifies if correct. Adds points to keep track of correct and inccorrect answers
    function submitAnswer() {
     let radios = document.getElementsByName("choice");
     let checked = false;
     let userAnswer;
     
     for(i = 0 ; i < radios.length; i++ ) {
        if(radios[i].checked) {
          checked = true;
          userAnswer = radios[i].value;
        }
     } 

// if user click submit button without selecting any option
   if(!checked) {
     alert("You must select an answer");
     return;
   }
   if (time < 0){
     alert("You ran out of time");
     wrongAnswer++;
     reset();
   }
   // Correct answer
   if(userAnswer === "option4") {
      alert("Answer is correct!");
     rightAnswer++;
     $("#right").text("Correct answers: " + rightAnswer);
     reset();
   }
   // incorrect answer
   else {
      alert("Answer is wrong!");
      wrongAnswer++;
      $("#wrong").text("Inccorect answers: " + wrongAnswer);
      reset();
   }
}
//This function is supposed to reset values in question box, restart timer and start game again
function reset() {
    checked = false;
    time = 15;
    // DONE: Change the "display" div to "00:15 and reset questions"
    $("#display").text("00:15");
    $("#question").empty();
    $("#answer4").empty();
    $("#answer1").empty();
    $("#answer2").empty();
    $("#answer3").empty();
   startGame();
  }


//Timer
//____________________________________________________________________________

  function startClock() {
  
    // DONE: Use setInterval to start the count here and set the clock to running.
    if (!clockRunning) {
      intervalId = setInterval(count, 1000);
      clockRunning = true;
    }
  }

  function count() {

    // DONE: decrease time by 1, remember we cant use "this" here.
    time--;
  
    // DONE: Get the current time, pass that into the timeConverter function,
    //       and save the result in a variable.
    var converted = timeConverter(time);
    console.log(converted);
  
    // DONE: Use the variable we just created to show the converted time in the "display" div.
    $("#display").text(converted);
  }

  function timeConverter(t) {
  
    let minutes = Math.floor(t / 60);
    let seconds = t - (minutes * 60);
  
    if (seconds < 10) {
      seconds = "0" + seconds;
    }
  
    if (minutes === 0) {
      minutes = "00";
    }
    else if (minutes < 10) {
      minutes = "0" + minutes;
    }
  
    return minutes + ":" + seconds;
  }

//DOM Manipulations
//__________________________________________________________________________
$("#right").text("Correct answers: " + rightAnswer);
$("#wrong").text("Inccorect answers: " + wrongAnswer);
$("#display").text("00:15");