function specialNumber(n){
  const num = n.toString()
  let count = 0
  for(let i = 0; i <= num.length; i++) {
    if (num[i] > 5) {
      count += 1
    }
  }
    if (count !== 0) {
      return 'NOT!!'
    }
    else  {
      return'Special!!'
    }
  }