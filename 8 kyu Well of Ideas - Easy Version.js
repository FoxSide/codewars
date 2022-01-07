function well(x){
  const result = x.filter(f => f !== 'bad')
  console.log(result)
  if (result.length === 1 || result.length === 2) {
    return 'Publish!'
  }
  if (result.length > 2) {
    return 'I smell a series!'
  }
  else return 'Fail!'
}