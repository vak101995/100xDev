/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    // Your code here
    //var temp = toLower(str.sort());
    // g- global( don't return after first match), m-multiline ^ and $ match start/end of line, i - case insensitive match
    var m = str.match(/[aeiou]/gmi); 
    return m === null ? 0 : m.length;
    
}

module.exports = countVowels;