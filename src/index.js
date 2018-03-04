module.exports = function getZerosCount(number, base) {
	// common solution for zeros and advanced-zeros tasks
let primeMultipliers = {};
base ? base : base = 10;
let i = base;
let n = number;

if (i%2 === 0) primeMultipliers[2] = 0;
while (i%2===0) {
i = i/2;
primeMultipliers[2] ++;
}
let j = 3;
for (j; j <= i; j +=2) {
	if (i%j === 0) primeMultipliers[j] = 0;
	while (i%j === 0) {
		primeMultipliers[j] ++;
		i = i/j;
	}
}

let zeros;
let counter; 
let step = 0;
for (key in primeMultipliers){
	n = number;
	counter = 0;

	while (n) {
		n = Math.floor(n/+key);
		counter += n;
	}

	counter = Math.floor(counter/primeMultipliers[key]);
	step++;
	if (step ===  1) zeros = counter;
	if (zeros > counter) zeros = counter;

}

return zeros;
}



/*
module.exports = function getZerosCount(number) {
  let counter = 0;
  let i = number;
  //fastest solution from javascript.ru forum
	
	while (i) {
		i = Math.floor(i/5);
		counter += i;
	}

	//previous solution
  /*
  let j;
  for (i ; i >= 5; i--) {
  	j = i;
  	while (!(j%5)) {
  		
  		j = j/5;
  		counter++;
  	}
  }
  */
  /*
  return counter;
}
*/