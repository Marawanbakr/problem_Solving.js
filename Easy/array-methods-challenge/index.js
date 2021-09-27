// your avalible varibles
let zero = 0;
let counter = 3;
let my = ['Ahmed', 'Mazero', 'Elham', 'Osama', 'Gamal', 'Ameer'];
// // 01 requierd
// my.shift(my.reverse(my.pop()));
// console.log(my); // ["Osama", "Elham", "Mazero", "Ahmed"];

// 02 requierd
// console.log(my.slice(my[zero].indexOf("h"), counter).reverse()); // ["Elham", "Mazero"]

// 03 requierd
// console.log(
//   `${my[my[zero].indexOf("m")].substring(zero, my[zero].indexOf("m"))}${my[
//     my[zero].indexOf("h")
//   ].substring(my[zero].indexOf("m"))}`
// ); // "Elzero"

// 04 requierd
console.log(
  `${my[my[zero].indexOf('h')].substring(4, 5)}${my[my[zero].indexOf('h')]
    .substring(5, 6)
    .toUpperCase()}`
); // "rO"

// DONE
