/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
    const set = new Set(nums);
    let long = 0;
    for (const num of set) {
        // 如果存在前一位就跳过 因为在后续的计算中总能算到
        if (!set.has(num - 1)) {
            let cv = num;
            let clong = 1;

            while (set.has(cv + 1)) {
                cv++;
                clong++;
            }

            long = Math.max(clong, long);
        }
    }
    return long;
};