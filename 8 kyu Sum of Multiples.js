function sumMul(n, m) {
  let text = 'INVALID'
  let sum = 0
  if (n <= 0 || m <= 0) {
    return text
  } else {
    for (let i = n; i < m; i++) {
      if (i % n === 0) {
        sum += i
      }
    }
    return sum
  }
}