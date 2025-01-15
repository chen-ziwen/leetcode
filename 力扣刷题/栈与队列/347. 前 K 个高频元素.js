/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
// 这道题用了很多api 后续需要重新做
var topKFrequent = function (nums, k) {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        map.set(nums[i], (map.get(nums[i]) || 0) + 1);
    }

    const arr = Array.from(map.entries()).sort((x, y) => y[1] - x[1]).slice(0, k);
    return arr.map(item => item[0]);
};