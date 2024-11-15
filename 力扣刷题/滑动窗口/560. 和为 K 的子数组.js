/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
// 暴力法超时
var maxSlidingWindow = function (nums, k) {
    const n = nums.length, arr = [];
    let max = -Number.MAX_VALUE;
    for (let i = 0; i < k; ++i) {
        max = Math.max(max, nums[i]);
    }
    arr.push(max);

    for (let i = k; i < n; ++i) {
        max = -Number.MAX_VALUE;;
        for (let j = i - k + 1; j < i + 1; ++j) {
            max = Math.max(max, nums[j]);
        }
        arr.push(max);
    }

    return arr;
};
