/**
 * "Single Element in a Sorted Array"
 * Given a sorted array consisting of only integers
 * where every element appears twice except for one element
 * which appears once.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
const singleNonDuplicate = function singleNonDuplicate(nums) {
  for (let i = 0; i < nums.length; i += 2) {
    if (nums[i] !== nums[i + 1]) return nums[i];
  }
  return undefined;
};

// return 2
singleNonDuplicate([1, 1, 2, 3, 3, 4, 4, 8, 8]);

// return 10
singleNonDuplicate([3, 3, 7, 7, 10, 11, 11]);
