/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function (nums1, nums2) {
    const set1 = new Set(nums1), set2 = new Set(nums2);
    const arr = [[], []];

    for (let v of set1) {
        if (!set2.has(v)) {
            arr[0].push(v)
        }
    }

    for (let v of set2) {
        if (!set1.has(v)) {
            arr[1].push(v)
        }
    }

    return arr;
};