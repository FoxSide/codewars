function highAndLow(numbers){
  let sort = numbers.split(' ').map(Number).sort((a,b) => a - b).reverse()
  return sort[0] + ' ' + sort[sort.length -1]
 }