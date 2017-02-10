'use strict';

//Setting up a Results variable
var res = 0;

//Beginning the quiz
var confirmQuiz = prompt('Hello, would you like to take a quiz...About me? Please answer with Y or N.');

if (confirmQuiz.toUpperCase() === 'Y'){
  alert('Cool! Here we go!');
} else {
  alert('Too bad, you are trapped now ha ha.');
}

var user = prompt('First of all, what\'s your name?');
alert('Hello ' + user + ', nice to virtually meet you! Answer the following questions with Y or N');

var questionOne = prompt('Okay, ' + user + ', first question: Do I have more than 20 tattoos?');

if (questionOne.toUpperCase() === 'N'){
  alert('Correct! I have 19 tattoos');
  var res = res + 1;
} else {
  alert('False! I have 19');
}

var questionTwo = prompt('Alright ' + user + ', second question: Was I of legal drinking age when I moved to Seattle?');

if (questionTwo.toUpperCase() === 'Y'){
  alert('Yep, I was 23! You are correct');
  var res = res + 1;
} else {
  alert('YEAH! jk no, I was 23');
}

var questionThree = prompt(user + ', third question: Do I have a cat?');

if (questionThree.toUpperCase() === 'Y'){
  alert('Yep, I sure do.');
  var res = res + 1;
} else {
  alert('Wrong, I do.');
}

var questionFour = prompt('Next question, ' + user + ', do I know how to ski?');

if (questionFour.toUpperCase() === 'Y'){
  alert('Nope! I do know how to snowboard, though.');
} else {
  alert('Correct, I do not.');
  var res = res + 1;
}

var questionFive = prompt('Final question! ' + user + ', is my birthday near Thanksgiving?');

if (questionFive.toUpperCase() === 'Y'){
  alert('Wrong! It\'s in the spring.');
} else {
  alert('Correct, my birthday is in March.');
  var res = res + 1;
}

for (var i = 0; i < 4; i++) {
  var questionSix = parseInt(prompt('Psyche! There are two more questions;). What is my favorite number? You have four tries'));
  if (questionSix === 22){
    alert('Yes! Correct!');
    var res = res + 1;
    break;
  } else if (questionSix > 22) {
    alert('You are too high.. Guess again.');
  } else if (questionSix < 22) {
    alert('You are too low.. Guess again.');
  } else {
    alert('Alright my favorite number is 22');
  }
}

for (var i = 0; i < 6; i++) {
  console.log(questionSeven);
  var correctAnswers = ['ALASKA', 'COLORADO', 'OREGON', 'CALIFORNIA'];
  var questionSeven = prompt('Last and final question, for real this time. What other state have I lived in besides Washington?');
  if (correctAnswers.includes(questionSeven.toUpperCase()) === true) {
    alert('Correct!');
    var res = res + 1;
    break;
  } else {
    alert('Guess again');
  }
}

alert('Thanks for playing ' + user + '! I have lived in Alaska, Colorado, Oregon, and California. You scored a ' + res + '/7 on the quiz.');
