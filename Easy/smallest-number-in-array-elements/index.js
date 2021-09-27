const myArray = [115, 20, 10, 'A', '!', '@', 13, 1, 5, 2, 'X', 'C'];
function minNumber(myArray) {
  for (i = 0; i < myArray.length; i++) {
    if (myArray[i] <= 2) {
      return myArray[i];
    }
  }
}
console.log(minNumber(myArray));

// Output
1;

// DONE
