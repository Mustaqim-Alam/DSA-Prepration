function countDigit(n) {
  let count = 0;
  while (n > 0) {
    n = Math.floor(n / 10);
    count++;
  }
  return count;
}
let num = 465454645;
let result = countDigit(num);

console.log(result);
