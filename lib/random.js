export function randomInt(min = 0, max = 100) {
  const p = Math.random();
  return Math.floor(min * (1 - p) + max * p);
}

/*
function randomPick(arrs) {
  return arr[Math.floor(arrs.length * Math.random())];
}
*/

let firstCall = true;
export function randomPick(arrs) {
  const len = firstCall ? arrs.length : arrs.length - 1;
  const index = Math.floor(len * Math.random());
  const picked = arrs[index];
  // 把选过的放到最后一个，避免两次选择重复的句子。
  [arrs[index], arrs[arrs.length - 1]] = [arrs[arrs.length - 1], arrs[index]];
  firstCall = false;
  return picked;
}
