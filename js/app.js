'use strict'

let userGuest = prompt('Hello! What is your name?');
alert(`Hi, ${userGuest}. Welcome to my About Me page!`)

let score = 0

let answerOne = prompt('Q1: Do I play online games?').toUpperCase();

if(answerOne === 'Y' || answerOne === 'YES') {
  score++
  // console.log('You are correct! I play League of Legends!');
  alert('You are correct! I play League of Legends!');
} else if(answerOne === 'N' || answerOne === 'NO') {
  // console.log('Sorry, you are incorrect. I love playing online games.');
  alert('Sorry, you are incorrect. I love playing online games.');
} else {
  alert('Invalid answer. Please try again!');
}

let answerTwo = prompt('Q2: Do I live in Los Angeles?').toUpperCase();

if(answerTwo === 'N' || answerTwo === 'NO') {
  score++;
  // console.log('You are correct! I live in Seattle.');
  alert('You are correct! I live in Seattle.');
} else if(answerTwo === 'Y' || answerTwo === 'YES') {
  // console.log('Sorry, you are incorrect. I no longer live in Los Angeles.');
  alert('Sorry, you are incorrect. I no longer live in Los Angeles.');
} else {
  alert('Invalid answer. Please try again!');
}

let answerThree = prompt('Q3: Did I serve in the Navy?').toUpperCase();

if(answerThree === 'N' || answerThree === 'No') {
  score++;
  // console.log('You are correct! I served in the Army');
  alert('You are correct!');h
} else if(answerThree === 'Y' || answerThree === 'YES') {
  // console.log('Sorry, you are incorrect. I served in the Army.');
  alert('Sorry, you are incorrect. I never served in the Navy.');
} else {
  alert('Invalid answer. Please try again!');
}

let answerFour = prompt('Q4: Did I attend UC Davis?').toUpperCase();

if(answerFour === 'Y' || answerFour === 'YES') {
  score++;
  // console.log('You are correct! I majored in human development at UC Davis.');
  alert('You are correct! I majored in human development at UC Davis.');
} else if(answerFour === 'N' || answerFour === 'NO') {
  // console.log('Sorry, you are incorrect. I graduated from UC Davis.');
  alert('Sorry, you are incorrect. I graduated from UC Davis.');
} else {
  alert('Invalid answer. Please try again!');
}

let answerFive = prompt('Q5: Do I want to be a data scientist?').toUpperCase();

if(answerFive === 'N' || answerFive === 'NO') {
  score++;
  // console.log('You are correct! I actually want to be a full-stack developer.');
  alert('You are correct! I actually want to be a full-stack developer.');
} else if(answerFive === 'Y' || answerFive === 'YES') {
  // console.log('Sorry, you are incorrect. I actually want to be a full-stack developer.');
  alert('Sorry, you are incorrect. I actually want to be a full-stack developer.');
} else {
  alert('Invalid answer. Please try again!');
}

let myNum = 9;
let numTurns = 0;
alert('Let\'s play a guessing game!');

while(numTurns < 4) {
  numTurns++;
  let answerSix = prompt('Guess a number between 1 and 20!');
  if (answerSix == myNum) {
    alert('You got it!');
    break;
  } else if (answerSix > myNum) {
    alert('Too high.');
  } else if (answerSix < myNum) {
    alert('Too low.');
  }
}
alert('My number was 9!');


alert('Guess one of my faviorite movies!')
alert('Aliens, Dunkirk, Interstellar, Spiderman, Transformers')

let myArr = ['Aliens', 'Avengers', 'Seven', 'Toy Story', 'Up']
let attempts = 6;
let correct = false;

while(attempts > 0) {
  attempts--
  let answerSeven = prompt('Guess one of my favorite movies!')
  console.log(answerSeven)
  for (let i = 0; i < myArr.length; i++) {
    if(answerSeven === myArr[i]) {
      attempts = 0
      score++
      correct = true
    }
  }
  if(!correct && attempts > 0) {
    alert('Please try again. You have ' + attempts + ' attempts left')
  }
}

if(correct) {
  alert('You got it!');
} else {
  alert('You are incorrect.')
}

alert('You scored ' + score + ' points')
alert(`Thank you for visiting my About Me page. I'll see you agian, ${userGuest}!`);