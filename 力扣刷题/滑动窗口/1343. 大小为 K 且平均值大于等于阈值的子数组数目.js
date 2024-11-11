/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} threshold
 * @return {number}
 */
var numOfSubarrays = function (arr, k, threshold) {
    const n = arr.length;
    let ans = 0, sum = 0;
    for (let i = 0; i < k; i++) {
        sum += arr[i];
    }
    ans += isAvg(sum / k, threshold);

    for (let j = k; j < n; j++) {
        sum += arr[j] - arr[j - k];
        ans += isAvg(sum / k, threshold);
    }

    return ans;

};

var isAvg = function (avg, threshold) {
    return avg >= threshold ? 1 : 0;
}