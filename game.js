'use strict';

var prompt = require('prompt-sync')(); 
var colors = require('colors');

var player = {
  bankroll: 100
};

function game(){
  var number = Math.round(Math.random() * (10 - 0)) + 0;

  var guess = prompt("Enter your guess: ");

  var guessNum = parseInt(guess);

  var bet = prompt("How much you want to bet: ");

  var betNum = parseInt(bet);

  if ((guessNum === number + 1) || (guessNum === number - 1)) {
    console.log(number);
    console.log("Close but no dice...".blue.bold);
  } else if (guessNum === number) {
    console.log(number);
    console.log("Good job! You win!".green.bold);
    player.bankroll += betNum;
  } else {
    console.log(number);
    console.log("Wrong! You lose!".red.bold);
    player.bankroll -= betNum;
    console.log(player.bankroll);
  }
}

game();


