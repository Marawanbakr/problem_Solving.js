function addCommasAndUnderscore(num) {
  //Convert to string
  let result = num.toLocaleString();
  // convert to array
  result = result.split('');
  //  update the lst comma value
  result[result.length - 4] = '_';
  // convert array to string
  result = result.join('');
  return result;
}

console.log(addCommasAndUnderscore(120)); // 120
console.log(addCommasAndUnderscore(1530)); // 1_530
console.log(addCommasAndUnderscore(120510650)); // 120,510_650
console.log(addCommasAndUnderscore(510650480910)); // 510,650,480_910
console.log(addCommasAndUnderscore(12069057014032)); // 12,069,057,014_032
