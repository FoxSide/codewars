function abbrevName(name){
  const result = name.split(' ').map(e => e.split('')[0])
  return `${result[0].toUpperCase()}.${result[1].toUpperCase()}`
}