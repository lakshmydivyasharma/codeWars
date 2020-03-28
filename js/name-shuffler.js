// https://www.codewars.com/kata/559ac78160f0be07c200005a/train/javascript
//
// Name Shuffler
// 481991% of 7392,280 of 5,487debri
// JavaScript
// Node v8.1.3
// VIM
// EMACS
// Instructions
// Output
// Write a function that returns a string in which first name is swapped with last name.

function nameShuffler(str){
  return str.split(" ").reverse().join(" ");
}
