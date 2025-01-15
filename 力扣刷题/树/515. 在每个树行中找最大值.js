/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var largestValues = function (root) {
    const res = [], queue = [];
    if (!root) return res;
    queue.push(root);

    while (queue.length) {
        const len = queue.length;
        let max = -Number.MAX_VALUE;
        for (let i = 0; i < len; i++) {
            const node = queue.shift();
            max = Math.max(max, node.val);
            node.left && queue.push(node.left);
            node.right && queue.push(node.right);
        }
        res.push(max);
    }
    return res;
};