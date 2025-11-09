let unit = 150;
let bill = 0;

if (unit <= 100) {
  bill = 100 * 5;
} else if (unit <= 200) {
  bill = 100 * 5 + (unit - 100) * 7;
}
