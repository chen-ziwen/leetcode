/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
    // 因为本身就是升序的链表 所以合并就是将一个融合到另一个
    const dummy = new ListNode(0);
    let n = dummy;
    while (l1 !== null && l2 != null) {
        if (l1.val >= l2.val) {
            n.next = l2; // 如果l1的值大于12的值 将值添加到链表尾部
            l2 = l2.next; // 因为上一位已经添加到n中 将12更新到下一位
        } else {
            n.next = l1 // 同理
            l1 = l1.next;
        }
        n = n.next; // 上一位已经赋值 将n更新到下一位
    }

    // 因为l1和l2的长度不固定 不一定相等
    // 所以当上面的循环结束后 还会剩下一截多余的升序链表 将这一截链表补充到n的尾部即可
    l1 == null ? n.next = l2 : n.next = l1;

    return dummy.next;
};