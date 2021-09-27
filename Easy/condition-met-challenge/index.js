// my Available Variables
let st = 'Elzero Web School';
// first request
// 01 method

if (st.includes('W') === true) {
  console.log('Good');
}
// 02 method
for (i = 0; i < st.length; i++) {
  if (st[i] === 'W') {
    console.log('Good');
  }
}
// second request
if (st !== typeof 'string') {
  console.log('Good');
}
// third request
if (typeof st === typeof 'number') {
  console.log('Good');
}
// foure request
console.log();
if (st.substring(0, 6).repeat(2) === 'ElzeroElzero') {
  console.log('Good');
}

// DONE
