/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
    // 创建一个哑节点 
    // 哑节点的作用就是让单向链表的头节点可以像其他节点一样移除
    const dummy = new ListNode(0, head);

    let len = 0; // 计算链表长度
    while (head !== null) {
        ++len;
        head = head.next;
    }

    cur = dummy;
    for (let i = 0; i < len - n; ++i) {
        cur = cur.next; // 下一个节点就是需要删除的节点
    }

    cur.next = cur.next.next; // 移除需要删除的节点

    return dummy.next; // 因为创建了一个哑节点 所以需要返回真正的头节点
};