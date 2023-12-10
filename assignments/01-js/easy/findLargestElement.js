/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
    var temp = numbers.sort(function (a, b) { return a - b });
    //console.log("sorted array=" + temp);
    const len = temp.length;
    return temp[len - 1];
}

module.exports = findLargestElement;