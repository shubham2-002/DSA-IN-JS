// Recursion
// Time: O(6^N)
// Space: O(1)
// Stack: O(N)
function dice(target) {
  if (target == 0) {
    return 1;
  }

  let count = 0;
  for (let face = 1; face <= 6; face++) {
    if (target >= face) {
      count += dice(target - face);
    }
  }
  return count;
}
// function dice(target){
//     if(target<0){
//         return 0;
//     }
//     if(target == 0){
//         return 1;
//     }

//     return dice(target-1)+dice(target-2)+dice(target-3)+dice(target-4)+dice(target-5)+dice(target-6);
// }

// Top-Down
// Time: O(N)
// Space: O(N)
// Stack: O(N)
function diceDp(target, memory = []) {
  if (target == 0) {
    return 1;
  }
  if (memory[target]) {
    return memory[target];
  }
  let count = 0;
  for (let face = 1; face <= 6; face++) {
    if (target >= face) {
      count += diceDp(target - face, memory);
    }
  }
  memory[target] = count;
  return count;
}

// Bottom Up
// Time: O(N)
// Space: O(N)
// Stack: O(1)
function diceDpItr(target, memory = []) {
  memory[0] = 1;

  for (let i = 1; i <= target; i++) {
    let count = 0;
    for (let face = 1; face <= 6; face++) {
      if (i >= face) {
        count += memory[i - face];
      }
    }
    memory[i] = count;
  }
  return memory[target];
}

console.log(dice(5));
console.log(diceDp(5));
console.log(diceDpItr(5));

