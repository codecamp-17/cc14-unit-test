// function rob(nums) {
//   if (nums.length === 0) return 0;
//   if (nums.length === 1) return nums[0];
//   if (nums.length === 2) return Math.max(nums[0], nums[1]);

//   let maxLootAtNth = [nums[0], Math.max(nums[0], nums[1])];

//   for (let i = 2; i < nums.length; i++) {
//     let lootNth = maxLootAtNth[i - 2] + nums[i];
//     maxLootAtNth.push(Math.max(maxLootAtNth[i - 1], lootNth));
//   }

//   return Math.max(...maxLootAtNth);
// }

// function rob(nums) {
//   if (nums.length === 0) return 0;
//   if (nums.length === 1) return nums[0];
//   if (nums.length === 2) return Math.max(nums[0], nums[1]);

//   let maxLootAtNth = [nums[0], Math.max(nums[0], nums[1])];

//   for (let i = 2; i < nums.length; i++) {
//     maxLootAtNth.push(Math.max(nums[i] + maxLootAtNth[i - 2], maxLootAtNth[i - 1]));
//   }

//   return maxLootAtNth.pop();
// }

var rob = function (nums) {
  let len = nums.length;

  let max = new Array(len).fill(0);

  max[0] = nums[0];

  for (let i = 1; i < len; i++) {
    let prev = i - 2 >= 0 ? max[i - 2] : 0;
    max[i] = Math.max(prev + nums[i], max[i - 1]);
  }
  return max[len - 1];
};

module.exports = rob;
