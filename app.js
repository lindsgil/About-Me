'use strict';

var confirmQuiz = prompt('Hello, would you like to take a quiz...About me? Please answer with Y or N.');

if (confirmQuiz.toUpperCase() === 'Y'){
  console.log('Cool! Here we go!');
} else {
  console.log('Too bad, you are trapped now ha ha.');
}

var user = prompt('First of all, what\'s your name?');
console.log('Hello ' + user + ' ,nice to virtually meet you! Answer the following questions with Y or N');

var questionOne = prompt('Okay, ' + user + ', first question: Do I have more than 20 tattoos?');

if (questionOne.toUpperCase() === 'N'){
  console.log('Correct! I have 19 tattoos');
} else {
  console.log('False! I have 19');
}

var questionTwo = prompt('Alright ' + user + ', second question: Was I of legal drinking age when I moved to Seattle?');

if (questionTwo.toUpperCase() === 'Y'){
  console.log('Yep, I was 23! You are correct');
} else {
  console.log('YEAH! jk no, I was 23');
}

var questionThree = prompt(user + ', third question: Do I have a cat?');

if (questionThree.toUpperCase() === 'Y'){
  console.log('Yep, I sure do.');
} else {
  console.log('Wrong, I do.');
}

var questionFour = prompt('Next question, ' + user + ', do I know how to ski?');

if (questionFour.toUpperCase() === 'Y'){
  console.log('Nope! I do know how to snowboard, though.');
} else {
  console.log('Correct, I do not.');
}

var questionFive = prompt('Final question! ' + user + ',is my birthday near Thanksgiving?');

if (questionFive.toUpperCase() === 'Y'){
  console.log('Wrong! It\'s in the spring.');
} else {
  console.log('Correct, my birthday is in March.');
}
