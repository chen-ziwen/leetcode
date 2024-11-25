/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    const n = prices.length;
    let max = 0;
    for (let i = 0; i < n - 1; i++) {
        const p = prices[i + 1] - prices[i];
        if (p > 0) max += p;
    }
    return max;
};