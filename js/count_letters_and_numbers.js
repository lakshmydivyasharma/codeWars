//aaabbcccccddd
//return: a3b2c5d3

function compress(str){
  let letters = ""
  let count = 0;

  for(let i = 0; i < str.length; i++){
    if(str[i]=== str[i+1]){ // i -1
      count++
    }else{
      letters = str[i]+(count+1)
      count = 0;
    }
  }
}



// return i - 1



second algorithm:
substring and substring, and keeping count 
