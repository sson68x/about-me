'use strict'

let userGuest = prompt('Hello! What is your name?');
alert(`Welcome to my About me page, ${userGuest}!!`)

let answerOne = prompt('Do I play console games?').toUpperCase();

if(answerOne === 'Y' || answerOne === 'YES') {
  // console.log('You are correct!');
  alert('You are correct!');
} else if(answerOne === 'N' || answerOne === 'NO') {
  // console.log('Sorry, you are incorrect.');
  alert('Sorry, you are incorrect.');
} else {
  alert('Invalid answer. Please try again!');
}

let answerTwo = prompt('Do I live in Los Angeles?').toUpperCase();

if(answerTwo === 'N' || answerTwo === 'NO') {
  // console.log('You are correct!');
  alert('You are correct!');
} else if(answerTwo === 'y' || answerTwo === 'YES') {
  // console.log('Sorry, you are incorrect.');
  alert('Sorry, you are incorrect.');
} else {
  alert('Invalid answer. Please try again!');
}

let answerThree = prompt('Did I serve in the Navy?').toUpperCase();

if(answerThree === 'N' || answerThree === 'No') {
  // console.log('You are correct!');
  alert('You are correct!');
} else if(answerThree === 'Y' || answerThree === 'YES') {
  // console.log('Sorry, you are incorrect.');
  alert('Sorry, you are incorrect.');
} else {
  alert('Invalid answer. Please try again!');
}

let answerFour = prompt('Did I attend UC Davis?').toUpperCase();

if(answerFour === 'Y' || answerFour === 'YES') {
  // console.log('You are correct!');
  alert('You are correct!');
} else if(answerFour === 'N' || answerFour === 'NO') {
  // console.log('Sorry, you are incorrect.');
  alert('Sorry, you are incorrect.');
} else {
  alert('Invalid answer. Please try again!');
}

let answerFive = prompt('Do I want to be a data scientist?').toUpperCase();

if(answerFive === 'N' || answerFive === 'NO') {
  // console.log('You are correct!');
  alert('You are correct!');
} else if(answerFive === 'Y' || answerFive === 'YES') {
  // console.log('Sorry, you are incorrect.');
  alert('Sorry, you are incorrect.');
} else {
  alert('Invalid answer. Please try again!');
}

alert(`I will see you agian, ${userGuest}!`);