import {expect} from 'chai'
import stringIndicies from '../src/stringIndicies.js'
  describe('stringIndicies', function(){
    it('should return the string in the sentence found at that index', function(){
      expect(stringIndicies('cash me outside how about that', 1)).to.equal('cash')
      })
      it('should return an empty string if the location does not exist in the sentence', function(){
        expect(stringIndicies('I dont actually exist', 7)).to.equal('')
        })
    })
