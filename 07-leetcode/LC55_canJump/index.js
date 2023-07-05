function canJump(nums) {
  let dpArray = new Array(nums.length).fill(false);
  dpArray[0] = true;

  for (let j = 1; j < nums.length; j++) {
    for (let i = 0; i < j; i++) {
      // if()
    }
  }
}

module.exports = canJump;
