'use strict';

//Setting up a Results variable
var res = 0;

//Beginning the quiz
var confirmQuiz = prompt('Hello, would you like to take a quiz...About me? Please answer with Y or N.');

function funkQuest(){
  if (confirmQuiz.toUpperCase() === 'Y'){
    alert('Cool! Here we go!');
  } else {
    alert('Too bad, you are trapped now ha ha.');
  }
}
funkQuest();
// End of funkQuest

var user = prompt('First of all, what\'s your name?');
alert('Hello ' + user + ', nice to virtually meet you! Answer the following questions with Y or N');

var questionOne = prompt('Okay, ' + user + ', first question: Do I have more than 20 tattoos?');

function funkQuestOne(){
  if (questionOne.toUpperCase() === 'N'){
    alert('Correct! I have 19 tattoos');
    //var res = res + 1;
    //return res;
    res++;
    return;
  } else {
    alert('False! I have 19');
  }
}
funkQuestOne();
// If you got it right, give one point and add to total points.
// End of funkQuestOne

var questionTwo = prompt('Alright ' + user + ', second question: Was I of legal drinking age when I moved to Seattle?');

function funkQuestTwo(){
  if (questionTwo.toUpperCase() === 'Y'){
    alert('Yep, I was 23! You are correct');
    //var res = res + 1;
    //return res;
    res++;
    return;
  } else {
    alert('YEAH! jk no, I was 23');
  }
}
funkQuestTwo();
// End of funkQuestTwo

var questionThree = prompt(user + ', third question: Do I have a cat?');

function funkQuestThree(){

  if (questionThree.toUpperCase() === 'Y'){
    alert('Yep, I sure do.');
    //var res = res + 1;
    //return res;
    res++;
    return;
  } else {
    alert('Wrong, I do.');
  }
}
funkQuestThree();
// End of funkQuestThree

var questionFour = prompt('Next question, ' + user + ', do I know how to ski?');

function funkQuestFour(){
  if (questionFour.toUpperCase() === 'Y'){
    alert('Nope! I do know how to snowboard, though.');
  } else {
    alert('Correct, I do not.');
    //var res = res + 1;
    //return res;
    res++;
    return;
  }
}
funkQuestFour();
// End of funkQuestFour

var questionFive = prompt('Final question! ' + user + ', is my birthday near Thanksgiving?');

function funkQuestFive(){
  if (questionFive.toUpperCase() === 'Y'){
    alert('Wrong! It\'s in the spring.');
  } else {
    alert('Correct, my birthday is in March.');
    //var res = res + 1;
    //return res;
    res++;
    return;
  }
}
funkQuestFive();
// End of funkQuestFive

function funkQuestSix(){
  for (var i = 0; i < 4; i++) {
    var questionSix = parseInt(prompt('Psyche! There are two more questions;). What is my favorite number? You have four tries'));
    if (questionSix === 22){
      alert('Yes! Correct!');
      //var res = res + 1;
      //return res; // Was break;
      res++;
      return;
    } else if (questionSix > 22) {
      alert('You are too high.. Guess again.');
    } else if (questionSix < 22) {
      alert('You are too low.. Guess again.');
    } else {
      alert('Guess a number.');
    }
  }
  alert('Alright, you\'re out of questions. My favorite number is 22');
}
funkQuestSix();
// End of funkQuestSix

function funkQuestSeven(){
  for (var i = 0; i < 6; i++) {
    console.log(questionSeven);
    var correctAnswers = ['ALASKA', 'COLORADO', 'OREGON', 'CALIFORNIA'];
    var questionSeven = prompt('Last and final question, for real this time. What other state have I lived in besides Washington?'); // Asks this question again?
    if (correctAnswers.includes(questionSeven.toUpperCase()) === true) {
      alert('Correct!');
      //var res = res + 1;
      //return res; // Was break;
      res++;
      return;
    } else {
      alert('Guess again');
    }
  }
}
funkQuestSeven();
// End of funkQuestSeven

alert('Thanks for playing ' + user + '! I have lived in Alaska, Colorado, Oregon, and California. You scored a ' + res + '/7 on the quiz.'); // This doesn't work yet.
