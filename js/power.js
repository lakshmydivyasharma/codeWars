//power
//The goal is to create a function 'numberToPower(number, power)' that "raises" the number up to power (ie multiplies number by itself power times).

// group attributes: victor, mauricio


function numberToPower(num, pow) { //
  if(pow === 0) {
    return 1;
  } else {
    return num * numberToPower(num, pow-1)
  }
}
