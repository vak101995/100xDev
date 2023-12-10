/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {
  var result = []; //create empty array      
  if (transactions.length == 0) {
    // return empty array if transaction is empty
    return [];
  }
  else if (transactions.length == 1) {
    // if transactions contains only a single item
    var element = {};
    element.category = transactions[0].category;
    element.totalSpent = transactions[0].price;
    result.push(element);
    return result;
  }
  else {
    for (let i = 0; i < transactions.length; i++) {
      for (let j = 0; j < transactions.length; j++) {
        if (i == j && i == 0) {
          //add first element in transaction array into result array
          var element = {};
          element.category = transactions[j].category;
          element.totalSpent = transactions[j].price;
          result.push(element);
        }
        if (i !== j) {
          // prevents element from comparing with itself
          var element = {};
          element.category = transactions[j].category;
          element.totalSpent = transactions[j].price;
          var index = result.findIndex(x => x.category === transactions[j].category);
          if (index == -1) {
            result.push(element);
          }
          else if (index >= 0 && result[index].category === transactions[j].category) {
            result[index].totalSpent += transactions[j].price;
          }
          else if (index >= 0) {
            continue;
          }

        }
      }
      return result;
    }
  }
}

module.exports = calculateTotalSpentByCategory;
