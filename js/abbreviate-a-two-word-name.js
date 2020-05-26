// Abbreviate a Two Word Name
// https://www.codewars.com/kata/57eadb7ecd143f4c9c0000a3/train/javascript
//
// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.
//
// The output should be two capital letters with a dot separating them.
//
// It should look like this:
//
// Sam Harris => S.H
//
// Patrick Feeney => P.F
//

// way i solved it:
function abbrevName(name){
  let x = /[A-Z]/g
  let b = name.match(x)
  return b.slice(".").join(".")
}

// google's solution
function abbrevName(name){
    var nameArray = name.split(' ');
    var first = nameArray[0].charAt(0).toUpperCase();
    var last = nameArray[1].charAt(0).toUpperCase();
    return `${first}.${last}`
}
