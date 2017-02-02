import {expect} from 'chai'
import newString from '../src/disemVoweling.js'

describe('disemVoweling', function(){
  it('should return a string with no vowels or spaces', function(){
expect(newString('i hate vowels')).to.equal('htvwls')
})
  describe('disemVoweling', function(){
    it('should ignore capital letters', function(){
  expect(newString('CASH ME OUSSIDE')).to.equal('cshmssd')
    })
  })
})
