// let str = "Hello";
// let revStr = "";
// console.log(str.length);

// for (let i = str.length - 1; i >= 0; i--) {
//   revStr = revStr + str[i];
// }

// console.log(revStr);

function palindrome(str) {
  for (let i = 0; i < str.length / 2; i++) {
    // console.log(str.length /2);

    if (str[i] != str[str.length - 1 - i]) {
      console.log(str[i], str[str.length - 1 - i]);
      return false;
    }
    console.log(str[i], str[str.length - 1 - i]);
  }
  return true;
}

console.log(palindrome("madam"));
console.log(palindrome("hellh"));

// function countVowel(str) {
//   let vowel = "aeiouAEIOU";
//   let count = 0;
//   for (let i = 0; i < str.length; i++) {
//     // if (vowel.includes(str[i])) {
//     //   count++;
//     // }

//     for (let j = 0; j < vowel.length; j++) {
//       if (str[i] == vowel[j]) {
//         count++;
//       }
//     }
//   }
//   return count;
// }

// console.log(countVowel("vfhavjhvfyerjabdh"));

// function revenrseMultStr(str) {
//   let newstr = str.split(" ");
//   let newRev = "";

//   for (let i = 0; i < newstr.length; i++) {
//     // console.log(newstr[i]);
//     // console.log(i);

//     let word = newstr[i];

//     for (let j = word.length - 1; j >= 0; j--) {
//       //   console.log(j);

//       newRev = newRev + word[j];
//     }
//     newRev = newRev + " ";
//   }
//   return newRev;
// }

// console.log(revenrseMultStr("Alka Sinha Kumari"));

// function tolowerCase(str) {
//   let newStr = "";
//   for (let i = 0; i < str.length; i++) {
//     let charCode = str.charCodeAt(i);
//     if (charCode >= 65 && charCode <= 90) {
//       newStr = newStr + String.fromCharCode(charCode + 32);
//     } else {
//       newStr = newStr + str[i];
//     }
//   }
//   return newStr; // ✅ important
// }

// console.log(tolowerCase("AlKa SinHA"));
// console.log(tolowerCase("HELLO WORLD"));
