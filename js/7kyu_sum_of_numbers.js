// 7 kyu
// Beginner Series #3 Sum of Numbers
//
// Given two integers a and b, which can be positive or negative, find the sum of all the numbers between including them too and return it. If the two numbers are equal return a or b.
//
// Note: a and b are not ordered!
//
// Examples
//
// GetSum(1, 0) == 1    1 + 0 = 1
// GetSum(1, 2) == 3    1 + 2 = 3
// GetSum(0, 1) == 1    0 + 1 = 1
// GetSum(1, 1) == 1    1 Since both are same
// GetSum(-1, 0) == -1  -1 + 0 = -1
// GetSum(-1, 2) == 2   -1 + 0 + 1 + 2 = 2

//www.codewars.com/kata/55f2b110f61eb01779000053/train/javascript

// pass in 2 numbers --> summation
// ((4, 4) --> return 4 edge case
// (-3,2)
// (2,-3)
// count from one number to second number and add up each of those numbers
//pass in (a,b) --> push out all the numbers in including the a,b, and what
//if i have two nuymbeers, and want to touch every number
// write a for loop that prints out the numbers in between


function getSum( a,b )
{
   let sum = 0

   if(a > b){
     [b,a] = [a,b] // object deconstruction. saying i want to assign the thing on the array on the right to these variables, so it swaps A and B
   }

   for(let i = a; i <= b; i++){
     sum += i //take sum and add i to it and store that in sum
   }
   return sum
