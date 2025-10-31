
// QUE - 1 Find second largest number in the array
function secondLargestNo(array) {
  let firstLargestNo = -Infinity;
  let secondLargestNo = -Infinity;
  let largestNo = 0;
  

  for (let i = 0; i < array.length; i++) {
    if (array[i] > firstLargestNo) {
      secondLargestNo = firstLargestNo;
      firstLargestNo = array[i];
      console.log("FLN: ", firstLargestNo);
      console.log("SLN: ", secondLargestNo);

    } else if (array[i] > secondLargestNo) {
      secondLargestNo = array[i];
      console.log("SLN: ", secondLargestNo);
    }
  }

  //   return firstLargestNo;
  return secondLargestNo;
}

let arr = [63, 6544, 4, 3, 655, 34, 7546, 3];

const result = secondLargestNo(arr);
console.log(result);
console.log();

