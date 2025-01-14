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
 * @return {number[][]}
 */
var levelOrderBottom = function (root) {
    const res = [], queue = [];
    if (root == null) return res;
    queue.push(root);

    while (queue.length !== 0) {
        const cur = [];
        const len = queue.length;
        for (let i = 0; i < len; i++) {
            const node = queue.shift();
            cur.unshift(node.val);
            node.left && queue.push(node.left);
            node.right && queue.push(node.right);
        }
        res.push(cur);
    }
    return res;
};