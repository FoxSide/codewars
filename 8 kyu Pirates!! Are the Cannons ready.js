const cannonsReady = (gunners) => {
  let values = Object.values(gunners)
  let filtered = values.filter(f => f !== 'nay')
  if (filtered.length === values.length) {
    return 'Fire!'
  }
  return 'Shiver me timbers!'
}