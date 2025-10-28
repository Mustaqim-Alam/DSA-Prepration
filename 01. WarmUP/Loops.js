// for (let a = 0; a < 5; a++) {
//   console.log("Hello form loops");
// }

// for (let a = 0; a <= 5; a++) {
//   console.log("Hello form loops new" ,  a);
// }

// for (let a = 2; a < 9; a = a + 2) {
//   console.log("Hello", a);
// }

// for (let a = 9; a > 0; a = a - 2) {
//   console.log("Hello new", a);
// }

// QUE - 1 Search element in array and return the index else return -1

// function searchEementIndex(elem) {
//   let arr = [45, 23, 77, 83, 100, 44, 60];

//   for (let i = 0; i < arr.length; i++) {
//     // console.log(elem);
//     // console.log(arr[i]);

//     if (arr[i] == elem) {
//       return i;
//     }
//   }
//   return -1;
// }

// const result = searchEementIndex(717);

// console.log(result);

// QUE - 2 Counts negative numbers in an array
function countNegatives(array) {
  let count = 0;
  for (i = 0; i < array.length; i++) {
    if (array[i] < 0) {
      count++;
    }
  }
  return count;
}

let arr = [-45, 23, 77, 83, 100, 44, -60];

const result = countNegatives(arr);
console.log(result);
