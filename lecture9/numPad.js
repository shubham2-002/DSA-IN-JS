function numPad(input, numStr, arr) {
  if (input === "") {
    console.log(numStr);
    return;
  }

  let ind = parseInt(input[0]);
  let modInput = input.substring(1);

  let str = arr[ind];

  for (let ch of str) {
    let newNumStr = numStr + ch;
    numPad(modInput, newNumStr, arr);
  }
}

function numPadOtp(input, arr, numStr = "", index = 0) {
  if (index === input.length) {
    console.log(numStr);
    return;
  }

  let ind = parseInt(input[index]);

  let str = arr[ind];
  for (let ch of str) {
    let newNumStr = numStr + ch;
    numPadOtp(input, arr, newNumStr, index + 1);
  }
}

let arr = ["", "", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"];
// numPad("22", "", arr);
numPadOtp("23", arr);
