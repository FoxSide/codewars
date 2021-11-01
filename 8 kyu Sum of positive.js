function positiveSum(arr) {
  let result = arr.filter((a, b) => (a >= 0)).reduce((a, b) => a + b, 0)
  return result
  }