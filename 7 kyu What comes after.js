const comes_after = (str, l) => {
  let result = ''
  const characters = [...str]
  for (let i = 0; i < characters.length; i++) {
    const character = characters[i]
    if (character.match(new RegExp(l, 'i')) && (characters[i + 1] || '').match(/[a-z]/gi)) result += characters[i + 1]
  }
  return result
}