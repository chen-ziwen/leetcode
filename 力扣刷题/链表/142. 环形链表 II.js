/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// 用哈希表偷懒以下 后面来看看快慢指针
var detectCycle = function (head) {
    const set = new Set();

    while (head !== null) {
        if (set.has(head)) return head;
        set.add(head);
        head = head.next;
    }

    return null
};