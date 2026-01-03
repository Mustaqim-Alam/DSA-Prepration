// for(i=0; i<4; i++){
//     let str = " ";
//     for(j=0; j<=4; j++){
//         str += "* ";
//     }
//     console.log(str);
// }

// for (i = 0; i < 5; i++) {
//   let str = " ";
//   for (j = 0; j <= i; j++) {
//     str += "* ";
//   }
//   console.log(str);
// }

// for (i = 0; i <= 5; i++) {
//   let str = " ";
//   for (j = 1; j <= i; j++) {
//     let num = j;
//     str = str  + num ;
//   }
//   console.log(str);
// }

// for (i = 0; i < 5; i++) {
//   let str = " ";
//   for (j = 0; j <= i; j++) {
//     str = str + (j + 1) + " ";
//   }
//   console.log(str);
// }

// for (i = 1; i <= 5; i++) {
//   let str = " ";
//   for (j = 1; j <= i; j++) {
//     str = str + i  + " ";
//   }
//   console.log(str);
// }

// for (i = 5; i > 0; i--) {
//   let str = " ";
//   for (j = 1; j <= i; j++) {
//     str = str + j + " ";
//   }
//   console.log(str);
// }

// let n = 5;

// for (let i = 0; i < n; i++) {
//   let row = " ";
//   for (let j = 0; j < n - i; j++) {
//     row = row + "* ";
//   }
//   console.log(row);
// }

// let n = 5;

// for (let i = 0; i < n; i++) {
//   let row = " ";
//   for (let j = 0; j < n - i; j++) {
//     row = row + "* ";
//   }
//   console.log(row);
// }

// let n = 5;

// for (let i = 0; i < n; i++) {
//   let row = " ";
//   let empty = " ";
//   //Adding spaces
//   for (let j = 0; j < n - (i + 1); j++) {
//     empty = empty + " ";
//   }
//     //Adding stars
//   for (let k = 0; k < i + 1; k++) {
//     row = row + "*";
//   }
//   console.log(empty + row);
// }

// let n = 5;

// for (let i = 0; i < n; i++) {
//   let row = " ";
//   for (let j = i; j <= i; j++) {
//     if (j%2 == 0) {
//         row = row + 1;
//     }
//     row = row + 0;
//   }
//     console.log(row);
// }

// for (let i = 0; i < 5; i++) {
//   let row = " ";

//   for (let j = 5; j > i; j--) {
//     row = row + "*";
//   }

//   console.log(row);
// }

// dimond print
let num = 5;
for (let i = 1; i <= num; i++) {
  let row = "";
  for (let j = 1; j <= num - i; j++) {
    row = row + " ";
  }
  for (let k = 1; k <= 2 * i - 1; k++) {
    row = row + "*";
  }

  //   console.log(row);
}

// let num = 5;

for (let i = num - 1; i >= 1; i--) {
  let row = "";
  for (let j = 1; j <= num - i; j++) {
    row = row + " ";
  }
  for (let k = 1; k <= 2 * i - 1; k++) {
    row = row + "*";
  }

  //   console.log(row);
}

for (let i = 0; i < num; i++) {
  let row = "";
  let val = 1;
  for (let j = 0; j <= i; j++) {
   val = val + i 
    row = row + val;
  }

  console.log(row);
}
