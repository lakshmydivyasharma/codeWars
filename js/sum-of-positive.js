// Sum of positive
//
// You get an array of numbers, return the sum of all of the positives ones.
//
// Example [1,-4,7,12] => 1 + 7 + 12 = 20
//
// Note: if there is nothing to sum, the sum is default to 0.

function positiveSum(arr) {
	for (var i=0, count = 0; i <= arr.length; i++) {
		if (arr[i] >= 0) {
			count += arr[i];
//       When dealing with a string, it takes the value currently in the string and APPENDS the value after the += symbol. It's the javascript equivalent of .= in php
		}
	}
	return count; //this gives the final answer for return count
}

var anArray = [1,-4,7,12]


// function sumPos(arr){
// let num = 0;
// for (let i = 0; i <arr.length; i++){
//   if(arr[i] > 0) {
//   num +=> arr
//   }  =+
// }
// return num
// }
