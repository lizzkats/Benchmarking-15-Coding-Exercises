//input a string
//split string into an array
//iterate over the array
//for each letter and subtract one
//MAKE THE STRING UPPERCASE

var scrabbleBag = {
  A: 9,
  B: 2,
  C: 2,
  D: 4,
  E: 12,
  F: 2,
  G: 3,
  H: 2,
  I: 9,
  J: 1,
  K: 1,
  L: 4,
  M: 2,
  N: 6,
  O: 8,
  P: 2,
  Q: 1,
  R: 6,
  S: 4,
  T: 6,
  U: 4,
  V: 2,
  W: 2,
  X: 1,
  Y: 2,
  Z: 1,
  _: 2
}

function scrabbleRemainder(str){
var upperCase = str.toUpperCase()
var toArray = upperCase.split('')
for(var i = 0; i < toArray.length; i++){
  var currentLetter = toArray[i]
  var remainderTiles = scrabbleBag[currentLetter]
    remainderTiles = remainderTiles - 1
    scrabbleBag[currentLetter]= remainderTiles
}
return scrabbleBag
}
scrabbleRemainder('kgdfbgfg')

module.exports= {scrabbleBag}
