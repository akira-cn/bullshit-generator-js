export function randomInt(min = 0, max = 100) {
  const p = Math.random();
  return Math.floor(min * (1 - p) + max * p);
}

/*
function randomPick(arrs) {
  return arr[Math.floor(arrs.length * Math.random())];
}
*/

export function createRandomPicker(arrs) {
  arrs = [...arrs]; // copy 数组，以免修改原始数据
  function randomPick() {
    const len = arrs.length - 1;
    const index = Math.floor(len * Math.random());
    const picked = arrs[index];
    [arrs[index], arrs[len]] = [arrs[len], arrs[index]];
    return picked;
  }
  randomPick(); // 抛弃第一次选择结果
  return randomPick;
}