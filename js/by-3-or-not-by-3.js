// A trick I learned in elementary school to determine whether or not a number was divisible by three is to add all of the integers in the number together and to divide the resulting sum by three. If there is no remainder from dividing the sum by three, then the original number is divisible by three as well.
//
// Given a series of numbers as a string, determine if the number represented by the string is divisible by three.
//
// You can expect all test case arguments to be strings representing values greater than 0.
//
// Example:
//
// FUNDAMENTALSARRAYSNUMBERSSTRINGSIF-THEN-ELSE STATEMENTSCONDITIONAL STATEMENTSCONTROL FLOWBASIC LANGUAGE FEATURES
//
//
// Solution:
// 1
// function divisibleByThree(str){
// 2
//   if(str % 3 === 0){
// 3
//   return true
// 4
//   }else{
// 5
//   return false
// 6
//   }
// 7

function divisibleByThree(str){
  return str.split("").reduce((a,b)=>Number(a)+Number(b))%3 === 0;
}
