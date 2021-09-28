function getPreviousNumbers(num) {
  let result = [];
  switch (true) {
    case num <= 0:
      console.log('Negative Numbers & Zero Not Allowed');
      break;
    case num <= 10:
      for (i = 1; i <= num; i++) {
        console.log(parseInt([i].reverse().toString()));
      }
      break;
    case num > 10:
      for (i = 0; i <= num; i = i + 2) {
        if (i !== 0) {
          console.log(parseInt([i]));
        }
      }
      console.log(num);
  }
}
getPreviousNumbers(0); // "Negative Numbers & Zero Not Allowed"
getPreviousNumbers(-20); // "Negative Numbers & Zero Not Allowed"
getPreviousNumbers(10); // 10987654321
getPreviousNumbers(17); // 17161412108642
