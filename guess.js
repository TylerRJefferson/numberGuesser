/*
Create a program that will generate a random number from 1-10,
then asks us to guess that number.
If our guess is higher, say "too high" and ask again.
If it is lower, say "too low" and ask again.
If it is the right number, say "congratulations" and exit
*/

import readline from "readline-sync"; //import npm library to guess.js

let userGuessedRight = false //setting variable to false boolean

// while(true) { //just playing around, constantly generates random nums
   // gives a random num from 1-10 and always rounds up
  let NumberChosen = Math.ceil(Math.random() * 10)
  // console.log(NumberChosen)
// }

while(!userGuessedRight){
let guess = readline.question("What is your guess?") //while userGuessedRight variable is a falsy condition, tell us to keep guessing
if (guess > NumberChosen) //if guess is higher than number chosen, tell us "too high"
{
    console.log("Too high!") 
  }
if (guess < NumberChosen) //if guess is lower than number chosen, tell us "too low"
  {
    console.log("Too low!")
  }
if (guess == NumberChosen) //if guess is the number chosen, tell us congrats
  {
    console.log("Congratulations!")
    userGuessedRight = true
  }
}
