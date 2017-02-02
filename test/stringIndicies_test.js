var expect = require('chai')
var guessTheNumber = require('../src/stringIndicies.js')
//This still isn't working
  describe('stringIndicies', function(){
    it('should return the string in the sentence found at that index', function(){
      expect(stringIndicies('cash me outside how about that', 0)).to.equal('cash')
      })
      it('should return an array with numbers from 1-100', function(){
        expect(stringIndicies('I dont actually exist', 7)).to.equal('')
        })
    })
