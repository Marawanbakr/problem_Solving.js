function getPreviousNumbers(num) {
  let messenge = 'Negative Numbers & Zero Not Allowed';
  if (num > 10) {
    console.log(num);
    for (i = 16; i >= 2; i = i - 2) {
      console.log(i);
    }
  } else if (num <= 0) {
    console.log(messenge);
  } else if (num == 10) {
    for (i = 10; i >= 2; i--) {
      console.log(i);
    }
  }
}
getPreviousNumbers(0); // "Negative Numbers & Zero Not Allowed"
getPreviousNumbers(-20); // "Negative Numbers & Zero Not Allowed"
getPreviousNumbers(10); // 10987654321
getPreviousNumbers(17); // 17161412108642
