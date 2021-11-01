function findShort(s){
  const num = s.split(' ').map((it, index) => it.length)
  return Math.min.apply(null, num)
  }