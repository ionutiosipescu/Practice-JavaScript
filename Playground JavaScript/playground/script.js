// function longestWords(str) {
//   let words = str.split(" ");
//   let size = 0;
//   let max = [""];
//   for (let i = 0; i < words.length; i++) {
//     if (words[i].length >= size) {
//       size = words[i].length;
//       if (max[max.length - 1].length < words[i].length) {
//         max = [];
//         max.push(words[i]);
//       } else {
//         max = [...max, words[i]];
//       }
//     }
//   }
//   return [...max];
// }

// console.log(longestWords(`I woke up early today`));
// console.log(longestWords(`I went straight to the beach`));

// let daysArray = ["1", "2", "3", "4", "5", "12"];
// let courseHwork = ["4", "8", "15", "16", "23", "42", "12"];

// for (let i = 0; i < courseHwork.length; i++) {
//   for (let j = 0; j < daysArray.length; j++) {
//     if (courseHwork[i] == daysArray[j]) {
//       console.log(`i find you ${courseHwork[i]} --> ${daysArray[j]}`);
//     }
//   }
// }
function twoSort(s) {
  // let add = "***";
  // let arr = [];
  let result = s
    .map((element) => element.split(""))
    .map((element) => element.join("***"));
  // for (let i = 0; i < s.length; i++) {
  //   let newArr = s[i].split("");
  //   let complete = newArr.join(add);
  //   arr.push(complete);
  // }
  console.log(result);
  return result;
}

twoSort(["bitcoin", "altceva", "ceva"]);
