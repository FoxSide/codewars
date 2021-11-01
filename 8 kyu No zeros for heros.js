function noBoringZeros(n) {
  let b = String(n).split('');
  for(let i = b.length  - 1; i > 0; i--) {
    if (b[i] === '0') {
      b.splice(-1, 1)
    } else {
    break;
    }
  }
  return b.join('') - ''
  }