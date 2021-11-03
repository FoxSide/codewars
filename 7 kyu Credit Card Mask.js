// return masked string
function maskify(cc) {
  let last4numbers = cc.slice(-4)
  return last4numbers.padStart(cc.length, '#')
}
