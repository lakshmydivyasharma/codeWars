//Be Concise IV - Index of an element in an array

//Provided is a function find which accepts two parameters in the following order: array, element and returns the index of the element if found and "Not found" otherwise. Your task is to shorten the code as much as possible in order to meet the strict character count requirements of the Kata. You may assume that all array elements are unique.

// solved with


function find(array, element) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === element) return i;
  }
  return "Not found";
}

//here is my work: but apparently supposed to refactor that previous stuff but this also works
// function find (array, element) {
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] === element){
//     return i
//   }
//     if (i = array.length - 1) {
//      return "not found"
//   }
// }
