function minValue(values){
  return values.filter((it, index, arr) => arr.indexOf(it) === index).sort((a, b) => a - b).join('') - ''
  }