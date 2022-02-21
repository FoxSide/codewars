function points(games) {
  let score = 0
  games.map(m => {
    if (m[0] === m[2]) {
      score += 1
    }
    if (m[0] > m[2]) {
      score += 3
    } else {
      score += 0
    }
  })
  return score
}