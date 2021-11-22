function getAge(inputString){
  let arr = inputString.split(' ').filter(f => f.length == 1)
  return Number(arr)
}