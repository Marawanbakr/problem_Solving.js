// Available Variables
let a = "Elzero Web School";
// first request
// result = a.charAt(2);
// a = a.slice(3, 6);
// console.log(`${result}${a}`); // Zero

// second request
// a = a.charAt(13).repeat(8).toUpperCase();
// console.log(a);

// third request
// a = a.slice(0, 6).split();
// console.log(a);

// foure request

// let result = a.substr(0, 6);
// a = a.split(" ")[2];
// console.log(`${result} ${a}`); // Elzero School

// Fifth request
let first =
  a.charAt(0).toLowerCase() +
  a.slice(1).toUpperCase() +
  a.substring(a.length - 1).toLowerCase();
console.log(first); // eLZERO WEB SCHOOl
