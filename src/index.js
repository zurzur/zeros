module.exports = function getZerosCount(number) {
  let counter = 0;
  let i;
  let j;
  for (i = number; i >= 5; i--) {
  	j = i;
  	while (!(j%5)) {
  		
  		j = j/5;
  		counter++;
  	}
  }
  return counter;
}
