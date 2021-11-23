function squareDigits(num){
  let arr = String(num).split('').map(int => parseInt(int**2))
  return +arr.join('')
}