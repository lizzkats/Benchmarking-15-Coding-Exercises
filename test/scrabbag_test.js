import {expect} from 'chai'
import scrabbleRemainder from '../src/scrabbag.js'
  describe('scrabBag', function(){
    it('should return an object with the remainder of tiles in the bag', function(){
      expect(scrabbleRemainder('kgdf')).to.eql({
      A: 9,
      B: 2,
      C: 2,
      D: 3,
      E: 12,
      F: 1,
      G: 2,
      H: 2,
      I: 9,
      J: 1,
      K: 0,
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
    })
  })
})
