// Write a program that will generate a number between 1 and 100. Your program will ask the user to guess the generated number.
//
// When the user types a guess, the program should tell them if they won (the guess matched the computer's number), if their guess was higher than the number the computer generated, OR if the guess was lower than the number the computer generated. Terminate the program if the user types "exit".

//prompt the user to enter a number between 1-100
//if the number === the number returned, then respond with WINNER!
//else, return 'try again'
//to quit, type exit

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter a random number between 1-100 ', answer => {
  console.log('You entered: ' + answer)
  const randomNum = getRandomNumber(0,100)
  console.log('The number was ' + randomNum)
  if(randomNum === answer){
    console.log('WINNER!!')
  } else if (randomNum < answer) {
    console.log('Your number was too high.')
  } else if(randomNum > answer){
    console.log('Your number was too low!')
  }

rl.question('type "exit" to close ', answer => {
  if(answer === 'exit'){
    rl.close();
  }

})
});

function getRandomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
