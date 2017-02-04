// Write a program that converts from decimal to base Fibonacci and from Fibonacci to decimal.
//input: decimal 10
//output: base fibonacci binary
//input: fib 1101
//output: base 10
//three functions- two converting functions and a fibonacci function

if(input == 'decimal'){
  //returns base fibonacci
}

if(input == 'fib'){
  //count the length of the input
  //i and j should be the same length
  //i= user input
  //j = fibonacci sequence
  //return i * j + i+1 + j+1 until you get to the length
  //returns base 10 number
  
}

function fibonacci(){
  let fibArray = [0,1]
  if ( number < 3 )
  return fibArray;

  for ( let i = 2; i < number; i++ ) {
    fibArray[i] = fibArray[i-1] + fibArray[i-2]
  }
  return fibArray;
}
