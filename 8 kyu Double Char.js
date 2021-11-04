function doubleChar(str) {
  let result = ''
  let arr = str.split('')
  for(let i = 0; i < arr.length; i++){
    result += arr[i]+arr[i]
  }
   return result
 }
 