module.exports = function getZerosCount(number, base) {
let primeMultipliers = {};
!base ? base = 10 : base;

let i = base;
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

let pow = base;
let multiplier = 0;

for (key in primeMultipliers){
	if (/*primeMultipliers[key] <= pow && */key > multiplier) {
		pow = primeMultipliers[key];
		multiplier = key;
	}
}

let counter = 0;

while (number) {
	number = Math.floor(number/multiplier);
	counter += number;
}

return counter/pow|0;//""+counter+" "+pow+" "+multiplier+" "+primeMultipliers;
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