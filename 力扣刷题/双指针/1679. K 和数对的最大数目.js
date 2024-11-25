/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function (nums, k) {
    nums.sort((a, b) => a - b);
    let left = 0,
        right = nums.length - 1,
        count = 0;
    while (left < right) {
        const v = nums[left] + nums[right];
        if (v < k) {
            ++left;
        } else if (v > k) {
            --right;
        } else {
            ++left;
            --right;
            ++count;
        }
    }

    return count;
};