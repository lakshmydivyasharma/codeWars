// https://www.codewars.com/kata/59a96d71dbe3b06c0200009c/train/javascript
//
// Build a square
//
// I will give you an integer. Give me back a shape that is as long and wide as the integer. The integer will be a whole number between 0 and 50.
//
// Example
// n = 3, so I expect a 3x3 square back just like below as a string:
//
// +++
// +++
// +++


1st method:
function generateShape(int){
  let arr = [];
  for (let i = 0; i < int; i++) {
    arr.push(‘+’.repeat(int));
  }
  return arr.join(‘\n’);
}


2nd method:
function generateShape(n){
  return ("+".repeat(n)+"\n").repeat(n).trim()
}
