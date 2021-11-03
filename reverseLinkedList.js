/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var reverseList = function(head) {
    const current = head;
    const stack = [];
    const reversedList = [];
    while (current) {
      stack.push(current);
      current = current.next();
    }
    while (stack.length) {
      reversedList.push(stack.pop);
    }
    return reversedList

};