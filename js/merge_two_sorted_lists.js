// example 2:
list1 = [98, 99, 100, 101];
list2 = [1, 2, 3];
k = 3
// RETURNS


// let list1 = [2, 99, 100, 101];
// let list2 = [1, 4, 7];
// let newList = list1.concat(list2);

// newList.sort(function(a, b){return a-b})

// let firstThreeNums = newList.slice(0,3)

// console.log(firstThreeNums)




function kSmallest(list1, list2, k){
  // merge two lists
  let newList = list1.concat(list2);
  // sort ascending order
  newList.sort(function(a, b){return a-b})
  //extract k values starting w/ 0th index spot
  return newList.slice(0,k)
}

console.log(kSmallest(list1, list2, k))
