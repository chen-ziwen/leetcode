/**
 * @param {number[]} customers
 * @param {number[]} grumpy
 * @param {number} minutes
 * @return {number}
 */

/*
利用滑动窗口算出minutes情绪稳定情况下的最大顾客，
然后再加上没有情绪抑制下的所有顾客，即可得出最多的顾客量。
*/
var maxSatisfied = function (customers, grumpy, minutes) {
    const n = customers.length;
    let ans = 0, count = 0, m = 0;

    for (let i = 0; i < minutes; i++) {
        if (!grumpy[i]) ans += customers[i];
        else count += customers[i];
    }
    m = count;

    for (let i = minutes; i < n; i++) {
        if (!grumpy[i]) ans += customers[i];

        if (grumpy[i]) count += customers[i];
        if (grumpy[i - minutes]) count -= customers[i - minutes];
        m = Math.max(m, count);
    }

    return ans + m;
};