/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
    // 先标记每一行每一列是否为0
    const m = matrix.length;
    const n = matrix[0].length;

    const row = new Array(m).fill(false);
    const col = new Array(n).fill(false);

    // 如果当前行列为0 标记值为true
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (matrix[i][j] == 0) {
                row[i] = col[j] = true;
            }
        }
    }

    // 再执行一遍 检测row和col中的值是否为true
    // true的情况就是当前行列的值都得为0
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (row[i] || col[j]) {
                matrix[i][j] = 0;
            }
        }
    }

    return matrix;
};