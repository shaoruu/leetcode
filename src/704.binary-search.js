/*
 * @lc app=leetcode id=704 lang=javascript
 *
 * [704] Binary Search
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let pivot = left + Math.floor((right - left) / 2);
    if (nums[pivot] === target) return pivot;

    if (target < nums[pivot]) right = pivot - 1;
    else left = pivot + 1;
  }

  return -1;
};
// @lc code=end
