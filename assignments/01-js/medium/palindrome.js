/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  var tempStr = str.replace(/[.,\/#!?$%\^&\*;:{}=\-_`~()]/g, '');
  var revTemp = tempStr.split('').reverse().join('');
  return tempStr.toLowerCase().replaceAll(' ','') === revTemp.toLowerCase().replaceAll(' ','') ? true : false;
  //return true;
}

module.exports = isPalindrome;
