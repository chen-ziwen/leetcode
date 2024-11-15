/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
    const n = nums.length;

    const left = new Array(n);
    const right = new Array(n);
    const result = new Array(n);

    left[0] = 1;
    for (let i = 1; i < n; i++) {
        // 把i左侧的乘积全部放到left数组的i索引位置
        left[i] = nums[i - 1] * left[i - 1];
    }

    right[n - 1] = 1;
    for (let i = n - 2; i >= 0; i--) {
        // 把i右侧的乘积全部放到right数组的i索引位置
        right[i] = nums[i + 1] * right[i + 1];
    }

    for (let i = 0; i < n; i++) {
        // 将i左右两侧的乘积相乘 即可得出答案
        result[i] = left[i] * right[i];
    }

    return result;
};