'use strict';

let score = 0;

function askGuestName() {
  let userGuest = prompt('Hello! What is your name?');
  alert(`Hi, ${userGuest}. Welcome to my About Me page!`);
}

function askHobby() {
  let answerOne = prompt('Q1: Do I play online games?').toUpperCase();
  if (answerOne === 'Y' || answerOne === 'YES') {
    score++
    alert('Yes, I do! I like to play League of Legends!');
  } else if (answerOne === 'N' || answerOne === 'NO') {
    alert('Sorry, you are incorrect. I love playing online games.');
  }
}

function askCity() {
  let answerTwo = prompt('Q2: Do I live in Los Angeles?').toUpperCase();
  if (answerTwo === 'N' || answerTwo === 'NO') {
    score++;
    alert('Correct! I no longer live in Los Angeles. I now live in Seattle.');
  } else if (answerTwo === 'Y' || answerTwo === 'YES') {
    alert('Sorry, you are incorrect. I live in Seattle.');
  }
}

function askJob() {
  let answerThree = prompt('Q3: Did I serve in the Navy?').toUpperCase();
  if (answerThree === 'N' || answerThree === 'NO') {
    score++;
    alert('Correct! I never served in the Navy. I actually served in the Army');
  } else if (answerThree === 'Y' || answerThree === 'YES') {
    alert('Wrong. I never served in the Navy.');
  }
}

function askSchool() {
  let answerFour = prompt('Q4: Did I attend UC Davis?').toUpperCase();
  if (answerFour === 'Y' || answerFour === 'YES') {
    score++;
    alert('Yes! I majored in human development at UC Davis.');
  } else if (answerFour === 'N' || answerFour === 'NO') {
    alert('Sorry... you are incorrect. I graduated from UC Davis.');
  }
}

function askCareer() {
  let answerFive = prompt('Q5: Do I want to be a data scientist?').toUpperCase();
  if (answerFive === 'N' || answerFive === 'NO') {
    score++;
    alert('Of course not! I actually want to be a full-stack developer.');
  } else if (answerFive === 'Y' || answerFive === 'YES') {
    alert('Sorry, you are incorrect. I actually want to be a full-stack developer.');
  }
}

function guessNum() {
  score++;
  let myNum = 9;
  let numTurns = 0;
  alert('Let\'s play a guessing game!');

  while (numTurns < 4) {
    numTurns++;
    let answerSix = prompt('Q6: Guess a number between 1 and 20!');
    if (parseInt(answerSix) === myNum) {
      alert('You got it!');
      break;
    } else if (answerSix > 15) {
      alert('Too high. Try agin.');
    } else if (answerSix > 9 && answerSix <= 15) {
      alert('Less than that. Try again.');
    } else if (answerSix > 5 && answerSix < 9) {
      alert('More than that. Try again.')
    } else if (answerSix >= 1 && answerSix < 6) {
      alert('Too low. Try again');
    }
  }
  alert(`My number was ${myNum}!`);
}

function guessMovie() {
  alert('Guess one of my faviorite movies from the following movie list!');
  alert('Aliens, Dunkirk, Interstellar, Kill Bill, Saw, Spiderman, Transformers');

  let myMovies = ['ALIENS', 'AVENGERS', 'SEVEN', 'TOY STORY', 'UP'];
  let attempts = 6;


  while (attempts > 0) {
    attempts--;
    let answerSeven = prompt('Q7: Guess one of my favorite movies!').toUpperCase();
    let correct = false;
    for (let i = 0; i < myMovies.length; i++) {
      if (answerSeven === myMovies[i]) {
        score++;
        attempts = 0;
        correct = true
      }
    }
    if (!correct && attempts > 0) {
      alert(`Not really... You have ${attempts} attempts left.`);
    }
    if (correct) {
      alert('You got it! Aliens is one of my favorite movies!');
    }
    if (!correct && parseInt(attempts) === 0) {
      alert('Sorry, the answer was Aliens.');
    }
  }
}

askGuestName()
askHobby()
askCity()
askJob()
askSchool()
askCareer()
guessNum()
guessMovie()
alert(`You scored ${score} out of 7 points!!`);
alert('Thank you for visiting my About Me page. Good bye!');