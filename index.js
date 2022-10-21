const parentsPositionReturn = (arr) => {
  const openIndex = arr.indexOf('(')
  const closeIndex = arr.indexOf(')')

  if ((openIndex === 0 || openIndex === 1) && (closeIndex === 4 || closeIndex === 5 )) {
    return true
  }

  return false
}

function telephoneCheck(str) {
  const wrongLetters = str.replace(/[^!@#$%¨&|*.,/?]/g, '')
  if(wrongLetters) return false

  const justNumbers = str.replace(/[^0-9]/g, '')
  const justNumbersLength = justNumbers.length
  
  if(justNumbers[0] == '2') return false
  if(justNumbers[0] == '0') return false

  if (justNumbersLength < 10 || justNumbersLength > 11) return false

  const justHyphenLength = str.replace(/[^-]/g, '').length

  if (justHyphenLength > 2) return false

  const strArray = str.replace(' ', '').split('')
  const haveParents = !!(strArray.find(e => e === '(' || e === ')'))


  if (haveParents) {
    if (parentsPositionReturn(strArray)) {
      return true
    } else{
      return false
    }
  }
  

  return true

}

telephoneCheck("55 55-55-555-5");
