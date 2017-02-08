'use strict';

var confirmQuiz = prompt('Hello, would you like to take a quiz...About me? Please answer with Y or N.');

if (confirmQuiz.toUpperCase() === 'Y'){
  print('Cool! Here we go!');
} else {
  print('Too bad, you are trapped now ha ha.');
}

var user = prompt('First of all, what\'s your name?');
print('Hello ' + user + ' ,nice to virtually meet you!');

var questionOne = prompt('Okay, ' + user + 'First question: Do I have more than 15 tattoos?');

if (questionOne.toUpperCase() === 'Y'){
  print('Yes! I have 19 tattoos');
} else {
  print('False! I have 19');
}

var questionTwo = prompt('Alright, ' + user + 'Second question: Was I of legal drinking age when I moved to Seattle?');

if (questionTwo.toUpperCase() === 'Y'){
  print('Yep, I was 23! You are correct');
} else {
  print('YEAH! jk no, I was 23');
}
