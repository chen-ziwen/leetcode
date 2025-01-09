/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function (s, k) {
    const reverse = (arr, left, right) => {
        while (left < right) {
            [arr[left], arr[right]] = [arr[right], arr[left]];
            ++left;
            --right;
        }
    }

    const n = s.length;
    const arr = s.split("");
    let i = 0;
    while (i < n) {
        reverse(arr, i, Math.min(i + k, n) - 1);
        i += 2 * k;
    }
    return arr.join("");

};