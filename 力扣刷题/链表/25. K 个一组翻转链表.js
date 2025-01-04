/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */

// 跟合并两个链表同样的思路，两两合并，把每次之前合并的链表再跟后面的链表进行合并，合并到最后一项，答案就出来了。
var mergeKLists = function (lists) {
    let l = null;

    // 还是按合并两个有序链表的思路 
    // 只不过这次需要多次合并
    const mergeL = (l1, l2) => {
        const dummy = new ListNode();
        let ln = dummy;
        while (l1 !== null && l2 !== null) {
            if (l1.val >= l2.val) {
                ln.next = l2;
                l2 = l2.next;
            } else {
                ln.next = l1;
                l1 = l1.next;
            }
            ln = ln.next;
        }
        l1 == null ? ln.next = l2 : ln.next = l1;

        return dummy.next;
    }

    for (let i = 0; i < lists.length; i++) {
        l = mergeL(l, lists[i]);
    }

    return l;
};