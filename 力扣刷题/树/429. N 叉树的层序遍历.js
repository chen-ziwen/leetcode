/**
 * // Definition for a _Node.
 * function _Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {_Node|null} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
    const res = [], queue = [];
    if (!root) return res;

    queue.push(root);

    while (queue.length) {
        const len = queue.length;
        const cur = [];
        for (let i = 0; i < len; i++) {
            const node = queue.shift();
            cur.push(node.val);
            for (let j = 0; j < node.children.length; j++) {
                node.children[j] && queue.push(node.children[j]);
            }
        }
        res.push(cur);
    }

    return res;
};