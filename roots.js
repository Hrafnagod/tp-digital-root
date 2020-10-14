// In this TP you are expected to write a function that returns the digital root of a given number.
// The digital root is the recursive sum of all the digits in a number.

// Given a number n, take the sum of the digits of n. If that value has more than one digit,
// continue reducing in this way until a single-digit number is produced. Assume that the input will be a non-negative integer.

// Examples:
// 16  -->  1 + 6 = 7
// 942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
// 132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
// 493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2

function digitalRoots (number) {
  let str = number.toString()
  let result = [];
  for (var i = 0; i < str.length; i++) {
    result.push(str[i])
  }
  // console.log(result)
  let mapped = result.map(el => Number(el));
  console.log(mapped)
// base case
if (mapped.length === 1) return mapped[0];
let reduced = mapped.reduce((sum, el) => {
  return sum + el;
}, 0);
return digitalRoots(reduced);
}
// if (reduced.length === 1) return reduced[0];
// let reduced2 = reduced.reduce((sum, el) => {
//   return sum + el;
// })


console.log(digitalRoots(942));



module.exports = digitalRoots;