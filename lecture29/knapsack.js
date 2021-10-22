// recursion
// Time: O(2^n)
// Space: O(1)
// Stack: O(n)
function kanpsack(items, maxweight, i) {
  if (maxweight == 0 || i < 0) {
    return 0;
  }

  if (maxweight < items[i][1]) {
    return kanpsack(items, maxweight, i - 1);
  } else {
    let case1 = kanpsack(items, maxweight, i - 1);
    let case2 = items[i][0] + kanpsack(items, maxweight - items[i][1], i - 1);
    return Math.max(case1, case2);
  }
}

// Top Down
// Time: O(n*maxWeight)
// Space: O(n*maxWeight)
// Stack: O(n)
function kanpsackDp(items, maxweight, i, memory) {
  if (maxweight == 0 || i < 0) {
    return 0;
  }

  if (memory[i][maxweight]) {
    return memory[i][maxweight];
  }

  let ans;
  if (maxweight < items[i][1]) {
    ans = kanpsackDp(items, maxweight, i - 1, memory);
  } else {
    let case1 = kanpsackDp(items, maxweight, i - 1, memory);
    let case2 =
      items[i][0] + kanpsackDp(items, maxweight - items[i][1], i - 1, memory);
    ans = Math.max(case1, case2);
  }
  memory[i][maxweight] = ans;
  return ans;
}

// Bottom Up
// Time: O(n*maxWeight)
// Space: O(n*maxWeight)
// Stack: O(1)
function kanpsackItr(items, maxWeight, memory) {
  for (let i = 0; i <= items.length; i++) {
    memory[i][0] = 0;
  }
  for (let i = 0; i <= maxWeight; i++) {
    memory[0][i] = 0;
  }

  for (let i = 1; i <= items.length; i++) {
    for (let j = 1; j <= maxWeight; j++) {
      if (j < items[i - 1][1]) {
        memory[i][j] = memory[i - 1][j];
      } else {
        let case1 = memory[i - 1][j];
        let case2 = items[i-1][0] + memory[i-1][j - items[i-1][1]];
        memory[i][j] = Math.max(case1, case2);
      }
    }
  }
  return memory[items.length][maxWeight];
}

let items = [
  [6, 2],
  [10, 2],
  [12, 3],
];
let maxweight = 5;
let memory = [];
for (let i = 0; i <= items.length; i++) {
  memory[i] = new Array(maxweight + 1);
}
console.log(kanpsack(items, maxweight, items.length - 1));
console.log(kanpsackDp(items, maxweight, items.length - 1, memory));
console.log(kanpsackItr(items, maxweight, memory));

