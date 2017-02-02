export default function stringIndicies(input, index){
  let toArray = input.split(' ')
  if(index >= toArray.length){
    return ""
  }
    let stringIndex = toArray[index - 1]
    return stringIndex
}
