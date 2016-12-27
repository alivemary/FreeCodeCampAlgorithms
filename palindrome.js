function palindrome(str) {
  // Good luck!
  var newStr = str.replace(/\W/g, '');
  newStr = newStr.replace(/[^0-9a-z]/gi, '');
  newStr = newStr.toLowerCase();
  var revStr = newStr.split('').reverse().join('');
  if (newStr === revStr) return true;
  else return false;
}
