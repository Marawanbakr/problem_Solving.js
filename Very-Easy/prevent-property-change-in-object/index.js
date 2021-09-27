const myObject = {
  a: 1,
  b: 2,
  c: 3,
};

Object.seal((myObject.c = 3));
myObject.c = 100;
console.log(myObject.c); // 3

// not DONE
