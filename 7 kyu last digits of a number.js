function lastDigit(n, d) {
  let a =  Array.from(String(n), Number)
  if (d > 0) {
    return a.slice(-d)
  }
  return []
}