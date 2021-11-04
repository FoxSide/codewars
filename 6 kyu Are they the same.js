function comp(array1, array2) {
  if (!array1 || !array2) return false;
  array1 = array1.map(a => { return a * a }).sort((a, b) => { return b - a });
  array2 = array2.sort((a, b) => { return b - a });
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
}