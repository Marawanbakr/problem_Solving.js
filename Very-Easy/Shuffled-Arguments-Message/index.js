function status(a, b, c) {
  if (typeof a === 'string') {
    c = ' Available For Hire';
    return `Hello ${a} Age Is ${b}${c} `;
  } else if (typeof a === 'number') {
    c = ' Available For Hire';
    return `Hello ${b} Age Is ${a} ${c}`;
  } else if (typeof a === 'boolean' && a === true) {
    a = ' Available For Hire';
    return `Hello ${c} Age Is ${b} ${a}`;
  } else if (typeof a === 'boolean' && a === false) {
    a = 'Not Available For Hire';
    return `Hello ${b} Age Is ${c} ${a}`;
  }
}
console.log(status('Osama', 38, true)); // "Hello Osama, Age Is 38, Available For Hire"
console.log(status(38, 'Osama', true)); // "Hello Osama, Age Is 38, Available For Hire"
console.log(status(true, 38, 'Osama')); // "Hello Osama, Age Is 38, Available For Hire"
console.log(status(false, 'Osama', 38)); // "Hello Osama, Age Is 38, Not Available For Hire"

// found another method ... in come from elzero
