function remove (string) {
  let arr = string.split('')
  return arr[arr.length - 1] === '!' ? arr.slice(0, -1).join('') : arr.join('')
}