/** 解题重点
 * 1、中序遍历能区分出左右子树
 * 2、后序遍历的最后一个一定是根节点
 * 3、中序遍历和后序遍历的左右子树的长度一定是相等
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function (inorder, postorder) {
    const n = postorder.length;
    if (n === 0) return null;
    // 根据后序遍历确定根节点 根据根节点分开左右子树
    const rootIdx = inorder.indexOf(postorder[n - 1]);
    // 获取中序左子树节点
    const inorLeftNode = inorder.slice(0, rootIdx);
    // 获取中序右子树节点
    const inorRightNode = inorder.slice(rootIdx + 1, n);
    // 获取后序左子树节点
    const postLeftNode = postorder.slice(0, rootIdx);
    // 获取后序右子树节点
    const postRightNode = postorder.slice(rootIdx, n - 1);
    // 构建左子树
    const left = buildTree(inorLeftNode, postLeftNode);
    // 构建右子树
    const right = buildTree(inorRightNode, postRightNode);
    // 返回构建出来的子树
    return new TreeNode(postorder[n - 1], left, right);
};