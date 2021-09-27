// Input
let numbers = [15.6, 2, 2, 2, 4, 5, True, 7, 'A', 2, 2, 8, 9];

let result = numbers.map((item, index) => {
  return item === True ? item : '';
});
console.log(result);
