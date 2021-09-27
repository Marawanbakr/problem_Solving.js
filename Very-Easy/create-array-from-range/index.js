function createArray(start, end) {
  let arr = [];
  for (let i = start; i <= end; i++) {
    if (i === 8) {
      continue;
    }
    arr.push(i);
  }
  return arr;
}
console.log(createArray(5, 10));
