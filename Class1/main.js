// function sum(num1, num2, fnToCall) {
//     let result = num1 + num2;
//     fnToCall(result);
// }

// function displayResult(data) {
//     console.log("Result of the sum is : " + data);
// }

// function displayResultPassive(data) {
//     console.log("Sum's result is : " + data);
// }

// // You are only allowed to call one function after this
// // How will you displayResult of a sum
// //const ans = sum(1,2, displayResult);


// const transactions = [
//     {
//         id: 1,
//         timestamp: 1656076800000,
//         price: 10,
//         category: 'Food',
//         itemName: 'Pizza',
//     },
//     {
//         id: 2,
//         timestamp: 1656105600000,
//         price: 20,
//         category: 'Food',
//         itemName: 'Burger',
//     },
//     {
//         id: 3,
//         timestamp: 1656134400000,
//         price: 30,
//         category: 'Food',
//         itemName: 'Sushi',
//     },
// ];

// const result = [
//     { category: 'Food', totalSpent: 30 },
//     { category: 'Clothing', totalSpent: 40 },
//     { category: 'Electronics', totalSpent: 30 },
// ];

// var element = {};

// element.category = "Vehicles";
// element.totalSpent = 100;
// result.push(element);

// const index = result.findIndex(x => x.category === "Jack");

// console.log(index);

// result[index].totalSpent += 20;

// console.log(result);

// function findLargestElement(numbers) {
//     var temp = numbers.sort(function(a, b){return a-b});
//     console.log("sorted array=" + temp);
//     const len = temp.length;
//     return temp[len - 1];
// }

// console.log(findLargestElement([3, 7, 2, 9, 1]));
// console.log(findLargestElement([15, 27, 8, 12]));

// function countVowels(str) {
//     // Your code here
//     //var temp = str.toLowerCase().split('').sort().join('');
//     var m = str.match(/[aeiou]/gmi);
//     return m === null ? 0 : m.length;
//     //return temp.split('').sort().join('');
//     //var count = temp.count(x => x.temp)
//     //var index = result.findIndex(x => x.category === transactions[j].category);
// }

// console.log(countVowels('a e i o u'));


// function isPalindrome(str) {
//     var tempStr = str.replace(/[.,\/#!?$%\^&\*;:{}=\-_`~()]/g, '');
//     console.log(tempStr);
//     var revTemp = tempStr.split('').reverse().join('');
//     return tempStr.toLowerCase().replaceAll(' ','') === revTemp.toLowerCase().replaceAll(' ','') ? true : false;
//     //return true;
//   }

//   console.log(isPalindrome('Eva, can I see bees in a cave?'));


function calculateTime(n) {
    const start = Date.now();
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    const end = Date.now();

    console.log("Sum: " + sum +  ` Execution Time: ${end - start}ms`);
    return console.log(`Execution time: ${end - start} ms`);
}

calculateTime(100);
calculateTime(1000);
calculateTime(10000);
calculateTime(100000);
calculateTime(1000000);
calculateTime(10000000);
calculateTime(100000000);
calculateTime(1000000000);
calculateTime(10000000000);
calculateTime(100000000000);