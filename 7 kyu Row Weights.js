function rowWeights(array){
  const a = array.filter((it, index) => index % 2 === 0).reduce((it, index) => (it + index), 0)
  const b = array.filter((it, index) => index % 2).reduce((it, index) => (it + index), 0)
  return ([a, b])
  }