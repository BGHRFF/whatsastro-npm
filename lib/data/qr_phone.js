async function phone(number, name) {
  if (!number || !name) {
    throw new Error ('Missin Phone Number or Name!')
  }
  var data = ''
  if (number.startsWith('90')) {
    data = '*Bu Kodu Heçkəslə Paylaşmayın!*' + ' ' + name
  } else {
    data = '*Do Not Share This Code With Anyone!*' + ' ' + name
  }
  return data;
}
module.exports = phone
