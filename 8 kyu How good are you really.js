function betterThanAverage(classPoints, yourPoints) {
  const sum = classPoints.reduce((it, index) => (it + index)) / classPoints.length
  if (sum < yourPoints) {
    return true
  }
  return false
  }