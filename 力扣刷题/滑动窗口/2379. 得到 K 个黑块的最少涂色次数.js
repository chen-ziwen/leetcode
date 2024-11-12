/**
 * @param {string} blocks
 * @param {number} k
 * @return {number}
 */
var minimumRecolors = function (blocks, k) {
    const n = blocks.length;
    let min = n + 1, count = 0;
    for (let i = 0; i < k; i++) {
        if (blocks[i] == "W") count++;
    }
    min = count;

    for (let i = k; i < n; i++) {
        if (blocks[i] == "W") count++;

        if (blocks[i - k] == "W") count--;

        min = Math.min(min, count);
    }
    return min;
};


var minimumRecolors = function (blocks, k) {
    const n = blocks.length;
    let min = n + 1, count = 0;
    for (let i = 0; i < n; i++) {

        if (i < k && blocks[i] == "W") count++;

        if (i >= k) {
            if (blocks[i] == "W") count++;

            if (blocks[i - k] == "W") count--;
        }

        if (i >= k - 1) {
            min = Math.min(min, count);
        }
    }

    return min;
};