export default function newString(input){
  let noVowels = input.toLowerCase().replace(/[aeiou]/gi, '')
  let noSpaces = noVowels.replace(/\s/g,'')
  return noSpaces
}
