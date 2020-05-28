// this prints into an array stored in a variable 
let fizzbuzz = function (){

  let arr = []

  for(let i = 1; arr.length < 100; i++){
    if (i % 3 === 0 && i % 5 === 0){
      arr.push('Fizzbuzz')
    } else if (i % 3 === 0){
      arr.push('Fizz')
    }else if (i % 5 === 0){
      arr.push('Buzz')
    }else{
      arr.push(i)
    }
  }
  return arr
}

console.log(fizzbuzz())




// this prints one number:

function printFizzBuzz(n) {
	if(n % 3 === 0){   
	Return “Fizz”
       }	if(n % 5 === 0){
	Return “Buzz”
    }      if(n % 15 === 0){
	Return “FizzBuzz”   }
}

Return printFizzbuzz(100) 
