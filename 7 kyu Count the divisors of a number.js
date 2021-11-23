function getDivisorsCnt(n){
  let result = []
  for (let i = 0; i <= 500000; i++) {
    if (n % i === 0) {
      result.push(i)
    }
  }
  return result.length
}