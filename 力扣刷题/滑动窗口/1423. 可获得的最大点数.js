/**
 * @param {number[]} cardPoints
 * @param {number} k
 * @return {number}
 */
const arr = [1, 2, 3, 4, 5, 6, 1];
/*
经典的滑动窗口题，首先把前面的k张牌点数累加，
这个累加值作为第一个最大点数，后续每次从牌尾拿一张牌替换前面拿的k张牌中的最后一张牌，
重新计算最大点数，最终就可以计算出所有的前后牌累加的最大值。
*/
var maxScore = function (cardPoints, k) {
    const n = cardPoints.length;
    let ans = 0, sum = 0;
    for (let i = 0; i < k; i++) {
        sum += cardPoints[i];
    }
    ans = sum;

    for (let j = n - 1; j >= n - k; j--) {
        sum += cardPoints[j] - cardPoints[j - n + k];
        ans = Math.max(ans, sum);
    }

    return ans;
};
