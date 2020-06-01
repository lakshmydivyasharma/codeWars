// https://www.codewars.com/kata/55bf01e5a717a0d57e0000ec/train/javascript
//
// 6 kyu
// Persistent Bugger.
// 181132591% of 9,35722,827 of 67,502joh_pot
// JavaScript
// Node v8.1.3
// VIM
// EMACS
// Instructions
// Output
// Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.
//
// For example:
//
//  persistence(39) === 3 // because 3*9 = 27, 2*7 = 14, 1*4=4
//                        // and 4 has only one digit
//
//  persistence(999) === 4 // because 9*9*9 = 729, 7*2*9 = 126,
//                         // 1*2*6 = 12, and finally 1*2 = 2
//
//  persistence(4) === 0 // because 4 is already a one-digit number
//





//  FIRST WAY TO SOLVE IT:
 function persistence(num) {
   // check the length of num, convert to String, check length. if length ===1 return count

   // split the num into array, then convert string to num and multiple and get value

   var count = 0;

   while(String(num).length !== 1) {
   count++;
   sNumArr = String(num).split(''); // ['3', '5']
   num = sNumArr.reduce(function(previous,current,index,array){
     return parseInt(previous) * parseInt(current);
   });
   }
   return count;
}


// SECOND WAY TO SOLVE IT
function persistence(num) {
  //set multiplyCount equal 0
  //turn the number into an array of nums
  //while the length of the array is more than 1
    //multiply each digit together
    //the product becomes the new arr
  //return multiplyCount

  var arr = num.toString().split("");
  var multiplyCount = 0;
  var product;
  while (arr.length > 1) {
    product = arr.reduce(function(a, b) {
      return a * b;
    });
    multiplyCount++;
    arr = product.toString().split("");
  }
  return multiplyCount;
}
