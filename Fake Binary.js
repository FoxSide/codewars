function fakeBin(x){
  return x.split('').map(m => Number(m) < 5 ? 0 : 1).join('')
}