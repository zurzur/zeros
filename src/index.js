module.exports = function getZerosCount(number) {
  let counter = 0;
  for (let i = number; i >= 5; i--) {
  	let j = i;
  	while (!(j%5)) {
  		counter++;
  		j = j/5;
  	}
  }
  return counter;
}
