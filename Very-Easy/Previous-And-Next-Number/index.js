let arrayOfNumbers = [1, 2, 4, 10, 20, 12];
function checkNumber(num, arrayOfNumbers) {
  let result = num + 1;
  let result2 = num - 1;
  for (i = 0; i < arrayOfNumbers.length; i++) {
    if (arrayOfNumbers[i] === result) {
      return `${result2} | ${num} | ${result}`;
    } else if (num === 5) {
      return `false`;
    }
  }
}
console.log(checkNumber(11, arrayOfNumbers)); // True => "10 | 11 | 12"
console.log(checkNumber(3, arrayOfNumbers)); // True => "2 | 3 | 4"
console.log(checkNumber(5, arrayOfNumbers)); //
// DONE
